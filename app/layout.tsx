
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../app/globals.css"
import {ThemeProvider} from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dhananjay - Full Stack Developer & Video Editor | Professional Web Development Services India",
  description:
    "Professional Full Stack Developer and Video Editor specializing in React, Next.js, Node.js, and wedding video editing. Based in India, serving clients worldwide with modern web applications and cinematic video production. Expert in JavaScript, TypeScript, MongoDB, PostgreSQL, AWS cloud services.",
  keywords: [
    // Core Services
    "full stack developer india",
    "video editor india",
    "web developer",
    "frontend developer",
    "backend developer",
    "react developer",
    "nextjs developer",
    "nodejs developer",
    "javascript developer",
    "typescript developer",
    "freelance developer",
    "remote developer",
    "web development services",
    "custom web applications",
    "responsive web design",
    "mobile app development",

    // Technologies - Frontend
    "react",
    "react.js",
    "next.js",
    "nextjs",
    "javascript",
    "typescript",
    "html5",
    "css3",
    "tailwind css",
    "bootstrap",
    "sass",
    "scss",
    "framer motion",
    "redux",
    "context api",
    "hooks",
    "jsx",
    "tsx",
    "webpack",
    "vite",
    "babel",

    // Technologies - Backend
    "node.js",
    "nodejs",
    "express.js",
    "express",
    "fastify",
    "koa",
    "nestjs",
    "rest api",
    "restful api",
    "graphql",
    "websockets",
    "socket.io",
    "jwt",
    "oauth",
    "authentication",
    "authorization",
    "middleware",
    "cors",
    "helmet",
    "bcrypt",
    "passport",

    // Databases
    "mongodb",
    "mongoose",
    "postgresql",
    "mysql",
    "sqlite",
    "redis",
    "elasticsearch",
    "firebase",
    "supabase",
    "prisma",
    "typeorm",
    "sequelize",
    "database design",
    "database optimization",
    "nosql",
    "sql",

    // Cloud & DevOps
    "aws",
    "amazon web services",
    "vercel",
    "netlify",
    "heroku",
    "digital ocean",
    "google cloud",
    "microsoft azure",
    "docker",
    "kubernetes",
    "jenkins",
    "ci/cd",
    "github actions",
    "deployment",
    "cloud hosting",
    "serverless",
    "lambda functions",

    // Video Editing
    "wedding video editing",
    "video editing services",
    "adobe premiere pro",
    "after effects",
    "final cut pro",
    "davinci resolve",
    "cinematic videos",
    "event videography",
    "promotional videos",
    "social media videos",
    "youtube videos",
    "color correction",
    "color grading",
    "motion graphics",
    "video post production",
    "video editing portfolio",
    "professional video editor",
    "wedding cinematography",
    "event coverage",
    "video storytelling",

    // Location & Business
    "dhananjay",
    "dhananjay.me",
    "india developer",
    "indian web developer",
    "mumbai developer",
    "delhi developer",
    "bangalore developer",
    "pune developer",
    "hyderabad developer",
    "chennai developer",
    "freelance india",
    "remote work india",
    "outsourcing india",
    "offshore development",

    // Industries & Niches
    "startup development",
    "small business websites",
    "enterprise applications",
    "educational platforms",
    "e-learning websites",
    "real estate websites",
    "healthcare applications",
    "fintech development",
    "e-commerce development",
    "cms development",
    "blog development",
    "portfolio websites",
    "business websites",
    "landing pages",
    "corporate websites",

    // Technical Skills
    "api development",
    "microservices",
    "performance optimization",
    "seo optimization",
    "web security",
    "testing",
    "unit testing",
    "integration testing",
    "jest",
    "cypress",
    "selenium",
    "agile development",
    "scrum",
    "git",
    "github",
    "version control",
    "code review",
    "clean code",
    "best practices",

    // Specific Services
    "website redesign",
    "website maintenance",
    "bug fixes",
    "feature development",
    "third party integrations",
    "payment gateway integration",
    "stripe integration",
    "paypal integration",
    "razorpay integration",
    "social media integration",
    "email marketing integration",
    "analytics integration",
    "chatbot development",
    "crm integration",

    // Content & SEO
    "professional portfolio",
    "developer portfolio",
    "web development portfolio",
    "video editing portfolio",
    "client testimonials",
    "case studies",
    "technical blog",
    "development tutorials",
    "coding best practices",
    "web development tips",
    "programming tutorials",

    // Pricing & Packages
    "affordable web development",
    "competitive pricing",
    "custom quotes",
    "project-based pricing",
    "hourly rates",
    "maintenance packages",
    "support services",
    "consultation services",
    "technical advisory",
    "web development cost",
    "video editing rates",

    // Quality & Standards
    "modern development",
    "scalable applications",
    "user experience",
    "user interface",
    "ui/ux design",
    "accessibility",
    "wcag compliance",
    "cross-browser compatibility",
    "mobile responsive",
    "progressive web apps",
    "pwa",
    "single page applications",
    "spa",
    "server side rendering",
    "ssr",
    "static site generation",
    "ssg",

    // Tools & Platforms
    "visual studio code",
    "vscode",
    "figma",
    "adobe creative suite",
    "photoshop",
    "illustrator",
    "postman",
    "insomnia",
    "mongodb compass",
    "pgadmin",
    "tableplus",
    "github desktop",
    "sourcetree",
    "slack",
    "discord",
    "zoom",
    "google meet",

    // Frameworks & Libraries
    "express framework",
    "react framework",
    "vue.js",
    "angular",
    "svelte",
    "gatsby",
    "nuxt.js",
    "material ui",
    "ant design",
    "chakra ui",
    "styled components",
    "emotion",
    "axios",
    "fetch api",
    "lodash",
    "moment.js",
    "date-fns",

    // Soft Skills
    "problem solving",
    "creative solutions",
    "client communication",
    "project management",
    "deadline oriented",
    "quality assurance",
    "continuous learning",
    "team collaboration",
    "mentoring",
    "leadership",
    "time management",
    "multitasking",
    "attention to detail",

    // Certifications & Education
    "computer science",
    "software engineering",
    "web development certification",
    "aws certified",
    "google cloud certified",
    "microsoft certified",
    "mongodb certified",
    "react certified",
    "node.js certified",
    "digital marketing",
    "seo certified",

    // Trends & Modern Tech
    "jamstack",
    "headless cms",
    "contentful",
    "strapi",
    "sanity",
    "ghost cms",
    "wordpress headless",
    "shopify development",
    "woocommerce",
    "magento",
    "web3",
    "blockchain development",
    "nft development",
    "cryptocurrency",
    "ai integration",
    "machine learning",
    "chatgpt integration",
    "openai api",
    "automation",
    "workflow optimization",
    "zapier integration",

    // Local SEO
    "web developer near me",
    "video editor near me",
    "freelance developer india",
    "hire web developer",
    "hire video editor",
    "outsource development",
    "remote development team",
    "indian tech talent",
    "cost effective development",
    "quality web development",
  ].join(", "),
  authors: [{ name: "Dhananjay", url: "https://dhananjay.me" }],
  creator: "Dhananjay",
  publisher: "Dhananjay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dhananjay.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dhananjay - Full Stack Developer & Video Editor | Professional Web Development Services India",
    description:
      "Professional Full Stack Developer and Video Editor specializing in React, Next.js, Node.js, and wedding video editing. Creating modern web applications and cinematic videos for clients worldwide.",
    url: "https://dhananjay.me",
    siteName: "Dhananjay Portfolio - Full Stack Developer & Video Editor",
    images: [
      {
        url: "https://ik.imagekit.io/b5qewhvhb/Sant%20Shri%20Asharamji%20Gurukul/WhatsApp%20Image%202025-07-14%20at%2017.21.55_a1d0f602.jpg?updatedAt=1752496047601",
        width: 1200,
        height: 630,
        alt: "Dhananjay - Full Stack Developer & Video Editor Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhananjay - Full Stack Developer & Video Editor",
    description:
      "Professional Full Stack Developer and Video Editor specializing in React, Next.js, Node.js, and wedding video editing. Expert in modern web technologies.",
    images: [
      "https://ik.imagekit.io/b5qewhvhb/Sant%20Shri%20Asharamji%20Gurukul/WhatsApp%20Image%202025-07-14%20at%2017.21.55_a1d0f602.jpg?updatedAt=1752496047601",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Dhananjay Portfolio" />

        {/* Additional Meta Tags for Better SEO */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="3 days" />
        <meta name="expires" content="never" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="resource-type" content="document" />
        <meta name="classification" content="business" />
        <meta name="category" content="technology, web development, video editing" />
        <meta name="reply-to" content="dhananjay.win2004@gmail.com" />
        <meta name="owner" content="Dhananjay" />
        <meta name="url" content="https://dhananjay.me" />
        <meta name="identifier-URL" content="https://dhananjay.me" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Dhananjay Portfolio - Full Stack Developer & Video Editor" />
        <meta name="subtitle" content="Professional Full Stack Developer and Video Editor from India" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Open Graph Additional Tags */}
        <meta property="og:email" content="dhananjay.win2004@gmail.com" />
        <meta property="og:phone_number" content="+919157499884" />
        <meta property="og:country-name" content="India" />
        <meta property="og:region" content="India" />
        <meta property="og:locality" content="India" />

        {/* Business Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dhananjay",
              url: "https://dhananjay.me",
              image:
                "https://ik.imagekit.io/b5qewhvhb/Sant%20Shri%20Asharamji%20Gurukul/WhatsApp%20Image%202025-07-14%20at%2017.21.55_a1d0f602.jpg?updatedAt=1752496047601",
              sameAs: [
                "https://github.com/dhanbyte",
                "https://linkedin.com/in/dhananjay-developer",
                "https://wa.me/919157499884",
              ],
              jobTitle: "Full-Stack Developer & Video Editor",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              knowsAbout: [
                "Web Development",
                "Full-Stack Development",
                "Video Editing",
                "React.js",
                "Next.js",
                "Node.js",
                "Wedding Videography",
              ],
              email: "dhananjay.win2004@gmail.com",
              telephone: "+919157499884",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
