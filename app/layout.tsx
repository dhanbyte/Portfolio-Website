import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dhananjay - Full Stack Developer & Video Editor | Professional Web Development Services",
  description:
    "Professional Full Stack Developer and Video Editor specializing in React, Next.js, Node.js, and wedding video editing. Based in India, serving clients worldwide with modern web applications and cinematic video production.",
  keywords: [
    // Core Services
    "full stack developer",
    "video editor",
    "web developer",
    "frontend developer",
    "backend developer",
    "react developer",
    "nextjs developer",
    "nodejs developer",
    "javascript developer",
    "typescript developer",

    // Technologies
    "react",
    "next.js",
    "node.js",
    "express.js",
    "mongodb",
    "postgresql",
    "aws",
    "vercel",
    "netlify",
    "html",
    "css",
    "javascript",
    "typescript",
    "tailwind css",
    "bootstrap",
    "sass",
    "scss",
    "rest api",
    "graphql",
    "websockets",
    "socket.io",
    "jwt",
    "oauth",
    "authentication",

    // Video Editing
    "wedding video editing",
    "video editing services",
    "adobe premiere pro",
    "after effects",
    "cinematic videos",
    "event videography",
    "promotional videos",
    "social media videos",
    "color correction",
    "motion graphics",
    "video post production",

    // Location & Business
    "dhananjay",
    "dhananjay.me",
    "india developer",
    "freelance developer",
    "remote developer",
    "web development services",
    "custom web applications",
    "e-commerce development",
    "portfolio website",
    "business website",
    "responsive design",
    "mobile app development",

    // Industries
    "startup development",
    "small business websites",
    "enterprise applications",
    "educational platforms",
    "real estate websites",
    "healthcare applications",
    "fintech development",
    "e-learning platforms",
    "cms development",

    // Technical Skills
    "database design",
    "api development",
    "cloud deployment",
    "devops",
    "ci/cd",
    "performance optimization",
    "seo optimization",
    "web security",
    "testing",
    "agile development",
    "scrum",
    "git",
    "github",
    "version control",

    // Specific Services
    "website redesign",
    "website maintenance",
    "bug fixes",
    "feature development",
    "third party integrations",
    "payment gateway integration",
    "social media integration",
    "email marketing integration",
    "analytics integration",
    "chatbot development",

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

    // Quality & Standards
    "clean code",
    "best practices",
    "modern development",
    "scalable applications",
    "user experience",
    "user interface",
    "accessibility",
    "cross-browser compatibility",
    "mobile responsive",
    "progressive web apps",
    "single page applications",

    // Tools & Platforms
    "visual studio code",
    "figma",
    "adobe creative suite",
    "postman",
    "docker",
    "kubernetes",
    "jenkins",
    "webpack",
    "babel",
    "eslint",
    "prettier",
    "jest",
    "cypress",
    "selenium",
    "lighthouse",
    "google analytics",

    // Frameworks & Libraries
    "express framework",
    "fastify",
    "koa",
    "nestjs",
    "prisma",
    "mongoose",
    "sequelize",
    "typeorm",
    "redis",
    "elasticsearch",
    "firebase",
    "supabase",
    "stripe integration",
    "paypal integration",
    "razorpay integration",

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

    // Certifications & Education
    "computer science",
    "software engineering",
    "web development certification",
    "aws certified",
    "google cloud",
    "microsoft azure",
    "digital marketing",

    // Trends & Modern Tech
    "jamstack",
    "headless cms",
    "microservices",
    "serverless",
    "edge computing",
    "web3",
    "blockchain development",
    "ai integration",
    "machine learning",
    "chatgpt integration",
    "openai api",
    "automation",
    "workflow optimization",
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
    title: "Dhananjay - Full Stack Developer & Video Editor | Professional Web Development Services",
    description:
      "Professional Full Stack Developer and Video Editor specializing in React, Next.js, Node.js, and wedding video editing. Creating modern web applications and cinematic videos.",
    url: "https://dhananjay.me",
    siteName: "Dhananjay Portfolio",
    images: [
      {
        url: "https://ik.imagekit.io/b5qewhvhb/Sant%20Shri%20Asharamji%20Gurukul/WhatsApp%20Image%202025-07-14%20at%2017.21.55_a1d0f602.jpg?updatedAt=1752496047601",
        width: 1200,
        height: 630,
        alt: "Dhananjay - Full Stack Developer & Video Editor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhananjay - Full Stack Developer & Video Editor",
    description:
      "Professional Full Stack Developer and Video Editor specializing in React, Next.js, Node.js, and wedding video editing.",
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

        {/* Structured Data */}
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
              sameAs: ["https://github.com/dhanbyte", "https://linkedin.com/in/dhananjay-developer"],
              jobTitle: "Full Stack Developer & Video Editor",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              knowsAbout: [
                "Web Development",
                "Full Stack Development",
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

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://ik.imagekit.io" />

        {/* Additional Meta Tags for SEO */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="expires" content="never" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="resource-type" content="document" />
        <meta name="classification" content="business" />
        <meta name="category" content="technology" />
        <meta name="reply-to" content="dhananjay.win2004@gmail.com" />
        <meta name="owner" content="Dhananjay" />
        <meta name="url" content="https://dhananjay.me" />
        <meta name="identifier-URL" content="https://dhananjay.me" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Dhananjay Portfolio" />
        <meta name="category" content="Portfolio, Web Development, Video Editing" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="1 days" />
        <meta name="subtitle" content="Professional Full Stack Developer and Video Editor" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="og:email" content="dhananjay.win2004@gmail.com" />
        <meta name="og:phone_number" content="+919157499884" />
        <meta name="og:latitude" content="28.6139" />
        <meta name="og:longitude" content="77.2090" />
        <meta name="og:street-address" content="India" />
        <meta name="og:locality" content="India" />
        <meta name="og:region" content="India" />
        <meta name="og:postal-code" content="110001" />
        <meta name="og:country-name" content="India" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
