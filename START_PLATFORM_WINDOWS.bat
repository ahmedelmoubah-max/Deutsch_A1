@echo off
cd /d "%~dp0"
where py >nul 2>nul
if errorlevel 1 (
  echo Python 3 is required. Install it from https://www.python.org/downloads/
  pause
  exit /b 1
)
start "" http://127.0.0.1:8000/?preview=1
py -3 -m http.server 8000 --bind 127.0.0.1
pause
