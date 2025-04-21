# 快速开始

本指南将帮助你快速安装和配置 Bonita，开始管理你的视频文件。

## 系统要求

- 操作系统：Windows 7+，macOS 10.12+，或 Linux
- Python 3.7 或更高版本
- 至少 4GB RAM
- 足够存储视频文件的硬盘空间

## 安装方法

### 方法一：使用 pip 安装（推荐）

```bash
# 创建虚拟环境（推荐）
python -m venv bonita-env
source bonita-env/bin/activate  # Linux/macOS
# 或
bonita-env\Scripts\activate.bat  # Windows

# 安装 Bonita
pip install bonita-video-manager
```

### 方法二：从源代码安装

```bash
# 克隆仓库
git clone https://github.com/Suwmlee/bonita.git
cd bonita

# 创建虚拟环境（推荐）
python -m venv venv
source venv/bin/activate  # Linux/macOS
# 或
venv\Scripts\activate.bat  # Windows

# 安装依赖
pip install -r requirements.txt

# 安装 Bonita
pip install -e .
```

## 初始配置

安装完成后，你需要进行初始配置：

1. 运行 Bonita 初始化命令：

```bash
bonita --init
```

2. 按照提示配置以下基本设置：
   - 视频文件存储位置
   - 元数据存储数据库路径
   - Web 界面访问端口（默认为 8888）

3. 完成初始配置后，配置文件将保存在：
   - Windows: `C:\Users\<用户名>\AppData\Local\bonita\config.json`
   - macOS/Linux: `~/.config/bonita/config.json`

## 启动 Bonita

配置完成后，使用以下命令启动 Bonita：

```bash
bonita --start
```

启动成功后，可以通过浏览器访问：`http://localhost:8888` 进入 Bonita 的 Web 界面。

## 添加视频库

启动 Bonita 后，你需要添加视频库才能开始管理视频：

1. 在 Web 界面中，点击左侧菜单的"库管理"
2. 点击"添加新库"按钮
3. 填写以下信息：
   - 库名称：为视频库取一个名称
   - 库路径：视频文件所在的文件夹路径
   - 库类型：选择视频类型（电影、剧集等）
4. 点击"保存"按钮

添加库后，Bonita 将开始扫描该目录下的视频文件，并提取元数据。扫描时间取决于视频库的大小。

## 下一步

- 查看[基本配置](./config.md)了解如何自定义 Bonita
- 查看[主要功能](./features.md)了解 Bonita 的更多功能
- 如果你遇到任何问题，请查看[GitHub Issues](https://github.com/Suwmlee/bonita/issues)寻求帮助 