import { Link } from 'react-router-dom'

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Resume Builder",
      description: "Create professional resumes quickly and efficiently with our intuitive builder. Stand out from the crowd with a polished resume.",
      icon: "📄",
      link: "/resume-builder",
      isInternal: true,
      gradient: "from-blue-500 via-blue-600 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    },
    {
      id: 2,
      title: "Course Recommender",
      description: "Get personalized course recommendations based on your skills. Discover the perfect learning opportunities to fuel your growth.",
      icon: "🎓",
      link: "https://skill-based-career-guidance-system-using-machine-learning-qyhe.streamlit.app/",
      isInternal: false,
      gradient: "from-purple-500 via-purple-600 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    },
    {
      id: 3,
      title: "Skill Recommender",
      description: "Discover required skills for specific job titles. Get insights into what employers are looking for in your dream role.",
      icon: "🎯",
      link: "https://skill-based-career-guidance-system-using-machine-learning-wrlk.streamlit.app/",
      isInternal: false,
      gradient: "from-green-500 via-emerald-600 to-teal-500",
      bgGradient: "from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
    },
    {
      id: 4,
      title: "Resume Analyzer (ATS)",
      description: "Analyze your resume against job descriptions using AI. Get percentage match and missing keywords to improve your resume.",
      icon: "🤖",
      link: "https://skill-based-career-guidance-system-using-machine-learning-9uax.streamlit.app/",
      isInternal: false,
      gradient: "from-orange-500 via-red-600 to-rose-500",
      bgGradient: "from-orange-50 to-rose-50 dark:from-orange-900/20 dark:to-rose-900/20",
    },
  ]

  const FeatureCard = ({ feature, index }) => {
    const content = (
      <div className={`group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br ${feature.bgGradient} border-2 border-transparent hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-up`}
        style={{ animationDelay: `${index * 0.1}s` }}>
        {/* Background Gradient Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        {/* Icon Container */}
        <div className={`relative mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
          {feature.icon}
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {feature.description}
          </p>
          
          {/* CTA */}
          <div className="flex items-center text-primary-600 dark:text-primary-400 font-bold group-hover:translate-x-2 transition-transform duration-300">
            {feature.isInternal ? 'Get Started' : 'Try Now'}
            <svg
              className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-2xl"></div>
      </div>
    )

    if (feature.isInternal) {
      return (
        <Link to={feature.link} className="block">
          {content}
        </Link>
      )
    } else {
      return (
        <a href={feature.link} target="_blank" rel="noopener noreferrer" className="block">
          {content}
        </a>
      )
    }
  }

  return (
    <section id="features" className="py-5 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to advance your career in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
