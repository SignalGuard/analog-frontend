# AnomalyDetect - Advanced Anomaly Detection Dashboard

AnomalyDetect is a comprehensive web application for monitoring, analyzing, and managing system anomalies. Built with Next.js, React, and shadcn/ui, it provides a powerful interface for IT professionals to detect, investigate, and respond to system irregularities.

![AnomalyDetect Dashboard](https://placeholder.svg?height=400&width=800)

## Table of Contents

- [Features](#features)
  - [Dashboard Overview](#dashboard-overview)
  - [Log Viewer](#log-viewer)
  - [Anomaly Detection Panel](#anomaly-detection-panel)
  - [Alerts and Notifications](#alerts-and-notifications)
  - [User Management](#user-management)
  - [Custom Configurations](#custom-configurations)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Future Improvements](#future-improvements)

## Features

### Dashboard Overview

The main dashboard provides a high-level view of system health and anomaly statistics:

- **Key Metrics Cards**: Display critical information including:
  - Total logs processed with week-over-week change
  - Detected anomalies with trend indicators
  - System performance metrics

- **Data Trends Chart**: Interactive line chart showing:
  - Log volume over time
  - Anomaly frequency patterns
  - Dual Y-axis for comparing metrics at different scales

### Log Viewer

A powerful interface for exploring and filtering system logs:

- **Real-time Log Display**: View logs as they are ingested into the system
- **Advanced Filtering**: Filter logs by:
  - Log level (info, warning, error, critical)
  - Timestamp ranges
  - Message content via search
- **Visual Indicators**: Color-coded severity levels for quick identification
- **Responsive Table**: Optimized for both desktop and mobile viewing

### Anomaly Detection Panel

Dedicated interface for analyzing detected anomalies:

- **Anomaly Distribution**: Interactive pie chart showing breakdown of anomaly types (Network, CPU, Memory, Disk)
- **Anomaly History**: Bar chart displaying resolved vs. unresolved anomalies over time
- **Detailed Descriptions**: Expandable accordion sections containing:
  - Anomaly title and description
  - Potential impact assessment
  - Technical details for investigation

### Alerts and Notifications

Comprehensive alert management system:

- **Alert Tracking**: Table of current alerts with:
  - Alert message and timestamp
  - Severity level indicators (low, medium, high)
  - Current status (new, acknowledged, resolved)
- **Alert Actions**: Workflow management with:
  - Acknowledge button to mark alerts as being investigated
  - Resolve button to close addressed alerts
- **Notification Preferences**: Configure delivery methods:
  - Email notifications toggle
  - SMS notifications toggle

### User Management

Role-based access control and user administration:

- **Admin Dashboard**:
  - User management table with edit/delete capabilities
  - Add new user functionality
  - System-wide settings access

- **Analyst Dashboard**:
  - Recent anomalies summary
  - Quick access to analysis tools
  - Focused interface for data investigation

- **Viewer Dashboard**:
  - System status overview
  - Recent reports access
  - Read-only view of critical information

- **Profile Settings**:
  - Personal information management
  - Theme preferences (light/dark/system)
  - Notification preferences

### Custom Configurations

Extensive customization options for tailoring the system:

- **Anomaly Thresholds**:
  - Configurable CPU, memory, disk, and network usage thresholds
  - Detection sensitivity settings (low, medium, high)
  - Save and apply threshold changes

- **Log Ingestion Sources**:
  - Enable/disable specific log sources
  - Add new log sources with custom paths
  - Manage multiple data input streams

- **Visualization Preferences**:
  - Dark mode toggle
  - Default chart type selection (line, bar, pie)
  - Dashboard refresh rate configuration

- **API Key Management**:
  - Create new API keys for third-party integrations
  - View existing API keys with creation dates
  - Delete unused or compromised API keys

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/anomaly-detect.git
cd anomaly-detect

# Install dependencies
npm install

# Run the development server
npm run dev
