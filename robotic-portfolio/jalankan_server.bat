@echo off
title Figma Prototype Local Server
color 0b
echo =========================================================
echo       SERVER LOKAL PORTFOLIO UNTUK FIGMA IMPORT
echo =========================================================
echo.
echo Langkah untuk import ke Figma:
echo 1. Tunggu hingga server berjalan di bawah ini.
echo 2. Buka aplikasi Figma Anda.
echo 3. Buka menu Plugins dan cari "html.to.design".
echo 4. Masukkan URL berikut ke dalam plugin:
echo    http://localhost:8000
echo 5. Klik IMPORT untuk mengubah web ini menjadi layer Figma!
echo.
echo =========================================================
echo Menjalankan HTTP Server...
echo.

:: Coba menggunakan Node.js npx http-server
where npx >nul 2>nul
if %errorlevel% equ 0 (
    npx -y http-server -p 8000 -c-1
    goto end
)

:: Jika npx tidak ada, coba menggunakan Python
where python >nul 2>nul
if %errorlevel% equ 0 (
    python -m http.server 8000
    goto end
)

echo ERROR: Tidak dapat menemukan Node.js (npx) atau Python di komputer Anda.
echo Silakan install Node.js atau jalankan server lokal Anda sendiri di port 8000.
:end
pause
