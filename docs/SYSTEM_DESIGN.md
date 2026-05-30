# MikroTik Hotspot Cloud Control

## Project Overview

ระบบบริหารจัดการ MikroTik Hotspot แบบ Cloud สำหรับผู้ให้บริการอินเทอร์เน็ต หอพัก ร้านกาแฟ โรงแรม และธุรกิจที่ต้องการจัดการ Hotspot User ผ่าน Web Application

---

# User Roles

## 1. Super Admin

ผู้ดูแลระบบทั้งหมด

สามารถ:

- เพิ่ม Company
- แก้ไข Company
- ลบ Company

- เพิ่ม Router
- แก้ไข Router
- ลบ Router

- สร้าง Admin
- แก้ไข Admin
- ลบ Admin

- กำหนดจำนวน Admin สูงสุดของแต่ละ Company

- ดู Dashboard ทุก Company

- ดู Reports ทุก Router

- Backup / Restore

- ดู System Logs

- จัดการ Theme

- จัดการ Language

---

## 2. Company Admin

เจ้าของธุรกิจ หรือผู้ดูแลของ Company

ตัวอย่าง:

- เจ้าของหอพัก
- เจ้าของร้านกาแฟ
- เจ้าของโรงแรม
- เจ้าของอพาร์ตเมนต์

สามารถ:

- จัดการ Hotspot Users
- จัดการ Hotspot Profiles
- ดู Active Users
- สร้าง QR Code
- ดู Reports ของ Company ตัวเอง

ไม่สามารถ:

- เห็น Company อื่น
- เห็น Router ของ Company อื่น

---

# System Structure

Super Admin
│
├── Company A
│ ├── Admin A
│ ├── Admin B
│ └── Admin C
│
│ ├── Router 1.1
│ └── Router 1.2
│
├── Company B
│ ├── Admin D
│ └── Admin E
│
│ ├── Router 2.1
│ ├── Router 2.2
│ └── Router 2.3
│
└── Company C

---

# Company

ข้อมูลบริษัทหรือผู้ใช้งานระบบ

Fields:

- id
- company_code
- company_name
- max_admins
- status
- created_at
- updated_at

Example:

Company A
Code: 0001

---

# Admin

ข้อมูลผู้ดูแลระบบของ Company

Fields:

- id
- company_id

- first_name
- last_name

- email
- phone

- avatar

- password_hash

- status

- created_at
- updated_at

Rules:

- Admin ต้องอยู่ภายใต้ Company
- Admin เห็น Router ทุกตัวของ Company ตัวเอง

---

# Router

ข้อมูล MikroTik Router

Fields:

- id
- company_id

- router_name

- public_ip
- api_port

- api_username
- api_password

- router_os_version

- status

- created_at
- updated_at

Example:

Apartment Router 1
Cafe Router 2

---

# Router Selection

Company Admin สามารถเลือก Router ที่ต้องการจัดการได้

ผ่าน Dropdown Router Selector

Navbar

🟢 Connected

[ Router ▼ ]

Example:

- Apartment Router 1
- Apartment Router 2
- Cafe Router

เมื่อเปลี่ยน Router

ข้อมูลในหน้า:

- Dashboard
- Users
- Profiles
- Active Users
- QR Codes

จะเปลี่ยนตาม Router ที่เลือก

---

# Hotspot User

Hotspot User อยู่ภายใต้ Router

Example

Router 1

- User A
- User B
- User C

Router 2

- User X
- User Y
- User Z

---

# Features

## Dashboard

- Total Users
- Active Users
- Online Users
- Revenue
- Router Status

---

## Users

- Create User
- Batch Create Users
- Edit User
- Delete User
- Suspend User

---

## Profiles

- Create Profile
- Edit Profile
- Delete Profile

---

## Active Users

- View Active Sessions
- Disconnect User

---

## QR Codes

- Generate QR Codes
- Download QR Codes

---

## Reports

- Daily Report
- Monthly Report
- Revenue Report

---

# MikroTik Integration

RouterOS Version:

7.10

Connection:

- API 8728
- API SSL 8729

Current Status:

- Router Accessible
- API Enabled
- Hotspot Enabled

---

# Future Infrastructure

Frontend

- Next.js

Backend

- Next.js API Routes (Phase 1)

Database

- PostgreSQL

Container

- Docker

Deployment

- VPS / Cloud Server

---

# Development Roadmap

Phase 1

- Project Structure
- UI Design
- Router Selector

Phase 2

- Docker Setup
- PostgreSQL Setup

Phase 3

- Company Management

Phase 4

- Admin Management

Phase 5

- Router Management

Phase 6

- MikroTik API Integration

Phase 7

- Hotspot User Management

Phase 8

- Reports

Phase 9

- Backup / Restore

Phase 10

- Production Deployment
