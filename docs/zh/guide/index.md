# 快速开始

本指南将帮助你快速安装和配置 Bonita，开始管理你的视频文件。

## 安装方法

### 方法一：使用docker安装

```bash
# 拉取镜像
docker pull suwmlee/bonita:latest

# 使用SQLite作为broker
# 指定管理员账户和密码
docker run -d \
    --name bonita \
    # 指定管理员账户和密码，仅在初次有效
    -e FIRST_SUPERUSER_EMAIL="admin@example.com" \  
    -e FIRST_SUPERUSER_PASSWORD="12345678" \
    -p 12346:12346 \
    -v <path/to/media>:/media \
    -V <path/to/data>:/app/backend/data \
    suwmlee/bonita:latest

# 可选：使用外部Redis作为broker
# 未指定管理员账户和密码
docker run -d \
    --name bonita \
    -p 12346:80 \
    -e CELERY_BROKER_URL="redis://host.docker.internal:6379/0" \
    -e CELERY_RESULT_BACKEND="redis://host.docker.internal:6379/0" \
    -v <path/to/media>:/media \
    -V <path/to/data>:/app/backend/data \
    suwmlee/bonita:latest
```

## 启动 Bonita

docker启动成功后，如果部署设备的IP地址为：`192.168.1.100`，可以通过浏览器访问：`http://192.168.1.100:12346` 进入 Bonita 的 Web 界面。

## 常见问题

### docker重新部署时，提示账户和密码错误

docker部署如果指定管理员账户和密码，在初次创建数据库时有效，一旦生成对应的数据库，则后续只能通过web界面更改。
如果需要重新部署更改，需要删除对应的数据库，会导致其他配置丢失，请慎重！
sqlite文件默认在data目录，先删除 `db.sqlite3`再重新部署

## 下一步

- 查看[基本配置](./config.md)了解如何自定义 Bonita
- 查看[主要功能](./features.md)了解 Bonita 的更多功能
- 如果你遇到任何问题，请查看[GitHub Issues](https://github.com/Suwmlee/bonita/issues)寻求帮助 