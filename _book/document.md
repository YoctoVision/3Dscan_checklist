# AOI Based 3D Scan 安装部署文档

## 软件安装

1. 下载安装包 3DScan_Setup.exe 放到 D 盘，然后右键点击，选择"以管理员身份运行"，选择所要安装的目录，一般是 D 盘根目录，成功后将出现 D:\3Dscan 文件夹

2. 在 D:\3Dscan 目录下，创建 AOI Based 3D_Scan.exe 桌面快捷方式，这就是后期外观检测的工作程序。

> **注意**：是给 AOI Based 3D_Scan.exe 程序创建桌面快捷键，不是 AOI Based3D Scan System.exe

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/42aac996-8d24-4c16-81d9-bb09818e6a8f/6b53e8e3abdf47afe1a88b80397d183c8561f62466a29bd692365cc78e39e04f.jpg)

## 现场摄像头配置

1. 根据提供的相机高度等要求安装并打光与调焦。

2. 建议使用 MVviewer 软件调焦。

   - 下载地址：https://www.irayple.com/cn/serviceSupport/downloadCenter/18?p=17
   - 或使用 VisionPro 软件调焦

3. 如果有通过 MVviewer 设置曝光时间等，可以直接点击保存，我们程序会自动从相机读取参数并设置，不需要重复设置。

## 序列号设置

1. 打开 AOI Based 3D_Scan.exe，点击菜单"帮助"->"序列号"，界面会显示出该设备的"机器码"，同时序列号位置为空。

   ![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/42aac996-8d24-4c16-81d9-bb09818e6a8f/dc96341e8f981be7f3fe845af7abb01f43fc70b6b7ee4e596f8b5c5ef0b1545d.jpg)

2. 复制界面中的"机器码"，并发给官方获取序列号。

3. 将序列号填入并提交，此时序列号步骤完成。等待10s，弹窗提示"序列号已授权并重启服务"，左下角提示"启动服务成功！"，窗口变成"序列号-已授权"状态：

   ![image](./images/已授权.jpg)

## 中英文切换

- 设置 -> 语言设置

- 出现如下弹窗，选择对应的语言，点击后出现语言设置窗口，选择对应需要的语言，当前语言为不可选中状态：

![image](./images/语言设置.jpg)
  
- 点击要选的语言后会出现确认弹窗，点击确定会立即退出，点击取消则不会切换语言：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/42aac996-8d24-4c16-81d9-bb09818e6a8f/72eb2ed2f80440bdf7dde275aecc05a8beba9603e64929c76ee290c60eeaa560.jpg)

- 点击确定会立即退出，重新进入即为选定语言了。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/42aac996-8d24-4c16-81d9-bb09818e6a8f/839ac328ea042f8698c1020fcbbdffe11c28af8ceefc5c54d4d7d63fee16ec31.jpg)

## 工位配置

### 相机设置

- 点击菜单"相机设置"，可以修改相机参数、拍照参数和进行拍照测试。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/42aac996-8d24-4c16-81d9-bb09818e6a8f/9815c01c3b274c040eb8f1e36f60416a9e3084f75c6406cec17b150cfdf00ca6.jpg)

> **提示**：每一个相机都要设置一下别名，其他信息最好不要修改。然后点击"测试拍照"的时候，当前对应的相机会执行拍照。

### 相机、模型配置

- 点击菜单"工位设置"的子菜单"工位管理"，根据实际场景调整工位。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/42aac996-8d24-4c16-81d9-bb09818e6a8f/50c487062a79392f9365ddac33f514e31dbee73f0bb04c127aaa6ff9a2ec31af.jpg)

- 找到检测工位，关联相机id这一项，点击"无"后，显示如下界面。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/42aac996-8d24-4c16-81d9-bb09818e6a8f/0570e3b54e504160223b7788ed59c0d975f25615ee3a2bf6d6989106ef38bebb.jpg)

- 点击添加，上面会出现所接入的相机别名和AI模型名称下拉框，为工位配置好相机和对应模型。

## 问题排查

- 进行后台服务问题排查时，可以点击"D:\3Dscan\backend.exe"，直接运行查看结果并截图发送给技术支持。
