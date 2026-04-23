# Deployment to Vercel

## Quick Start (3 steps)

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login & Deploy
```bash
cd c:\Users\Amarachi\Downloads\de-gorilla\de-gorilla
vercel
```

Follow the prompts:
- **Project name**: `de-gorilla` (or your choice)
- **Framework**: `Other`
- **Root directory**: `./`
- **Build command**: Leave blank (press enter)

### 3. Set Environment Variable
After deployment, go to:
1. https://vercel.com/dashboard
2. Find your `de-gorilla` project
3. Settings → Environment Variables
4. Add: `OPENROUTER_API_KEY` = `sk-or-v1-...` (your actual key)
5. Redeploy: Click "Deployments" → "..." menu → "Redeploy"

Done! Your app is live at `https://de-gorilla.vercel.app` (or custom domain)

---

## Alternative: GitHub Deployment (Best for Teams)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/de-gorilla.git
git push -u origin main
```

### 2. Connect Vercel to GitHub
1. Go to https://vercel.com/import
2. Select your GitHub repo
3. Set root directory to `./`
4. Click "Deploy"

### 3. Add Environment Variable in Vercel Dashboard
- Settings → Environment Variables
- Add `OPENROUTER_API_KEY`
- Redeploy

### 4. Auto-Deployments
Every time you push to GitHub, Vercel auto-deploys. Easy updates!

---

## Updating Text-to-Speech Voice

Edit the `speakLesson()` function in `public/index.html`:

```javascript
ttsState.utterance = new SpeechSynthesisUtterance(text);
ttsState.utterance.rate = 1;  // Speed (0.5 to 2)
ttsState.utterance.pitch = 1; // Pitch (0.5 to 2)
ttsState.utterance.volume = 1; // Volume (0 to 1)
ttsState.utterance.lang = 'en-US'; // Change language if needed
```

Available voices depend on your OS/browser. No external service needed—uses native Web Speech API!

---

## Custom Domain (Optional)

In Vercel Dashboard:
1. Project Settings → Domains
2. Add your domain (e.g., `degorilla.com`)
3. Follow DNS instructions from your registrar

---

## Environment Variables (Secure Your API Key)

**Never commit API keys to GitHub!**

The `.gitignore` file already prevents this. For local testing:

Create `.env.local`:
```
OPENROUTER_API_KEY=sk-or-v1-your-actual-key-here
```

This file is ignored by git. Always set env vars in Vercel Dashboard for production.

---

## Troubleshooting

**"502 Bad Gateway" error?**
- Check that `OPENROUTER_API_KEY` is set in Vercel Environment Variables
- Make sure the API key is valid and has credit

**Text-to-speech not working?**
- Only works on browsers that support Web Speech API (Chrome, Edge, Safari)
- Firefox has limited support
- Some mobile browsers may have restrictions

**Deployment stuck?**
- Check the Vercel deployment logs: Deployments tab → Latest → Logs
- Common issue: Missing `node_modules`. Should rebuild automatically.

---

## Local Testing Before Deploying

```bash
# Install dependencies (if not done)
npm install

# Set your API key
$env:OPENROUTER_API_KEY = "sk-or-v1-..."

# Start server
node server.js

# Visit http://localhost:3000
```

All changes to `public/index.html` will auto-refresh in the browser.

