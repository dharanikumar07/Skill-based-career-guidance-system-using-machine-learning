const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Skill-Based Career
            <span className="block mt-2 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Guidance System
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Your personalized compass for navigating the complex landscape of career 
            opportunities and skill development pathways. Leverage cutting-edge machine 
            learning to unlock your full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#features"
              className="btn-primary inline-block"
            >
              Explore Features
            </a>
            <a
              href="https://github.com/dharanikumar07/Skill-based-career-guidance-system-using-machine-learning"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
