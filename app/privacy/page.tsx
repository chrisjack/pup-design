'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
              Privacy <span className="gradient-text">Policy</span>
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
                <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                <p className="text-gray-300 leading-relaxed">
                  Pup Design ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our design and development services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">2. Information We Collect</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-3 text-white">Personal Information</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We may collect the following personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Name and contact information (email, phone, address)</li>
                    <li>Company information and job title</li>
                    <li>Payment and billing information</li>
                    <li>Project requirements and specifications</li>
                    <li>Communication history and feedback</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 text-white">Technical Information</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We automatically collect certain technical information:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Website usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">3. How We Use Your Information</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed mb-4">
                  We use the collected information for the following purposes:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Provide and maintain our design and development services</li>
                    <li>Process payments and manage subscriptions</li>
                    <li>Communicate with you about projects and services</li>
                    <li>Improve our services and user experience</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Comply with legal obligations</li>
                    <li>Protect against fraud and security threats</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">4. Information Sharing and Disclosure</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements or court orders</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>With trusted service providers who assist in our operations</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">5. Data Security</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We implement appropriate security measures to protect your information:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Secure hosting and cloud infrastructure</li>
                    <li>Regular security audits and updates</li>
                    <li>Access controls and authentication</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">6. Data Retention</h2>
                <p className="text-gray-300 leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Project files and deliverables are retained according to our service agreements. You may request deletion of your data subject to legal requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">7. Your Rights and Choices</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Access and review your personal information</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to processing of your information</li>
                    <li>Withdraw consent for marketing communications</li>
                    <li>Request data portability</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">8. Cookies and Tracking Technologies</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We use cookies and similar technologies to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Improve website functionality and performance</li>
                    <li>Provide personalized content and recommendations</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed">
                    You can control cookie settings through your browser preferences. Disabling cookies may affect website functionality.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">9. Third-Party Services</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our website and services may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">10. International Data Transfers</h2>
                <p className="text-gray-300 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">11. Children's Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">12. Changes to This Privacy Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">13. Contact Us</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="mt-4 p-4 bg-dark-800 rounded-lg">
                  <p className="text-gray-300">Email: hello@pupdesign.com.au</p>
                  <p className="text-gray-300">Location: Geelong, Victoria, Australia</p>
                  <p className="text-gray-300 mt-2">We will respond to your inquiry within 48 hours.</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
