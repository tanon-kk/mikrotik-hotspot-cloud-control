# MikroTik Hotspot Cloud Control

# Docker Architecture

Version: 1.0

Status: Draft

---

# 1. Overview

ระบบจะรันด้วย Docker Container

เพื่อให้

* Development ง่าย
* Deploy ง่าย
* Backup ง่าย
* Scale ได้ในอนาคต

---

# 2. Architecture Diagram

```
            Internet
                │
                ▼
      ┌───────────────────┐
      │      Nginx        │
      │ Reverse Proxy     │
      └─────────┬─────────┘
                │
   ┌────────────┴────────────┐
   │                         │
   ▼                         ▼
```

┌─────────────────┐   ┌─────────────────┐
│    Next.js      │   │   PostgreSQL    │
│   Frontend/API  │   │    Database     │
└─────────────────┘   └─────────────────┘

```
                │
                ▼

      ┌───────────────────┐
      │ MikroTik Routers  │
      │ API 8728 / 8729   │
      └───────────────────┘
```

---

# 3. Containers

## Application

Container Name

app

Image

node:22-alpine

Purpose

* Next.js
* API Routes
* Authentication
* MikroTik Integration

Port

3000

---

## Database

Container Name

postgres

Image

postgres:17

Purpose

* Main Database

Port

5432

---

## Database Management

Container Name

pgadmin

Image

dpage/pgadmin4

Purpose

* Database Administration

Port

5050

---

## Reverse Proxy

Container Name

nginx

Image

nginx:alpine

Purpose

* Reverse Proxy
* SSL
* Security Headers

Ports

80
443

---

# 4. Development Environment

Local Machine

Windows 11

Docker Desktop

↓

Containers

* app
* postgres
* pgadmin

---

# 5. Production Environment

Ubuntu Server 24.04

Docker Engine

↓

Containers

* nginx
* app
* postgres

Optional

* redis

---

# 6. Networks

Docker Network

mikrotik-network

Containers

* app
* postgres
* pgadmin
* nginx

---

# 7. Volumes

postgres_data

Purpose

Database Storage

---

pgadmin_data

Purpose

pgAdmin Configuration

---

uploads

Purpose

QR Codes
Profile Images
Exports

---

# 8. Environment Variables

Application

DATABASE_URL

NEXTAUTH_SECRET

NEXTAUTH_URL

APP_NAME

APP_ENV

---

MikroTik

MIKROTIK_API_TIMEOUT

MIKROTIK_SSL

---

# 9. Security

Production

* HTTPS Only
* Strong Password Policy
* API Validation
* RBAC
* Audit Logging

---

# 10. Future Containers

Optional

Redis

Purpose

Caching

---

MinIO

Purpose

Object Storage

---

Prometheus

Purpose

Monitoring

---

Grafana

Purpose

Dashboard Monitoring

---

# 11. Current Architecture

Phase 1

Development

Containers

* app
* postgres
* pgadmin

Phase 2

Production

Containers

* nginx
* app
* postgres

Phase 3

Scale

Containers

* nginx
* app
* postgres
* redis
* monitoring stack
