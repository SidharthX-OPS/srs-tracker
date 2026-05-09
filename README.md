# SRS//TRACKER

Cyberpunk-themed Spaced Repetition System with Firebase cloud sync.

🌐 **Live app:** https://sidharthx-ops.github.io/srs-tracker/

## Features

- 🔁 6-stage spaced repetition (1d → 3d → 7d → 14d → 30d → 60d)
- ☁️ Firebase cloud sync across all devices
- 📅 Backdate topics for missed study sessions
- 🔥 Streak tracking & 30-day activity heatmap
- 🔍 Full-text search across topics, subjects, and notes
- 💾 Export/import JSON backups
- 📱 Installable as PWA on iOS, Android, Windows
- 🌑 Dark cyberpunk aesthetic

## Setup

1. Open the live link above
2. Paste your Firebase config (one-time setup)
3. Add your first topic — done

To sync across devices, copy your User ID from settings on one device and paste it into the setup screen on the other.

## Stack

- Vanilla HTML/CSS/JS — no build step
- Firebase Firestore for sync
- Service Worker for offline PWA support

Built for personal use.
