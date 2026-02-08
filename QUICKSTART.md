# Quick Start Guide

Get your Career Guidance System running in 5 minutes!

## ⚡ Fast Setup

### 1. Database (2 minutes)

```bash
# Start MySQL
mysql -u root -p

# In MySQL prompt:
CREATE DATABASE career;
USE career;
SOURCE /full/path/to/career.sql;
EXIT;
```

**Or use phpMyAdmin:**
- Go to http://localhost/phpmyadmin
- Create database `career`
- Import `career.sql`

### 2. PHP Website (1 minute)

```bash
# Navigate to project folder
cd /path/to/Skill-based-career-guidance-system-using-machine-learning

# Start PHP server
php -S localhost:8000
```

✅ **Website running at**: http://localhost:8000

### 3. Python Apps (2 minutes)

```bash
# Install dependencies (one time)
pip install streamlit pandas scikit-learn google-generativeai PyPDF2 python-dotenv

# Terminal 1 - Course Recommender
cd module_2
streamlit run cc.py

# Terminal 2 - Resume Analyzer
cd module_3
streamlit run ats.py

# Terminal 3 - Skill Recommender  
cd module_4
streamlit run app1.py
```

✅ **Apps running at**:
- Course Recommender: http://localhost:8501
- Resume Analyzer: http://localhost:8502
- Skill Recommender: http://localhost:8503

### 4. Configure API Key

Edit `module_3/.env`:
```
GOOGLE_API_KEY=your_api_key_here
```

Get API key from: https://makersuite.google.com/app/apikey

---

## 🎯 Test It Out

1. **Visit**: http://localhost:8000
2. **Sign Up**: Create an account
3. **Login**: Use your credentials
4. **Try Features**:
   - Build a resume
   - Get course recommendations
   - Analyze your resume
   - Get skill recommendations

---

## 🚨 Common Issues

**Port already in use?**
```bash
# Use different port
streamlit run cc.py --server.port 8502
```

**Database connection failed?**
- Check MySQL is running
- Verify credentials in PHP files
- Ensure database `career` exists

**Python modules not found?**
```bash
pip install -r requirements.txt
```

---

## 📖 Need More Help?

- **Detailed Setup**: See [SETUP.md](SETUP.md)
- **Hosting Guide**: See [HOSTING.md](HOSTING.md)

---

## 🚀 Ready to Deploy?

Check out [HOSTING.md](HOSTING.md) for production deployment options!
