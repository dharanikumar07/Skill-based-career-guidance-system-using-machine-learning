import { useState } from 'react'
import Footer from '../components/Footer'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear error when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus(null)
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    // Web3Forms Configuration
    // Get your access key from: https://web3forms.com/
    // It's FREE and UNLIMITED!
    const ACCESS_KEY = '14e42978-b2c0-47ff-bdf0-180b9669fcab' // Replace with your access key

    // Prepare form data
    const formDataToSend = {
      access_key: ACCESS_KEY,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      from_name: 'Skill Based Career Guidance System',
    }

    try {
      // Send form data to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      })

      const result = await response.json()

      if (result.success) {
        // Success
        setIsSubmitting(false)
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      } else {
        throw new Error(result.message || 'Failed to send message')
      }
    } catch (error) {
      // Error handling
      console.error('Form submission error:', error)
      setIsSubmitting(false)
      setSubmitStatus('error')
      setErrorMessage(
        error.message || 
        'Failed to send message. Please check your access key or try again later.'
      )
    }
  }

  return (
    <div className="min-h-screen">
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Have a question or want to work together? I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info - Increased width */}
            <div className="lg:col-span-2">
              <div className="card space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Email</p>
                        <a 
                          href="mailto:dharaniraja2004@gmail.com" 
                          className="text-primary-600 dark:text-primary-400 hover:underline break-words break-all"
                        >
                          dharaniraja2004@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">LinkedIn</p>
                        <a 
                          href="https://www.linkedin.com/in/dharanikumar-r07/" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 dark:text-primary-400 hover:underline break-words"
                        >
                          Connect with me
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Twitter/X</p>
                        <a 
                          href="https://x.com/dharanikumar_07" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 dark:text-primary-400 hover:underline break-words"
                        >
                          Follow me
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Portfolio</p>
                        <a 
                          href="https://dharanikumar.vercel.app/" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 dark:text-primary-400 hover:underline break-words"
                        >
                          View my work
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="input-field"
                      placeholder="Tell me more about your project or question..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-lg">
                      <p className="text-green-800 dark:text-green-200 font-semibold">
                        ✅ Message sent successfully! I'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 rounded-lg">
                      <p className="text-red-800 dark:text-red-200 font-semibold">
                        ❌ {errorMessage}
                      </p>
                      <p className="text-red-700 dark:text-red-300 text-sm mt-2">
                        Please get your free access key from <a href="https://web3forms.com/" target="_blank" rel="noopener noreferrer" className="underline">web3forms.com</a> and update the code.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact
