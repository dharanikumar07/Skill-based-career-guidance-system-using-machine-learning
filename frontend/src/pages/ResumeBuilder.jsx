import { useState } from 'react'
import Footer from '../components/Footer'

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      github: '',
    },
    summary: '',
    experience: [
      { company: '', position: '', startDate: '', endDate: '', description: '' }
    ],
    education: [
      { school: '', degree: '', field: '', startDate: '', endDate: '', gpa: '' }
    ],
    skills: [''],
    projects: [
      { name: '', description: '', technologies: '', link: '' }
    ],
  })

  const [previewMode, setPreviewMode] = useState(false)

  const handleInputChange = (section, index, field, value) => {
    const newData = { ...formData }
    if (section === 'personalInfo') {
      newData.personalInfo[field] = value
    } else if (section === 'summary') {
      newData.summary = value
    } else {
      newData[section][index][field] = value
    }
    setFormData(newData)
  }

  const addItem = (section) => {
    const newData = { ...formData }
    const templates = {
      experience: { company: '', position: '', startDate: '', endDate: '', description: '' },
      education: { school: '', degree: '', field: '', startDate: '', endDate: '', gpa: '' },
      projects: { name: '', description: '', technologies: '', link: '' },
    }
    newData[section].push(templates[section])
    setFormData(newData)
  }

  const removeItem = (section, index) => {
    const newData = { ...formData }
    newData[section].splice(index, 1)
    setFormData(newData)
  }

  const addSkill = () => {
    const newData = { ...formData }
    newData.skills.push('')
    setFormData(newData)
  }

  const removeSkill = (index) => {
    const newData = { ...formData }
    newData.skills.splice(index, 1)
    setFormData(newData)
  }

  const handleSkillChange = (index, value) => {
    const newData = { ...formData }
    newData.skills[index] = value
    setFormData(newData)
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    alert('PDF download feature requires html2pdf.js library. Please install it: npm install html2pdf.js')
  }

  const formatDate = (dateString) => {
    if (!dateString || dateString === 'Present') return dateString
    const [year, month] = dateString.split('-')
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${monthNames[parseInt(month) - 1]} ${year}`
  }

  return (
    <div className="min-h-screen">
      <section id="resume-builder" className="py-24 bg-white dark:bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Resume Builder
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Create a professional resume in minutes
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-8 gap-4">
            <button
              onClick={() => setPreviewMode(false)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                !previewMode
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Edit
            </button>
            <button
              onClick={() => setPreviewMode(true)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                previewMode
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Preview
            </button>
          </div>

          {!previewMode ? (
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Personal Information */}
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input-field"
                    value={formData.personalInfo.fullName}
                    onChange={(e) => handleInputChange('personalInfo', null, 'fullName', e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="input-field"
                    value={formData.personalInfo.email}
                    onChange={(e) => handleInputChange('personalInfo', null, 'email', e.target.value)}
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="input-field"
                    value={formData.personalInfo.phone}
                    onChange={(e) => handleInputChange('personalInfo', null, 'phone', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="input-field"
                    value={formData.personalInfo.address}
                    onChange={(e) => handleInputChange('personalInfo', null, 'address', e.target.value)}
                  />
                  <input
                    type="url"
                    placeholder="LinkedIn URL"
                    className="input-field"
                    value={formData.personalInfo.linkedin}
                    onChange={(e) => handleInputChange('personalInfo', null, 'linkedin', e.target.value)}
                  />
                  <input
                    type="url"
                    placeholder="GitHub URL"
                    className="input-field"
                    value={formData.personalInfo.github}
                    onChange={(e) => handleInputChange('personalInfo', null, 'github', e.target.value)}
                  />
                </div>
              </div>

              {/* Professional Summary */}
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Summary</h3>
                <textarea
                  placeholder="Write a brief summary of your professional background..."
                  className="input-field min-h-[120px]"
                  value={formData.summary}
                  onChange={(e) => handleInputChange('summary', null, null, e.target.value)}
                />
              </div>

              {/* Experience */}
              <div className="card">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
                  <button
                    onClick={() => addItem('experience')}
                    className="btn-primary text-sm"
                  >
                    + Add Experience
                  </button>
                </div>
                {formData.experience.map((exp, index) => (
                  <div key={index} className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        placeholder="Company"
                        className="input-field"
                        value={exp.company}
                        onChange={(e) => handleInputChange('experience', index, 'company', e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Position"
                        className="input-field"
                        value={exp.position}
                        onChange={(e) => handleInputChange('experience', index, 'position', e.target.value)}
                      />
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          Start Date
                        </label>
                        <input
                          type="month"
                          className="input-field"
                          value={exp.startDate}
                          onChange={(e) => handleInputChange('experience', index, 'startDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          End Date
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="month"
                            className="input-field flex-1"
                            value={exp.endDate === 'Present' ? '' : exp.endDate}
                            onChange={(e) => handleInputChange('experience', index, 'endDate', e.target.value)}
                            disabled={exp.endDate === 'Present'}
                          />
                          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={exp.endDate === 'Present'}
                              onChange={(e) => handleInputChange('experience', index, 'endDate', e.target.checked ? 'Present' : '')}
                              className="w-4 h-4 text-primary-600 rounded"
                            />
                            Present
                          </label>
                        </div>
                      </div>
                    </div>
                    <textarea
                      placeholder="Job description and achievements..."
                      className="input-field min-h-[100px] mb-4"
                      value={exp.description}
                      onChange={(e) => handleInputChange('experience', index, 'description', e.target.value)}
                    />
                    {formData.experience.length > 1 && (
                      <button
                        onClick={() => removeItem('experience', index)}
                        className="text-red-600 dark:text-red-400 text-sm font-semibold"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="card">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
                  <button
                    onClick={() => addItem('education')}
                    className="btn-primary text-sm"
                  >
                    + Add Education
                  </button>
                </div>
                {formData.education.map((edu, index) => (
                  <div key={index} className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="School/University"
                        className="input-field"
                        value={edu.school}
                        onChange={(e) => handleInputChange('education', index, 'school', e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Degree"
                        className="input-field"
                        value={edu.degree}
                        onChange={(e) => handleInputChange('education', index, 'degree', e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Field of Study"
                        className="input-field"
                        value={edu.field}
                        onChange={(e) => handleInputChange('education', index, 'field', e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="GPA (Optional)"
                        className="input-field"
                        value={edu.gpa}
                        onChange={(e) => handleInputChange('education', index, 'gpa', e.target.value)}
                      />
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          Start Date
                        </label>
                        <input
                          type="month"
                          className="input-field"
                          value={edu.startDate}
                          onChange={(e) => handleInputChange('education', index, 'startDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          End Date
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="month"
                            className="input-field flex-1"
                            value={edu.endDate === 'Present' ? '' : edu.endDate}
                            onChange={(e) => handleInputChange('education', index, 'endDate', e.target.value)}
                            disabled={edu.endDate === 'Present'}
                          />
                          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={edu.endDate === 'Present'}
                              onChange={(e) => handleInputChange('education', index, 'endDate', e.target.checked ? 'Present' : '')}
                              className="w-4 h-4 text-primary-600 rounded"
                            />
                            Present
                          </label>
                        </div>
                      </div>
                    </div>
                    {formData.education.length > 1 && (
                      <button
                        onClick={() => removeItem('education', index)}
                        className="text-red-600 dark:text-red-400 text-sm font-semibold mt-4"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="card">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h3>
                  <button
                    onClick={addSkill}
                    className="btn-primary text-sm"
                  >
                    + Add Skill
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Skill"
                        className="input-field flex-1"
                        value={skill}
                        onChange={(e) => handleSkillChange(index, e.target.value)}
                      />
                      {formData.skills.length > 1 && (
                        <button
                          onClick={() => removeSkill(index)}
                          className="text-red-600 dark:text-red-400 font-semibold"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="card">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h3>
                  <button
                    onClick={() => addItem('projects')}
                    className="btn-primary text-sm"
                  >
                    + Add Project
                  </button>
                </div>
                {formData.projects.map((project, index) => (
                  <div key={index} className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="grid grid-cols-1 gap-4 mb-4">
                      <input
                        type="text"
                        placeholder="Project Name"
                        className="input-field"
                        value={project.name}
                        onChange={(e) => handleInputChange('projects', index, 'name', e.target.value)}
                      />
                      <textarea
                        placeholder="Project description..."
                        className="input-field min-h-[100px]"
                        value={project.description}
                        onChange={(e) => handleInputChange('projects', index, 'description', e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Technologies Used (comma separated)"
                        className="input-field"
                        value={project.technologies}
                        onChange={(e) => handleInputChange('projects', index, 'technologies', e.target.value)}
                      />
                      <input
                        type="url"
                        placeholder="Project Link (Optional)"
                        className="input-field"
                        value={project.link}
                        onChange={(e) => handleInputChange('projects', index, 'link', e.target.value)}
                      />
                    </div>
                    {formData.projects.length > 1 && (
                      <button
                        onClick={() => removeItem('projects', index)}
                        className="text-red-600 dark:text-red-400 text-sm font-semibold"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div id="resume-preview" className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl">
              {/* Preview Content */}
              <div className="space-y-6">
                {/* Header */}
                <div className="border-b-4 border-primary-600 pb-4">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {formData.personalInfo.fullName || 'Your Name'}
                  </h1>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                    {formData.personalInfo.email && <span>{formData.personalInfo.email}</span>}
                    {formData.personalInfo.phone && <span>{formData.personalInfo.phone}</span>}
                    {formData.personalInfo.address && <span>{formData.personalInfo.address}</span>}
                    {formData.personalInfo.linkedin && (
                      <a href={formData.personalInfo.linkedin} className="text-primary-600 dark:text-primary-400">LinkedIn</a>
                    )}
                    {formData.personalInfo.github && (
                      <a href={formData.personalInfo.github} className="text-primary-600 dark:text-primary-400">GitHub</a>
                    )}
                  </div>
                </div>

                {/* Summary */}
                {formData.summary && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 border-b-2 border-gray-300 dark:border-gray-600 pb-1">
                      Professional Summary
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">{formData.summary}</p>
                  </div>
                )}

                {/* Experience */}
                {formData.experience.some(exp => exp.company) && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 border-b-2 border-gray-300 dark:border-gray-600 pb-1">
                      Experience
                    </h2>
                    {formData.experience.map((exp, index) => (
                      exp.company && (
                        <div key={index} className="mb-4">
                          <div className="flex justify-between items-start mb-1">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                              <p className="text-primary-600 dark:text-primary-400 font-semibold">{exp.company}</p>
                            </div>
                            <span className="text-gray-600 dark:text-gray-400 text-sm">
                              {formatDate(exp.startDate)} - {formatDate(exp.endDate) || 'Present'}
                            </span>
                          </div>
                          {exp.description && (
                            <p className="text-gray-700 dark:text-gray-300 mt-2">{exp.description}</p>
                          )}
                        </div>
                      )
                    ))}
                  </div>
                )}

                {/* Education */}
                {formData.education.some(edu => edu.school) && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 border-b-2 border-gray-300 dark:border-gray-600 pb-1">
                      Education
                    </h2>
                    {formData.education.map((edu, index) => (
                      edu.school && (
                        <div key={index} className="mb-4">
                          <div className="flex justify-between items-start mb-1">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                              <p className="text-primary-600 dark:text-primary-400 font-semibold">{edu.school}</p>
                              {edu.field && <p className="text-gray-600 dark:text-gray-400">{edu.field}</p>}
                            </div>
                            <div className="text-right">
                              <span className="text-gray-600 dark:text-gray-400 text-sm block">
                                {formatDate(edu.startDate)} - {formatDate(edu.endDate) || 'Present'}
                              </span>
                              {edu.gpa && <span className="text-gray-600 dark:text-gray-400 text-sm">GPA: {edu.gpa}</span>}
                            </div>
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                )}

                {/* Skills */}
                {formData.skills.some(skill => skill.trim()) && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 border-b-2 border-gray-300 dark:border-gray-600 pb-1">
                      Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {formData.skills.filter(skill => skill.trim()).map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-lg font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Projects */}
                {formData.projects.some(proj => proj.name) && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 border-b-2 border-gray-300 dark:border-gray-600 pb-1">
                      Projects
                    </h2>
                    {formData.projects.map((project, index) => (
                      project.name && (
                        <div key={index} className="mb-4">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {project.link ? (
                                <a href={project.link} className="text-primary-600 dark:text-primary-400 hover:underline">
                                  {project.name}
                                </a>
                              ) : (
                                project.name
                              )}
                            </h3>
                          </div>
                          {project.description && (
                            <p className="text-gray-700 dark:text-gray-300 mt-1">{project.description}</p>
                          )}
                          {project.technologies && (
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                              Technologies: {project.technologies}
                            </p>
                          )}
                        </div>
                      )
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex gap-4 justify-center print:hidden">
                <button onClick={handlePrint} className="btn-primary">
                  Print Resume
                </button>
                <button onClick={handleDownload} className="btn-secondary">
                  Download PDF
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ResumeBuilder
