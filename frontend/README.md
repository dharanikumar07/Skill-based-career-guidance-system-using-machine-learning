# Career Guidance System - Frontend

Modern React frontend for the Skill-based Career Guidance System.

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Web3Forms** - Contact form (FREE, unlimited)

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ResumeBuilder.jsx
│   │   └── Contact.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
├── vercel.json
└── DEPLOYMENT.md
```

## 🌐 Deployment

See `DEPLOYMENT.md` for complete deployment instructions to Vercel.

## 📝 Contact Form Setup

The contact form uses **Web3Forms** (FREE, unlimited submissions).

**Quick Setup:**
1. Go to: https://web3forms.com/
2. Enter your email
3. Enter your domain (or `localhost` for testing)
4. Get access key
5. Update `src/pages/Contact.jsx` - replace `YOUR_ACCESS_KEY_HERE` with your key

## ✨ Features

- ✅ Responsive design
- ✅ Dark/Light mode toggle
- ✅ Resume Builder with date pickers
- ✅ Contact form with Web3Forms
- ✅ Links to Streamlit apps
- ✅ Smooth animations
- ✅ Mobile-friendly

## 📄 License

MIT
