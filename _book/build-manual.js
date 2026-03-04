const fs = require('fs');
const path = require('path');

// 创建 _book 目录
const bookDir = path.join(__dirname, '_book');
if (!fs.existsSync(bookDir)) {
  fs.mkdirSync(bookDir, { recursive: true });
}

// 复制所有 markdown 文件和资源
const copyDir = (src, dest) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

// 复制目录
['3DScan', 'deploy', 'userguide', 'assets'].forEach(dir => {
  const srcPath = path.join(__dirname, dir);
  const destPath = path.join(bookDir, dir);
  if (fs.existsSync(srcPath)) {
    copyDir(srcPath, destPath);
  }
});

// 复制 markdown 文件
['README.md', 'SUMMARY.md', 'versions.md'].forEach(file => {
  const srcPath = path.join(__dirname, file);
  const destPath = path.join(bookDir, file);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
  }
});

// 创建带 Markdown 渲染的 index.html
const indexHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>3DScan Checklist</title>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <style>
    body { font-family: 'Microsoft YaHei', Arial, sans-serif; max-width: 1000px; margin: 0 auto; padding: 20px; background: #f5f5f5; }
    .container { background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .sidebar { position: fixed; left: 20px; top: 20px; width: 250px; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); max-height: 90vh; overflow-y: auto; }
    .content { margin-left: 310px; }
    h1 { color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; }
    h2 { color: #34495e; margin-top: 30px; border-bottom: 2px solid #ecf0f1; padding-bottom: 8px; }
    h3 { color: #7f8c8d; }
    img { max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 4px; margin: 15px 0; }
    blockquote { background: #f9f9f9; border-left: 4px solid #3498db; padding: 10px 20px; margin: 20px 0; }
    code { background: #f4f4f4; padding: 2px 6px; border-radius: 3px; font-family: Consolas, monospace; }
    pre { background: #2c3e50; color: #ecf0f1; padding: 15px; border-radius: 5px; overflow-x: auto; }
    a { color: #3498db; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .nav-link { display: block; padding: 8px 12px; margin: 5px 0; border-radius: 4px; transition: background 0.3s; }
    .nav-link:hover { background: #ecf0f1; }
    .nav-link.active { background: #3498db; color: white; }
  </style>
</head>
<body>
  <div class="sidebar">
    <h2 style="margin-top:0;">目录</h2>
    <a href="#" class="nav-link" onclick="loadPage('README.md'); return false;">Introduction</a>
    <a href="#" class="nav-link" onclick="loadPage('deploy/document.md'); return false;">部署文档</a>
    <a href="#" class="nav-link" onclick="loadPage('3DScan/README.md'); return false;">问题排查手册</a>
    <a href="#" class="nav-link" onclick="loadPage('userguide/README.md'); return false;">使用说明书</a>
    <a href="#" class="nav-link" onclick="loadPage('versions.md'); return false;">软件更新日志</a>
  </div>
  <div class="content">
    <div class="container" id="content">加载中...</div>
  </div>
  <script>
    marked.setOptions({ breaks: true, gfm: true });
    function loadPage(file) {
      fetch(file)
        .then(res => res.text())
        .then(text => {
          document.getElementById('content').innerHTML = marked.parse(text);
          document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
          event.target.classList.add('active');
        })
        .catch(err => {
          document.getElementById('content').innerHTML = '<h1>加载失败</h1><p>无法加载文件: ' + file + '</p>';
        });
    }
    loadPage('README.md');
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(bookDir, 'index.html'), indexHtml);

console.log('✓ 构建完成！');
console.log('现在运行: npx http-server _book -p 4000');
