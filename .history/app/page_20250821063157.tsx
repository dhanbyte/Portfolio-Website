"use client"

import type React from "react"
import {
  MessageCircle,
  Code,
  Globe,
  Check,
  Zap,
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Moon,
  Sun,
} from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTheme } from "next-themes"

// Background Animation Component
const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" />
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 dark:bg-blue-300/20 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}

// Theme Toggle Component
const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="fixed top-4 right-4 z-50" disabled>
        <div className="h-5 w-5" />
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border hover:bg-accent"
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600" />
      )}
    </Button>
  )
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Skills without percentage bars
  const skills = [
    {
      name: "React.js",
      description: "Building interactive user interfaces with modern React patterns, hooks, and state management",
      category: "Frontend",
      icon: "⚛️",
    },
    {
      name: "Next.js",
      description: "Full-stack React framework for production-ready applications with SSR and SSG",
      category: "Frontend",
      icon: "🔺",
    },
    {
      name: "TypeScript",
      description: "Type-safe JavaScript development for scalable and maintainable applications",
      category: "Frontend",
      icon: "📘",
    },
    {
      name: "Node.js",
      description: "Server-side JavaScript runtime for building scalable backend services and APIs",
      category: "Backend",
      icon: "🟢",
    },
    {
      name: "Express.js",
      description: "Fast and minimalist web framework for Node.js applications and REST APIs",
      category: "Backend",
      icon: "🚀",
    },
    {
      name: "MongoDB",
      description: "NoSQL database for flexible and scalable data storage with document-based structure",
      category: "Database",
      icon: "🍃",
    },

    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development with responsive design",
      category: "Frontend",
      icon: "🎨",
    },

    {
      name: "AWS",
      description: "Cloud computing services for deployment, scaling, and infrastructure management",
      category: "Cloud",
      icon: "☁️",
    },
  ]

  const services = [
    {
      title: "Full-Stack Development",
      description: "Complete web application development from frontend to backend with modern technologies",
      icon: <Code className="h-8 w-8" />,
      features: [
        "React/Next.js Frontend Development",
        "Node.js Backend Architecture",
        "Database Design & Integration",
        "RESTful API Development",
        "Cloud Deployment & Hosting",
        "Performance Optimization",
      ],
    },
    {
      title: "Frontend Development",
      description: "Modern, responsive user interfaces with latest technologies and best practices",
      icon: <Globe className="h-8 w-8" />,
      features: [
        "Responsive Web Design",
        "React/Next.js Applications",
        "TypeScript Implementation",
        "UI/UX Implementation",
        "Performance Optimization",
        "Cross-browser Compatibility",
      ],
    },
    {
      title: "Backend Development",
      description: "Robust server-side applications and API development with scalable architecture",
      icon: <Zap className="h-8 w-8" />,
      features: [
        "RESTful API Development",
        "Database Design & Management",
        "User Authentication & Authorization",
        "Server Deployment & Configuration",
        "Performance Optimization",
        "Security Implementation",
      ],
    },
  ]

  const projects = [
    {
      id: 1,
      title: "Sant Shri Asharamji Gurukul",
      description:
        "A comprehensive web platform for Sant Shri Ashram Ji Gurukul to manage courses, teachers, events, gallery, and online admissions with a public site and admin panel.",
      image: "https://ik.imagekit.io/b5qewhvhb/Sant%20Shri%20Asharamji%20Gurukul/slide-3.png?updatedAt=1751782723813",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "Full-Stack",
      live: "https://amdgurukul.ashram.org/",
      featured: true,
    },
    {
      id: 2,
      title: "Akhil Graphic Design Studio",
      description:
        "Professional portfolio website showcasing graphic design services, past work, client testimonials, and custom design order system with modern UI.",
      image:
        "https://ik.imagekit.io/b5qewhvhb/Sant%20Shri%20Asharamji%20Gurukul/Screenshot%202025-07-14%20164949.png?updatedAt=1752492010793",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Framer Motion"],
      category: "Full-Stack",
      live: "https://akhil-graphic-first-page-frontend.vercel.app/",
      featured: true,
    },
{
  id: 3,
  title: "Media Toolkit",
  description:
    "Personal portfolio and showcase platform highlighting modern web development projects, placement preparation resources, and interactive tools. Built with clean UI/UX principles, it integrates dynamic components, responsive layouts, and a professional presentation of work and skills.",
  image:
    "https://ik.imagekit.io/b5qewhvhb/Sant%20Shri%20Asharamji%20Gurukul/dhanbyte-preview.png?updatedAt=1753100000000",
  tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express"],
  category: "Fullstack",
  live: "https://dhanbyte.me/",
  featured: true,
},

    {
      id: 4,
      title: "Shrikrishna Traders",
      description:
        "Professional business website for Shrikrishna Traders with product showcase, services information, company profile, and integrated contact system.",
      image:
        "https://ik.imagekit.io/b5qewhvhb/Sant%20Shri%20Asharamji%20Gurukul/Screenshot%202025-07-14%20170638.png?updatedAt=1752493079798",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Mapbox", "Stripe"],
      category: "Full-Stack",
      live: "https://www.shrikrishnatraders.in/",
      featured: true,
    },
    {
      id: 5,
      title: "Magalmay Website",
      description:
        "Modern business website with comprehensive features including product showcase, services information, company profile, and integrated contact system for enhanced user experience.",
      image:
        "https://ik.imagekit.io/b5qewhvhb/Screenshot%202025-08-21%20062354.png",
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
      category: "Frontend",
      live: "https://magalmay-website-project.vercel.app/",
      featured: false,
    },
    {
      id: 6,
      title: "Lakshmi Digital Wedding",
      description:
        "My first web development project - a personalized wedding website sharing couple's love story, event schedule, RSVP form, photo gallery, venue details, and live updates for guests with elegant design. Built with core web technologies.",
      image:
        "https://ik.imagekit.io/b5qewhvhb/Sant%20Shri%20Asharamji%20Gurukul/Screenshot%202025-07-14%20165225.png?updatedAt=1752492161904",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      live: "https://lakshmidigital.vercel.app/",
      featured: true,
    },
  ]

  const categories = ["All", "Full-Stack", "Frontend", "Backend", "Mobile"]
  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const phoneNumber = "919157499884"
    const message = `Hello Dhananjay! I'm ${formData.name} (${formData.email}). ${formData.message || "I'm interested in your services and would like to discuss a project."}`
    const encodedText = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank")
    setFormData({ name: "", email: "", message: "" })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleWhatsAppContact = () => {
    const phoneNumber = "919157499884"
    const message = "Hello Dhananjay! I'm interested in your services and would like to discuss a project."
    const encodedText = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundAnimation />
      <ThemeToggle />

      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <Button
          onClick={handleWhatsAppContact}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
          size="icon"
          title="Contact via WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Dhananjay
            </motion.div>
            <div className="hidden md:flex items-center md:pr-[4vw]  space-x-8">
              {[...Array(6)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(["home", "about", "services", "skills", "projects", "contact"][i])}
                  className="hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {["Home", "About", "Services", "Skills", "Projects", "Contact"][i]}
                </button>
              ))}
            </div>
            <div className="md:hidden pr-[8vw] flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                Menu
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dhananjay
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Full-Stack Developer & Video Editor who creates modern web applications and cinematic videos that bring
              ideas to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              >
                View My Work
              </Button>
              <Button variant="outline" size="lg" onClick={handleWhatsAppContact} className="px-8 py-3 bg-transparent">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Me
              </Button>
            </div>
            <div className="flex justify-center space-x-6 text-muted-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16"
          >
            <ArrowDown className="mx-auto animate-bounce text-muted-foreground" size={24} />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Passionate full-stack developer and video editor creating digital experiences that make a difference
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  I'm a dedicated full-stack developer and creative video editor who loves bringing ideas to life
                  through code and visual storytelling. With expertise in modern web technologies and professional video
                  editing, I've successfully delivered projects for 10+ clients across various industries.
                </p>
                <p className="text-lg leading-relaxed">
                  My journey combines technical excellence with creative vision. I specialize in React, Node.js, cloud
                  technologies, and professional video editing including wedding cinematography. I stay updated with the
                  latest industry trends to deliver cutting-edge solutions that exceed expectations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="px-3 py-1">
                    10+ Happy Clients
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    15+ Projects Completed
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    Full-Stack Specialist
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    Wedding Video Specialist
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent hover:bg-accent"
                  onClick={() =>
                    window.open(
                      "https://ik.imagekit.io/b5qewhvhb/Samira%20Alcaraz%20(1).pdf?updatedAt=1755736862893",
                      "_blank",
                    )
                  }
                >
                  <Download className="mr-2 h-4 w-4" />
                  View Resume
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full rounded-2xl bg-background flex items-center justify-center">
                  <img
                    className="rounded-2xl object-cover w-full h-[70vh] object-center"
                    src="https://ik.imagekit.io/b5qewhvhb/Sant%20Shri%20Asharamji%20Gurukul/WhatsApp%20Image%202025-07-14%20at%2017.21.55_a1d0f602.jpg?updatedAt=1752496047601"
                    alt="Dhananjay - Full Stack Developer & Video Editor"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">My Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive digital solutions from web development to video editing
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white w-fit group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold text-lg">{skill.name}</h3>
                          <Badge variant="outline">{skill.category}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={activeFilter === category ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                layout
              >
                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {project.featured && (
                      <Badge className="absolute top-2 right-2 bg-gradient-to-r from-blue-600 to-purple-600">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span className="line-clamp-1">{project.title}</span>
                      <div className="flex gap-2 ml-2">
                        {project.live && (
                          <Button size="icon" variant="ghost" asChild>
                            <a href={project.live} target="_blank" rel="noopener noreferrer" title="View Live Demo">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send me a message</CardTitle>
                  <CardDescription>I'll get back to you within 24 hours via WhatsApp</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Send via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <a href="mailto:dhananjay.win2004@gmail.com" className="hover:text-blue-600 transition-colors">
                      dhananjay.win2004@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                    <a href="https://wa.me/919157499884" className="hover:text-green-600 transition-colors">
                      +91 9157499884 (WhatsApp)
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Github className="h-5 w-5 text-blue-600" />
                    <a href="https://github.com/dhanbyte" className="hover:text-blue-600 transition-colors">
                      github.com/dhanbyte
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                    <a
                      href="https://linkedin.com/in/dhananjay-developer"
                      className="hover:text-blue-600 transition-colors"
                    >
                      linkedin.com/in/dhananjay-developer
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Available for</h4>
                <div className="grid grid-cols-2 gap-2">
                  <Badge variant="outline">Full-stack Development</Badge>
                  <Badge variant="outline">Frontend Development</Badge>
                  <Badge variant="outline">Backend Development</Badge>
                  <Badge variant="outline">Video Editing</Badge>
                  <Badge variant="outline">Wedding Videos</Badge>
                  <Badge variant="outline">API Development</Badge>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Response Time</h4>
                <p className="text-muted-foreground">
                  I typically respond to WhatsApp messages within 2-4 hours during business hours. For urgent projects,
                  feel free to mention it in your message.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2024 Dhananjay.me - Full Stack Developer & Video Editor. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/dhanbyte" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/dhananjay-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:dhananjay.win2004@gmail.com" title="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://wa.me/919157499884" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
