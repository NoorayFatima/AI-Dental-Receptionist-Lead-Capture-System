# 🦷 SmileCare AI Dental Receptionist & Lead Capture System


An AI-powered dental clinic receptionist that automates patient inquiries, appointment requests, lead capture, CRM logging, and WhatsApp notifications.

This project demonstrates how Artificial Intelligence can replace repetitive front-desk tasks while ensuring that every patient inquiry is captured, organized, and instantly delivered to clinic staff.
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Gemini AI](https://img.shields.io/badge/Google-Gemini_AI-orange)
![Make.com](https://img.shields.io/badge/Automation-Make.com-purple)
![Twilio](https://img.shields.io/badge/WhatsApp-Twilio-green)
![Vercel](https://img.shields.io/badge/Deployment-Vercel-black)
---

## 🚀 Live Demo

🌐 **Live Website:**  
https://smilecare-dental-clinic-rosy.vercel.app/

📂 **GitHub Repository:**  
https://github.com/NoorayFatima/AI-Dental-Receptionist-Lead-Capture-System

---

# 📌 Project Overview

Dental clinics often lose potential patients because inquiries arrive outside business hours or staff members are unavailable to respond immediately.

SmileCare AI solves this problem by acting as a virtual receptionist that:

- Answers patient questions
- Collects appointment details
- Captures qualified leads
- Stores data inside a CRM
- Sends instant notifications to clinic staff

The system works 24/7 and ensures that no patient inquiry is missed.

---

# ✨ Features

## 🤖 AI Receptionist

Powered by Google Gemini AI.

The assistant can:

- Greet visitors professionally
- Answer service-related questions
- Guide patients through appointment booking
- Maintain conversational context
- Ask only for missing information
- Respond naturally like a real receptionist

---

## 📅 Intelligent Appointment Booking

The chatbot automatically collects:

- Full Name
- Phone Number
- Dental Service
- Preferred Date
- Preferred Time

Instead of asking everything at once, the assistant gathers information step-by-step for a more natural patient experience.

---

## 🧠 Structured Lead Capture System

When all required booking information is collected, the AI automatically generates a structured lead.

### Example Lead

| Field | Value |
|---------|---------|
| Name | Noor Fatima |
| Phone | +923001234567 |
| Service | Teeth Whitening |
| Date | 25 May 2026 |
| Time | 10:00 AM |

---

## 📊 Google Sheets CRM Integration

Captured leads are automatically sent to Google Sheets through Make.com automation.

### Stored Information

| Field | Description |
|---------|------------|
| Timestamp | Lead Creation Time |
| Name | Patient Name |
| Phone | Contact Number |
| Service | Requested Service |
| Date | Appointment Date |
| Time | Appointment Time |

This creates a lightweight CRM suitable for dental clinics and healthcare businesses.

---

## 📱 WhatsApp Notification System

Whenever a lead is captured:

- Clinic staff receive an instant WhatsApp notification
- Appointment requests can be reviewed immediately
- No manual monitoring is required

Powered by:

- Twilio WhatsApp API
- Make.com Automation

---

## 🎨 Modern UI/UX

Features:

- Floating AI Chat Widget
- Responsive Design
- Smooth Animations
- Professional Healthcare Branding
- Mobile Friendly Interface

---

# 🏗️ System Architecture

```text
Patient Visitor
      │
      ▼
Website Chat Widget
      │
      ▼
Google Gemini AI
      │
      ▼
Lead Extraction Logic
      │
      ▼
Make.com Webhook
      │
      ├────────► Google Sheets CRM
      │
      ▼
Twilio WhatsApp Notification
      │
      ▼
Clinic Staff
```

---

# 🛠️ Technology Stack

## Frontend

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## AI Layer

- Google Gemini API
- Gemini 2.5 Flash

## Backend

- API Routes

## Automation

- Make.com

## CRM

- Google Sheets

## Messaging

- Twilio WhatsApp API

## Deployment

- Vercel

---

# 📸 Project Screenshots

## Homepage

<img width="100%" alt="Homepage" src="./screenshots/homepage.png">

---

## AI Receptionist Conversation

<img width="375" height="525" alt="image" src="https://github.com/user-attachments/assets/12cfa113-0f39-4da8-ba25-882aa1b15004" />
<img width="375" height="525" alt="image" src="https://github.com/user-attachments/assets/a0a6c5b8-47d8-4cc1-a8b7-cf19337b5232" />
<img width="375" height="525" alt="image" src="https://github.com/user-attachments/assets/a10a4790-9a05-4897-8e07-f0f9d84ba2cf" />
<img width="375" height="525" alt="image" src="https://github.com/user-attachments/assets/329295bd-7448-488f-992e-cec1ea0722d9" />


---

## Google Sheets CRM

<img width="511" height="375" alt="image" src="https://github.com/user-attachments/assets/bc4b1e82-6786-47f0-a216-855196b50065" />


---

## Make.com Automation

<img width="895" height="289" alt="image" src="https://github.com/user-attachments/assets/65d7ea97-9103-4a5c-b983-207422394fb7" />


---

## WhatsApp Notification

<img width="426" height="478" alt="image" src="https://github.com/user-attachments/assets/243f5be5-f025-4fd0-8e02-922f63588237" />


---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/NoorayFatima/AI-Dental-Receptionist-Lead-Capture-System.git
```

```bash
cd AI-Dental-Receptionist-Lead-Capture-System
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY

MAKE_WEBHOOK_URL=YOUR_MAKE_WEBHOOK_URL
```

---

## Run Development Server

```bash
npm run dev
```

---

# 🔄 Workflow

### Step 1

Patient visits the website.

### Step 2

AI Receptionist starts a conversation.

### Step 3

Patient requests an appointment.

### Step 4

AI collects:

- Name
- Phone Number
- Service
- Date
- Time

### Step 5

Lead is automatically extracted.

### Step 6

Lead data is sent to Make.com.

### Step 7

Make.com stores the lead in Google Sheets CRM.

### Step 8

Twilio sends a WhatsApp notification.

### Step 9

Clinic staff contact the patient and confirm the appointment.

---

# 💼 Real Business Value

This project can be adapted for:

- Dental Clinics
- Medical Clinics
- Hospitals
- Beauty Salons
- Law Firms
- Real Estate Agencies
- Consultants
- Service-Based Businesses

Any business that relies on appointment booking and lead generation can benefit from this system.

---

# 📈 Future Enhancements

Planned upgrades:

- Google Calendar Integration
- Real-Time Slot Availability
- Admin Dashboard
- Lead Status Tracking
- Email Notifications
- SMS Notifications
- Analytics Dashboard
- Multi-Language Support
- Multi-Clinic Support
- AI Voice Receptionist

---

# 👩‍💻 Author

### Noor Fatima

Computer Science Student | Web Developer | AI Automation Enthusiast

🔗 GitHub:  
https://github.com/NoorayFatima

🔗 LinkedIn:  
www.linkedin.com/in/noorfatima35

---

# ⭐ Support

If you found this project useful:

- Star the repository
- Fork the project
- Share feedback
- Connect with me on LinkedIn

---

## License

This project is available for educational, portfolio, and demonstration purposes.
