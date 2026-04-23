# DE Gorilla Prep — Local Setup (Gemini)

## What you need
- Node.js (you already have this ✅)
- A Gemini API key — FREE at https://aistudio.google.com/apikey

---

## Steps to run

### 1. Get your Gemini API key
Go to https://aistudio.google.com/apikey → Create API key → Copy it

### 2. Open your terminal and go into the folder
```
cd de-gorilla
```

### 3. Install dependencies (first time only)
```
npm install
```

### 4. Set your API key and start the server

**Mac/Linux:**
```
GEMINI_API_KEY=YOUR-KEY-HERE node server.js
```

**Windows (Command Prompt):**
```
set GEMINI_API_KEY=YOUR-KEY-HERE && node server.js
```

**Windows (PowerShell):**
```
$env:GEMINI_API_KEY="YOUR-KEY-HERE"; node server.js
```

### 5. Open the app
Go to: http://localhost:3000

---

## You should see this in your terminal:
```
✅  DE Gorilla Prep is running (powered by Gemini)!
👉  Open this in your browser: http://localhost:3000
```

## To stop the server
Press Ctrl + C in the terminal.

---

## Troubleshooting

**"GEMINI_API_KEY not set"**
→ Make sure you paste the key in the same terminal window before running node

**Questions not loading**
→ Check your key is correct at https://aistudio.google.com/apikey

**"Cannot find module 'express'"**
→ Run npm install again inside the de-gorilla folder
