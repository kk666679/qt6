# MATMOTOFIX-Dyno 🏍️💨

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yourusername/MATMOTOFIX-Dyno)
[![License](https://img.shields.io/badge/license-Proprietary-informational)](https://github.com/yourusername/MATMOTOFIX-Dyno)


## Table of Contents 📑

*   [Overview](#overview-)
*   [Features](#features-)
*   [Quick Start](#quick-start-)
    *   [Prerequisites](#prerequisites-)
    *   [Build](#build-)
    *   [Run](#run-)
*   [Installation](#installation-)
    *   [Windows](#windows-)
    *   [Silent Install (IT)](#silent-install-it-)
*   [Supported Hardware](#supported-hardware-)
*   [Architecture](#architecture-)
*   [Development](#development-)
    *   [Project Structure](#project-structure-)
    *   [Build Targets](#build-targets-)
*   [CI/CD](#cicd-)
*   [License](#license-)
*   [Support](#support-)

---

## Overview 👀

MATMOTOFIX-Dyno is a comprehensive C++ application with modern web interface for professional motorcycle dynamometer testing. Features real-time data acquisition, AI-powered performance analysis, and multi-platform support.

---

## Features ✨

*   **Real-time Dyno Testing** 📊 - Live RPM, torque, and power measurement
*   **AI Performance Analysis** 🤖 - Intelligent optimization recommendations
*   **Qt Automotive Interface** 🎛️ - Professional automotive-style dashboard
*   **Web-based UI** 🌐 - Modern Figma-inspired interface with 3D visualization
*   **Multi-platform Support** 💻 - Windows, Linux, macOS
*   **Hardware Integration** 🔌 - Dynojet, SuperFlow, Motec ECU support
*   **Professional Installer** 📦 - Windows SDM with driver manmanageme

---

## Development 🛠️

### Prerequisites ⚙️
- CMake 3.21+
- Qt 6.5.0+
- C++17 compiler
- Node.js (for web interface)

### Build & Run 🚀
```bash
cd my-app
mkdir build && cd build
cmake ..
cmake --build . --parallel 4
```

---

## Project Structure 📂

```bash
my-app/
├── src/                 # C++ source code 🖥️
├── app/                 # Next.js web interface 🌐
├── components/          # React components ⚛️
├── scripts/             # Build and install scripts 📜
├── resources/           # Configuration files 🗂️
└── build/               # Build output 📦
```

---

### 4. **Supported Hardware Badges**

Add a row of badges to show off your hardware compatibility.


## Supported Hardware 🔧

[![Dynojet](https://img.shields.io/badge/Dynojet-250i/450i-000000?style=flat&logoColor=white)](https://dynojet.com)
[![SuperFlow](https://img.shields.io/badge/SuperFlow-SF1020/1025-0077B6?style=flat)](https://superflow.com)
[![Motec](https://img.shields.io/badge/Motec-M800-FF0000?style=flat)](https://motec.com.au)
[![Custom](https://img.shields.io/badge/Interface-USB/Serial-8A2BE2?style=flat)](https://github.com/yourusername/MATMOTOFIX-Dyno)

---

## System Architecture ⚙️

This diagram shows the high-level components and how they interact.

**Code (Using Mermaid.js - works on GitHub/GitLab):**

```mermaid
flowchart TD
    subgraph Hardware [🛠️ Dynamometer & ECU Hardware]
        A[Dynojet]
        B[SuperFlow]
        C[Motec ECU]
        D[Custom Interface]
    end

    subgraph Core [🧠 Core Application C++]
        E[Hardware Abstraction Layer<br>Serial/USB]
        F[Real-time Data<br>Acquisition Engine]
        G[Signal Processing<br>& Calculations]
        H[AI Analysis Engine]
    end

    subgraph Interfaces [💻 User Interfaces]
        I[Qt Automotive Dashboard<br>Local Machine]
        J[Web Server]
        K[Next.js Web App<br>Remote Browser]
    end

    subgraph Storage [💾 Data & Config]
        L[Configuration Files]
        M[Test Results & Logs]
    end

    Hardware -- Raw Data --> Core
    E -- Acquired Signals --> F
    F -- Processed Data --> G
    G -- Metrics Torque, Power --> H
    G -- Live Data --> I
    G -- Live Data --> J
    H -- AI Recommendations --> I
    H -- AI Recommendations --> J
    J -- Serves Data/UI --> K
    Core -- Reads/Writes --> Storage
```

---

### 2. Real-Time Data Processing Flow

This sequence diagram details the journey of data from the hardware to the UI.

**Code (Using Mermaid.js):**

```mermaid
sequenceDiagram
    participant H as Hardware (Dyno/ECU)
    participant HAL as Hardware Layer (C++)
    participant DAQ as Data Acquisition (C++)
    participant SP as Signal Processing (C++)
    participant AI as AI Engine (C++)
    participant QUI as Qt UI
    participant WS as Web Server
    participant WUI as Web UI (Next.js)

    Note over H, WUI: Real-Time Test Cycle

    loop Every Sample Interval
        H->>HAL: Transmit Raw Data (RPM, Force)
        HAL->>DAQ: Read Serial/USB Packet
        DAQ->>SP: Pass Raw Values
        SP->>SP: Calculate Torque, Power, etc.
        SP->>QUI: Update Live Dashboard
        SP->>WS: Broadcast via WebSocket
        WS->>WUI: Push Update (JSON)
        SP->>AI: Stream Processed Metrics
        AI->>AI: Analyze Trends/Patterns
        AI->>QUI: Recommend Optimization
        AI->>WS: Push AI Insights
        WS->>WUI: Display Recommendations
    end
```

---

### 3. Deployment/Platform Overview

This diagram shows how the software is deployed across different platforms.

**Code (Using Mermaid.js):**

```mermaid
flowchart TB
    subgraph S1 [Windows Deployment]
        A1[MATMOTOFIX-Dyno.exe<br>Qt GUI]
        A2[Web Server Process]
        A3[System Tray Icon]
        A4[Windows Service<br>For silent operation]
    end

    subgraph S2 [Linux/macOS Deployment]
        B1[MATMOTOFIX-Dyno Binary<br>Qt GUI/Headless]
        B2[Web Server Process]
        B3[Systemd/Launchd Service]
    end

    subgraph Cloud [Optional Cloud Sync]
        C1[API Gateway]
        C2[Secure Cloud Storage<br>For test results]
    end

    U1[Technician Laptop<br>Local Network] --> S1
    U2[Workshop PC] --> S1
    U3[Linux Diagnostics Station] --> S2
    U4[MacBook] --> S2

    S1 -- Optional Sync --> Cloud
    S2 -- Optional Sync --> Cloud

    U5[iPad/Phone<br>Remote Viewing] -.->|Connects to Web UI| S1
    U5 -.->|Connects to Web UI| S2
```

