# Deployment Guide

Complete guide to deploy the Career Guidance System.

## 🎯 Overview

This project has two parts:
1. **Frontend** (React) - Deploy to Vercel
2. **Python Apps** (Streamlit) - Deploy to Streamlit Cloud

Both are **FREE** to deploy!

---

## 📱 Part 1: Deploy Frontend to Vercel

### Prerequisites
- GitHub account
- Code pushed to GitHub repository

### Step-by-Step

#### Step 1: Push Code to GitHub

```bash
cd frontend
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### Step 2: Deploy to Vercel

1. **Go to Vercel**: https://vercel.com
2. **Sign up/Login** with GitHub
3. **Click "Add New Project"**
4. **Import** your GitHub repository
5. **Configure**:
   - **Root Directory**: `frontend`
   - **Framework Preset**: Vite (auto-detected)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. **Click "Deploy"**
7. **Wait 2-3 minutes**
8. **Your site is live!** 🎉

#### Step 3: Configure Contact Form

1. **Get Web3Forms Access Key**:
   - Go to: https://web3forms.com/
   - Enter your email: `dharaniraja2004@gmail.com`
   - When asked "Where do you plan to add this form?", enter your Vercel domain
   - Copy the access key

2. **Update Code**:
   - Open `frontend/src/pages/Contact.jsx`
   - Find: `const ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE'`
   - Replace with your access key
   - Push to GitHub (Vercel will auto-deploy)

**That's it!** Your frontend is deployed and contact form works!

---

## 🐍 Part 2: Deploy Python Apps to Streamlit Cloud

### Prerequisites
- GitHub account
- Code pushed to GitHub repository
- Google Gemini API key (for Resume Analyzer)

### Step-by-Step

#### Step 1: Push Code to GitHub

Make sure all Python files are in your repository:
- `module_2/cc.py`
- `module_3/ats.py`
- `module_4/app1.py`

```bash
git add .
git commit -m "Add Python modules"
git push origin main
```

#### Step 2: Deploy Course Recommender

1. **Go to Streamlit Cloud**: https://share.streamlit.io/
2. **Sign in** with GitHub
3. **Click "New app"**
4. **Configure**:
   - **Repository**: Select your repository
   - **Branch**: `main`
   - **Main file path**: `module_2/cc.py`
   - **App URL**: Choose a name (e.g., `career-course-recommender`)
5. **Click "Deploy"**
6. **Wait 2-3 minutes**
7. **Copy the URL** (e.g., `https://career-course-recommender.streamlit.app`)

#### Step 3: Deploy Skill Recommender

1. **Click "New app"** again
2. **Configure**:
   - **Repository**: Same repository
   - **Branch**: `main`
   - **Main file path**: `module_4/app1.py`
   - **App URL**: `career-skill-recommender`
3. **Click "Deploy"**
4. **Copy the URL**

#### Step 4: Deploy Resume Analyzer (ATS)

1. **Click "New app"** again
2. **Configure**:
   - **Repository**: Same repository
   - **Branch**: `main`
   - **Main file path**: `module_3/ats.py`
   - **App URL**: `career-resume-analyzer`
3. **Add Environment Variable**:
   - Go to **"Settings"** → **"Secrets"**
   - Add secret:
     - **Key**: `GOOGLE_API_KEY`
     - **Value**: Your Google Gemini API key
4. **Click "Deploy"**
5. **Copy the URL**

#### Step 5: Update Frontend Links

1. **Open** `frontend/src/components/Features.jsx`
2. **Update Streamlit URLs** with your deployed URLs:
   ```javascript
   link: "https://your-course-recommender.streamlit.app/"
   link: "https://your-skill-recommender.streamlit.app/"
   link: "https://your-resume-analyzer.streamlit.app/"
   ```
3. **Push to GitHub** (Vercel will auto-update)

---

## 🔑 Getting Google Gemini API Key

For Resume Analyzer (module_3):

1. **Go to**: https://makersuite.google.com/app/apikey
2. **Sign in** with Google
3. **Click "Create API Key"**
4. **Copy the key**
5. **Add to Streamlit Cloud** secrets (as shown in Step 4 above)

---

## ✅ Deployment Checklist

### Frontend (Vercel)
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported and deployed
- [ ] Web3Forms access key obtained
- [ ] Contact form configured
- [ ] Site is live and working

### Python Apps (Streamlit Cloud)
- [ ] Code pushed to GitHub
- [ ] Streamlit Cloud account created
- [ ] Course Recommender deployed
- [ ] Skill Recommender deployed
- [ ] Resume Analyzer deployed (with API key)
- [ ] All Streamlit URLs copied
- [ ] Frontend links updated

---

## 🌐 Live URLs

- **Frontend**: https://skill-based-career-guidance-system.vercel.app/
- **Course Recommender**: https://skill-based-career-guidance-system-using-machine-learning-qyhe.streamlit.app/
- **Skill Recommender**: https://skill-based-career-guidance-system-using-machine-learning-wrlk.streamlit.app/
- **Resume Analyzer**: https://skill-based-career-guidance-system-using-machine-learning-9uax.streamlit.app/

---

## 🐛 Troubleshooting

### Vercel Deployment Issues

**Build fails?**
- Check Node.js version (need 18+)
- Verify `package.json` is correct
- Check build logs in Vercel dashboard

**Contact form not working?**
- Verify Web3Forms access key is correct
- Check browser console for errors
- Make sure access key matches your domain

### Streamlit Deployment Issues

**App not loading?**
- Check main file path is correct
- Verify Python dependencies in `requirements.txt`
- Check Streamlit Cloud logs

**Resume Analyzer not working?**
- Verify `GOOGLE_API_KEY` is set in secrets
- Check API key is valid
- Review Streamlit Cloud logs

**Module not found errors?**
- Ensure all data files are in repository
- Check file paths in code
- Verify CSV files are uploaded

---

## 💰 Cost

- **Vercel**: FREE (unlimited deployments)
- **Streamlit Cloud**: FREE (unlimited apps)
- **Web3Forms**: FREE (unlimited submissions)
- **Google Gemini API**: FREE tier available

**Total Cost: $0** 🎉

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Streamlit Cloud Docs**: https://docs.streamlit.io/streamlit-community-cloud
- **Web3Forms Docs**: https://docs.web3forms.com/

---

## 🎉 Success!

Once deployed, your Career Guidance System will be:
- ✅ Live and accessible worldwide
- ✅ Fully functional
- ✅ Ready to showcase
- ✅ Completely FREE

**Happy deploying! 🚀**
