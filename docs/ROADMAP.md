# MikroTik Hotspot Cloud Control

# Project Roadmap

Version: 1.0

Status: Active

---

# Project Goal

สร้างระบบบริหารจัดการ MikroTik Hotspot แบบ Cloud

รองรับ

- Multi Company
- Multi Router
- Multi Admin
- Multi Language
- Dark / Light Theme

โดยใช้งานผ่าน Web Browser

---

# Current Phase

Planning & Architecture

Status

IN PROGRESS

Completed

- System Design
- Database Design
- Roles & Permissions

Next

- Infrastructure Setup

---

# Phase 1

Infrastructure Setup

Status

PENDING

Goal

เตรียม Environment สำหรับ Development

Tasks

- Install Docker
- Create Docker Compose
- PostgreSQL Container
- pgAdmin Container
- Next.js Container
- Environment Variables
- GitHub Repository Structure

Deliverables

Working Docker Environment

Success Criteria

สามารถรัน

docker compose up -d

ได้สำเร็จ

---

# Phase 2

Database Setup

Status

PENDING

Goal

สร้างฐานข้อมูลกลาง

Tasks

- Install Prisma ORM
- Create Prisma Schema
- Create Database Tables
- Create Relationships
- Database Migration

Tables

- companies
- admins
- routers
- hotspot_profiles
- hotspot_users
- active_sessions
- qr_codes
- reports
- audit_logs
- backups

Deliverables

Working PostgreSQL Database

Success Criteria

Prisma Migration ผ่านทั้งหมด

---

# Phase 3

Authentication System

Status

PENDING

Goal

สร้างระบบ Login

Features

- Login
- Logout
- Session Management
- Password Hashing

Future

- Two Factor Authentication

Deliverables

Secure Authentication

Success Criteria

Admin Login ได้

---

# Phase 4

Authorization System

Status

PENDING

Goal

กำหนดสิทธิ์ผู้ใช้งาน

Roles

- Super Admin
- Company Admin

Features

- Route Protection
- API Protection
- RBAC

Deliverables

Role Based Access Control

Success Criteria

Company Admin ไม่สามารถเข้าถึงข้อมูลของ Company อื่นได้

---

# Phase 5

Company Management

Status

PENDING

Goal

บริหารจัดการลูกค้า

Features

- Create Company
- Edit Company
- Delete Company
- Suspend Company

Deliverables

Company Module

Success Criteria

Super Admin จัดการ Company ได้

---

# Phase 6

Admin Management

Status

PENDING

Goal

จัดการผู้ดูแลระบบ

Features

- Create Admin
- Edit Admin
- Delete Admin
- Change Password
- Profile Settings

Deliverables

Admin Module

Success Criteria

Admin ถูกผูกกับ Company ได้

---

# Phase 7

Router Management

Status

PENDING

Goal

บริหาร MikroTik Router

Features

- Add Router
- Edit Router
- Delete Router
- Router Assignment
- Router Selector

Deliverables

Router Module

Success Criteria

Company สามารถมีหลาย Router

---

# Phase 8

MikroTik Integration

Status

PENDING

Goal

เชื่อมต่อ MikroTik Router

Environment

RouterOS

7.10

API Port

8728

API SSL

8729

Tasks

- Connect API
- Test Connection
- Read Hotspot Profiles
- Read Hotspot Users
- Read Active Users

Deliverables

Working MikroTik API

Success Criteria

ดึงข้อมูลจาก Router ได้

---

# Phase 9

Hotspot Profiles

Status

PENDING

Goal

จัดการ Package

Features

- Create Profile
- Edit Profile
- Delete Profile

Examples

- 1 Day
- 7 Days
- 30 Days
- VIP

Deliverables

Profile Module

Success Criteria

Profile Sync กับ MikroTik ได้

---

# Phase 10

Hotspot Users

Status

PENDING

Goal

จัดการผู้ใช้งาน

Features

- Create User
- Edit User
- Delete User
- Batch Create Users

Deliverables

User Module

Success Criteria

User Sync กับ MikroTik ได้

---

# Phase 11

Active Users

Status

PENDING

Goal

ดูผู้ใช้งานออนไลน์

Features

- View Active Sessions
- Disconnect User
- Refresh Sessions

Deliverables

Active User Module

Success Criteria

เห็นข้อมูล Real-Time

---

# Phase 12

QR Code System

Status

PENDING

Goal

สร้าง QR Code

Features

- Generate QR
- Download PNG
- Download PDF
- Print QR

Deliverables

QR Module

Success Criteria

ลูกค้าสามารถ Login ผ่าน QR ได้

---

# Phase 13

Reports

Status

PENDING

Goal

สร้างรายงาน

Features

- Daily Report
- Weekly Report
- Monthly Report
- Revenue Report

Deliverables

Reporting Module

Success Criteria

Export Report ได้

---

# Phase 14

Audit Logs

Status

PENDING

Goal

เก็บกิจกรรมผู้ใช้งาน

Features

- Login Logs
- User Logs
- Router Logs
- System Logs

Deliverables

Audit Log Module

Success Criteria

สามารถตรวจสอบย้อนหลังได้

---

# Phase 15

Backup & Restore

Status

PENDING

Goal

สำรองข้อมูล

Features

- Database Backup
- Database Restore
- Download Backup Files

Deliverables

Backup Module

Success Criteria

Restore ได้สำเร็จ

---

# Phase 16

Theme System

Status

PENDING

Goal

รองรับ Theme

Features

- Dark Mode
- Light Mode
- System Mode

Deliverables

Theme Module

Success Criteria

Theme ถูกบันทึกตาม User

---

# Phase 17

Language System

Status

PENDING

Goal

รองรับหลายภาษา

Languages

- English
- Thai

Deliverables

Language Module

Success Criteria

เปลี่ยนภาษาได้ทั้งระบบ

---

# Phase 18

Production Deployment

Status

PENDING

Goal

Deploy ขึ้น Production

Infrastructure

- Docker
- Nginx
- PostgreSQL

Tasks

- SSL Certificate
- Reverse Proxy
- Firewall
- Monitoring

Deliverables

Production System

Success Criteria

ระบบออนไลน์ใช้งานจริงได้

---

# Future Features

Planned

- Billing System
- Subscription Plans
- Payment Gateway
- SMS Integration
- Email Notifications
- Telegram Notifications
- Line Notifications
- Mobile Application
- API Tokens
- Multi Region Support

---

# Project Status Summary

Completed

- SYSTEM_DESIGN.md
- DATABASE_DESIGN.md
- ROLES_AND_PERMISSIONS.md

Next Step

Phase 1

Infrastructure Setup

Priority

HIGH
