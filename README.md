# Skill-based Career Guidance System using Machine Learning

A comprehensive web portal designed to enhance user experience and performance. This system helps users predict the skills they need to get their dream job through AI-powered recommendations and analysis.

## 🎯 Features

1. **Resume Builder** - Create professional resumes quickly and efficiently
2. **Course Recommender** - Get personalized course recommendations based on skills
3. **Skill Recommender** - Discover required skills for specific job titles
4. **Resume Analyzer (ATS)** - Analyze your resume against job descriptions using AI

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, Bootstrap, JavaScript
- **Backend**: PHP
- **Machine Learning**: Python, Streamlit
- **ML Libraries**: scikit-learn, pandas
- **AI**: Google Gemini API
- **Database**: MySQL

## 📋 Quick Start

### Prerequisites
- PHP 7.4+
- MySQL 5.7+
- Python 3.8+
- Google Gemini API Key (for Resume Analyzer)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Skill-based-career-guidance-system-using-machine-learning.git
   cd Skill-based-career-guidance-system-using-machine-learning
   ```

2. **Setup Database**
   - Import `career.sql` to MySQL
   - Update database credentials in PHP files

3. **Install Python Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure Environment**
   - Add your Google API key to `module_3/.env`

5. **Run the Application**
   - PHP: `php -S localhost:8000`
   - Streamlit Apps: See `SETUP.md` for detailed instructions

## 📚 Documentation

### 🚀 For Showcasing Your Project:
- **[START_HERE.md](START_HERE.md)** ⭐ **BEGIN HERE** - Complete showcase guide overview
- **[PLATFORM_DECISION.md](PLATFORM_DECISION.md)** - Choose the best platform for your needs
- **[SHOWCASE_GUIDE.md](SHOWCASE_GUIDE.md)** - Step-by-step deployment guide for showcasing
- **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - Track your deployment progress
- **[CONFIG_TEMPLATE.md](CONFIG_TEMPLATE.md)** - Configuration examples and templates

### 💻 For Development:
- **[SETUP.md](SETUP.md)** - Detailed setup instructions for local development
- **[QUICKSTART.md](QUICKSTART.md)** - Quick 5-minute setup guide
- **[HOSTING.md](HOSTING.md)** - Advanced hosting options and VPS deployment

## 🚀 Hosting Recommendations

### For Beginners (Easiest & Cheapest):
- **PHP Website**: Shared hosting (Hostinger/Bluehost) - $3-5/month
- **Python Apps**: Streamlit Cloud - **FREE**
- **Total**: ~$3-5/month

### For Production:
- **All-in-One**: DigitalOcean App Platform - $12-25/month
- **VPS**: DigitalOcean Droplet - $6-12/month (more control)

See [HOSTING.md](HOSTING.md) for complete hosting guide.

## 📁 Project Structure

```
├── index.php                 # Main homepage
├── login.php                 # Login page
├── signup.php                # Registration
├── authentication.php        # Login handler
├── career.sql                # Database schema
├── module_1/                 # Resume Builder (PHP)
├── module_2/                 # Course Recommender (Streamlit)
├── module_3/                 # Resume Analyzer/ATS (Streamlit)
└── module_4/                 # Skill Recommender (Streamlit)
```

## 🔧 Configuration

### Database Setup
1. Create MySQL database named `career`
2. Import `career.sql`
3. Update credentials in:
   - `authentication.php`
   - `signup.php`
   - `fp.php`

### API Configuration
1. Get Google Gemini API key from https://makersuite.google.com/app/apikey
2. Add to `module_3/.env`:
   ```
   GOOGLE_API_KEY=your_api_key_here
   ```

## 🐛 Troubleshooting

See [SETUP.md](SETUP.md) for common issues and solutions.

## 📝 License

This project is open source and available for educational purposes.

## 👤 Contact

For more details, contact: **dharaniraja2004@gmail.com**

## 🙏 Acknowledgments

Built with Streamlit, PHP, and Machine Learning technologies.
