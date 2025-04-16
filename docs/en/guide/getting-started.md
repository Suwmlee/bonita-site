# Getting Started with Bonita

This guide will help you install and set up Bonita for managing your video collection.

## System Requirements

Before installing Bonita, ensure your system meets the following requirements:

- **Operating System**: Windows 10/11, macOS 10.15+, or Linux (Ubuntu 20.04+ recommended)
- **Hardware**: 
  - 4GB RAM (minimum), 8GB+ (recommended)
  - 2GB free disk space for installation
  - Additional space for your video library
- **Software**:
  - Python 3.8 or newer
  - Modern web browser (Chrome, Firefox, Safari, or Edge)

## Installation

### Installing from Source

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bonita.git
   cd bonita
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up the database:
   ```bash
   python setup_db.py
   ```

4. Start the application:
   ```bash
   python app.py
   ```

5. Access Bonita through your web browser at `http://localhost:8000`

## Initial Configuration

After installation, you'll need to:

1. **Add Video Libraries**: Configure directories where your videos are stored
2. **Set Metadata Preferences**: Choose what metadata to extract and display
3. **Configure User Accounts**: Set up users if you want to share access

## Adding Your First Video Library

1. Navigate to Settings > Libraries
2. Click "Add Library"
3. Enter a name for your library
4. Browse to select the directory containing your videos
5. Click "Save" and wait for the initial scan to complete

## Next Steps

Now that you have Bonita up and running, you can:

- [Explore the features](./features.md) available to organize your videos
- Customize the interface to match your preferences
- Set up scheduled scanning to automatically update your library 