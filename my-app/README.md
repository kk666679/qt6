# MATMOTOFIX-Dyno

Professional Motorcycle Dynamometer Software with AI-Powered Analysis

## Overview
MATMOTOFIX-Dyno is a comprehensive C++ application with modern web interface for professional motorcycle dynamometer testing. Features real-time data acquisition, AI-powered performance analysis, and multi-platform support.

## Features
- **Real-time Dyno Testing** - Live RPM, torque, and power measurement
- **AI Performance Analysis** - Intelligent optimization recommendations
- **Qt Automotive Interface** - Professional automotive-style dashboard
- **Web-based UI** - Modern Figma-inspired interface with 3D visualization
- **Multi-platform Support** - Windows, Linux, macOS
- **Hardware Integration** - Dynojet, SuperFlow, Motec ECU support
- **Professional Installer** - Windows SDM with driver management

## Quick Start

### Prerequisites
- CMake 3.21+
- Qt 6.5.0+
- C++17 compiler
- Node.js (for web interface)

### Build
```bash
cd my-app
mkdir build && cd build
cmake ..
cmake --build . --parallel 4
```

### Run
```bash
# C++ Application
export QT_QPA_PLATFORM=offscreen
./MATMOTOFIX-Dyno

# Web Interface
npm run dev
```

## Installation

### Windows
1. Download installer from releases
2. Run `MATMOTOFIX-Dyno-Setup.exe`
3. Follow installation wizard
4. Connect dyno hardware

### Silent Install (IT)
```powershell
.\silent-install.ps1 -InstallPath "C:\MATMOTOFIX-Dyno"
```

## Architecture
- **Core Engine**: C++ with Qt framework
- **Web Interface**: Next.js with TypeScript
- **Data Processing**: Real-time signal processing
- **AI Analysis**: Performance optimization engine
- **Hardware Layer**: Serial/USB communication

## Supported Hardware
- Dynojet 250i/450i series
- SuperFlow SF-1020/1025
- Motec M800 ECU systems
- Custom USB/Serial interfaces

## Development

### Project Structure
```
my-app/
├── src/                 # C++ source code
├── app/                 # Next.js web interface
├── components/          # React components
├── scripts/             # Build and install scripts
├── resources/           # Configuration files
└── build/               # Build output
```

### Build Targets
- `MATMOTOFIX-Dyno` - Main application
- `QtAutomotive` - Automotive interface
- Web interface on port 3000

## CI/CD
Automated builds for Windows, Linux, and macOS via GitHub Actions.

## License
Professional Motorcycle Dynamometer Software
Copyright © 2024 MATMOTOFIX Technologies

## Support
For technical support and documentation, visit the project repository.