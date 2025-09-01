#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

REPLACE_PATTERN="PROJECT_NAME"
EXCLUDE=(".git" "setup.sh" "LICENSE" "README.md")
REPO_URL="https://github.com/maty-millien/boilerplate.git"

NO_GIT=0
NO_INSTALL=0

throw_error() {
  printf "%s\n" "Error: $*" >&2
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
  --no-install  Skip pnpm install
  --help        Show help
EOF
        exit 0
        ;;
      -*|--*) throw_error "Unknown option $1"; exit 1 ;;
      *) APP_NAME="$1"; shift ;;
    esac
  done
}

require_app_name() {
  if [[ -z "${APP_NAME:-}" ]]; then
    if [[ -e /dev/tty ]]; then
      read -r -p "Enter app name: " APP_NAME </dev/tty
    else
      throw_error "<app_name> is required as an argument or interactive input"; exit 1
    fi
  fi
  APP_NAME="$(printf "%s" "$APP_NAME" | sed -E 's/^[[:space:]]+|[[:space:]]+$//g')"
  if [[ -z "$APP_NAME" ]]; then throw_error "app_name cannot be empty"; exit 1; fi
  if [[ "$APP_NAME" == *[/\\]* ]]; then throw_error "app_name cannot contain slashes"; exit 1; fi
  DST="$(pwd)/$APP_NAME"
}

download_boilerplate() {
  printf "Cloning boilerplate...\n"
  git clone --depth 1 --branch main "$REPO_URL" "$DST"
  rm -rf "$DST/.git"
  SRC="$DST"

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

  APP_LOWER=$(printf "%s" "$APP_NAME" | tr '[:upper:]' '[:lower:]')
  APP_UPPER=$(printf "%s" "$APP_NAME" | tr '[:lower:]' '[:upper:]')
  APP_TITLE=$(printf "%s" "$APP_NAME" | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}')

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
  (cd "$DST" && git init > /dev/null 2>&1 && git add -A && git commit -m "Initial commit for $APP_NAME project" >/dev/null 2>&1)
  printf "Git repository initialized.\n"
}

setup_env() {
  [[ $NO_INSTALL -eq 1 ]] && return
  printf "Setting up environment...\n"
  (cd "$DST" && pnpm run setup > /dev/null 2>&1) || { throw_error "Failed to setup environment"; exit 1; }
  printf "Environment setup complete.\n"
}

main() {
  parse_args "$@"
  require_app_name
  if [[ -d "$DST" ]]; then throw_error "Target directory exists: $DST"; exit 1; fi
  download_boilerplate
  replace_placeholders
  setup_env
  init_git
  printf "Your base project is ready!\n"
}

main "$@"
