# 功能介绍

## 帮助

### 序列号

点击菜单中的"帮助"->"序列号"，界面会显示出该设备的"机器码"，同时序列号位置为空。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/14b6717c-5511-4903-ae50-48bb863a39c4/17f8d626a2036ec06386ce6a519f3e0ef12c6e246160488ae0434e173fae5e29.jpg)

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/14b6717c-5511-4903-ae50-48bb863a39c4/45ccfc50c82e7edb8f283a92b7f38ed975cb55eda43ff672f0f2cad32a3c2b80.jpg)

复制界面中的"机器码"，并发给官方获取序列号。

将序列号填入并提交，此时序列号步骤完成。等待10s，弹窗提示"序列号已授权并重启服务"，左下角提示"启动服务成功！"：

   ![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/14b6717c-5511-4903-ae50-48bb863a39c4/0809d1ec03a0da13259508ebe33bf0c187e11ebf84bf87b25b199d5eedc6c423.jpg)

### 关于我们

- 可以查阅文档获取问题排查checklist，方便后续自检与排查。

- 文档：https://yoctovision.github.io/3Dscan_checklist/

## 相机设置

- 点击菜单"相机设置"，可以修改相机参数、拍照参数和进行拍照测试。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/14b6717c-5511-4903-ae50-48bb863a39c4/006cb2ee42b1d571821a5f9d9ce5989a12487a9168717e57d108a7813a31faf0.jpg)

> **提示**：每一个相机都要设置一下别名，其他信息最好保持默认值不要修改。

- 然后点击"测试拍照"的时候，当前对应的相机会执行拍照。

## 工位设置

### 参数设置

- 点击"工位设置"中的"参数设置"，可根据现场实际调整PLC参数设置，方便操作人员人机交互：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/14b6717c-5511-4903-ae50-48bb863a39c4/9019b701d06d18d3182ad0e7f80fc97195f603798960ce15f9a4c9f0e6220377.jpg)

### 工位管理

- 点击菜单"工位设置"的子菜单"工位管理"，根据实际场景调整工位。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/14b6717c-5511-4903-ae50-48bb863a39c4/6e6ef192e5285ca66eb9cf3742fa03cad5a1599b2c90052cd98797bfd2c3c8e9.jpg)

- 找到检测工位，关联相机id这一项，点击"无"后，显示如下界面。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/14b6717c-5511-4903-ae50-48bb863a39c4/329f72a58a3bcaddc9d3af3d19cb97dc202c1a9ae70a67faaf5b4e4c7468e866.jpg)

- 点击添加，上面会出现所接入的相机别名和AI模型名称下拉框，为工位配置好相机和对应模型。

> **说明**：为防止误操作，表格状态默认锁定，要添加检测工位或者修改工位个别工位，需要点击编辑，在下面的窗口进行修改。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/14b6717c-5511-4903-ae50-48bb863a39c4/957f4155a94408ba8369c4bd44055338d8d66ed9b45b19269bc8cc2c33d37efb.jpg)

## 模型管理

### 类别管理

- 点击"新增"添加缺陷类别，想要修改缺陷类别名称，表格是锁定状态不可修改，需要点击操作栏下面的"修改"进行解锁，才可以修改表格。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/14b6717c-5511-4903-ae50-48bb863a39c4/d2ffdf5316ceed1bb795b8e52acf07112c9e2a3c38610f03ae8caa14b5515c92.jpg)

- 点击主界面的缺陷结果信息中的分类数据，不是分类，是分类的数据，可以跳到当前界面，方便操作人员查看。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/14b6717c-5511-4903-ae50-48bb863a39c4/fd2b8a933af8ce0131e12301c8c77dd96d75a1e15c82bb2ee72bb3e113ea6d00.jpg)

> **注意**：需要删除类别请联系官方！

### 模型设置

- 模型设置窗口如图所示，可以进行新增、修改和删除。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/14b6717c-5511-4903-ae50-48bb863a39c4/3f714401130a37f11befa237d985892001cc26969c09cbcee6964b19ba6ed7d8.jpg)

- 点击修改可以具体修改配置：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/14b6717c-5511-4903-ae50-48bb863a39c4/367276d167f0d820a7cdf4acd03b9461a5809d866c4d6b81defb1e69c8f7942c.jpg)

- 模型类别会显示在类别管理中配置的缺陷类别：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/14b6717c-5511-4903-ae50-48bb863a39c4/abf23a8be9d46f7719d1a1c8c814cea5e14981f70898a930a396aee9bbbe3449.jpg)

- 置信度等同于阈值，只会标注高于这个阈值的缺陷。

> **注意**：此界面修改必须要点击两个"确定"按钮才会保存设置。

## 调试

### 重启服务

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/14b6717c-5511-4903-ae50-48bb863a39c4/f214a04dee1541971f3a44ba8af7b32dbd6683bc37294c7535d6c17ef378ebc2.jpg)

- 如果发现软件出现一直报错，料框卡住等状况，则可尝试重启服务，同时把vsentry.log发给研发排查问题。

### 语言设置

- 设置 -> 语言设置

- 出现如下弹窗，选择对应的语言，点击后出现语言设置窗口，选择对应需要的语言，当前语言为不可选中状态：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-03/14b6717c-5511-4903-ae50-48bb863a39c4/155bc8b5b3325b5fe455afbc4fca46f659c94df1593c99af4151aa223e9e13ce.jpg)

- 点击要选的语言后会出现确认弹窗，点击确定会立即退出，点击取消则不会切换语言。
