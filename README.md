# Skill-based Career Guidance System

A comprehensive web application that helps users identify required skills, get course recommendations, build resumes, and analyze resume compatibility with job descriptions using AI.

## 🎯 Features

- **Resume Builder** - Create professional resumes quickly and efficiently
- **Course Recommender** - Get personalized course recommendations based on skills (Streamlit)
- **Skill Recommender** - Discover required skills for specific job titles (Streamlit)
- **Resume Analyzer (ATS)** - Analyze your resume against job descriptions using AI (Streamlit)

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Web3Forms** - Contact form (FREE, unlimited)

### Backend/ML
- **Python 3.8+** - Programming language
- **Streamlit** - Web app framework
- **scikit-learn** - Machine learning
- **pandas** - Data manipulation
- **Google Gemini AI** - Resume analysis

## 📁 Project Structure

```
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/          # Page components
│   │   └── context/        # Theme context
│   └── package.json
│
├── module_2/                # Course Recommender (Streamlit)
│   ├── cc.py
│   └── data/
│
├── module_3/                # Resume Analyzer/ATS (Streamlit)
│   ├── ats.py
│   └── .env.example
│
└── module_4/                # Skill Recommender (Streamlit)
    ├── app1.py
    └── j.csv
```

## 🚀 Quick Start

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Visit: `http://localhost:5173`

### Python/Streamlit Setup

```bash
# Install dependencies
pip install -r requirements.txt

# Run Course Recommender
cd module_2
streamlit run cc.py

# Run Resume Analyzer (in new terminal)
cd module_3
streamlit run ats.py

# Run Skill Recommender (in new terminal)
cd module_4
streamlit run app1.py
```

## 📝 Requirements

### Frontend
- Node.js 18+
- npm or yarn

### Python
- Python 3.8+
- See `requirements.txt` for Python packages

## 🌐 Live URLs

- **Frontend**: https://skill-based-career-guidance-system.vercel.app/
- **Course Recommender**: https://skill-based-career-guidance-system-using-machine-learning-qyhe.streamlit.app/
- **Skill Recommender**: https://skill-based-career-guidance-system-using-machine-learning-wrlk.streamlit.app/
- **Resume Analyzer**: https://skill-based-career-guidance-system-using-machine-learning-9uax.streamlit.app/

## 📚 Documentation

- **Deployment Guide**: See `frontend/DEPLOYMENT.md` for deployment instructions

## 👤 Contact

- **Email**: dharaniraja2004@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/dharanikumar-r07/
- **Twitter/X**: https://x.com/dharanikumar_07
- **Portfolio**: https://dharanikumar.vercel.app/

## 📄 License

This project is open source and available for educational purposes.
