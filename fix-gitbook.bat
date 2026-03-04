@echo off
echo ========================================
echo GitBook 完整修复脚本
echo ========================================
echo.

echo [1/4] 检查 Node.js 版本...
node -v
echo.

echo [2/4] 修复 graceful-fs...
node fix-graceful-fs.js
echo.

echo [3/4] 查找并修复所有 graceful-fs 位置...
for /f "delims=" %%i in ('where gitbook') do set GITBOOK_PATH=%%i
echo GitBook 路径: %GITBOOK_PATH%

REM 修复全局 gitbook-cli 中的 graceful-fs
set GLOBAL_GFS=%APPDATA%\npm\node_modules\gitbook-cli\node_modules\npm\node_modules\graceful-fs\polyfills.js
if exist "%GLOBAL_GFS%" (
    echo 修复: %GLOBAL_GFS%
    node -e "const fs=require('fs');const f='%GLOBAL_GFS%';let c=fs.readFileSync(f,'utf8');c=c.replace(/if \(cb\) cb\.apply\(this, arguments\)/g,'if (cb && typeof cb===\"function\") cb.apply(this, arguments)');fs.writeFileSync(f,c);"
    echo ✓ 全局 graceful-fs 已修复
) else (
    echo ! 未找到全局 graceful-fs
)

REM 修复本地 node_modules 中的 graceful-fs
if exist "node_modules\graceful-fs\polyfills.js" (
    echo 修复: node_modules\graceful-fs\polyfills.js
    node -e "const fs=require('fs');const f='node_modules/graceful-fs/polyfills.js';let c=fs.readFileSync(f,'utf8');c=c.replace(/if \(cb\) cb\.apply\(this, arguments\)/g,'if (cb && typeof cb===\"function\") cb.apply(this, arguments)');fs.writeFileSync(f,c);"
    echo ✓ 本地 graceful-fs 已修复
)

echo.
echo [4/4] 清理并重新初始化...
if exist "_book" rmdir /s /q _book
if exist "node_modules" rmdir /s /q node_modules

echo.
echo ========================================
echo 修复完成！现在尝试启动 GitBook...
echo ========================================
echo.

gitbook install
echo.
echo 正在启动 GitBook serve...
gitbook serve
