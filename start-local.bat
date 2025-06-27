@echo off
cd /d %~dp0
echo Uruchamianie serwera lokalnego...
npm install
npm run dev
pause