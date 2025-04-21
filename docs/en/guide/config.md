# Basic Configuration

Bonita provides a rich set of configuration options, allowing you to customize the software behavior according to your needs. This page introduces the basic configuration options.

## Records

Displays records of all task operations.

Deletion by default removes files after transfer. If forced deletion is checked, source files will be deleted.

Editing individual record pages allows for customized operations, such as custom episode settings or custom scraping.

### Custom Transfer

- Ignore

  No transfer will occur. After ignoring, you can delete the transferred files, and they will be ignored in the next transfer.

- Custom episode and episode number
- The top-level folder after transfer

### Custom Scraping

- ID Number

  Specify the ID number

- Specify Source

  Sources supported by [scrapinglib](https://github.com/Suwmlee/scrapinglib)

- Specify URL

  Specified webpage link

## Scraping Configuration

This module focuses on custom scraping configurations, triggered by tasks.

When creating a configuration, you can click save immediately to automatically generate the latest default configuration. If you have other modifications, edit again.

### Basics

- Save Metadata

  Save scraped metadata locally. By default, it can be used immediately after the next scraping. View in the `Metadata` page.

- Scraping Sites

  Sources supported by [scrapinglib](https://github.com/Suwmlee/scrapinglib)

### Naming

- Naming Rules

  Default: number+' '+title

- Location Rules

  Default: actor+'/'+number+' '+title

#### Optional Parameters

title, actor, studio, director, release, year, number, runtime, series, and other metadata parameters

### Watermark

- Watermark Size

  Adjust the size of the watermark, the proportion of the added watermark relative to the entire image

- Watermark Position

  Starting position of the watermark, multiple watermarks increment once. Top-right:0 Top-left:1 Bottom-left:2 Bottom-right:3

## Task Configuration

### Basics

- Content Type

  Video types in the folder, movies and TV shows are processed differently

- Source Folder

  Folder to be processed

- Output Folder

  Folder for output after processing

- Operation Method

  File output method, supports hard links, moving, copying. Hard links recommended

- Auto Monitor

  After enabling automatic monitoring, when there are changes in the folder (file creation, movement, deletion), this task will be executed automatically

- Clean Others

  When running a complete task, files not in records will be deleted

- Optimize Names

  Will filter Chinese characters for easier media service processing

### Associated Scraping

- Enable Scraping

  Associate with the corresponding scraping configuration


## Next Steps

- Check [Advanced Configuration](./advanced-config.md) to learn more about advanced configuration options
- Return to [Main Features](./features.md) to understand Bonita's basic functionality 