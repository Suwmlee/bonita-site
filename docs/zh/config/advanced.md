# 高级配置

本页面介绍 Bonita 的高级配置选项，适合希望进一步定制 Bonita 行为的用户。

## 插件系统

Bonita 支持通过插件扩展功能。插件配置位于配置文件的 `plugins` 部分：

```json
{
  "plugins": {
    "enabled": true,
    "plugins_path": "/path/to/plugins",
    "installed": [
      {
        "name": "bonita-plugin-example",
        "enabled": true,
        "config": {
          "option1": "value1",
          "option2": "value2"
        }
      }
    ]
  }
}
```

### 安装插件

1. 将插件文件放入 `plugins_path` 指定的目录
2. 编辑配置文件，在 `installed` 数组中添加插件信息
3. 重启 Bonita 服务

## 高级搜索配置

Bonita 支持配置搜索引擎的行为：

```json
{
  "search": {
    "engine": "internal",         // 搜索引擎: internal, elasticsearch
    "elasticsearch": {
      "host": "localhost",
      "port": 9200,
      "index_prefix": "bonita_"
    },
    "search_fields": ["title", "description", "tags", "actors"],
    "search_weights": {
      "title": 3.0,
      "description": 1.0,
      "tags": 2.0,
      "actors": 1.5
    },
    "search_result_limit": 100,
    "suggest_enabled": true,
    "suggest_limit": 5
  }
}
```

## 任务队列配置

对于大型视频库，Bonita 支持配置后台任务队列：

```json
{
  "tasks": {
    "worker_count": 2,            // 工作线程数量
    "queue_size": 100,            // 队列大小
    "retry_count": 3,             // 失败重试次数
    "retry_delay": 60,            // 重试间隔（秒）
    "priority_levels": 3,         // 优先级级别数量
    "task_timeout": 300           // 任务超时时间（秒）
  }
}
```

## 自定义元数据字段

Bonita 允许定义自定义元数据字段：

```json
{
  "custom_fields": [
    {
      "name": "personal_rating",
      "display_name": "个人评分",
      "type": "number",
      "min": 1,
      "max": 10,
      "default": 5,
      "required": false,
      "searchable": true
    },
    {
      "name": "watched_date",
      "display_name": "观看日期",
      "type": "date",
      "default": "",
      "required": false,
      "searchable": true
    },
    {
      "name": "custom_tags",
      "display_name": "自定义标签",
      "type": "array",
      "item_type": "string",
      "default": [],
      "required": false,
      "searchable": true
    }
  ]
}
```

## 视频处理配置

配置视频处理选项：

```json
{
  "video_processing": {
    "ffmpeg_path": "/usr/bin/ffmpeg",   // FFmpeg 路径
    "thumbnail_quality": 80,            // 缩略图质量（百分比）
    "thumbnail_count": 3,               // 每个视频的缩略图数量
    "extract_subtitles": true,          // 是否提取字幕
    "supported_formats": [              // 支持的格式
      "mp4", "mkv", "avi", "mov", "wmv"
    ],
    "transcoding": {
      "enabled": false,                 // 是否启用转码
      "target_format": "mp4",           // 目标格式
      "target_codec": "h264",           // 目标编码
      "quality_preset": "medium",       // 质量预设
      "keep_original": true             // 是否保留原文件
    }
  }
}
```

## API 和 Webhook

配置 API 和 Webhook：

```json
{
  "api": {
    "rate_limit": 100,                   // 速率限制（请求/分钟）
    "timeout": 30,                       // 请求超时（秒）
    "cors_enabled": true,                // 是否启用 CORS
    "cors_origins": ["*"],               // 允许的来源
    "webhook": {
      "enabled": true,                   // 是否启用 Webhook
      "events": ["library.scan.complete", "video.metadata.updated"],
      "endpoints": [
        {
          "url": "http://example.com/webhook",
          "events": ["library.scan.complete"],
          "secret": "your_webhook_secret"
        }
      ]
    }
  }
}
```

## 性能调优

为高级用户提供的性能调优选项：

```json
{
  "performance": {
    "cache": {
      "memory_size": 128,                // 内存缓存大小（MB）
      "disk_size": 512,                  // 磁盘缓存大小（MB）
      "ttl": 3600                        // 缓存生存时间（秒）
    },
    "database": {
      "pool_size": 10,                   // 数据库连接池大小
      "query_timeout": 30,               // 查询超时（秒）
      "optimize_interval": 86400         // 数据库优化间隔（秒）
    },
    "web": {
      "compression": true,               // 是否启用压缩
      "page_size": 50,                   // 分页大小
      "image_scaling": true              // 是否启用图片缩放
    }
  }
}
```

## 高级日志配置

配置详细的日志选项：

```json
{
  "logging": {
    "file": {
      "enabled": true,                   // 是否启用文件日志
      "path": "/var/log/bonita",         // 日志文件路径
      "level": "info",                   // 日志级别
      "rotation": "daily",               // 轮换策略: hourly, daily, weekly
      "keep": 7                          // 保留的日志文件数量
    },
    "syslog": {
      "enabled": false,                  // 是否启用系统日志
      "server": "localhost",             // 系统日志服务器
      "port": 514,                       // 系统日志端口
      "facility": "local0"               // 系统日志设施
    },
    "sensitive_fields": [                // 敏感字段（不记录）
      "password", "api_key", "token"
    ]
  }
}
```

## 完整示例

以下是一个完整的高级配置示例：

```json
{
  "general": {
    "language": "zh-CN",
    "theme": "dark",
    "port": 8888,
    "host": "0.0.0.0",
    "debug": false,
    "log_level": "info",
    "startup_scan": true
  },
  "libraries": [
    {
      "id": "movies",
      "name": "电影库",
      "path": "/media/movies",
      "type": "movie",
      "auto_scan": true,
      "scan_interval": 3600,
      "watch_folder": true
    }
  ],
  "metadata": {
    "providers": ["tmdb", "imdb", "local"],
    "language": "zh-CN",
    "include_adult": false,
    "tmdb_api_key": "your_api_key",
    "auto_fetch": true,
    "fetch_images": true,
    "cache_images": true,
    "cache_path": "/var/cache/bonita"
  },
  "database": {
    "type": "sqlite",
    "path": "/var/lib/bonita/bonita.db",
    "backup_enabled": true,
    "backup_interval": 86400,
    "backup_keep": 7
  },
  "security": {
    "auth_enabled": true,
    "api_key_required": true,
    "api_key": "your_secure_api_key",
    "allowed_ips": ["127.0.0.1", "192.168.1.0/24"],
    "session_timeout": 86400
  },
  "plugins": {
    "enabled": true,
    "plugins_path": "/var/lib/bonita/plugins",
    "installed": []
  },
  "search": {
    "engine": "internal",
    "search_fields": ["title", "description", "tags", "actors"],
    "search_result_limit": 100,
    "suggest_enabled": true
  },
  "tasks": {
    "worker_count": 2,
    "queue_size": 100,
    "retry_count": 3
  },
  "custom_fields": [],
  "video_processing": {
    "ffmpeg_path": "/usr/bin/ffmpeg",
    "thumbnail_quality": 80,
    "supported_formats": ["mp4", "mkv", "avi", "mov", "wmv"]
  },
  "api": {
    "rate_limit": 100,
    "timeout": 30,
    "cors_enabled": true,
    "webhook": {
      "enabled": false
    }
  },
  "performance": {
    "cache": {
      "memory_size": 128,
      "disk_size": 512
    },
    "database": {
      "pool_size": 10
    },
    "web": {
      "compression": true,
      "page_size": 50
    }
  },
  "logging": {
    "file": {
      "enabled": true,
      "path": "/var/log/bonita",
      "level": "info",
      "rotation": "daily",
      "keep": 7
    }
  }
}
```

## 环境变量

Bonita 也支持通过环境变量设置配置项。环境变量的优先级高于配置文件。

环境变量名称格式为：`BONITA_`加上配置项路径，路径中的点(`.`)替换为下划线(`_`)。

例如：

```
# 设置 Web 界面端口
export BONITA_GENERAL_PORT=8889

# 设置 TMDB API 密钥
export BONITA_METADATA_TMDB_API_KEY=your_api_key
```

## 注意事项

- 修改高级配置项前，建议先备份原配置文件
- 某些高级选项可能需要特定的系统依赖或外部服务
- 不正确的配置可能导致性能问题或服务不可用 