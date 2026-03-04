const fs = require('fs');
const path = require('path');

function findAndFixGracefulFs(dir, fixed = []) {
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      
      try {
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // 跳过某些目录
          if (item === '.git' || item === '_book') continue;
          
          // 如果是 graceful-fs 目录
          if (item === 'graceful-fs') {
            const polyfillsPath = path.join(fullPath, 'polyfills.js');
            if (fs.existsSync(polyfillsPath)) {
              try {
                let content = fs.readFileSync(polyfillsPath, 'utf-8');
                const original = content;
                
                // 修复所有可能的问题
                content = content.replace(
                  /if \(cb\) cb\.apply\(this, arguments\)/g,
                  'if (cb && typeof cb === "function") cb.apply(this, arguments)'
                );
                
                if (content !== original) {
                  fs.writeFileSync(polyfillsPath, content, 'utf-8');
                  fixed.push(polyfillsPath);
                  console.log('✓ 已修复:', polyfillsPath);
                }
              } catch (err) {
                console.log('✗ 修复失败:', polyfillsPath, err.message);
              }
            }
          } else {
            // 递归搜索
            findAndFixGracefulFs(fullPath, fixed);
          }
        }
      } catch (err) {
        // 忽略权限错误
      }
    }
  } catch (err) {
    // 忽略读取错误
  }
  
  return fixed;
}

console.log('开始搜索并修复所有 graceful-fs...\n');

// 修复位置列表
const searchPaths = [
  process.cwd(), // 当前目录
  path.join(process.env.APPDATA, 'npm'), // 全局 npm
  path.join(process.env.USERPROFILE, '.gitbook'), // gitbook 配置
];

let totalFixed = [];

for (const searchPath of searchPaths) {
  if (fs.existsSync(searchPath)) {
    console.log(`搜索: ${searchPath}`);
    const fixed = findAndFixGracefulFs(searchPath);
    totalFixed = totalFixed.concat(fixed);
  }
}

console.log('\n========================================');
console.log(`总共修复了 ${totalFixed.length} 个 graceful-fs 文件`);
console.log('========================================\n');

if (totalFixed.length > 0) {
  console.log('✓ 修复完成！现在可以运行: gitbook serve');
} else {
  console.log('! 未找到需要修复的文件');
  console.log('  可能需要先运行: gitbook install');
}
