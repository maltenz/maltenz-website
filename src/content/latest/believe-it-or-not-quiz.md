---
title: Believe It Or Not Quiz
description: Multi-Platform Quiz Ecosystem
image: /uploads/bion-demo-main.jpg
publishDate: 2026-02-10T10:01:00.000+13:00
---
## Multi-Platform Quiz Ecosystem

**Role:** Frontend Lead  
**Platforms:** Web, Responsive Mobile, Electron (Windows & macOS)  
**Architecture:** Monorepo (Yarn Workspaces) + Server-Based State + Firebase Middleware  

Believe It Or Not Quiz was the most complex frontend project I’ve delivered in terms of requirements, real-time behaviour, and platform coverage.

This wasn’t a single application — it was a coordinated, live, multi-application ecosystem powering real quiz events across venues and devices.

As Frontend Lead, I was responsible for architectural direction, cross-application consistency, and delivery across all frontend surfaces.

### 🧩 Platform Ecosystem

The system consisted of multiple coordinated applications:

- **Host Application (Web)**
- **Host Application (Electron – Windows & macOS)**
- **Host Marking Interface**
- **Leaderboard Display App**
- **Participant Mobile Web App**
- **Live Presentation / Preview App**
- **User Management Portal**
- **Shared Middleware Package**

Each app served a different role but operated on shared real-time state and synchronised business logic.

### ⚙️ What I Delivered

- Designed and maintained a Yarn Workspaces monorepo architecture
- Built cross-platform React applications with shared domain logic
- Implemented Electron desktop builds with auto-update support (Windows & Mac)
- Developed responsive mobile participant flows
- Architected server-driven state management for live quiz orchestration
- Built the **Host Marking system** for real-time scoring and answer validation
- Integrated Firebase middleware for authentication and user management
- Delivered animated presentation and leaderboard systems
- Established structured testing, linting, and release workflows

### 🔄 Real-Time State & Host Marking Complexity

One of the most challenging aspects was coordinating live quiz state across:

- Host controls
- Host marking decisions
- Participant submissions
- Leaderboard scoring
- Live presentation displays
- Preview environments

The **Host Marking interface** required:

- Immediate scoring updates
- Deterministic recalculation of leaderboards
- Synchronized propagation to all connected clients
- Clear UI feedback under time pressure

All while ensuring:

- No race conditions
- Predictable scoring behaviour
- Consistent cross-device updates
- Stability during live events

This required careful separation of concerns between UI state, server-driven state, and middleware orchestration.

### 🛠 Technical Stack

- **React 18**
- **TypeScript**
- **Vite**
- **Electron (Windows/macOS + auto-updates)**
- **Firebase**
- **Material UI (MUI)**
- **Framer Motion / GSAP / Lottie**
- **Vitest + Coverage**
- **Yarn Workspaces Monorepo**
- Structured UAT / Production build pipelines

### 🎯 Leadership & Architectural Ownership

As Frontend Lead, I:

- Defined architectural standards across all apps
- Established shared package boundaries
- Ensured predictable real-time state behaviour
- Balanced animation-heavy UI with performance constraints
- Coordinated multi-platform release builds
- Oversaw feature rollouts across the ecosystem

This project required thinking in systems — not just components — designing orchestration layers rather than isolated screens.

### 🚀 Impact

Believe It Or Not Quiz evolved into a fully-fledged live quiz platform supporting:

- Desktop and web-based hosts
- Real-time host marking
- Mobile participant submissions
- Animated presentation displays
- Dynamic leaderboards
- Secure user management

It remains one of the most technically demanding frontend systems I’ve delivered — and a strong example of architecting scalable, synchronized, multi-platform React ecosystems.
