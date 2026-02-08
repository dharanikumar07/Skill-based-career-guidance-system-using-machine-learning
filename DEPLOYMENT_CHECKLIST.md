# Deployment Checklist

Use this checklist to ensure everything is ready for deployment.

## 📋 Pre-Deployment Checklist

### Code Preparation
- [ ] Code is clean and tested locally
- [ ] All sensitive data removed (API keys, passwords)
- [ ] `.env` file added to `.gitignore`
- [ ] `.env.example` created for reference
- [ ] All features tested and working
- [ ] No hardcoded localhost URLs (except in config)
- [ ] Error handling implemented
- [ ] Code commented where necessary

### GitHub Setup
- [ ] GitHub account created
- [ ] Repository created
- [ ] Code pushed to GitHub
- [ ] README.md updated with project description
- [ ] Repository is public (for free Streamlit hosting)

### Database Preparation
- [ ] `career.sql` file ready
- [ ] Database schema tested locally
- [ ] Sample data included (optional)

---

## 🚀 Deployment Checklist

### Phase 1: Python Apps (Streamlit Cloud)
- [ ] Streamlit Cloud account created
- [ ] Course Recommender deployed
- [ ] Resume Analyzer deployed (with API key in secrets)
- [ ] Skill Recommender deployed
- [ ] All Streamlit URLs saved
- [ ] All apps tested and working

### Phase 2: PHP Website (Shared Hosting)
- [ ] Hosting account created
- [ ] Domain purchased/configured (optional)
- [ ] Files uploaded to server
- [ ] Database created in phpMyAdmin
- [ ] `career.sql` imported
- [ ] Database user created
- [ ] Database credentials updated in PHP files:
  - [ ] `authentication.php`
  - [ ] `signup.php`
  - [ ] `fp.php`
- [ ] Streamlit URLs updated in `index.php`
- [ ] SSL certificate installed
- [ ] HTTPS redirect enabled

### Phase 3: Testing
- [ ] Website loads correctly
- [ ] User registration works
- [ ] User login works
- [ ] Resume Builder works
- [ ] Course Recommender link works
- [ ] Resume Analyzer link works
- [ ] Skill Recommender link works
- [ ] All Streamlit apps accessible
- [ ] Database operations working
- [ ] No errors in browser console
- [ ] Mobile responsive (test on phone)

### Phase 4: Security
- [ ] API keys in environment variables/secrets
- [ ] Database credentials secure
- [ ] HTTPS enabled
- [ ] `.env` file not in repository
- [ ] Strong database passwords used
- [ ] Error messages don't expose sensitive info

---

## 📝 Post-Deployment Checklist

### Documentation
- [ ] README.md updated with live URLs
- [ ] Screenshots added to README
- [ ] Project description written
- [ ] Technologies listed
- [ ] Features documented

### Portfolio Preparation
- [ ] Project added to portfolio
- [ ] Live demo link added
- [ ] GitHub link added
- [ ] Project description written
- [ ] Technologies highlighted
- [ ] Screenshots/video prepared

### Monitoring
- [ ] Website bookmarked
- [ ] Streamlit apps bookmarked
- [ ] Regular checks scheduled
- [ ] Backup plan in place

---

## 🔧 Configuration Files to Update

### Files that need updating before deployment:

1. **`authentication.php`** (Line 6)
   ```php
   $con=mysqli_connect("localhost","username","password","career");
   ```

2. **`signup.php`** (Line 40)
   ```php
   $con=mysqli_connect("localhost","username","password","career");
   ```

3. **`fp.php`** (Line 35)
   ```php
   $con=mysqli_connect("localhost","username","password","career");
   ```

4. **`index.php`** (Lines 72-73)
   ```php
   <a href="YOUR_STREAMLIT_URL_1" class="nav-item nav-link">Course Recommender</a>
   <a href="YOUR_STREAMLIT_URL_2" class="nav-item nav-link">Resume Analyser</a>
   <a href="YOUR_STREAMLIT_URL_3" class="nav-item nav-link">Skill Recommender</a>
   ```

5. **`module_3/ats.py`** (Already updated to support Streamlit secrets)

---

## 🎯 Quick Deployment Commands

### Push to GitHub:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Test Locally First:
```bash
# PHP
php -S localhost:8000

# Streamlit apps
cd module_2 && streamlit run cc.py
cd module_3 && streamlit run ats.py
cd module_4 && streamlit run app1.py
```

---

## ✅ Final Verification

Before sharing your project:

- [ ] Everything works end-to-end
- [ ] No broken links
- [ ] Professional appearance
- [ ] Contact info updated
- [ ] Ready to share with others

**You're ready to showcase! 🎉**
