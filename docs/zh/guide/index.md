# 快速开始

本指南将帮助你快速安装和配置 Bonita，开始管理你的视频文件。

## 安装方法

### 方法一：使用Docker安装

#### 基本运行
```bash
# 拉取镜像
docker pull suwmlee/bonita:latest

# 基本运行
docker run -d -p 12346:12346 suwmlee/bonita:latest
```

#### 完整配置运行
```bash
# 使用SQLite作为broker，指定管理员账户和密码
docker run -d \
    --name bonita \
    -p 12346:12346 \
    -e PUID=0 \
    -e PGID=0 \
    -e FIRST_SUPERUSER_EMAIL="admin@example.com" \
    -e FIRST_SUPERUSER_PASSWORD="changepwd" \
    -e MAX_CONCURRENCY=5 \
    -e TZ=Asia/Shanghai \
    -v <path/to/media>:/media \
    -v <path/to/data>:/app/backend/data \
    suwmlee/bonita:latest

# 可选：使用外部Redis作为broker
docker run -d \
    --name bonita \
    -p 12346:12346 \
    -e PUID=0 \
    -e PGID=0 \
    -e CELERY_BROKER_URL="redis://host.docker.internal:6379/0" \
    -e CELERY_RESULT_BACKEND="redis://host.docker.internal:6379/0" \
    -e MAX_CONCURRENCY=5 \
    -v <path/to/media>:/media \
    -v <path/to/data>:/app/backend/data \
    suwmlee/bonita:latest
```

#### 使用 docker-compose（推荐）
创建 `docker-compose.yml` 文件：

```yaml
version: '3.8'
services:
  bonita:
    image: suwmlee/bonita:latest
    ports:
      - "12346:12346"
    environment:
      - PUID=0
      - PGID=0
      - MAX_CONCURRENCY=5
      - TZ=Asia/Shanghai
      - FIRST_SUPERUSER_EMAIL=admin@example.com
      - FIRST_SUPERUSER_PASSWORD=changepwd
    volumes:
      - ./data:/app/backend/data
      - ./media:/media
    restart: unless-stopped
```

然后运行：
```bash
docker-compose up -d
```

## 环境变量说明

| 变量                       | 默认值        | 说明                               |
| -------------------------- | ------------- | ---------------------------------- |
| `PUID`                     | 0             | 用户ID，用于文件权限管理           |
| `PGID`                     | 0             | 组ID，用于文件权限管理             |
| `MAX_CONCURRENCY`          | 5             | Celery并发处理任务数               |
| `TZ`                       | Asia/Shanghai | 时区设置                           |
| `FIRST_SUPERUSER_EMAIL`    | -             | 初始管理员邮箱（仅初次创建时有效） |
| `FIRST_SUPERUSER_PASSWORD` | -             | 初始管理员密码（仅初次创建时有效） |
| `CELERY_BROKER_URL`        | -             | Celery外部broker地址（可选）       |
| `CELERY_RESULT_BACKEND`    | -             | Celery外部结果存储地址（可选）     |

## 启动 Bonita

Docker启动成功后，如果部署设备的IP地址为：`192.168.1.100`，可以通过浏览器访问：`http://192.168.1.100:12346` 进入 Bonita 的 Web 界面。

## 服务管理

使用s6-overlay进行进程管理，提供以下功能：

### 📊 **服务管理命令**
```bash
# 查看服务状态
docker exec bonita /command/s6-rc -a list

# 重启特定服务
docker exec bonita /command/s6-rc -d change bonita
docker exec bonita /command/s6-rc -u change bonita

# 停止/启动服务
docker exec bonita /command/s6-rc -d change celery
docker exec bonita /command/s6-rc -u change celery
```

### 🔍 **日志管理**
```bash
# 查看所有服务日志
docker logs bonita

# 查看特定服务状态
docker exec bonita /command/s6-svstat /run/service/bonita
```

## 常见问题

### Docker重新部署时，提示账户和密码错误

Docker部署如果指定管理员账户和密码，在初次创建数据库时有效，一旦生成对应的数据库，则后续只能通过web界面更改。
如果需要重新部署更改，需要删除对应的数据库，会导致其他配置丢失，请慎重！
SQLite文件默认在data目录，先删除 `db.sqlite3` 再重新部署。

### 服务无法启动或异常

利用s6-overlay的服务管理功能排查问题：
1. 查看服务状态：`docker exec bonita s6-rc -a list`
2. 查看容器日志：`docker logs bonita`
3. 重启特定服务：按上述服务管理命令操作

## 下一步

- 查看[基本配置](./config.md)了解如何自定义 Bonita
- 查看[主要功能](./features.md)了解 Bonita 的更多功能
- 如果你遇到任何问题，请查看[GitHub Issues](https://github.com/Suwmlee/bonita/issues)寻求帮助 