# Complete Showcase Guide - Step by Step

## 🎯 Goal: Showcase Your Project Professionally

This guide will help you deploy your project so you can:
- ✅ Share it with employers/recruiters
- ✅ Add it to your portfolio
- ✅ Demonstrate your skills live
- ✅ Get feedback from others

---

## 📊 Platform Comparison for Showcasing

| Platform | Best For | Cost | Setup Time | Difficulty | Recommendation |
|----------|----------|------|-------------|------------|----------------|
| **Streamlit Cloud + Shared Hosting** | Portfolio/Showcase | $3-5/month | 30 min | ⭐ Easy | ⭐⭐⭐⭐⭐ **BEST** |
| **Railway** | Quick Demo | $5/month | 20 min | ⭐ Easy | ⭐⭐⭐⭐ Great |
| **Render** | Free Option | Free-$7/month | 25 min | ⭐ Easy | ⭐⭐⭐⭐ Great |
| **Heroku** | Professional | $7-25/month | 45 min | ⭐⭐ Medium | ⭐⭐⭐ Good |
| **DigitalOcean** | Full Control | $6-12/month | 60 min | ⭐⭐⭐ Hard | ⭐⭐ Advanced |

---

## 🏆 RECOMMENDED: Streamlit Cloud + Shared Hosting

**Why this is best for showcasing:**
- ✅ **Free** Python apps hosting (Streamlit Cloud)
- ✅ **Cheap** PHP hosting ($3/month)
- ✅ **Easy** setup (30 minutes)
- ✅ **Professional** URLs
- ✅ **Reliable** and stable
- ✅ **Perfect** for portfolios

**Total Cost**: ~$3-5/month (or FREE if you use free hosting)

---

## 📋 STEP-BY-STEP DEPLOYMENT GUIDE

### Phase 1: Preparation (15 minutes)

#### Step 1.1: Clean Up Your Code

1. **Remove sensitive data**
   ```bash
   # Check for any hardcoded passwords or API keys
   grep -r "password\|api_key\|secret" . --exclude-dir=node_modules
   ```

2. **Update database credentials** (use environment variables or config file)
   - Don't hardcode credentials
   - Use a config file that won't be committed

3. **Test everything locally first**
   - Make sure all features work
   - Fix any bugs before deploying

#### Step 1.2: Prepare GitHub Repository

1. **Create GitHub account** (if you don't have one)
   - Go to: https://github.com
   - Sign up for free account

2. **Initialize Git** (if not already done)
   ```bash
   cd /path/to/your/project
   git init
   git add .
   git commit -m "Initial commit - Career Guidance System"
   ```

3. **Create GitHub repository**
   - Go to GitHub → New Repository
   - Name: `career-guidance-system` (or your choice)
   - Description: "Skill-based Career Guidance System using Machine Learning"
   - Make it **Public** (for free Streamlit hosting)
   - Don't initialize with README (you already have one)

4. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/career-guidance-system.git
   git branch -M main
   git push -u origin main
   ```

**✅ Checkpoint**: Your code is now on GitHub!

---

### Phase 2: Deploy Python Apps (15 minutes)

#### Step 2.1: Deploy Course Recommender (Module 2)

1. **Go to Streamlit Cloud**
   - Visit: https://share.streamlit.io/
   - Sign in with GitHub

2. **Create New App**
   - Click "New app"
   - Repository: Select your `career-guidance-system` repo
   - Branch: `main`
   - Main file path: `module_2/cc.py`
   - App URL: Choose a name like `career-course-recommender`

3. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for deployment
   - **Copy the URL**: `https://career-course-recommender.streamlit.app`

**✅ Checkpoint**: Course Recommender is live!

#### Step 2.2: Deploy Resume Analyzer (Module 3)

1. **Create Another App**
   - Click "New app" again
   - Repository: Same repo
   - Branch: `main`
   - Main file path: `module_3/ats.py`
   - App URL: `career-resume-analyzer`

2. **Add Environment Variable**
   - Go to "Settings" → "Secrets"
   - Add secret:
     - Key: `GOOGLE_API_KEY`
     - Value: Your actual API key (get from https://makersuite.google.com/app/apikey)

3. **Update Code for Environment Variable**
   
   Edit `module_3/ats.py` to use Streamlit secrets:
   
   Change this:
   ```python
   from dotenv import load_dotenv
   load_dotenv()
   genai.configure(api_key = os.getenv('GOOGLE_API_KEY'))
   ```
   
   To this:
   ```python
   import streamlit as st
   # Try to get from Streamlit secrets first, then fallback to .env
   api_key = st.secrets.get('GOOGLE_API_KEY') or os.getenv('GOOGLE_API_KEY')
   genai.configure(api_key=api_key)
   ```

4. **Deploy**
   - Click "Deploy"
   - **Copy the URL**: `https://career-resume-analyzer.streamlit.app`

**✅ Checkpoint**: Resume Analyzer is live!

#### Step 2.3: Deploy Skill Recommender (Module 4)

1. **Create Third App**
   - Click "New app"
   - Repository: Same repo
   - Branch: `main`
   - Main file path: `module_4/app1.py`
   - App URL: `career-skill-recommender`

2. **Deploy**
   - Click "Deploy"
   - **Copy the URL**: `https://career-skill-recommender.streamlit.app`

**✅ Checkpoint**: All Python apps are live!

**📝 Save these URLs** - You'll need them in Phase 3:
- Course Recommender: `https://career-course-recommender.streamlit.app`
- Resume Analyzer: `https://career-resume-analyzer.streamlit.app`
- Skill Recommender: `https://career-skill-recommender.streamlit.app`

---

### Phase 3: Deploy PHP Website (20 minutes)

#### Step 3.1: Choose Shared Hosting Provider

**Recommended Options:**

1. **Hostinger** (Best Value)
   - Price: $2.99/month (first year)
   - Features: PHP 8.x, MySQL, Free SSL, cPanel
   - Link: https://www.hostinger.com

2. **Bluehost** (Popular)
   - Price: $2.95/month (first year)
   - Features: PHP, MySQL, Free SSL
   - Link: https://www.bluehost.com

3. **000webhost** (FREE Option)
   - Price: FREE
   - Features: PHP, MySQL (limited)
   - Link: https://www.000webhost.com
   - ⚠️ Note: May have ads, slower performance

**Recommendation**: Start with **Hostinger** ($2.99/month) for professional showcase.

#### Step 3.2: Sign Up and Setup Hosting

1. **Sign up** for hosting account
2. **Choose plan**: Basic/Starter plan is enough
3. **Complete payment** (if paid hosting)
4. **Access cPanel** (control panel)

#### Step 3.3: Upload Files

**Option A: Using cPanel File Manager**

1. **Login to cPanel**
2. **Open File Manager**
3. **Go to `public_html` folder**
4. **Upload all project files**:
   - Select all files (except `.git`, `__pycache__`, `.env`)
   - Upload to `public_html/`

**Option B: Using FTP (FileZilla)**

1. **Download FileZilla**: https://filezilla-project.org
2. **Get FTP credentials** from cPanel:
   - FTP Host: `ftp.yourdomain.com` or IP address
   - Username: (from cPanel)
   - Password: (from cPanel)
3. **Connect** to server
4. **Upload files** to `public_html/`

#### Step 3.4: Setup Database

1. **Open phpMyAdmin** from cPanel
2. **Create Database**:
   - Click "New" → Database name: `career` → Create
3. **Import SQL**:
   - Select `career` database
   - Click "Import"
   - Choose `career.sql` file
   - Click "Go"

4. **Create Database User** (for security):
   - In cPanel → MySQL Databases
   - Create new user: `career_user`
   - Create password (save it!)
   - Add user to `career` database with ALL privileges

#### Step 3.5: Update Database Configuration

**Update these files** with your hosting database credentials:

1. **Edit `authentication.php`** (line 6):
   ```php
   // OLD:
   $con=mysqli_connect("localhost:3306","root","","career");
   
   // NEW (use your hosting credentials):
   $con=mysqli_connect("localhost","career_user","your_password","career");
   ```

2. **Edit `signup.php`** (line 40):
   ```php
   $con=mysqli_connect("localhost","career_user","your_password","career");
   ```

3. **Edit `fp.php`** (line 35):
   ```php
   $con=mysqli_connect("localhost","career_user","your_password","career");
   ```

**Note**: Your hosting provider will give you the exact database host (usually `localhost`)

#### Step 3.6: Update Streamlit URLs

**Edit `index.php`** to link to your Streamlit apps:

Find these lines (around line 72-73):
```php
<a href="http://localhost:8501" class="nav-item nav-link">Recommender</a>
<a href="http://localhost:8501" class="nav-item nav-link">Resume Analyser</a>
```

Replace with your Streamlit URLs:
```php
<a href="https://career-course-recommender.streamlit.app" class="nav-item nav-link">Course Recommender</a>
<a href="https://career-resume-analyzer.streamlit.app" class="nav-item nav-link">Resume Analyser</a>
<a href="https://career-skill-recommender.streamlit.app" class="nav-item nav-link">Skill Recommender</a>
```

#### Step 3.7: Setup Domain (Optional but Recommended)

1. **Buy Domain** (if you don't have one):
   - Namecheap: $8-12/year
   - Google Domains: $12/year
   - Or use hosting provider's free subdomain

2. **Connect Domain**:
   - In cPanel → Domains
   - Add your domain
   - Update DNS settings (hosting provider will guide you)

3. **Enable SSL** (Free with Let's Encrypt):
   - In cPanel → SSL/TLS
   - Install Let's Encrypt certificate
   - Force HTTPS redirect

**✅ Checkpoint**: PHP website is live!

---

### Phase 4: Final Touches (10 minutes)

#### Step 4.1: Test Everything

1. **Visit your website**: `http://yourdomain.com` or `http://your-ip-address`
2. **Test all features**:
   - ✅ Sign up / Login
   - ✅ Resume Builder
   - ✅ Course Recommender (opens Streamlit app)
   - ✅ Resume Analyzer (opens Streamlit app)
   - ✅ Skill Recommender (opens Streamlit app)

#### Step 4.2: Fix Any Issues

**Common Issues:**

1. **Database connection error**:
   - Check credentials are correct
   - Verify database exists
   - Check user has permissions

2. **Streamlit links not working**:
   - Verify URLs are correct
   - Check Streamlit apps are deployed
   - Test URLs directly in browser

3. **PHP errors**:
   - Check PHP version (need 7.4+)
   - Enable error display temporarily to debug
   - Check file permissions

#### Step 4.3: Make It Look Professional

1. **Update Contact Info**:
   - Edit `index.php` footer
   - Add your LinkedIn, GitHub links
   - Update email

2. **Add Project Description**:
   - Update README on GitHub
   - Add screenshots
   - Add demo video link (optional)

3. **Create Portfolio Page** (Optional):
   - Add a "About This Project" section
   - Explain technologies used
   - Add GitHub link

---

## 🎨 Making It Portfolio-Ready

### Add to Your Portfolio:

1. **Create Portfolio Section**:
   ```
   Project Name: Skill-based Career Guidance System
   Technologies: PHP, Python, Streamlit, MySQL, Machine Learning
   Live Demo: [Your Website URL]
   GitHub: [Your GitHub Repo URL]
   Features:
   - Resume Builder
   - AI-powered Course Recommendations
   - Resume Analyzer using Google Gemini AI
   - Skill Recommendations for Job Titles
   ```

2. **Add Screenshots**:
   - Take screenshots of each feature
   - Add to GitHub README
   - Use in your portfolio

3. **Write Project Description**:
   - What problem it solves
   - How it works
   - Technologies used
   - Your role/contributions

---

## 📱 Alternative: FREE Showcase Option

If you want to showcase for **FREE**:

### Option: 000webhost + Streamlit Cloud

1. **PHP Website**: Use 000webhost (FREE)
   - Sign up: https://www.000webhost.com
   - Upload files
   - Setup database
   - ⚠️ May have ads, slower

2. **Python Apps**: Streamlit Cloud (FREE)
   - Already covered above

**Total Cost**: $0/month

**Trade-offs**: 
- Slower performance
- May have ads
- Less professional
- Good for testing/showcasing to friends

---

## ✅ Deployment Checklist

Before showcasing, ensure:

- [ ] All code pushed to GitHub
- [ ] Database setup and tested
- [ ] All Streamlit apps deployed
- [ ] PHP website deployed
- [ ] Database credentials updated
- [ ] Streamlit URLs updated in PHP
- [ ] All features tested
- [ ] SSL certificate installed (HTTPS)
- [ ] Domain connected (optional)
- [ ] Contact info updated
- [ ] README updated with live links
- [ ] Screenshots taken
- [ ] Portfolio description written

---

## 🚀 Quick Reference

### Your Deployment URLs:
- **Main Website**: `https://yourdomain.com`
- **Course Recommender**: `https://career-course-recommender.streamlit.app`
- **Resume Analyzer**: `https://career-resume-analyzer.streamlit.app`
- **Skill Recommender**: `https://career-skill-recommender.streamlit.app`

### Cost Breakdown:
- **Streamlit Cloud**: FREE
- **Shared Hosting**: $3-5/month
- **Domain**: $10-12/year (optional)
- **Total**: ~$3-5/month

---

## 🎯 Next Steps After Deployment

1. **Share Your Project**:
   - Add to LinkedIn
   - Share on GitHub
   - Add to portfolio website
   - Share with potential employers

2. **Get Feedback**:
   - Ask friends to test it
   - Get feedback on UX
   - Improve based on suggestions

3. **Keep It Updated**:
   - Fix bugs as they appear
   - Add new features
   - Keep dependencies updated

---

## 📞 Need Help?

If you get stuck:
1. Check hosting provider's documentation
2. Streamlit Cloud docs: https://docs.streamlit.io/streamlit-community-cloud
3. Check error logs in cPanel
4. Test each component separately

---

## 🎉 Congratulations!

Once deployed, you'll have:
- ✅ Live, working project
- ✅ Professional showcase
- ✅ Something to show employers
- ✅ Real-world deployment experience

**You're ready to showcase your skills!** 🚀
