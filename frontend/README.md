# 📊 Savra Teacher Insights Dashboard

A full-stack analytics dashboard built for school principals to monitor and analyze teacher performance, activity trends, and engagement using interactive charts and AI-based insights.

---

# 🚀 Live Demo

🌐 Frontend: https://sarva-assignment.vercel.app/
🌐 Backend API: https://sarva-backend.onrender.com

---

# ✨ Features

## 📈 Analytics Dashboard

* View total Lessons, Quizzes, and Assessments per teacher
* Identify top and least active teachers
* Weekly activity trend visualization

## 🤖 AI Insights

* Automatically detects most active teacher
* Detects least active teacher
* Provides performance intelligence

## 👨‍🏫 Teacher Details

* Select teacher from dropdown
* View complete activity history
* View performance summary

## 📊 Interactive Charts

* Weekly activity trends using Chart.js

## 🌐 Production Deployment

* Frontend deployed on Vercel
* Backend deployed on Render
* MongoDB Atlas database

---

# 🛠 Tech Stack

## Frontend

* React.js
* Tailwind CSS
* Axios
* Chart.js
* Framer Motion

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

# 📂 Project Structure

```
Savra-assignment
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── SummaryCards.jsx
│   │   │   ├── WeeklyChart.jsx
│   │   │   ├── TeacherSelector.jsx
│   │   │   ├── Insights.jsx
│
├── backend
│   ├── routes
│   │   ├── activityRoutes.js
│   ├── models
│   │   ├── Activity.js
│   ├── server.js
```

---

# ⚙️ Installation

## Clone repo

```
git clone https://github.com/Piyush972004/Sarva-assignment.git
```

---

## Backend Setup

```
cd backend
npm install
npm start
```

---

## Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

# 📊 API Endpoints

| Endpoint                    | Description       |
| --------------------------- | ----------------- |
| /api/activity/summary       | Teacher summary   |
| /api/activity/weekly        | Weekly trends     |
| /api/activity/teacher/:name | Teacher details   |
| /api/activity/insights      | AI insights       |
| /api/activity/filter        | Filter activities |

---

# 🧠 Learning Outcomes

* Built full stack production app
* Used MongoDB aggregation pipelines
* Created analytics dashboard
* Implemented REST APIs
* Deployed real world application

---

# 👨‍💻 Author

Piyush Kukreja

Full Stack Developer

GitHub: https://github.com/Piyush972004

LinkedIn: https://www.linkedin.com/in/piyush-kukreja-0b216a258/

---

# ⭐ If you like this project

Please star this repository ⭐
