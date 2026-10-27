@echo off
title Postiz Official Backend Launcher
echo ========================================================
echo          Postiz Official Fullstack Engine
echo ========================================================
echo.

echo [1/3] Checking Docker status...
docker --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Docker Desktop is not running or not installed.
    echo Please install Docker Desktop using "Docker-Desktop-Installer.exe"
    echo and ensure Docker Desktop is open and running.
    echo.
    pause
    exit /b 1
)

echo [2/3] Moving to postiz-official directory...
cd /d "%~dp0postiz-official"

echo [3/3] Launching Postiz containers (Postgres, Redis, Web/API)...
docker compose up -d

echo.
echo ========================================================
echo   Postiz is now starting up!
echo   Access URL: http://localhost:4007
echo ========================================================
echo.
pause
