:begin
@echo off
echo Select Package Manager:
echo 1 - Yarn
echo 2 - Npm
set /p PACKAGE_MANAGER= Answer: 
set result=false
if %PACKAGE_MANAGER% == 1 set result=true & npm install --save-dev yarn & yarn install & cd .. & yarn watch
if %PACKAGE_MANAGER% == 2 set result=true & npm install & cd .. &  npm run watch

if "%result" == "true" (
    echo %PACKAGE_MANAGER%
    goto :end
)
if not "%result" == "false" (
    echo Invalid input!
    goto :begin
)
:end
