# Configuration Template

Use this template to update your configuration files before deployment.

## 🔧 Files to Configure

### 1. Database Configuration

**File**: `authentication.php`, `signup.php`, `fp.php`

**Template**:
```php
<?php
// Database configuration
$db_host = "localhost";           // Usually "localhost" on shared hosting
$db_user = "your_db_username";     // Database username from hosting
$db_pass = "your_db_password";     // Database password from hosting
$db_name = "career";               // Database name

$con = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
```

**Where to get credentials**:
- Check your hosting provider's cPanel → MySQL Databases
- Or check welcome email from hosting provider

---

### 2. Streamlit URLs Configuration

**File**: `index.php` (around lines 72-73)

**Template**:
```php
<!-- Update these URLs with your deployed Streamlit app URLs -->
<a href="https://your-course-recommender.streamlit.app" class="nav-item nav-link">Course Recommender</a>
<a href="https://your-resume-analyzer.streamlit.app" class="nav-item nav-link">Resume Analyser</a>
<a href="https://your-skill-recommender.streamlit.app" class="nav-item nav-link">Skill Recommender</a>
```

**Your Streamlit URLs will look like**:
- `https://career-course-recommender.streamlit.app`
- `https://career-resume-analyzer.streamlit.app`
- `https://career-skill-recommender.streamlit.app`

---

### 3. Environment Variables

#### For Local Development

**File**: `module_3/.env`
```
GOOGLE_API_KEY=your_google_api_key_here
```

#### For Streamlit Cloud Deployment

**In Streamlit Cloud Dashboard**:
1. Go to your app → Settings → Secrets
2. Add secret:
   ```
   GOOGLE_API_KEY = your_google_api_key_here
   ```

**Get API Key**: https://makersuite.google.com/app/apikey

---

### 4. Contact Information

**File**: `index.php` (footer section, around line 310-320)

**Update**:
```php
<a href=""><i class="fas fa-envelope me-2"></i> your-email@example.com</a>
<a href="https://www.linkedin.com/in/yourprofile"><i class="fas fa-envelope me-2"></i>Linked-IN</a>
<a href=""><i class="fas fa-phone me-2"></i> Your Phone</a>
```

---

## 📝 Configuration Checklist

Before deploying, ensure:

- [ ] Database credentials updated in all PHP files
- [ ] Streamlit URLs updated in `index.php`
- [ ] Google API key configured (Streamlit secrets or .env)
- [ ] Contact information updated
- [ ] All localhost URLs replaced
- [ ] Test all configurations locally first

---

## 🔒 Security Notes

1. **Never commit**:
   - `.env` files
   - Database passwords
   - API keys

2. **Always use**:
   - Environment variables for sensitive data
   - Strong passwords for database
   - HTTPS in production

3. **Check**:
   - `.gitignore` includes `.env`
   - No hardcoded credentials in code
   - Secrets configured in hosting platform

---

## 💡 Quick Reference

### Database Connection Format:
```php
mysqli_connect("host", "username", "password", "database_name")
```

### Streamlit Cloud Secrets Format:
```
GOOGLE_API_KEY = your_key_here
```

### Environment Variable Format (.env):
```
GOOGLE_API_KEY=your_key_here
```
