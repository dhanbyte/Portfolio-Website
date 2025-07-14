"use client";

import type React from "react";
import { MessageCircle } from "lucide-react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "next-themes";

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
  );
};

// Theme Toggle Component
const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50"
        disabled
      >
        <div className="h-5 w-5" />
      </Button>
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border"
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600" />
      )}
    </Button>
  );
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const skills = [
    { name: "React.js", level: 95, category: "Frontend" },
    { name: "Next.js", level: 75, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "Express.js", level: 85, category: "Backend" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "PostgreSQL", level: 75, category: "Database" },
    { name: "AWS", level: 70, category: "Cloud" },
  ];

  const projects = [
    {
      id: 1,
      title: "Sant Shri Asharamji Gurukul",
      description:
        "A web platform for Sant Shri Ashram Ji Gurukul to manage courses, teachers, events, gallery, and online admissions with a public site and admin panel.",
      image:
        "https://ik.imagekit.io/b5qewhvhb/Sant%20Shri%20Asharamji%20Gurukul/slide-3.png?updatedAt=1751782723813",
      tech: ["Next", "Node.js", "MongoDB", "Stripe"],
      category: "Full-Stack",
      github: "https://github.com/dhanbyte/Gurukul",
      live: "https://amdgurukul.ashram.org/",
      featured: true,
    },
    {
      id: 2,
      title: "Akhil Graphic",
      description:
        "Akhil Graphic is a professional portfolio website to showcase graphic design services, past work, client testimonials, and allow customers to request custom design orders online.",
      image:
        "https://ik.imagekit.io/b5qewhvhb/Sant%20Shri%20Asharamji%20Gurukul/Screenshot%202025-07-14%20164949.png?updatedAt=1752492010793",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      category: "Full-Stack",
      github: "https://github.com/dhanbyte/Akhil-Graphic-FirstPage_Frontend",
      live: "https://akhil-graphic-first-page-frontend.vercel.app/",
      featured: true,
    },
    {
      id: 3,
      title: "HouseCloud",
      description:
        "HouseCloud is a modern real estate platform that allows users to browse, filter, and explore property listings with photos, pricing, and detailed descriptions, enabling smooth property discovery and potential inquiries.",
      image:
        "https://ik.imagekit.io/b5qewhvhb/Sant%20Shri%20Asharamji%20Gurukul/Screenshot%202025-07-14%20165838.png?updatedAt=1752492590715",
      tech: ["Next js", "Node js", "Express", "Redis"],
      category: "Frontend",
      github: "https://github.com/dhanbyte",
      live: "https://housecloud-frontend.vercel.app/",
      featured: false,
    },
    {
      id: 4,
      title: "Shrikrishna Traders",
      description:
        "Property listing platform with advanced search, virtual tours, and mortgage calculator.",
      image:
        "https://ik.imagekit.io/b5qewhvhb/Sant%20Shri%20Asharamji%20Gurukul/Screenshot%202025-07-14%20170638.png?updatedAt=1752493079798",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
      category: "Full-Stack",
      github: "https://github.com/dhanbyte",
      live: "https://www.shrikrishnatraders.in/",
      featured: true,
    },
    {
      id: 5,
      title: "Chat App",
      description:
        "Microservices API gateway with rate limiting, authentication, and comprehensive logging.",
      image:
        "https://ik.imagekit.io/b5qewhvhb/Sant%20Shri%20Asharamji%20Gurukul/Screenshot%202025-07-14%20171155.png?updatedAt=1752493365555",
      tech: ["Node.js", "Express", "Redis", "JWT"],
      category: "Backend",
      github: "https://github.com/dhanbyte/chat-app",
      live: "",
      featured: false,
    },
    {
      id: 6,
      title: "Lakshmi Digital ",
      description:
        "A personalized wedding website that shares the couple’s love story, event schedule, RSVP form, photo gallery, venue details, and live updates for guests",
      image:
        "https://ik.imagekit.io/b5qewhvhb/Sant%20Shri%20Asharamji%20Gurukul/Screenshot%202025-07-14%20165225.png?updatedAt=1752492161904",
      tech: ["React Native", "Node.js", "MongoDB", "Stripe"],
      category: "Frontend",
      github: "https://github.com/dhanbyte/lakshmidigital",
      live: "https://lakshmidigital.vercel.app/",
      featured: true,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CTO",
      content:
        "Exceptional work on our e-commerce platform. Delivered on time with outstanding quality and attention to detail.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Digital Solutions",
      role: "Project Manager",
      content:
        "Professional, reliable, and technically excellent. The task management system exceeded our expectations.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "StartupHub",
      role: "Founder",
      content:
        "Transformed our business with a custom dashboard. Great communication and problem-solving skills.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      name: "David Kim",
      company: "PropTech Co.",
      role: "CEO",
      content:
        "Built our real estate platform from scratch. Impressive technical skills and business understanding.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "FinanceFlow",
      role: "Head of Engineering",
      content:
        "Delivered a robust API gateway that scaled perfectly. Would definitely work with again.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ];

  const categories = ["All", "Full-Stack", "Frontend", "Backend", "Mobile"];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "919157499884"; // ✅ Tumhara WhatsApp number
    const defaultMessage =
      "Hello Dhananjay, I’m interested in your portfolio and would like to connect with you.";

    const encodedText = encodeURIComponent(defaultMessage);

    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");

    // Optional: Reset the form
    setFormData({ name: "", email: "", message: "" });
  };
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundAnimation />
      <ThemeToggle />

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
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dhananjay
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Full-Stack Developer who builds modern web applications with
              React, Node.js, and cutting-edge technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16"
          >
            <ArrowDown
              className="mx-auto animate-bounce text-muted-foreground"
              size={24}
            />
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
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate full-stack developer with 1+ years of experience
              building scalable web applications
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
                  I'm a dedicated full-stack developer who loves creating
                  digital experiences that make a difference. With expertise in
                  modern web technologies, I've successfully delivered projects
                  for 5+ clients across various industries.
                </p>
                <p className="text-lg leading-relaxed">
                  My journey started with curiosity about how websites work, and
                  it evolved into a passion for building scalable, user-friendly
                  applications. I specialize in React, Node.js, and cloud
                  technologies, always staying updated with the latest industry
                  trends.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary">5+ Happy Clients</Badge>
                  <Badge variant="secondary">10+ Projects Completed</Badge>
                  <Badge variant="secondary">1+ Years Experience</Badge>
                </div>
                <a
                  href="/Dhananjay.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="mt-4 bg-transparent">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className=" rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-[100%] h-90 rounded-2xl bg-background flex items-center justify-center">
                  <img
                    className="rounded-2xl object-cover w-[100%] h-[70vh] object-center"
                    src="https://ik.imagekit.io/b5qewhvhb/Sant%20Shri%20Asharamji%20Gurukul/WhatsApp%20Image%202025-07-14%20at%2017.21.55_a1d0f602.jpg?updatedAt=1752496047601"
                    alt="Profile"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
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
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">{skill.name}</h3>
                      <Badge variant="outline">{skill.category}</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {skill.level}% proficiency
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
                className={
                  activeFilter === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600"
                    : ""
                }
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
                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.featured && (
                      <Badge className="absolute top-2 right-2 bg-gradient-to-r from-blue-600 to-purple-600">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      {project.title}
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button size="icon" variant="ghost" asChild>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What my clients say about working with me
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "{testimonial.content}"
                    </p>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
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
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how I can help
              bring your ideas to life.
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
                  <CardDescription>
                    I'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                    >
                      Send Message
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
                    <a href="mailto:dhananjay.win2004@gmail.com">
                      <span>dhananjay.win2004@gmail.com</span>
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Github className="h-5 w-5 text-blue-600" />

                    <a href="https://github.com/dhanbyte">
                      <span>github.com/dhananjay</span>
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                    <a href="linkedin.com/in/dhananjay">
                      <span>linkedin.com/in/dhananjay</span>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Available for</h4>
                <div className="space-y-2">
                  <Badge variant="outline">Full-stack Development</Badge>
                  <Badge variant="outline">Frontend Development</Badge>
                  <Badge variant="outline">API Development</Badge>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Response Time</h4>
                <p className="text-muted-foreground">
                  I typically respond to emails within 24 hours. For urgent
                  projects, feel free to mention it in your message.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2024 Dhananjay. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:dhananjay@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
