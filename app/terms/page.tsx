'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white">
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
                              <Link href="/#work" className="hover:text-primary-400 transition-colors">Work</Link>
              <Link href="/#pricing" className="hover:text-primary-400 transition-colors">Pricing</Link>
              <Link href="/#contact" className="hover:text-primary-400 transition-colors">Contact</Link>
            </div>

            <Link href="/#contact" className="button-primary">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link href="/" className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using the services provided by Pup Design ("we," "us," or "our"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">2. Service Description</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Pup Design provides AI-powered design and development services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>UX/UI Design and prototyping</li>
                  <li>Web development and design</li>
                  <li>Mobile application design and development</li>
                  <li>SaaS platform development</li>
                  <li>Internal business tools and automation</li>
                  <li>AI-powered design solutions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">3. Subscription Services</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Our subscription services operate on a monthly basis with the following terms:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Unlimited design requests within your plan's concurrent request limit</li>
                    <li>Unlimited revisions on all projects</li>
                    <li>Source files and final deliverables included</li>
                    <li>Pause or cancel subscription at any time</li>
                    <li>No long-term contracts or commitments</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">4. Payment Terms</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Payment terms for our services:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Monthly subscriptions are billed in advance</li>
                    <li>One-off projects require 50% deposit before commencement</li>
                    <li>All prices are in Australian Dollars (AUD)</li>
                    <li>Payment is due within 7 days of invoice date</li>
                    <li>Late payments may result in service suspension</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">5. Intellectual Property</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Intellectual property rights and ownership:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Client retains full ownership of final deliverables</li>
                    <li>Pup Design retains rights to portfolio and case study usage</li>
                    <li>Third-party assets (fonts, images, etc.) remain under their respective licenses</li>
                    <li>Custom code and designs are transferred to client upon final payment</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">6. Project Timeline and Deliverables</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Our commitment to project delivery:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Starter Plan: 2-3 business day average turnaround</li>
                    <li>Professional Plan: 1-2 business day average turnaround</li>
                    <li>Enterprise Plan: Priority scheduling and support</li>
                    <li>Rush requests available for urgent projects</li>
                    <li>All deliverables include source files and documentation</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">7. Client Responsibilities</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    To ensure successful project delivery, clients agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Provide clear, detailed project requirements</li>
                    <li>Respond to feedback requests within 48 hours</li>
                    <li>Provide necessary brand guidelines and assets</li>
                    <li>Respect project timelines and milestones</li>
                    <li>Provide constructive feedback for revisions</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">8. Cancellation and Refunds</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Cancellation and refund policies:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Subscriptions can be cancelled at any time</li>
                    <li>No refunds for partial months of subscription service</li>
                    <li>One-off projects: 50% refund if cancelled before work begins</li>
                    <li>No refunds once design work has commenced</li>
                    <li>Completed work remains client property regardless of cancellation</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">9. Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  Pup Design's liability is limited to the amount paid for services. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">10. Confidentiality</h2>
                <p className="text-gray-300 leading-relaxed">
                  We maintain strict confidentiality of all client information and project details. Non-disclosure agreements are available upon request for sensitive projects.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">11. Changes to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">12. Contact Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  For questions about these terms, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-dark-800 rounded-lg">
                  <p className="text-gray-300">Email: hello@pupdesign.com.au</p>
                  <p className="text-gray-300">Location: Geelong, Victoria, Australia</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
