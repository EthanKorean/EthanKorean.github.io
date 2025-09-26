@echo off
echo Building Vue project...
call npm run build

echo Moving files to root directory...
if exist "..\index.html" del "..\index.html"
if exist "..\assets" rmdir /s /q "..\assets"
if exist "..\js" rmdir /s /q "..\js"
if exist "..\css" rmdir /s /q "..\css"

echo Copying build files...
xcopy "dist\*" "..\" /E /Y

echo Build and move completed!
pause