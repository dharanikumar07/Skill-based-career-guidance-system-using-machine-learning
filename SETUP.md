# Setup Guide - Skill-based Career Guidance System

## Project Overview

This is a **Skill-based Career Guidance System** that combines:
- **PHP Web Portal** (Main website with authentication)
- **Python Streamlit Apps** (ML modules for recommendations and analysis)
- **MySQL Database** (User data and feedback)

### Features:
1. **Resume Builder** - Create professional resumes
2. **Course Recommender** - Get course recommendations based on skills
3. **Skill Recommender** - Get skill recommendations for job titles
4. **Resume Analyzer (ATS)** - Analyze resume against job descriptions using AI

---

## Prerequisites

### Required Software:
1. **PHP 7.4+** (or XAMPP/MAMP)
2. **MySQL 5.7+** (or MariaDB)
3. **Python 3.8+**
4. **Composer** (optional, for PHP dependencies)
5. **Google Gemini API Key** (for Resume Analyzer module)

---

## Step 1: Database Setup

1. **Start MySQL Server**
   ```bash
   # On Mac (if using Homebrew)
   brew services start mysql
   
   # On Windows (using XAMPP)
   # Start MySQL from XAMPP Control Panel
   ```

2. **Create Database**
   ```bash
   mysql -u root -p
   ```
   Then run:
   ```sql
   CREATE DATABASE career;
   USE career;
   SOURCE /path/to/your/project/career.sql;
   ```

   Or import via phpMyAdmin:
   - Open phpMyAdmin (http://localhost/phpmyadmin)
   - Create database named `career`
   - Import `career.sql` file

3. **Update Database Credentials**
   
   Update these files with your MySQL credentials:
   - `authentication.php` (line 6)
   - `signup.php` (line 40)
   - `fp.php` (line 35)
   
   Change from:
   ```php
   mysqli_connect("localhost:3306","root","","career")
   ```
   To your credentials:
   ```php
   mysqli_connect("localhost:3306","your_username","your_password","career")
   ```

---

## Step 2: PHP Web Portal Setup

### Option A: Using Built-in PHP Server (Mac/Linux)

1. **Navigate to project directory**
   ```bash
   cd /path/to/Skill-based-career-guidance-system-using-machine-learning
   ```

2. **Start PHP Server**
   ```bash
   php -S localhost:8000
   ```

3. **Access the website**
   - Open browser: `http://localhost:8000`

### Option B: Using XAMPP (Windows/Mac/Linux)

1. **Install XAMPP** from https://www.apachefriends.org/

2. **Copy project folder**
   - Windows: `C:\xampp\htdocs\career-guidance`
   - Mac/Linux: `/Applications/XAMPP/htdocs/career-guidance`

3. **Start Apache and MySQL** from XAMPP Control Panel

4. **Access the website**
   - Open browser: `http://localhost/career-guidance`

### Option C: Using MAMP (Mac)

1. **Install MAMP** from https://www.mamp.info/

2. **Copy project to** `/Applications/MAMP/htdocs/career-guidance`

3. **Start MAMP servers**

4. **Access**: `http://localhost:8888/career-guidance`

---

## Step 3: Python Environment Setup

### Install Python Dependencies

1. **Create virtual environment** (recommended)
   ```bash
   python3 -m venv venv
   
   # Activate virtual environment
   # On Mac/Linux:
   source venv/bin/activate
   # On Windows:
   venv\Scripts\activate
   ```

2. **Install required packages**
   ```bash
   pip install streamlit pandas scikit-learn google-generativeai PyPDF2 python-dotenv
   ```

   Or use the requirements file:
   ```bash
   pip install -r requirements.txt
   ```

---

## Step 4: Configure Google Gemini API

1. **Get API Key**
   - Visit: https://makersuite.google.com/app/apikey
   - Create a new API key

2. **Update .env file**
   - Edit `module_3/.env`
   - Replace with your API key:
     ```
     GOOGLE_API_KEY=your_actual_api_key_here
     ```

   **⚠️ IMPORTANT**: Never commit your API key to Git! The current `.env` file has an exposed key - regenerate it.

---

## Step 5: Run Python Streamlit Apps

### Module 2: Course Recommender
```bash
cd module_2
streamlit run cc.py
```
Access at: `http://localhost:8501`

### Module 3: Resume Analyzer (ATS)
```bash
cd module_3
streamlit run ats.py
```
Access at: `http://localhost:8502` (if 8501 is busy)

### Module 4: Skill Recommender
```bash
cd module_4
streamlit run app1.py
```
Access at: `http://localhost:8503` (if other ports are busy)

**Note**: You can run multiple Streamlit apps by specifying different ports:
```bash
streamlit run app.py --server.port 8502
```

---

## Step 6: Update PHP Links to Streamlit Apps

The `index.php` file has hardcoded localhost links. Update them:

1. **Edit `index.php`** (lines 72-73)
   
   Change:
   ```php
   <a href="http://localhost:8501" class="nav-item nav-link">Recommender</a>
   <a href="http://localhost:8501" class="nav-item nav-link">Resume Analyser</a>
   ```
   
   To match your actual Streamlit ports:
   ```php
   <a href="http://localhost:8501" class="nav-item nav-link">Course Recommender</a>
   <a href="http://localhost:8502" class="nav-item nav-link">Resume Analyser</a>
   <a href="http://localhost:8503" class="nav-item nav-link">Skill Recommender</a>
   ```

---

## Step 7: Test the Application

1. **Access Main Website**: `http://localhost:8000`
2. **Create Account**: Click "Signup" and register
3. **Login**: Use your credentials
4. **Test Features**:
   - Resume Builder: `http://localhost:8000/module_1/index.php`
   - Course Recommender: `http://localhost:8501`
   - Resume Analyzer: `http://localhost:8502`
   - Skill Recommender: `http://localhost:8503`

---

## Troubleshooting

### Database Connection Issues
- Check MySQL is running: `mysql -u root -p`
- Verify database exists: `SHOW DATABASES;`
- Check credentials in PHP files

### Streamlit Not Starting
- Check Python version: `python3 --version` (need 3.8+)
- Verify packages installed: `pip list`
- Check port availability: `lsof -i :8501`

### PHP Errors
- Check PHP version: `php -v`
- Enable error display in `php.ini`:
  ```ini
  display_errors = On
  error_reporting = E_ALL
  ```

### Module 3 (ATS) Not Working
- Verify `.env` file exists in `module_3/`
- Check API key is valid
- Ensure `python-dotenv` is installed

---

## Project Structure

```
├── index.php                 # Main homepage
├── login.php                 # Login page
├── signup.php                # Registration page
├── authentication.php        # Login handler
├── career.sql                # Database schema
├── module_1/                 # Resume Builder (PHP)
│   ├── index.php
│   └── submit.php
├── module_2/                 # Course Recommender (Streamlit)
│   ├── cc.py
│   └── data/
├── module_3/                 # Resume Analyzer/ATS (Streamlit)
│   ├── ats.py
│   └── .env
└── module_4/                 # Skill Recommender (Streamlit)
    ├── app1.py
    └── j.csv
```

---

## Next Steps

Once everything is running locally, see `HOSTING.md` for deployment options.
