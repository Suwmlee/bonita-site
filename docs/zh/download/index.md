# 下载 Bonita

Bonita 提供多种下载和安装方式，您可以根据自己的需求选择合适的方式。

## 下载选项

### Docker

```bash
docker pull suwmlee/bonita:latest
docker run -d \
    --name bonita \
    -p 12346:12346 \
    -v <path/to/media>:/media \
    -V <path/to/data>:/app/backend/data \
    suwmlee/bonita:latest
```

## 已知问题

- 当视频库非常大 (10,000+ 文件) 时，初始扫描可能需要较长时间

## 常见问题

### 如何更新到最新版本？

手动更新docker 或者 使用 `Watchtower` 进行更新

## 相关资源

- [安装指南](../guide/)
- [基本配置](../guide/config.md)
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