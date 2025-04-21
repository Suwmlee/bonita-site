# 基本配置

Bonita 提供了丰富的配置选项，允许你根据自己的需求自定义软件行为。本页面介绍基本的配置选项。

## 配置文件位置

Bonita 的配置文件位于：

- Windows: `C:\Users\<用户名>\AppData\Local\bonita\config.json`
- macOS: `~/Library/Application Support/bonita/config.json`
- Linux: `~/.config/bonita/config.json`

## 配置项说明

以下是配置文件中的主要配置项：

### 基本设置

```json
{
  "general": {
    "language": "zh-CN",       // 界面语言，支持 zh-CN, en-US 等
    "theme": "auto",           // 主题，可选值: light, dark, auto
    "port": 8888,              // Web 界面端口
    "host": "0.0.0.0",         // 监听地址，0.0.0.0 表示所有网络接口
    "debug": false,            // 调试模式开关
    "log_level": "info",       // 日志级别: debug, info, warning, error
    "startup_scan": true       // 启动时自动扫描视频库
  }
}
```

### 库设置

```json
{
  "libraries": [
    {
      "id": "movies",               // 库 ID
      "name": "电影库",              // 库显示名称
      "path": "/path/to/movies",    // 库文件路径
      "type": "movie",              // 库类型: movie, tv, anime
      "auto_scan": true,            // 是否自动扫描
      "scan_interval": 3600,        // 自动扫描间隔（秒）
      "watch_folder": true          // 是否监控文件夹变化
    }
  ]
}
```

### 元数据设置

```json
{
  "metadata": {
    "providers": ["tmdb", "imdb", "local"],  // 元数据提供者优先级
    "language": "zh-CN",                    // 元数据语言
    "include_adult": false,                 // 是否包含成人内容
    "tmdb_api_key": "your_api_key",         // TMDB API 密钥
    "auto_fetch": true,                     // 自动获取元数据
    "fetch_images": true,                   // 是否获取图片
    "cache_images": true,                   // 是否缓存图片
    "cache_path": "/path/to/cache"          // 缓存路径
  }
}
```

### 数据库设置

```json
{
  "database": {
    "type": "sqlite",                       // 数据库类型: sqlite, mysql
    "path": "/path/to/bonita.db",           // SQLite 数据库路径
    "host": "localhost",                    // MySQL 主机地址
    "port": 3306,                           // MySQL 端口
    "user": "username",                     // MySQL 用户名
    "password": "password",                 // MySQL 密码
    "database_name": "bonita",              // MySQL 数据库名
    "backup_enabled": true,                 // 是否启用自动备份
    "backup_interval": 86400,               // 备份间隔（秒）
    "backup_keep": 7                        // 保留的备份数量
  }
}
```

### 安全设置

```json
{
  "security": {
    "auth_enabled": false,                  // 是否启用身份验证
    "api_key_required": false,              // 是否需要 API 密钥
    "api_key": "",                          // API 密钥
    "allowed_ips": ["127.0.0.1"],           // 允许的 IP 地址
    "session_timeout": 86400                // 会话超时时间（秒）
  }
}
```

## 修改配置

你可以通过以下方式修改配置：

1. **直接编辑配置文件**：
   使用任何文本编辑器直接编辑 `config.json` 文件。

2. **通过 Web 界面**：
   登录 Bonita Web 界面，点击"设置"菜单进行配置。

3. **通过命令行**：
   ```bash
   # 修改特定配置项
   bonita --config general.port=8889
   
   # 查看当前配置
   bonita --show-config
   ```

修改配置后，需要重启 Bonita 服务才能使变更生效。

## 配置模板

如果你想从头开始创建配置文件，可以使用以下命令生成配置模板：

```bash
bonita --generate-config > config.json
```

## 下一步

- 查看[高级配置](./advanced-config.md)了解更多高级配置选项
- 返回[主要功能](./features.md)了解 Bonita 的基本功能 