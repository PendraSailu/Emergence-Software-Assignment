# 🤖 AI-Powered Portfolio Website

A full-stack personal portfolio website featuring an AI-powered Resume Assistant.

Users can interact with an AI chatbot that understands my resume and provides intelligent, context-aware responses about my skills, projects, and technical background.

This project demonstrates full-stack development, backend architecture design, AI integration, and modern UI/UX implementation.

---

## 🚀 Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Responsive Dark Theme UI

### Backend
- Python
- FastAPI
- REST API Architecture

### Database
- PostgreSQL

### AI Integration
- OpenRouter API
- Free LLM model for resume-aware intelligent responses

---

## 🧠 Core Features

- Modern responsive portfolio interface
- Skills, Projects, and Hackathons sections
- AI Resume Chat Assistant
- Resume-aware intelligent responses using system prompt injection
- Clean backend service architecture
- REST API communication between frontend and backend
- Production-ready full-stack structure

---

## 📁 Project Structure

AI-Portfolio/
│
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   │   └── chat.py
│   │   ├── services/
│   │   │   └── chat_service.py
│   │   ├── config.py
│   │   ├── database.py
│   │   ├── main.py
│   │   ├── models.py
│   │   └── resume_data.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
│
├── .gitignore
└── README.md

---

## 🔄 How It Works

1. The user enters a question in the chat widget.
2. The frontend sends a POST request to the FastAPI backend.
3. The backend injects resume context into the system prompt.
4. OpenRouter processes the request using a free LLM model.
5. The AI-generated response is returned to the frontend.
6. The chat interface formats and displays the response cleanly.

---

## ⚙️ Local Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

---

### 2️⃣ Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
```

Create a `.env` file inside the `backend` directory:

```
OPENROUTER_API_KEY=your_openrouter_api_key
DATABASE_URL=your_postgresql_connection_string
```

Run the backend server:

```bash
uvicorn app.main:app --reload
```

Backend will run at:

```
http://127.0.0.1:8000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 🔐 Environment Variables

### Backend

- OPENROUTER_API_KEY
- DATABASE_URL

### Frontend (When Deployed)

- VITE_API_URL = Your backend public URL

---

## 🌍 Deployment

This project is deployment-ready.

Recommended deployment setup:

- Frontend → Vercel
- Backend → Render
- PostgreSQL → Render / Supabase / Neon

Environment variables should be configured securely within the hosting platform dashboard.

---

## 🎯 Assignment Objective

This project demonstrates:

- Full-stack development capability
- Clean API and backend architecture
- AI model integration using OpenRouter
- PostgreSQL database integration
- UI/UX design decisions
- Production-ready project organization

---

## 📌 Future Enhancements

- Store chat history in PostgreSQL
- User authentication system
- Admin dashboard
- Resume upload feature
- Advanced prompt engineering
- Rate limiting and security improvements

---

## 📄 License

This project is developed for educational and internship evaluation purposes.