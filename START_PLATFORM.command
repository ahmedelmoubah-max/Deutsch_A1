#!/bin/bash
cd "$(dirname "$0")" || exit 1

if ! command -v python3 >/dev/null 2>&1; then
  echo "Python 3 is required. Install Python 3, then run this file again."
  read -r -p "Press Enter to close..."
  exit 1
fi

PORT=8000
if command -v lsof >/dev/null 2>&1; then
  while lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; do
    PORT=$((PORT + 1))
  done
fi

LOG_FILE="${TMPDIR:-/tmp}/deutsch-platform-server.log"
python3 -m http.server "$PORT" --bind 127.0.0.1 >"$LOG_FILE" 2>&1 &
SERVER_PID=$!
sleep 1

URL="http://127.0.0.1:${PORT}/?preview=1"
if command -v open >/dev/null 2>&1; then
  open "$URL"
else
  echo "Open this address in your browser: $URL"
fi

echo "Deutsch platform is running at: $URL"
echo "Keep this window open while using the platform."
echo "Press Ctrl+C to stop the local server."
wait "$SERVER_PID"
