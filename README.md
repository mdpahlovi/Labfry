# Labfry

## 🔗 Live Demo

-   **Frontend:** [https://labfry-steel.vercel.app](https://labfry-steel.vercel.app)
-   **Backend API:** [https://labfry.onrender.com](https://labfry.onrender.com)

---

## 📋 Project Overview

A comprehensive authentication system with user management features.

## 🛠️ Tech Stack

| Layer    | Technologies                             |
| -------- | ---------------------------------------- |
| Backend  | TypeScript, NestJS, Prisma, PostgreSQL   |
| Frontend | TypeScript, Next.js, TailwindCSS, Formik |

---

## 📡 API Endpoints

| Method | Endpoint                       | Description              |
| ------ | ------------------------------ | ------------------------ |
| POST   | `/api/v1/auth/signup`          | Register a new user      |
| POST   | `/api/v1/auth/signin`          | Login a user             |
| POST   | `/api/v1/auth/verify-email`    | Verify user              |
| POST   | `/api/v1/auth/signup-complete` | Complete signup          |
| POST   | `/api/v1/auth/forgot-password` | Forgot password          |
| POST   | `/api/v1/auth/reset-password`  | Reset password           |
| POST   | `/api/v1/auth/resend-code`     | Resend verification code |

---

## ⚙️ Installation Steps

### Prerequisites

-   Node.js (LTS)
-   Database connection string

### Backend Setup

```bash
cd backend
npm install
# Create .env file (see ENV section)
npm run start:dev # Start Development Server
```

### Frontend Setup

```bash
cd frontend
npm install
# Create .env file (see ENV section)
npm run dev # Start Development Server
```

---

## 🔐 ENV Variable Instructions

### Backend `.env`

```env
# SERVER ENV
NODE_ENV=development
PORT=5000
API_PREFIX=api
APP_VERSION=1.0.0
ORIGIN=http://localhost:3000

# DATABASE
DATABASE_URL="..."

# JWT
JWT_SECRET='...'

# EMAIL
EMAIL_USER='...'
EMAIL_PASS='...'
```

### Frontend `.env`

```env
NEXT_PUBLIC_SERVER='http://localhost:5000'
```
