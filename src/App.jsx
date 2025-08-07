import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Brain, Eye, Cpu, Zap, ArrowRight, Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import heroImage from './assets/hero-computer-vision.webp'
import aiTechImage from './assets/ai-technology.jpg'
import hailoImage from './assets/hailo-chip.webp'
import jetsonImage from './assets/jetson-board.jpg'
import fpgaImage from './assets/fpga-board.jpg'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Custom AI Solutions",
      description: "Vision, NLP, ML",
      details: "Tailored artificial intelligence solutions designed specifically for your business needs, including computer vision, natural language processing, and machine learning models."
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: "Model Optimization",
      description: "For Edge Devices",
      details: "Optimize your AI models for deployment on edge devices including Hailo, FPGA, and Jetson platforms for real-time processing and maximum efficiency."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "End-to-End MLOps",
      description: "Pipelines",
      details: "Complete machine learning operations pipelines from data ingestion to model deployment, monitoring, and continuous integration for scalable AI solutions."
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: "Technical Consulting",
      description: "Expert Guidance",
      details: "Strategic consulting and technical guidance to help you navigate the AI landscape and implement the most effective solutions for your business objectives."
    }
  ]

  const technologies = [
    {
      name: "Hailo",
      image: hailoImage,
      description: "High-performance AI accelerators for edge computing"
    },
    {
      name: "FPGA",
      image: fpgaImage,
      description: "Field-programmable gate arrays for custom AI processing"
    },
    {
      name: "Jetson",
      image: jetsonImage,
      description: "NVIDIA Jetson platforms for AI at the edge"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">VisionX AI</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#technology" className="text-gray-700 hover:text-blue-600 transition-colors">Technology</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                7+ Years of AI Excellence
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Cutting-Edge
                <span className="text-blue-600 block">AI Solutions</span>
                for Gulf Businesses
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We provide advanced AI and Computer Vision solutions optimized for real-time processing 
                and deployment on edge devices. Unlock the true potential of artificial intelligence 
                for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3">
                  Learn More
                </Button>
              </div>
            </div>
            <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="relative z-10">
                <img 
                  src={heroImage} 
                  alt="Computer Vision Technology" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={aiTechImage} 
                alt="AI Technology" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">About VisionX AI</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 7 years of experience in artificial intelligence and computer vision, 
                we specialize in delivering cutting-edge solutions that drive real business value. 
                Our mission is to help Gulf businesses harness the transformative power of AI 
                through innovative, scalable, and efficient solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">7+ years of AI expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Specialized in Gulf market needs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Real-time edge processing focus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">End-to-end solution delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs, from custom development 
              to deployment and optimization.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{service.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Edge Device Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in optimizing AI models for deployment on cutting-edge hardware platforms, 
              ensuring maximum performance and efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={tech.image} 
                    alt={tech.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">{tech.name}</CardTitle>
                  <CardDescription className="text-gray-600">{tech.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Let's discuss how our AI solutions can drive innovation and growth for your organization.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 text-white">
                <Mail className="w-6 h-6 text-blue-200" />
                <span className="text-lg">deepp.knowledge@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4 text-white">
                <Phone className="w-6 h-6 text-blue-200" />
                <span className="text-lg">+966 XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-4 text-white">
                <MapPin className="w-6 h-6 text-blue-200" />
                <span className="text-lg">Germany</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">VisionX AI</h3>
            <p className="text-gray-400 mb-8">
              Empowering Gulf businesses with cutting-edge AI and Computer Vision solutions.
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2024 VisionX AI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

