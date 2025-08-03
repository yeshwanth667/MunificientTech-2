📚 Course Catalog & Student Enrollment System
A simple full-stack LMS module to list courses and allow students to enroll in them. Built using:

🔧 Frontend: React (Vite), Bootstrap, React Router, Axios, Toastify

🔧 Backend: Node.js, Express.js, MongoDB

☁️ Deployment: Vercel (frontend) & Render / Railway / Cyclic (backend)

🚀 Live Demo
🔗 Frontend: https://munificient-tech-2.vercel.app/

🔗 Backend: https://munificienttech-2-api.onrender.com

MunificentTech/
│
├── frontend/                # React frontend (Vite)
|______src/
|_______├── components/        # Reusable components (Navbar, CourseCard, etc.)
│       ├── services/          # Axios API service
│       ├── App.jsx            # Main App component
│       └── main.jsx           # ReactDOM render
│   
│
├── backend/                # Express backend
│   ├── models/            # Mongoose models
│   ├── routes/            # Express routes and Logic for API's
│   ├── .env               # Mongo URI and Port
│   └── index.js          # Entry point
│
└── README.md

⚙️ Setup Instructions
🔧 1. Clone the Repo
  git clone https://github.com/yeshwanth667/MunificientTech-2.git
  cd MunificentTech

🖥️ 2. Run the Frontend
  cd frontend
  npm install
  npm run dev

🖥️ 3. Run the Backend
cd backend
npm install
# Add your MongoDB URI to .env
npm start

.env file example:
PORT=5000
MONGO_URI=mongodb+srv://Yeshwanth:1234567890@munificent.pi2173o.mongodb.net/?retryWrites=true&w=majority&appName=Munificent

| Method | Endpoint           | Description                |
| ------ | ------------------ | -------------------------- |
| GET    | `/api/courses`     | Get all courses            |
| POST   | `/api/courses`     | Add a new course           |
| GET    | `/api/enrollments` | Get all enrollments        |
| POST   | `/api/enrollments/me` | Enroll student in a course |

✅ Features
Course listing with details

Modal form to add a course (Admin)

Enroll in courses (Student)

View enrolled courses

Toast notifications on actions

🛠 Tech Stack
React + Bootstrap
Express.js + MongoDB (Mongoose)
Axios, React Toastify, React Router
Vercel, Render (or similar)






