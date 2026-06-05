# 🤖 AI Companion Chatbot (Prototype)

AI Companion Chatbot adalah prototype aplikasi chatbot berbasis AI yang dirancang sebagai teman ngobrol hangat dan suportif, dengan personality seperti anak kecil yang penasaran dan senang mendengar cerita.

Project ini dibuat sebagai proof-of-concept untuk aplikasi chatbot yang mengambil respon dari AI API (Groq LLM).

---

## ✨ Features

- 💬 Chat API berbasis AI (LLM)
- 🇮🇩 Fokus Bahasa Indonesia
- 🧠 Personality chatbot bisa diubah dari 1 file
- ⚡ Backend Express.js sederhana
- 🔐 Aman (API key disimpan di .env)
- 🧪 Cocok untuk demo / prototype / research

---

## 🧠 Chatbot Personality

Bot dirancang memiliki karakter:

Layaknya anak kecil yang selalu penasaran dan ingin mendengarkan cerita.

Karakter ini membuat chatbot:
- Hangat & ramah
- Banyak bertanya balik
- Suka mendengar cerita pengguna
- Menggunakan bahasa Indonesia santai

Personality dapat diubah di file:
config/personality.js

---

## 🏗️ Tech Stack

| Technology | Description |
|---|---|
| Node.js | Runtime backend |
| Express.js | Web server |
| Groq API | AI LLM provider |
| dotenv | Environment config |

---

## 📁 Project Structure

```bash
ai-chatbot-prototype/
│
├── routes/
│   └── chatRoutes.js
│
├── config/
│   └── personality.js
│
├── server.js
├── package.json
├── .env.example
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/ai-chatbot-prototype.git
cd ai-chatbot-prototype
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variable

```bash
Buat file .env lalu isi:

GROQ_API_KEY=your_api_key_here  
PORT=3000

Ambil API key di:
https://console.groq.com/keys
```

---

### 4️⃣ Run Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

Server berjalan di:
```bash
http://localhost:3000
```

---

## 🚀 API Documentation

### POST /api/chat
```bash
Mengirim pesan ke chatbot AI.

Request:
{
  "message": "Halo, apa kabar?"
}

Response:
{
  "reply": "Halo! Aku senang kamu datang 😊 Ceritakan harimu dong!"
}
```

---

## 🎯 Purpose of This Project

Project ini dibuat untuk:
- Prototype aplikasi chatbot
- Demo integrasi AI API
- Pembelajaran penggunaan LLM di backend
- Foundation untuk pengembangan aplikasi chatbot

---

## 🔮 Future Improvements

Planned features:
- Frontend chat interface (React)
- Chat history memory
- User authentication
- Multiple chatbot personalities
- Deployment (Vercel / Railway)

---

## 👨‍💻 Author

Darryl Tan

---

## 📄 License

MIT License – bebas digunakan untuk belajar & pengembangan.
=======
# memoar-ai
>>>>>>> 177607c53b013c59376c45aa27898eac84c16222
