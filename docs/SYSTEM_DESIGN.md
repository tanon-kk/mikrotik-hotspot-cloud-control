# MikroTik Hotspot Cloud Control

## System Design Document

Version: 1.0

Status: Planning

---

# 1. Project Overview

MikroTik Hotspot Cloud Control เป็นระบบบริหารจัดการ MikroTik Hotspot ผ่าน Web Application แบบ Multi-Tenant SaaS

ระบบถูกออกแบบมาเพื่อให้เจ้าของธุรกิจสามารถบริหารจัดการผู้ใช้งานอินเทอร์เน็ต (Hotspot Users) ผ่าน Web Browser ได้จากทุกที่ โดยไม่จำเป็นต้องใช้งาน WinBox หรือเข้าไปจัดการ MikroTik Router โดยตรง

รองรับการใช้งานสำหรับ:

* Apartment
* Dormitory
* Hotel
* Cafe
* Restaurant
* Co-Working Space
* Small ISP
* Internet Service Provider

---

# 2. Business Goal

วัตถุประสงค์ของระบบ

* ลดความซับซ้อนในการใช้งาน MikroTik
* ลดการพึ่งพา WinBox
* บริหารจัดการ Hotspot ผ่าน Cloud
* รองรับหลาย Company ในระบบเดียว
* รองรับหลาย Router ในระบบเดียว
* รองรับหลาย Admin ในแต่ละ Company
* ขยายระบบได้ในอนาคต

---

# 3. User Roles

ระบบแบ่งผู้ใช้งานออกเป็น 2 ระดับ

## 3.1 Super Admin

ผู้ดูแลระบบทั้งหมด

เป็นผู้ติดตั้งและบริหารระบบ Cloud

สามารถ:

* สร้าง Company

* แก้ไข Company

* ลบ Company

* สร้าง Router

* แก้ไข Router

* ลบ Router

* สร้าง Admin

* แก้ไข Admin

* ลบ Admin

* กำหนดจำนวน Admin สูงสุดของแต่ละ Company

* ดู Dashboard ทุก Company

* ดู Reports ทุก Company

* Backup System

* Restore System

* ดู Audit Logs

* จัดการ Theme ระบบ

* จัดการ Language ระบบ

---

## 3.2 Company Admin

เจ้าของธุรกิจหรือผู้ดูแลระบบของลูกค้า

ตัวอย่าง:

* เจ้าของหอพัก
* เจ้าของโรงแรม
* เจ้าของร้านกาแฟ
* เจ้าของอพาร์ตเมนต์

สามารถ:

* จัดการ Hotspot Users
* จัดการ Hotspot Profiles
* ดู Active Users
* สร้าง QR Codes
* ดู Reports
* แก้ไขข้อมูลส่วนตัว
* เปลี่ยนรหัสผ่าน
* เปลี่ยนภาษา
* เปลี่ยน Theme

ไม่สามารถ:

* เห็นข้อมูลของ Company อื่น
* เห็น Router ของ Company อื่น
* จัดการ Company อื่น

---

# 4. Multi-Tenant Architecture

ระบบรองรับหลาย Company

Super Admin

├── Company A
├── Company B
├── Company C

ข้อมูลของแต่ละ Company จะถูกแยกออกจากกัน

Company Admin จะมองเห็นเฉพาะข้อมูลของ Company ตัวเองเท่านั้น

---

# 5. Company

Company คือหน่วยงานหลักของระบบ

ตัวอย่าง

Company A

ภายในประกอบด้วย

* Admin หลายคน
* Router หลายตัว

---

# 6. Company Information

ข้อมูลที่จัดเก็บ

* Company Code
* Company Name
* Company Logo
* Contact Name
* Email
* Phone Number
* Address
* Max Admins
* Status
* Created At
* Updated At

ตัวอย่าง

Company Code : 0001

Company Name : Black Pink Apartment

Max Admins : 3

---

# 7. Company Admin Management

แต่ละ Company สามารถมี Admin ได้หลายคน

ตัวอย่าง

Company A

* Admin A
* Admin B
* Admin C

Admin ทุกคนของ Company เดียวกัน

สามารถเห็น Router ทุกตัวของ Company เดียวกัน

---

# 8. Admin Profile

ข้อมูลผู้ใช้งาน

* First Name
* Last Name
* Email
* Phone Number
* Profile Picture
* Password
* Language Preference
* Theme Preference
* Status
* Created At
* Updated At

---

# 9. Authentication

ระบบ Login ด้วย

* Email
* Password

ในอนาคตสามารถเพิ่ม

* Two Factor Authentication (2FA)
* Single Sign-On (SSO)

---

# 10. Authorization

Super Admin

เข้าถึงทุกข้อมูล

Company Admin

เข้าถึงเฉพาะข้อมูลของ Company ตัวเอง

---

# 11. Router Management

Router ทุกตัวจะอยู่ภายใต้ Company

ตัวอย่าง

Company A

├── Router 1.1
└── Router 1.2

Company B

├── Router 2.1
├── Router 2.2
└── Router 2.3

---

# 12. Router Information

ข้อมูล Router

* Router Name
* Description
* Public IP Address
* API Port
* API SSL Port
* API Username
* API Password
* RouterOS Version
* Status
* Last Connected
* Created At
* Updated At

---

# 13. Router Connection Status

สถานะของ Router

Online

Offline

Unknown

แสดงผลบน Dashboard และ Navbar

ตัวอย่าง

🟢 Connected

Apartment Router 1

---

# 14. Router Selector

Company Admin สามารถเลือก Router ที่ต้องการจัดการได้

ผ่าน Dropdown บน Navbar

ตัวอย่าง

Apartment Router 1

Apartment Router 2

Cafe Router

เมื่อเปลี่ยน Router

ข้อมูลทุกหน้าในระบบจะเปลี่ยนตาม Router ที่เลือก

เช่น

* Dashboard
* Users
* Profiles
* Active Users
* QR Codes
* Reports

---

# 15. Dashboard

แสดงภาพรวมของ Router ที่เลือก

ข้อมูลที่แสดง

* Total Users
* Active Users
* Online Users
* Expired Users
* Total Profiles
* Router Status
* Last Sync
* Revenue Summary

---

# 16. Hotspot User Management

จัดการผู้ใช้งาน Hotspot

สามารถ

* Create User
* Edit User
* Delete User
* Suspend User
* Search User
* Reset User Password

---

# 17. Batch User Management

สร้าง User จำนวนมากพร้อมกัน

ตัวอย่าง

* 50 Users
* 100 Users
* 200 Users
* 500 Users

ระบบสามารถ Generate Username และ Password อัตโนมัติ

---

# 18. Hotspot Profiles

จัดการ Package หรือ Profile

ตัวอย่าง

* 1 Day
* 7 Days
* 30 Days
* VIP
* Premium

สามารถ

* Create Profile
* Edit Profile
* Delete Profile

---

# 19. Active Users

แสดงผู้ใช้งานที่ออนไลน์อยู่

ข้อมูลที่แสดง

* Username
* IP Address
* MAC Address
* Login Time
* Session Duration
* Download Usage
* Upload Usage

สามารถ

* Disconnect User
* Refresh Session

---

# 20. QR Code Management

สร้าง QR Code สำหรับ Hotspot User

สามารถ

* Generate QR Code
* Download PNG
* Download PDF
* Print QR Code

---

# 21. Reports

รายงานการใช้งาน

ประกอบด้วย

* Daily Report
* Weekly Report
* Monthly Report
* Revenue Report
* User Report

---

# 22. Profile Settings

Company Admin สามารถแก้ไขข้อมูลส่วนตัวได้

ประกอบด้วย

* Full Name
* Email
* Phone Number
* Profile Picture

---

# 23. Security Settings

Company Admin สามารถ

* Change Password
* Logout All Sessions (Future)

---

# 24. Language Settings

รองรับ

* English (EN)
* Thai (TH)

ระบบจะจดจำค่าของผู้ใช้งานแต่ละคน

---

# 25. Theme Settings

รองรับ

* Dark Mode
* Light Mode
* System Mode

ระบบจะจดจำค่าของผู้ใช้งานแต่ละคน

---

# 26. Notifications (Future)

แจ้งเตือน

* Router Offline
* API Connection Failed
* Backup Failed
* Storage Full

---

# 27. Audit Logs

บันทึกกิจกรรมของผู้ใช้งาน

ตัวอย่าง

* Login
* Logout
* Create User
* Delete User
* Update Profile
* Change Password

---

# 28. Backup & Restore

Super Admin สามารถ

* Backup Database
* Restore Database
* Download Backup Files

---

# 29. MikroTik Integration

Current Environment

RouterOS Version

7.10

Services

API : 8728

API SSL : 8729

Hotspot : Enabled

---

# 30. Technology Stack

Frontend

* Next.js
* React
* Tailwind CSS

Backend

* Next.js API Routes

Database

* PostgreSQL

Infrastructure

* Docker

Version Control

* Git
* GitHub

---

# 31. Development Roadmap

Phase 1

Project Structure

Phase 2

Database Design

Phase 3

Authentication

Phase 4

Company Management

Phase 5

Admin Management

Phase 6

Router Management

Phase 7

MikroTik API Integration

Phase 8

Hotspot User Management

Phase 9

Reports

Phase 10

Backup & Restore

Phase 11

Production Deployment

---

# 32. Current Project Status

Current Phase

UI Prototype & System Design

Completed

* Base UI Layout
* Sidebar Navigation
* Navbar
* Router Selector
* Router Context

Next Step

* Database Design
* PostgreSQL Setup
* Docker Environment
* Authentication System
