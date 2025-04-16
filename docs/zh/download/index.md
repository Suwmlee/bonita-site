# 下载 Bonita

Bonita 提供多种下载和安装方式，您可以根据自己的需求选择合适的方式。

## 最新版本

当前最新稳定版本：**v1.x.x**

发布日期：20xx年xx月xx日

## 下载选项

### 预编译包

为常见操作系统提供的预编译包：

<div class="download-options">
  <div class="download-option">
    <div class="os-logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    </div>
    <h3>Windows</h3>
    <a href="https://github.com/Suwmlee/bonita/releases/latest/download/bonita-windows-x64.zip" class="download-button">下载 Windows 版本</a>
    <p>适用于 Windows 7, 8, 10 和 11</p>
  </div>
  
  <div class="download-option">
    <div class="os-logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9z"></path>
        <path d="M8 16a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8z"></path>
      </svg>
    </div>
    <h3>macOS</h3>
    <a href="https://github.com/Suwmlee/bonita/releases/latest/download/bonita-macos.dmg" class="download-button">下载 macOS 版本</a>
    <p>适用于 macOS 10.12 及以上版本</p>
  </div>
  
  <div class="download-option">
    <div class="os-logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 16l-4-4-4 4"></path>
        <path d="M12 12v8"></path>
        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
      </svg>
    </div>
    <h3>Linux</h3>
    <a href="https://github.com/Suwmlee/bonita/releases/latest/download/bonita-linux-x64.tar.gz" class="download-button">下载 Linux 版本</a>
    <p>适用于大多数 Linux 发行版</p>
  </div>
</div>

### 通过包管理器安装

#### pip（适用于所有平台）

```bash
pip install bonita-video-manager
```

#### Docker

```bash
docker pull suwmlee/bonita:latest
docker run -d -p 8888:8888 -v /path/to/videos:/videos suwmlee/bonita:latest
```

## 从源代码安装

如果您想要从源代码构建 Bonita，请按照以下步骤操作：

```bash
# 克隆仓库
git clone https://github.com/Suwmlee/bonita.git
cd bonita

# 安装依赖
pip install -r requirements.txt

# 安装 Bonita
pip install -e .
```

## 版本历史

### v1.x.x (最新版)

- 新增特性...
- 改进...
- 修复问题...

### v1.0.0

- 首次发布
- 基本视频管理功能
- 元数据提取和管理
- Web 界面

## 系统要求

### 最低配置

- **处理器**: 双核 CPU
- **内存**: 2GB RAM
- **存储**: 500MB 可用空间 (不包括视频文件存储)
- **操作系统**: Windows 7+, macOS 10.12+, 或主流 Linux 发行版
- **Python**: 3.7 或更高版本 (如果使用 Python 安装)

### 推荐配置

- **处理器**: 四核 CPU
- **内存**: 4GB RAM
- **存储**: SSD, 1GB 可用空间 (不包括视频文件存储)
- **网络**: 宽带互联网连接 (用于获取元数据)

## 已知问题

- 当视频库非常大 (10,000+ 文件) 时，初始扫描可能需要较长时间
- 在某些 Linux 发行版上，可能需要手动安装额外的多媒体编解码器

## 常见问题

### 安装后找不到 Bonita 命令

确保 Python 的 bin 目录在您的系统 PATH 中。您可以尝试：

```bash
# 查看 Bonita 安装位置
pip show bonita-video-manager
```

### 如何更新到最新版本？

```bash
pip install --upgrade bonita-video-manager
```

### 安装时遇到依赖问题

尝试使用虚拟环境安装：

```bash
python -m venv bonita-env
source bonita-env/bin/activate  # Linux/macOS
# 或
bonita-env\Scripts\activate.bat  # Windows

pip install bonita-video-manager
```

## 相关资源

- [安装指南](../guide/getting-started.md)
- [GitHub 仓库](https://github.com/Suwmlee/bonita)
- [问题追踪](https://github.com/Suwmlee/bonita/issues)

<style>
.download-options {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px 0;
}

.download-option {
  flex: 1;
  min-width: 250px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
}

.os-logo {
  width: 64px;
  height: 64px;
  margin: 0 auto 15px;
  color: var(--vp-c-brand);
}

.download-button {
  display: inline-block;
  margin: 10px 0;
  padding: 10px 20px;
  background-color: var(--vp-c-brand);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
}

.download-button:hover {
  background-color: var(--vp-c-brand-dark);
}
</style> 