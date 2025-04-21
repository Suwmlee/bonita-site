# Quick Start

This guide will help you quickly install and configure Bonita to start managing your video files.

## Installation Methods

### Method 1: Install using Docker

```bash
# Pull the image
docker pull suwmlee/bonita:latest

# Using SQLite as broker
# Specify admin account and password
docker run -d \
    --name bonita \
    # Specify admin account and password, only effective on first run
    -e FIRST_SUPERUSER_EMAIL="admin@example.com" \  
    -e FIRST_SUPERUSER_PASSWORD="12345678" \
    -p 12346:12346 \
    -v <path/to/media>:/media \
    -V <path/to/data>:/app/backend/data \
    suwmlee/bonita:latest

# Optional: Using external Redis as broker
# Admin account and password not specified
docker run -d \
    --name bonita \
    -p 12346:80 \
    -e CELERY_BROKER_URL="redis://host.docker.internal:6379/0" \
    -e CELERY_RESULT_BACKEND="redis://host.docker.internal:6379/0" \
    -v <path/to/media>:/media \
    -V <path/to/data>:/app/backend/data \
    suwmlee/bonita:latest
```

## Starting Bonita

After successful Docker deployment, if your device's IP address is: `192.168.1.100`, you can access the Bonita web interface through your browser at: `http://192.168.1.100:12346`.

## Common Issues

### Account and password error when redeploying Docker

When deploying with Docker, if you specify an admin account and password, it is only effective when creating the database for the first time. Once the database is generated, subsequent changes can only be made through the web interface.
If you need to redeploy with changes, you'll need to delete the corresponding database, which will result in the loss of other configurations, so please be cautious!
The SQLite file is in the data directory by default. Delete `db.sqlite3` first and then redeploy.

## Next Steps

- Check [Basic Configuration](./config.md) to learn how to customize Bonita
- Check [Main Features](./features.md) to learn more about Bonita's functionality
- If you encounter any issues, please check [GitHub Issues](https://github.com/Suwmlee/bonita/issues) for help 