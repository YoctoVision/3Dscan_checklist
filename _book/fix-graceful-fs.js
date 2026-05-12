var fs = require('fs');
var path = require('path');

var gracefulFsPath = path.join(
  process.env.APPDATA,
  'npm/node_modules/gitbook-cli/node_modules/npm/node_modules/graceful-fs/polyfills.js'
);

try {
  var content = fs.readFileSync(gracefulFsPath, 'utf-8');
  var fixed = content.replace(
    /if \(cb\) cb\.apply\(this, arguments\)/g,
    'if (cb && typeof cb === "function") cb.apply(this, arguments)'
  );
  fs.writeFileSync(gracefulFsPath, fixed, 'utf-8');
  console.log('✓ graceful-fs 修复成功！');
  console.log('现在可以运行: gitbook serve');
} catch (err) {
  console.error('✗ 修复失败:', err.message);
  console.log('\n建议使用方法 1：降级 Node.js 版本');
  console.log('  nvm install 12.22.12');
  console.log('  nvm use 12.22.12');
}
