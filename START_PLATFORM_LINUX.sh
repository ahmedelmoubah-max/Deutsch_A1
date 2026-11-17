#!/usr/bin/env bash
cd "$(dirname "$0")" || exit 1
if ! command -v python3 >/dev/null 2>&1; then
  echo "Python 3 is required."
  exit 1
fi
PORT=8000
while command -v lsof >/dev/null 2>&1 && lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; do
  PORT=$((PORT + 1))
done
python3 -m http.server "$PORT" --bind 127.0.0.1 &
SERVER_PID=$!
sleep 1
URL="http://127.0.0.1:${PORT}/?preview=1"
if command -v xdg-open >/dev/null 2>&1; then xdg-open "$URL"; else echo "$URL"; fi
echo "Keep this terminal open. Press Ctrl+C to stop."
wait "$SERVER_PID"
