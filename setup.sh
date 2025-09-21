#!/usr/bin/env bash

set -euo pipefail
IFS=$'\n\t'

REPLACE_PATTERN="project-name"
EXCLUDE=(".git" "setup.sh" "LICENSE" "README.md" "AGENTS.md" "*.lock")
REPO_URL="https://github.com/maty-millien/boilerplate.git"

NO_GIT=0
NO_INSTALL=0

throw_error() {
  printf "%s\n" "Error: $*" >&2
  exit 1
}

parse_args() {
  while [[ $# -gt 0 ]]; do
    case $1 in
      --no-git) NO_GIT=1; shift ;;
      --no-install) NO_INSTALL=1; shift ;;
      --help)
        cat <<EOF
Usage: $0 [options] [app_name]
Options:
  --no-git      Skip git initialization
  --no-install  Skip bun install
  --help        Show help
EOF
        exit 0
        ;;
      -*|--*) throw_error "Unknown option $1" ;;
      *) PROJECT_NAME_INPUT="$1"; shift ;;
    esac
  done
}

require_project_name() {
  NAME_REGEX='^[a-z0-9-]+$'
  if [[ -z "${PROJECT_NAME_INPUT:-}" ]]; then
    if [[ -e /dev/tty ]]; then
      while true; do
        read -r -p "Enter project name: " PROJECT_NAME_INPUT </dev/tty
        PROJECT_NAME_INPUT="$(printf "%s" "$PROJECT_NAME_INPUT" | sed -E 's/^[[:space:]]+|[[:space:]]+$//g')"
        if [[ -z "$PROJECT_NAME_INPUT" ]]; then
          printf "Project name cannot be empty. Try something like 'my-app'.\n" >&2
          continue
        fi
        if [[ "$PROJECT_NAME_INPUT" =~ $NAME_REGEX ]]; then
          break
        else
          printf "Invalid project name. Examples of valid names: 'my-app' or 'project123'.\n" >&2
          printf "Names may only include lowercase letters, numbers and hyphens (e.g. my-app).\n" >&2
          continue
        fi
      done
    else
      throw_error "<app_name> is required as an argument or interactive input"
    fi
  else
    PROJECT_NAME_INPUT="$(printf "%s" "$PROJECT_NAME_INPUT" | sed -E 's/^[[:space:]]+|[[:space:]]+$//g')"
  [[ -z "$PROJECT_NAME_INPUT" ]] && throw_error "Project name cannot be empty"
  [[ ! "$PROJECT_NAME_INPUT" =~ $NAME_REGEX ]] && throw_error "Project name invalid. Examples: my-app or project123"
  fi
  DST="$(pwd)/$PROJECT_NAME_INPUT"
}

download_boilerplate() {
  printf "Cloning boilerplate...\n"
  git clone --depth 1 --branch main "$REPO_URL" "$DST"
  rm -rf "$DST/.git"

  for item in "${EXCLUDE[@]}"; do
    target="$DST/$item"
    if [[ -e "$target" ]]; then
      rm -rf "$target"
      printf "Removed %s\n" "$target"
    fi
  done

  printf "Boilerplate downloaded.\n"
}


replace_placeholders() {
  printf "Replacing placeholders...\n"
  RP_LOWER=$(printf "%s" "$REPLACE_PATTERN" | tr '[:upper:]' '[:lower:]')
  RP_UPPER=$(printf "%s" "$REPLACE_PATTERN" | tr '[:lower:]' '[:upper:]')
  RP_TITLE=$(printf "%s" "$REPLACE_PATTERN" | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}')

  APP_LOWER=$(printf "%s" "$PROJECT_NAME_INPUT" | tr '[:upper:]' '[:lower:]')
  APP_UPPER=$(printf "%s" "$PROJECT_NAME_INPUT" | tr '[:lower:]' '[:upper:]')
  APP_TITLE=$(printf "%s" "$PROJECT_NAME_INPUT" | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}')

  find "$DST" -type f -not -path '*/.git/*' -not -path '*/node_modules/*' | while IFS= read -r file; do
    perl -0777 -i -pe \
      "s/\Q$RP_LOWER\E/$APP_LOWER/g; s/\Q$RP_TITLE\E/$APP_TITLE/g; s/\Q$RP_UPPER\E/$APP_UPPER/g; s/^[ \t]*success[ \t]*\\\$/echo_success/gm" \
      "$file" || printf "Warning: failed to process %s\n" "$file" >&2
  done
  printf "Placeholders replaced.\n"
}

init_git() {
  [[ $NO_GIT -eq 1 ]] && return
  printf "Initializing git repository...\n"
  (cd "$DST" && git init > /dev/null 2>&1 && git add -A && git commit -m "Initial commit for $PROJECT_NAME_INPUT project" >/dev/null 2>&1)
  printf "Git repository initialized.\n"
}

setup_env() {
  [[ $NO_INSTALL -eq 1 ]] && return
  printf "Setting up environment...\n"
  (cd "$DST" && bun run setup > /dev/null 2>&1) || throw_error "Failed to setup environment"
  printf "Environment setup complete.\n"
}

main() {
  parse_args "$@"
  require_project_name
  [[ -d "$DST" ]] && throw_error "Target directory exists: $DST"
  download_boilerplate
  replace_placeholders
  setup_env
  init_git
  printf "Your base project is ready!\n"
}

main "$@"
