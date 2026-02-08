# Hosting Guide - Skill-based Career Guidance System

## Hosting Overview

This project requires hosting for:
1. **PHP Web Application** (Main website)
2. **Python Streamlit Apps** (ML modules)
3. **MySQL Database**

---

## Recommended Hosting Platforms

### Option 1: Separate Hosting (Recommended for Production)

#### PHP Website Hosting:
- **Shared Hosting**: Hostinger, Bluehost, SiteGround
- **VPS**: DigitalOcean, Linode, Vultr
- **Cloud**: AWS EC2, Google Cloud Platform, Azure

#### Python/Streamlit Hosting:
- **Streamlit Cloud** (Free tier available): https://streamlit.io/cloud
- **Heroku** (Paid): https://www.heroku.com/
- **Railway**: https://railway.app/
- **Render**: https://render.com/
- **AWS EC2**: Full control
- **Google Cloud Run**: Serverless containers

#### Database Hosting:
- **MySQL Hosting**: Same provider as PHP (usually included)
- **Cloud Databases**: AWS RDS, Google Cloud SQL, Azure Database
- **Managed MySQL**: PlanetScale, Aiven

---

### Option 2: All-in-One Platform (Easier Setup)

#### **DigitalOcean App Platform** ⭐ Recommended
- **Pros**: Supports PHP, Python, MySQL all in one
- **Cost**: ~$12-25/month
- **Setup**: Deploy from GitHub
- **Link**: https://www.digitalocean.com/products/app-platform

#### **AWS Elastic Beanstalk**
- **Pros**: Scalable, integrates with AWS services
- **Cost**: Pay for resources used
- **Setup**: More complex but powerful

#### **Google Cloud Platform**
- **Pros**: App Engine for PHP, Cloud Run for Python
- **Cost**: Pay-as-you-go
- **Setup**: Moderate complexity

---

## Detailed Hosting Instructions

### 🚀 Option A: Streamlit Cloud (Easiest for Python Apps)

#### Step 1: Host Python Apps on Streamlit Cloud

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/career-guidance.git
   git push -u origin main
   ```

2. **Deploy to Streamlit Cloud**
   - Go to: https://share.streamlit.io/
   - Sign in with GitHub
   - Click "New app"
   - Select repository and branch
   - For each module:
     - **Module 2**: Main file: `module_2/cc.py`
     - **Module 3**: Main file: `module_3/ats.py`
     - **Module 4**: Main file: `module_4/app1.py`
   - Add environment variables for Module 3:
     - Key: `GOOGLE_API_KEY`
     - Value: Your API key

3. **Get Streamlit URLs**
   - Each app gets a URL like: `https://your-app.streamlit.app`
   - Update these URLs in your PHP `index.php`

#### Step 2: Host PHP Website

**Using Shared Hosting (e.g., Hostinger):**

1. **Upload files via FTP**
   - Use FileZilla or cPanel File Manager
   - Upload all PHP files to `public_html/`

2. **Import Database**
   - Access phpMyAdmin from cPanel
   - Create database `career`
   - Import `career.sql`

3. **Update Database Config**
   - Edit `authentication.php`, `signup.php`, `fp.php`
   - Use hosting provider's MySQL credentials

4. **Update Streamlit Links**
   - Edit `index.php`
   - Replace localhost URLs with Streamlit Cloud URLs

---

### 🐳 Option B: Docker Deployment (Advanced)

Create `Dockerfile` for each component:

#### PHP Dockerfile:
```dockerfile
FROM php:8.1-apache
COPY . /var/www/html/
RUN docker-php-ext-install mysqli
```

#### Streamlit Dockerfile:
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["streamlit", "run", "cc.py", "--server.port=8501", "--server.address=0.0.0.0"]
```

Deploy to:
- **Docker Hub** + **Railway/Render**
- **AWS ECS**
- **Google Cloud Run**

---

### ☁️ Option C: VPS Deployment (Full Control)

#### Recommended: DigitalOcean Droplet ($6-12/month)

1. **Create Droplet**
   - Ubuntu 22.04 LTS
   - 2GB RAM minimum

2. **Install Stack**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install PHP
   sudo apt install php php-mysql apache2 -y
   
   # Install MySQL
   sudo apt install mysql-server -y
   
   # Install Python & Streamlit
   sudo apt install python3-pip -y
   pip3 install streamlit pandas scikit-learn google-generativeai PyPDF2 python-dotenv
   ```

3. **Setup Database**
   ```bash
   sudo mysql -u root -p
   CREATE DATABASE career;
   CREATE USER 'career_user'@'localhost' IDENTIFIED BY 'secure_password';
   GRANT ALL PRIVILEGES ON career.* TO 'career_user'@'localhost';
   FLUSH PRIVILEGES;
   EXIT;
   
   mysql -u career_user -p career < career.sql
   ```

4. **Deploy PHP Files**
   ```bash
   sudo cp -r /path/to/project/* /var/www/html/
   sudo chown -R www-data:www-data /var/www/html/
   ```

5. **Setup Streamlit as Service**
   
   Create `/etc/systemd/system/streamlit-course.service`:
   ```ini
   [Unit]
   Description=Streamlit Course Recommender
   After=network.target
   
   [Service]
   Type=simple
   User=www-data
   WorkingDirectory=/var/www/html/module_2
   ExecStart=/usr/local/bin/streamlit run cc.py --server.port 8501 --server.address 0.0.0.0
   Restart=always
   
   [Install]
   WantedBy=multi-user.target
   ```
   
   Repeat for modules 3 and 4 with different ports.

6. **Start Services**
   ```bash
   sudo systemctl enable streamlit-course
   sudo systemctl start streamlit-course
   sudo systemctl restart apache2
   ```

7. **Configure Firewall**
   ```bash
   sudo ufw allow 80/tcp
   sudo ufw allow 443/tcp
   sudo ufw allow 8501/tcp
   sudo ufw allow 8502/tcp
   sudo ufw allow 8503/tcp
   sudo ufw enable
   ```

8. **Setup Nginx Reverse Proxy** (Optional but recommended)
   
   Install Nginx and configure to route:
   - `/` → Apache (PHP)
   - `/course-recommender` → Streamlit port 8501
   - `/resume-analyzer` → Streamlit port 8502
   - `/skill-recommender` → Streamlit port 8503

---

## Platform Comparison

| Platform | PHP Support | Python Support | MySQL | Cost/Month | Difficulty |
|----------|-------------|----------------|-------|------------|------------|
| **Streamlit Cloud** | ❌ | ✅ | ❌ | Free-$20 | Easy |
| **Shared Hosting** | ✅ | ❌ | ✅ | $3-10 | Easy |
| **DigitalOcean** | ✅ | ✅ | ✅ | $6-25 | Medium |
| **Heroku** | ✅ | ✅ | ✅ | $7-25 | Medium |
| **Railway** | ✅ | ✅ | ✅ | $5-20 | Easy |
| **Render** | ✅ | ✅ | ✅ | Free-$25 | Easy |
| **AWS** | ✅ | ✅ | ✅ | $10-50+ | Hard |

---

## Recommended Setup for Beginners

### **Best Combination:**

1. **PHP Website**: Shared hosting (Hostinger/Bluehost) - $3-5/month
2. **Python Apps**: Streamlit Cloud - **FREE**
3. **Database**: Included with shared hosting

**Total Cost**: ~$3-5/month

**Steps**:
1. Deploy Python apps to Streamlit Cloud (free)
2. Get Streamlit URLs
3. Host PHP site on shared hosting
4. Update PHP links to Streamlit URLs
5. Import database to shared hosting MySQL

---

## Security Considerations

### Before Going Live:

1. **Change Database Credentials**
   - Use strong passwords
   - Don't use default `root` user

2. **Secure API Keys**
   - Never commit `.env` to Git
   - Use environment variables in production

3. **Enable HTTPS**
   - Use Let's Encrypt (free SSL)
   - Configure SSL certificates

4. **Update PHP Configuration**
   - Disable error display in production
   - Set secure session settings

5. **Protect Admin Files**
   - Use `.htaccess` to restrict access
   - Implement proper authentication

---

## Cost Estimation

### Budget Option (~$5/month):
- Shared hosting: $3/month
- Streamlit Cloud: Free
- **Total**: $3/month

### Professional Option (~$25/month):
- VPS (DigitalOcean): $12/month
- Domain name: $12/year (~$1/month)
- SSL Certificate: Free (Let's Encrypt)
- **Total**: ~$13/month

### Enterprise Option (~$50+/month):
- AWS/GCP: Pay-as-you-go
- Managed database: $15-30/month
- CDN: $5-10/month
- **Total**: $50-100+/month

---

## Quick Start Checklist

- [ ] Choose hosting platform
- [ ] Push code to GitHub
- [ ] Deploy Python apps (Streamlit Cloud)
- [ ] Deploy PHP website
- [ ] Setup MySQL database
- [ ] Update database credentials
- [ ] Update Streamlit URLs in PHP
- [ ] Configure environment variables
- [ ] Setup SSL certificate
- [ ] Test all features
- [ ] Configure domain name
- [ ] Setup backups

---

## Need Help?

- **Streamlit Cloud Docs**: https://docs.streamlit.io/streamlit-community-cloud
- **PHP Deployment**: Check your hosting provider's documentation
- **Database Migration**: Use phpMyAdmin or MySQL Workbench

---

## Next Steps After Hosting

1. **Monitor Performance**: Use tools like Google Analytics
2. **Setup Backups**: Regular database backups
3. **Monitor Errors**: Check logs regularly
4. **Update Dependencies**: Keep packages updated
5. **Scale as Needed**: Upgrade resources when traffic grows
