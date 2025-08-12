'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Database,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Target,
  Rocket,
  Shield,
  MessageCircle,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
import AnimatedBackground from './components/AnimatedBackground'

export default function Home() {
  const [activeTab, setActiveTab] = useState('subscription')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Formspree endpoint
      const response = await fetch('https://formspree.io/f/mldlzgqj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          message: formData.message,
          subject: `New Contact Form Submission - ${formData.projectType}`
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          projectType: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <motion.div 
                className="w-[270px] h-[70px] flex items-center justify-center p-2"
                animate={{ 
                  x: [0, -3, 3, -3, 3, 0] 
                }}
                transition={{ 
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src="/header/noto_dog-face5.png" 
                  alt="Pup Design Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const fallback = target.nextElementSibling;
                    if (target && fallback && fallback instanceof HTMLElement) {
                      target.style.display = 'none';
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-full h-full gradient-bg rounded-lg flex items-center justify-center hidden">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#services" className="hover:text-primary-400 transition-colors">Services</a>
              <a href="#work" className="hover:text-primary-400 transition-colors">Work</a>
              <a href="#pricing" className="hover:text-primary-400 transition-colors">Pricing</a>
              <a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a>
            </motion.div>

            <motion.a 
              href="https://cal.com/pup-design-hhrvg1" 
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="button-primary flex items-center"
            >
              <Clock className="w-4 h-4 mr-2" />
              Book a Call
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Design & Development
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Transform Your Business with{' '}
              <span className="gradient-text">AI-Powered Design and Development</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              20 years of design experience meets cutting-edge AI technology. We design, build, and optimize 
              everything from strategy to complex automation for systems using the most advanced tools available.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.a 
                href="https://cal.com/pup-design-hhrvg1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-primary text-lg flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Clock className="w-5 h-5 mr-2" />
                Book a Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.button 
                className="button-secondary text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/work'}
              >
                View Our Work
              </motion.button>
            </motion.div>
          </motion.div>

          {/* AI Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <motion.div 
              className="glass-effect rounded-2xl p-6"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Brain className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">AI-Enhanced</h3>
              <p className="text-gray-400">Every project leverages cutting-edge AI for superior results</p>
            </motion.div>
            <motion.div 
              className="glass-effect rounded-2xl p-6"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Clock className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">20+ Years</h3>
              <p className="text-gray-400">Decades of experience in design and development</p>
            </motion.div>
            <motion.div 
              className="glass-effect rounded-2xl p-6"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Rocket className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-400">AI-powered workflows for rapid project completion</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="gradient-text">Design & Development</span> Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to deployment, we handle every aspect of your digital presence with AI-powered precision.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Palette,
                title: "UX/UI Design",
                description: "AI-enhanced user experience design with advanced prototyping and testing",
                color: "text-primary-400"
              },
              {
                icon: Code,
                title: "Web Development",
                description: "Modern, responsive websites built with cutting-edge frameworks and AI optimization",
                color: "text-primary-400"
              },
              {
                icon: Smartphone,
                title: "App Design",
                description: "Native and cross-platform mobile applications with AI-powered features",
                color: "text-primary-400"
              },
              {
                icon: Database,
                title: "SaaS & Internal Tools",
                description: "Scalable software solutions and internal tools for business automation",
                color: "text-primary-400"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-effect rounded-2xl p-8 card-hover"
              >
                <service.icon className={`w-12 h-12 ${service.color} mb-6`} />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by <span className="gradient-text">Leading Companies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've helped businesses across various industries transform their digital presence and achieve remarkable results.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          >
            {[
              { 
                name: "Coles", 
                logo: "/logos/Coles_logo.png", 
                industry: "Retail & E-commerce" 
              },
              { 
                name: "Disney", 
                logo: "/logos/Disney+.png", 
                industry: "Entertainment" 
              },
              { 
                name: "Seek", 
                logo: "/logos/seek.png", 
                industry: "Job Platform" 
              },
              { 
                name: "Steven Trotter", 
                logo: "/logos/steven-trotter.png", 
                industry: "Author & Education" 
              },
              { 
                name: "The Golf Lab", 
                logo: "/logos/golf-lab.png", 
                industry: "Sports Technology" 
              },
              { 
                name: "Sargeants", 
                logo: "/logos/sargeants.png", 
                industry: "Legal Services" 
              }
            ].map((company, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 p-2">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const fallback = target.nextElementSibling;
                      if (target && fallback && fallback instanceof HTMLElement) {
                        target.style.display = 'none';
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full gradient-bg rounded-xl flex items-center justify-center hidden">
                    <span className="text-lg font-bold text-white">{company.name.substring(0, 2).toUpperCase()}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-1">{company.name}</h3>
                <p className="text-sm text-gray-400">{company.industry}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-900/20 to-primary-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses achieve exceptional results with our AI-powered design and development solutions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Coles E-Commerce Platform",
                category: "Web Design",
                description: "Complete e-commerce solution for Australia's leading supermarket chain with advanced product search, shopping cart functionality, and promotional systems.",
                results: ["Multi-million dollar revenue platform", "Millions of active users", "Advanced product categorization"],
                image: "/projects/coles-ecommerce.jpg"
              },
              {
                title: "Seek Job Platform",
                category: "App Design",
                description: "Mobile application for job seeking platform with profile management, visibility controls, and application tracking.",
                results: ["Profile management system", "Privacy controls", "Job application tracking"],
                image: "/projects/seek-app.jpg"
              },
              {
                title: "Disney+ Streaming Platform",
                category: "Web Design",
                description: "Streaming platform website with content management, user authentication, and promotional banner systems.",
                results: ["Content management system", "User authentication", "Promotional campaigns"],
                image: "/projects/disney-plus.jpg"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-effect rounded-2xl p-8 card-hover"
              >
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary-500/90 text-white text-xs rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="space-y-2">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-primary-400 mr-2 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button 
              className="button-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/work'}
            >
                              View All Work
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How Our <span className="gradient-text">Design Subscription</span> Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A simple, transparent process that delivers exceptional results month after month.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                step: "01",
                title: "Onboarding",
                description: "We'll discuss your brand, goals, design and development needs to create a tailored strategy and plan.",
                icon: Users
              },
              {
                step: "02",
                title: "Request Submission",
                description: "Submit unlimited design/development requests through our streamlined project management system.",
                icon: MessageCircle
              },
              {
                step: "03",
                title: "Design & Review",
                description: "Our team creates your designs/development with unlimited revisions until perfect.",
                icon: Palette
              },
              {
                step: "04",
                title: "Delivery & Launch",
                description: "Receive final files and launch your designs/development with ongoing support and optimization.",
                icon: Rocket
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <div className="glass-effect rounded-2xl p-8 card-hover text-center">
                  <div className="w-16 h-16 border-2 border-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary-400">{process.step}</span>
                  </div>
                  <process.icon className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">{process.title}</h3>
                  <p className="text-gray-400">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-6">
              Ready to get started? Our team is ready to help you achieve your design goals.
            </p>
            <motion.a 
              href="https://cal.com/pup-design-hhrvg1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-secondary inline-flex items-center justify-center px-8 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ textDecoration: 'none' }}
            >
              <Clock className="w-4 h-4 mr-2" />
              Book a Call
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* AI Features Section */}
      <section id="ai" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-900/20 to-primary-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powered by <span className="gradient-text">Advanced AI</span> Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the most cutting-edge AI tools to deliver superior results faster than traditional methods.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {[
                  {
                    icon: Brain,
                    title: "AI-Powered Design",
                    description: "Generate design concepts, layouts, and prototypes using advanced AI models and refined with design expertise."
                  },
                  {
                    icon: Zap,
                    title: "Machine Learning Optimization",
                    description: "Optimize user flows, conversion rates and automations with ML-driven insights"
                  },
                  {
                    icon: Target,
                    title: "Predictive Analytics",
                    description: "Anticipate user needs and market trends with AI-powered analytics"
                  },
                  {
                    icon: Shield,
                    title: "Automated Testing",
                    description: "Comprehensive testing and quality assurance powered by AI"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 icon-outline rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">AI Processing</span>
                    <span className="text-sm text-primary-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="gradient-bg h-2 rounded-full animate-pulse" style={{ width: '90%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Design Accuracy</span>
                    <span className="text-sm text-primary-400">99%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="gradient-bg h-2 rounded-full animate-pulse" style={{ width: '99%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Development Speed</span>
                    <span className="text-sm text-primary-400">3x Faster</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="gradient-bg h-2 rounded-full animate-pulse" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="gradient-text">Perfect Plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible options to match your business needs - from ongoing support to one-off projects.
            </p>
          </motion.div>

          {/* Pricing Tabs */}
          <div className="flex justify-center mb-12">
            <div className="glass-effect rounded-xl p-1">
              <button
                onClick={() => setActiveTab('subscription')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'subscription' 
                    ? 'gradient-bg text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly Subscription
              </button>
              <button
                onClick={() => setActiveTab('oneoff')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'oneoff' 
                    ? 'gradient-bg text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                One-Off Projects
              </button>
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {activeTab === 'subscription' ? (
              <>
                <div className="glass-effect rounded-2xl p-8 card-hover">
                  <h3 className="text-2xl font-bold mb-4">Starter</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$4,500</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      1 request at a time
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Unlimited requests
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Unlimited revisions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Avg. 2-3 business day turnaround
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Pause or Cancel anytime
                    </li>
                  </ul>
                  <a 
                    href="https://cal.com/pup-design-hhrvg1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="button-secondary w-full flex items-center justify-center"
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    Book a Call
                  </a>
                  <a 
                    href="https://buy.stripe.com/00w4gB502grv8wy6tt3Ru02" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full mt-3 px-6 py-3 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center"
                  >
                    Subscribe Now
                  </a>
                </div>

                <div className="glass-effect rounded-2xl p-8 card-hover border-2 border-primary-500 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-600 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Professional</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$8,250</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      2 requests at a time
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Unlimited requests
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Unlimited revisions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Avg. 1-2 business day turnaround
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Pause or Cancel anytime
                    </li>
                  </ul>
                  <a 
                    href="https://cal.com/pup-design-hhrvg1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="button-secondary w-full flex items-center justify-center"
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    Book a Call
                  </a>
                  <a 
                    href="https://buy.stripe.com/7sY3cx0JM5MRfZ0dVV3Ru03" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full mt-3 px-6 py-3 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center"
                  >
                    Subscribe Now
                  </a>
                </div>

                <div className="glass-effect rounded-2xl p-8 card-hover">
                  <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$14,950</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      3 requests at a time
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Unlimited requests
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Unlimited revisions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Priority scheduling and support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Pause or Cancel anytime
                    </li>
                  </ul>
                  <a 
                    href="https://cal.com/pup-design-hhrvg1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="button-secondary w-full flex items-center justify-center"
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    Book a Call
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="glass-effect rounded-2xl p-8 card-hover">
                  <h3 className="text-2xl font-bold mb-4">Small Project</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$5,000</span>
                    <span className="text-gray-400">- $15,000</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Landing pages & simple websites
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      AI-enhanced design
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      2-4 week delivery
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Post-launch support
                    </li>
                  </ul>
                  <button 
                    className="button-secondary w-full"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Quote
                  </button>
                </div>

                <div className="glass-effect rounded-2xl p-8 card-hover border-2 border-primary-500 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-600 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Medium Project</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$15,000</span>
                    <span className="text-gray-400">- $50,000</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Complex web applications
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Full AI integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      4-8 week delivery
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Ongoing maintenance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Performance optimization
                    </li>
                  </ul>
                  <button 
                    className="button-secondary w-full"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Quote
                  </button>
                </div>

                <div className="glass-effect rounded-2xl p-8 card-hover">
                  <h3 className="text-2xl font-bold mb-4">Large Project</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$50,000</span>
                    <span className="text-gray-400">+</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Enterprise SaaS platforms
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Custom AI solutions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      8-16 week delivery
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Dedicated project team
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3" />
                      Scalability planning
                    </li>
                  </ul>
                  <button 
                    className="button-secondary w-full"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Contact Sales
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about our design subscription services.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                question: "How does the design subscription work?",
                answer: "Our design subscription allows you to submit unlimited design requests. We work on one request at a time (Starter), two requests (Professional), or three requests (Enterprise) simultaneously. Each request includes unlimited revisions until you're 100% satisfied."
              },
              {
                question: "What types of designs can you create?",
                answer: "We create everything from logos, websites, and mobile apps to marketing materials, social media graphics, and internal business tools. Our AI-powered approach ensures high-quality, consistent designs across all platforms."
              },
              {
                question: "How fast can you deliver designs?",
                answer: "Our average turnaround time is 2-3 business days for Starter plans, 1-2 business days for Professional plans, and priority scheduling for Enterprise clients. Rush requests are available for urgent projects."
              },
              {
                question: "Can I pause or cancel my subscription?",
                answer: "Yes! You can pause or cancel your subscription at any time with no penalties. Your designs and files remain yours forever, and you can reactivate your subscription whenever you need us again."
              },
              {
                question: "Do you offer refunds?",
                answer: "We do not offer refunds for our services. Once work has commenced or a subscription has been activated, no refunds will be provided. We ensure quality delivery and unlimited revisions to guarantee your satisfaction with our work."
              },
              {
                question: "What if I'm not happy with a design?",
                answer: "We offer unlimited revisions on every project until you're completely satisfied. If you're still not happy after multiple rounds, we'll start fresh or credit your account - your satisfaction is guaranteed."
              },
              {
                question: "Can you work with my existing brand guidelines?",
                answer: "Yes! We'll study your existing brand guidelines and ensure all designs maintain consistency with your current brand identity. We can also help evolve and improve your brand guidelines."
              },
              {
                question: "Do you offer one-off projects?",
                answer: "Yes! While our subscription model offers the best value, we also provide one-off project quotes for specific needs. Contact us to discuss your project requirements and get a custom quote."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-effect rounded-2xl p-8 card-hover"
              >
                <h3 className="text-xl font-bold mb-4 text-white">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-6">
              Still have questions? We're here to help!
            </p>
            <motion.a 
              href="https://cal.com/pup-design-hhrvg1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-secondary inline-flex items-center justify-center px-8 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ textDecoration: 'none' }}
            >
              <Clock className="w-4 h-4 mr-2" />
              Book a Call
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-900/20 to-primary-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss how AI-powered design and development can accelerate your business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 icon-outline rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-400">hello@pupdesign.com.au</p>
                  </div>
                </div>



                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 icon-outline rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Location</h3>
                    <p className="text-gray-400">Geelong, Victoria, Australia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 icon-outline rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Response Time</h3>
                    <p className="text-gray-400">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 icon-outline rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Book a Call</h3>
                    <a 
                      href="https://cal.com/pup-design-hhrvg1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
                    >
                      Schedule Now →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your Company"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Monthly Subscription">Monthly Subscription</option>
                    <option value="One-off Project">One-off Project</option>
                    <option value="UX/UI Design">UX/UI Design</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="SaaS Platform">SaaS Platform</option>
                    <option value="Internal Tools">Internal Tools</option>
                    <option value="Automation">Automation</option>
                    <option value="AI Specialist">AI Specialist</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-900/20 border border-green-500 rounded-lg text-green-400">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-900/20 border border-red-500 rounded-lg text-red-400">
                    There was an error sending your message. Please try again.
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="button-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                </button>
                
                <div className="text-center">
                  <span className="text-gray-400 text-sm">or</span>
                </div>
                
                <a 
                  href="https://cal.com/pup-design-hhrvg1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button-secondary w-full flex items-center justify-center"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Book a Call
                </a>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <motion.div 
                className="w-[270px] h-[70px] flex items-center justify-center p-2"
                animate={{ 
                  x: [0, -3, 3, -3, 3, 0] 
                }}
                transition={{ 
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src="/header/noto_dog-face5.png" 
                  alt="Pup Design Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const fallback = target.nextElementSibling;
                    if (target && fallback && fallback instanceof HTMLElement) {
                      target.style.display = 'none';
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-full h-full gradient-bg rounded-lg flex items-center justify-center hidden">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            </div>
            
            <div className="flex space-x-6 text-gray-400">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#work" className="hover:text-white transition-colors">Work</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Pup Design. All rights reserved. AI-powered design and development services in Australia.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
