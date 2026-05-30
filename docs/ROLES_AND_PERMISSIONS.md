# MikroTik Hotspot Cloud Control

# Roles And Permissions

Version: 1.0

Status: Draft

---

# 1. Overview

ระบบใช้รูปแบบการกำหนดสิทธิ์แบบ

Role-Based Access Control (RBAC)

โดยแบ่งผู้ใช้งานออกเป็น 2 Roles

- Super Admin
- Company Admin

---

# 2. User Roles

## Super Admin

ผู้ดูแลระบบทั้งหมด

สามารถเข้าถึงข้อมูลทุก Company

สามารถจัดการทุก Module

---

## Company Admin

ผู้ดูแลระบบของ Company

สามารถเข้าถึงเฉพาะข้อมูลของ Company ตัวเอง

ไม่สามารถเห็นข้อมูลของ Company อื่นได้

---

# 3. Permission Matrix

| Module           | Super Admin | Company Admin |
| ---------------- | ----------- | ------------- |
| Dashboard        | Full Access | Company Only  |
| Companies        | Full Access | No Access     |
| Admins           | Full Access | Limited       |
| Routers          | Full Access | View Only     |
| Hotspot Users    | Full Access | Full Access   |
| Profiles         | Full Access | Full Access   |
| Active Users     | Full Access | Full Access   |
| QR Codes         | Full Access | Full Access   |
| Reports          | Full Access | Company Only  |
| Audit Logs       | Full Access | No Access     |
| Backup & Restore | Full Access | No Access     |
| System Settings  | Full Access | No Access     |
| Theme            | Full Access | Personal Only |
| Language         | Full Access | Personal Only |

---

# 4. Dashboard Permissions

## Super Admin

สามารถดู

- Total Companies
- Total Routers
- Total Admins
- Total Users
- Online Users
- Revenue Summary
- System Health

---

## Company Admin

สามารถดู

- Company Statistics
- Router Statistics
- User Statistics
- Revenue Summary

เฉพาะ Company ตัวเอง

---

# 5. Company Permissions

## Super Admin

สามารถ

- Create Company
- Edit Company
- Delete Company
- Suspend Company
- Activate Company

---

## Company Admin

ไม่สามารถเข้าถึงเมนูนี้

---

# 6. Admin Permissions

## Super Admin

สามารถ

- Create Admin
- Edit Admin
- Delete Admin
- Reset Password
- Suspend Account
- Assign Company

---

## Company Admin

สามารถ

- View Admins ใน Company ตัวเอง
- Edit Profile ตัวเอง
- Change Password ตัวเอง

ไม่สามารถ

- ลบ Admin คนอื่น
- สร้าง Super Admin

---

# 7. Router Permissions

## Super Admin

สามารถ

- Create Router
- Edit Router
- Delete Router
- Assign Router To Company
- Change API Configuration
- Test Connection

---

## Company Admin

สามารถ

- View Router Information
- View Router Status
- Select Active Router

ไม่สามารถ

- Delete Router
- Edit API Settings
- Change Company Ownership

---

# 8. Router Selector Permissions

Company Admin สามารถเลือก Router ของ Company ตัวเองได้

ตัวอย่าง

Company A

Router 1.1

Router 1.2

Router 1.3

เมื่อเลือก Router

ข้อมูลทุกหน้าเปลี่ยนตาม Router ที่เลือก

---

# 9. Hotspot User Permissions

## Super Admin

สามารถ

- Create User
- Batch Create Users
- Edit User
- Delete User
- Suspend User
- Export Users

---

## Company Admin

สามารถ

- Create User
- Batch Create Users
- Edit User
- Delete User
- Suspend User
- Print Voucher
- Generate QR Code

เฉพาะ Router ของ Company ตัวเอง

---

# 10. Hotspot Profile Permissions

## Super Admin

สามารถ

- Create Profile
- Edit Profile
- Delete Profile

---

## Company Admin

สามารถ

- Create Profile
- Edit Profile
- Delete Profile

เฉพาะ Router ของ Company ตัวเอง

---

# 11. Active Users Permissions

## Super Admin

สามารถ

- View All Active Users
- Disconnect User

---

## Company Admin

สามารถ

- View Active Users
- Disconnect User

เฉพาะ Router ของ Company ตัวเอง

---

# 12. QR Code Permissions

## Super Admin

สามารถ

- Generate QR Code
- Download QR Code
- Print QR Code

---

## Company Admin

สามารถ

- Generate QR Code
- Download QR Code
- Print QR Code

เฉพาะ User ของ Company ตัวเอง

---

# 13. Reports Permissions

## Super Admin

สามารถดู

- Daily Reports
- Weekly Reports
- Monthly Reports
- Revenue Reports

ทุก Company

---

## Company Admin

สามารถดู

- Daily Reports
- Weekly Reports
- Monthly Reports
- Revenue Reports

เฉพาะ Company ตัวเอง

---

# 14. Audit Logs Permissions

## Super Admin

สามารถดู

- Login Logs
- User Activity Logs
- Router Activity Logs
- System Logs

---

## Company Admin

ไม่สามารถเข้าถึง

---

# 15. Backup And Restore Permissions

## Super Admin

สามารถ

- Create Backup
- Download Backup
- Restore Backup
- Delete Backup

---

## Company Admin

ไม่สามารถเข้าถึง

---

# 16. Profile Settings Permissions

Company Admin

สามารถ

- Change Avatar
- Change Full Name
- Change Phone Number
- Change Email
- Change Password

---

# 17. Theme Permissions

Company Admin

สามารถเลือก

- Dark Mode
- Light Mode
- System Mode

ค่าจะถูกบันทึกเฉพาะ Account นั้น

---

# 18. Language Permissions

Company Admin

สามารถเลือก

- English
- Thai

ค่าจะถูกบันทึกเฉพาะ Account นั้น

---

# 19. API Authorization Rules

Rule 1

Company Admin ต้องไม่สามารถเรียก API ของ Company อื่นได้

---

Rule 2

Company Admin ต้องไม่สามารถดู Router ของ Company อื่นได้

---

Rule 3

Company Admin ต้องไม่สามารถแก้ไขข้อมูล Company อื่นได้

---

Rule 4

ทุก API ต้องตรวจสอบ

- Authentication
- Authorization
- Company Ownership

ก่อนส่งข้อมูลกลับ

---

# 20. Sidebar Menu Visibility

## Super Admin

Dashboard

Companies

Admins

Routers

Reports

Audit Logs

Backup & Restore

System Settings

---

## Company Admin

Dashboard

Users

Profiles

Active Users

QR Codes

Reports

Settings

---

# 21. Future Roles

Planned

- Company Manager
- Staff
- Viewer
- Read Only User

---

# 22. Security Policy

Password

Minimum Requirements

- 8 Characters
- Uppercase
- Lowercase
- Number

Future

- Two Factor Authentication
- Session Management
- Login History
- IP Restriction

---

# 23. Current Status

Permission Model

Ready For

- Authentication System
- Authorization Middleware
- API Security
- Frontend Route Protection

Next Document

ROADMAP.md
