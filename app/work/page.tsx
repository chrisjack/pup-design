'use client'

import { motion } from 'framer-motion'
import { 
  Sparkles, 
  ArrowLeft,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Globe,
  Database,
  Zap,
  Users,
  TrendingUp,
  Calendar,
  Target,
  Award
} from 'lucide-react'
import Link from 'next/link'

export default function WorkExamples() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const projects = [
    {
      id: 1,
      title: "Coles E-Commerce Platform",
      category: "Web Design",
      description: "Complete e-commerce solution for Australia's leading supermarket chain. Features advanced product search, shopping cart functionality, promotional systems, and comprehensive inventory management.",
      image: "/projects/coles-ecommerce.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Payment Gateway"],
      results: ["Multi-million dollar revenue platform", "Millions of active users", "Advanced product categorization"],
      link: "#",
      year: "2023",
      duration: "6 months"
    },
    {
      id: 2,
      title: "Disney AR Mobile App",
      category: "App Design",
      description: "Augmented reality mobile application featuring Disney characters with interactive experiences, location-based content, and immersive AR technology for enhanced user engagement.",
      image: "/projects/disney-ar-app.jpg",
      technologies: ["React Native", "AR Kit", "Unity", "Location Services", "3D Modeling"],
      results: ["Immersive AR technology", "Brand collaboration", "Interactive user experiences"],
      link: "#",
      year: "2023",
      duration: "8 months"
    },
    {
      id: 3,
      title: "Steven Trotter (Author)",
      category: "Web Design & Development",
      description: "Professional portfolio website for education leader featuring modern design, book promotion capabilities, speaking engagement bookings, and author platform integration.",
      image: "/projects/steven-trotter-portfolio.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Content Management"],
      results: ["Clean, professional design", "Author platform integration", "Speaking engagement bookings"],
      link: "#",
      year: "2023",
      duration: "3 months"
    },
    {
      id: 4,
      title: "The Golf Lab Website",
      category: "Web Design & Development",
      description: "Modern website for golf technology company featuring advanced booking systems, membership management, AR simulator integration, and technology showcase capabilities.",
      image: "/projects/golf-lab-website.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Booking API", "AR Integration"],
      results: ["Advanced booking system", "Membership management", "Technology showcase"],
      link: "#",
      year: "2023",
      duration: "4 months"
    },
    {
      id: 5,
      title: "Sargeants Conveyancing",
      category: "Web Design & Development",
      description: "Professional website for legal services company with property journey focus, client contact systems, and comprehensive service showcase for conveyancing services.",
      image: "/projects/sargeants-conveyancing.jpg",
      technologies: ["WordPress", "PHP", "MySQL", "Contact Forms", "SEO Optimization"],
      results: ["Professional legal branding", "Client contact integration", "Service showcase"],
      link: "#",
      year: "2023",
      duration: "3 months"
    },
    {
      id: 6,
      title: "Seek Job Platform",
      category: "App Design",
      description: "Mobile application for job seeking platform with comprehensive profile management, visibility controls, application tracking, and privacy management systems.",
      image: "/projects/seek-app.jpg",
      technologies: ["React Native", "Firebase", "Push Notifications", "Profile Management"],
      results: ["Profile management system", "Privacy controls", "Job application tracking"],
      link: "#",
      year: "2023",
      duration: "7 months"
    },
    {
      id: 7,
      title: "Disney+ Streaming Platform",
      category: "Web Design",
      description: "Streaming platform website with advanced content management, user authentication, promotional banner systems, and comprehensive media streaming capabilities.",
      image: "/projects/disney-plus.jpg",
      technologies: ["React", "Node.js", "AWS", "Video Streaming", "User Authentication"],
      results: ["Content management system", "User authentication", "Promotional campaigns"],
      link: "#",
      year: "2023",
      duration: "5 months"
    }
  ]

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Pup Design</span>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link href="/#services" className="hover:text-primary-400 transition-colors">Services</Link>
              <Link href="/#pricing" className="hover:text-primary-400 transition-colors">Pricing</Link>
                              <Link href="/work" className="text-primary-400">Work</Link>
              <Link href="/#contact" className="hover:text-primary-400 transition-colors">Contact</Link>
            </div>

            <Link href="/#contact" className="button-primary">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
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
              Our Work Portfolio
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Showcasing{' '}
              <span className="gradient-text">Exceptional Designs</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Discover how we've helped businesses transform their digital presence with AI-powered design and development solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-32 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
            >
              <div className="lg:flex lg:items-center lg:gap-16">
                {/* Design Showcase */}
                <div className="lg:w-2/3 mb-12 lg:mb-0">
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Project Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-primary-500/90 text-white text-sm rounded-full font-medium backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:w-1/3">
                  <div className="space-y-6">
                    {/* Project Header */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl font-bold text-primary-400">{(index + 1).toString().padStart(2, '0')}</span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {project.title}
                      </h2>
                      
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Results */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary-400" />
                        Key Results
                      </h3>
                      <ul className="space-y-2">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="text-gray-300 flex items-start gap-3">
                            <TrendingUp className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-900/20 to-primary-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Something{' '}
              <span className="gradient-text">Amazing?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with AI-powered design and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="button-primary text-lg">
                Start Your Project
              </Link>
              <Link href="/" className="button-secondary text-lg">
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
