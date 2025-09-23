#!/usr/bin/env bash

set -euo pipefail
IFS=$'\n\t'

PROJECT_NAME_PLACEHOLDER="PROJECT_NAME_VAR"
PACKAGE_MANAGER_PLACEHOLDER="PROJECT_PM_VAR"
EXCLUDE=(".git" "setup.sh" "LICENSE" "README.md" "AGENTS.md")
REPO_URL="https://github.com/maty-millien/boilerplate.git"

C_RESET='\033[0m'
C_RED='\033[0;31m'
C_GREEN='\033[0;32m'
C_YELLOW='\033[0;33m'
C_BLUE='\033[0;34m'
C_CYAN='\033[0;36m'
C_BOLD='\033[1m'
C_DIM='\033[2m'

log_step() { printf "\n${C_BOLD}${C_CYAN}› %s${C_RESET}\n" "$*"; }
log_success() { printf "${C_GREEN}✓ %s${C_RESET}\n" "$*"; }
log_info() { printf "${C_DIM}  %s${C_RESET}\n" "$*"; }

throw_error() {
  printf "\n${C_RED}❌ Error: %s${C_RESET}\n" "$*" >&2
  exit 1
}

spinner() {
  local pid=$1
  local message=$2
  local spinstr='|/-\'
  tput civis
  while kill -0 "$pid" 2>/dev/null; do
    local temp=${spinstr#?}
    printf "  %s %s... " "${spinstr:0:1}" "$message"
    spinstr=$temp${spinstr%"$temp"}
    sleep 0.1
    printf "\r"
  done
  tput cnorm
  wait "$pid"
  return $?
}

run_with_spinner() {
  local message=$1
  shift
  local tmpout tmperr pid exit_code
  tmpout=$(mktemp)
  tmperr=$(mktemp)

  ("$@" >"$tmpout" 2>"$tmperr") &
  pid=$!

  spinner "$pid" "$message"
  exit_code=$?

  if [[ $exit_code -ne 0 ]]; then
    tput cnorm
    printf "\n"
    printf "${C_RED}❌ %s failed (exit code %d)${C_RESET}\n" "$message" "$exit_code" >&2
    if [[ -s "$tmperr" ]]; then
      printf "\n" >&2
      cat "$tmperr" >&2
    fi
    rm -f "$tmpout" "$tmperr"
    exit $exit_code
  else
    log_success "$message"
    rm -f "$tmpout" "$tmperr"
  fi
}

prompt_package_manager() {
  log_step "🛒 Select package manager"
  local options=("bun" "npm" "pnpm" "yarn")
  local selected=0

  trap 'tput cnorm; exit' INT TERM
  tput civis

  print_menu() {
    if [[ "${1-}" != "first_run" ]]; then
      printf "\033[%sA" "${#options[@]}"
    fi
    for i in "${!options[@]}"; do
      if [[ "$i" -eq "$selected" ]]; then
        printf "  ${C_GREEN}❯ %s${C_RESET}\n" "${options[i]}"
      else
        printf "    %s\n" "${options[i]}"
      fi
    done
  }

  print_menu "first_run"

  while true; do
    read -s -n 1 key </dev/tty
    if [[ "$key" == $'\x1b' ]]; then
      read -s -n 2 key </dev/tty
      if [[ "$key" == "[A" ]]; then
        selected=$(( (selected - 1 + ${#options[@]}) % ${#options[@]} ))
      elif [[ "$key" == "[B" ]]; then
        selected=$(( (selected + 1) % ${#options[@]} ))
      fi
      print_menu
    elif [[ "$key" == "" ]]; then
      break
    fi
  done

  tput cnorm
  trap - INT TERM

  PACKAGE_MANAGER="${options[selected]}"
}

prompt_project_name() {
  NAME_REGEX='^[a-z0-9-]+$'
  log_step "📝 Enter project name"
  while true; do
    read -r -p "  Project name: " PROJECT_NAME_INPUT </dev/tty
    PROJECT_NAME_INPUT="$(printf "%s" "$PROJECT_NAME_INPUT" | sed -E 's/^[[:space:]]+|[[:space:]]+$//g')"
    [[ -z "$PROJECT_NAME_INPUT" ]] && { log_info "⚠️ Project name cannot be empty. Try 'my-app'."; continue; }
    [[ "$PROJECT_NAME_INPUT" =~ $NAME_REGEX ]] && break
    log_info "❌ Invalid name. Use lowercase letters, numbers, and hyphens."
  done
  DST="$(pwd)/$PROJECT_NAME_INPUT"
}

check_target_directory() {
  if [[ -e "$DST" ]]; then
    if [[ -d "$DST" && "$(ls -A "$DST")" ]]; then
      throw_error "Target directory '$DST' already exists and is not empty."
    elif [[ ! -d "$DST" ]]; then
      throw_error "A file named '$DST' already exists."
    fi
  fi
}

clone_repo() {
  git clone --depth 1 --branch main "$REPO_URL" "$DST"
  if [[ $? -ne 0 ]]; then
    throw_error "Failed to clone repository from $REPO_URL"
  fi
  for item in "${EXCLUDE[@]}"; do
    target="$DST/$item"
    if [[ -e "$target" ]]; then
      rm -rf "$target"
    fi
  done
}

replace_placeholders() {
  RP_LOWER=$(printf "%s" "$PROJECT_NAME_PLACEHOLDER" | tr '[:upper:]' '[:lower:]')
  RP_UPPER=$(printf "%s" "$PROJECT_NAME_PLACEHOLDER" | tr '[:lower:]' '[:upper:]')
  RP_TITLE=$(printf "%s" "$PROJECT_NAME_PLACEHOLDER" | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}')

  APP_LOWER=$(printf "%s" "$PROJECT_NAME_INPUT" | tr '[:upper:]' '[:lower:]')
  APP_UPPER=$(printf "%s" "$PROJECT_NAME_INPUT" | tr '[:lower:]' '[:upper:]')
  APP_TITLE=$(printf "%s" "$PROJECT_NAME_INPUT" | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}')

  find "$DST" -type f -not -path '*/.git/*' -not -path '*/node_modules/*' | while IFS= read -r file; do
    perl -0777 -i -pe \
      "s/\Q$RP_LOWER\E/$APP_LOWER/g; s/\Q$RP_TITLE\E/$APP_TITLE/g; s/\Q$RP_UPPER\E/$APP_UPPER/g; s/$PACKAGE_MANAGER_PLACEHOLDER/$PACKAGE_MANAGER/g; s/^[ \t]*success[ \t]*\\\$/log_success/gm" \
      "$file" 2>/dev/null || true
  done
}

init_git() {
  (cd "$DST" && git init && git add -A && git commit -m "chore(init): initial commit for $PROJECT_NAME_INPUT project")
}

setup_env() {
  (cd "$DST" && "$PACKAGE_MANAGER" install && "$PACKAGE_MANAGER" run setup)
}

main() {
  log_step "👋 Welcome to the boilerplate setup!"

  prompt_project_name
  prompt_package_manager
  check_target_directory

  log_step "⚙️  Setting up your project..."

  run_with_spinner "🌀 Cloning boilerplate" clone_repo
  run_with_spinner "🔧 Replacing placeholders" replace_placeholders
  run_with_spinner "📦 Setting up environment" setup_env
  run_with_spinner "🗂️ Initializing git repository" init_git

  log_success "🎊 Your base project is ready!"
  log_info "Navigate to your project: cd $PROJECT_NAME_INPUT"
}

main
