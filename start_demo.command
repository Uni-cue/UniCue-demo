#!/bin/zsh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PORT="${1:-8000}"
URL="http://127.0.0.1:${PORT}/"

cd "$SCRIPT_DIR"

echo "UniCue demo directory: $SCRIPT_DIR"
echo "Starting local server at $URL"
echo "Press Ctrl+C to stop the server."

sleep 1
open "$URL"

exec python3 -m http.server "$PORT" --bind 127.0.0.1
