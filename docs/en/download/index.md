# Download Bonita

Bonita offers multiple download and installation methods. You can choose the appropriate method based on your needs.

## Download Options

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

## Known Issues

- When the video library is very large (10,000+ files), the initial scan may take a long time

## Frequently Asked Questions

### How to update to the latest version?

Manually update Docker or use `Watchtower` for updates

## Related Resources

- [Installation Guide](../guide/)
- [Basic Configuration](../guide/config.md)
- [GitHub Repository](https://github.com/Suwmlee/bonita)
- [Issue Tracking](https://github.com/Suwmlee/bonita/issues)

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