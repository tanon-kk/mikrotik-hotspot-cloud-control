# MikroTik Hotspot Cloud Control

# Database Design Document

Version: 1.0

Status: Draft

---

# 1. Database Overview

Database Engine

- PostgreSQL

Architecture

- Multi-Tenant

Primary Goal

- รองรับหลาย Company
- รองรับหลาย Router
- รองรับหลาย Admin
- รองรับ MikroTik หลายตัวในระบบเดียว

---

# 2. Entity Relationship Overview

Super Admin

│

├── Companies

│ ├── Admins

│ └── Routers

│

├── Reports

├── Logs

└── Backups

---

# 3. Companies Table

เก็บข้อมูลบริษัทลูกค้า

Table Name

companies

Fields

| Column       | Type         |
| ------------ | ------------ |
| id           | UUID         |
| company_code | VARCHAR(20)  |
| company_name | VARCHAR(255) |
| logo         | TEXT         |
| contact_name | VARCHAR(255) |
| email        | VARCHAR(255) |
| phone        | VARCHAR(50)  |
| address      | TEXT         |
| max_admins   | INTEGER      |
| status       | BOOLEAN      |
| created_at   | TIMESTAMP    |
| updated_at   | TIMESTAMP    |

Rules

- company_code ต้องไม่ซ้ำ
- company_name ต้องไม่ซ้ำ

---

# 4. Admins Table

เก็บข้อมูลผู้ดูแลระบบ

Table Name

admins

Fields

| Column        | Type         |
| ------------- | ------------ |
| id            | UUID         |
| company_id    | UUID         |
| role          | VARCHAR(50)  |
| first_name    | VARCHAR(255) |
| last_name     | VARCHAR(255) |
| email         | VARCHAR(255) |
| phone         | VARCHAR(50)  |
| avatar        | TEXT         |
| password_hash | TEXT         |
| language      | VARCHAR(10)  |
| theme         | VARCHAR(20)  |
| status        | BOOLEAN      |
| last_login    | TIMESTAMP    |
| created_at    | TIMESTAMP    |
| updated_at    | TIMESTAMP    |

Rules

- email ต้องไม่ซ้ำ
- password เก็บแบบ Hash เท่านั้น

Role Values

- SUPER_ADMIN
- COMPANY_ADMIN

Language Values

- TH
- EN

Theme Values

- DARK
- LIGHT
- SYSTEM

---

# 5. Routers Table

เก็บข้อมูล MikroTik Router

Table Name

routers

Fields

| Column           | Type         |
| ---------------- | ------------ |
| id               | UUID         |
| company_id       | UUID         |
| router_name      | VARCHAR(255) |
| description      | TEXT         |
| public_ip        | VARCHAR(100) |
| api_port         | INTEGER      |
| api_ssl_port     | INTEGER      |
| api_username     | VARCHAR(255) |
| api_password     | TEXT         |
| routeros_version | VARCHAR(50)  |
| status           | VARCHAR(20)  |
| last_connected   | TIMESTAMP    |
| created_at       | TIMESTAMP    |
| updated_at       | TIMESTAMP    |

Status

- ONLINE
- OFFLINE
- UNKNOWN

---

# 6. Hotspot Profiles Table

เก็บข้อมูล Profile

Table Name

hotspot_profiles

Fields

| Column        | Type         |
| ------------- | ------------ |
| id            | UUID         |
| router_id     | UUID         |
| profile_name  | VARCHAR(255) |
| description   | TEXT         |
| validity_days | INTEGER      |
| price         | NUMERIC      |
| created_at    | TIMESTAMP    |
| updated_at    | TIMESTAMP    |

Examples

- 1 Day
- 7 Days
- 30 Days
- VIP

---

# 7. Hotspot Users Table

เก็บข้อมูลผู้ใช้งาน Hotspot

Table Name

hotspot_users

Fields

| Column      | Type         |
| ----------- | ------------ |
| id          | UUID         |
| router_id   | UUID         |
| profile_id  | UUID         |
| username    | VARCHAR(255) |
| password    | VARCHAR(255) |
| description | TEXT         |
| status      | VARCHAR(20)  |
| expires_at  | TIMESTAMP    |
| created_at  | TIMESTAMP    |
| updated_at  | TIMESTAMP    |

Status

- ACTIVE
- EXPIRED
- DISABLED

---

# 8. Active Sessions Table

เก็บข้อมูลผู้ใช้งานออนไลน์

Table Name

active_sessions

Fields

| Column           | Type         |
| ---------------- | ------------ |
| id               | UUID         |
| router_id        | UUID         |
| user_id          | UUID         |
| ip_address       | VARCHAR(100) |
| mac_address      | VARCHAR(100) |
| login_time       | TIMESTAMP    |
| session_duration | BIGINT       |
| upload_bytes     | BIGINT       |
| download_bytes   | BIGINT       |
| created_at       | TIMESTAMP    |

---

# 9. QR Codes Table

เก็บข้อมูล QR Code

Table Name

qr_codes

Fields

| Column        | Type      |
| ------------- | --------- |
| id            | UUID      |
| user_id       | UUID      |
| qr_image_path | TEXT      |
| created_at    | TIMESTAMP |

---

# 10. Reports Table

เก็บข้อมูล Report

Table Name

reports

Fields

| Column       | Type        |
| ------------ | ----------- |
| id           | UUID        |
| company_id   | UUID        |
| router_id    | UUID        |
| report_type  | VARCHAR(50) |
| report_date  | DATE        |
| total_users  | INTEGER     |
| online_users | INTEGER     |
| revenue      | NUMERIC     |
| created_at   | TIMESTAMP   |

Report Types

- DAILY
- WEEKLY
- MONTHLY

---

# 11. Audit Logs Table

เก็บ Log การทำงานทั้งหมด

Table Name

audit_logs

Fields

| Column     | Type         |
| ---------- | ------------ |
| id         | UUID         |
| admin_id   | UUID         |
| action     | VARCHAR(255) |
| module     | VARCHAR(255) |
| ip_address | VARCHAR(100) |
| user_agent | TEXT         |
| created_at | TIMESTAMP    |

Examples

- LOGIN
- LOGOUT
- CREATE_USER
- DELETE_USER
- UPDATE_PROFILE
- CHANGE_PASSWORD

---

# 12. Backups Table

เก็บข้อมูล Backup

Table Name

backups

Fields

| Column     | Type         |
| ---------- | ------------ |
| id         | UUID         |
| file_name  | VARCHAR(255) |
| file_size  | BIGINT       |
| file_path  | TEXT         |
| created_by | UUID         |
| created_at | TIMESTAMP    |

---

# 13. Relationships

companies

1:N

admins

---

companies

1:N

routers

---

routers

1:N

hotspot_profiles

---

routers

1:N

hotspot_users

---

hotspot_profiles

1:N

hotspot_users

---

hotspot_users

1:N

active_sessions

---

admins

1:N

audit_logs

---

companies

1:N

reports

---

routers

1:N

reports

---

# 14. Future Tables

Planned

notifications

user_preferences

api_tokens

payment_transactions

subscriptions

support_tickets

two_factor_authentication

---

# 15. Current Status

Ready For

- PostgreSQL
- Prisma ORM
- Docker Setup
- Authentication Design

Next Document

ROLES_AND_PERMISSIONS.md
