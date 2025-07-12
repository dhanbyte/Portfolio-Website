import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dhananjay - Full Stack Developer",
  description:
    "Professional portfolio of Dhananjay, a full-stack developer specializing in React, Node.js, and modern web technologies.",
  keywords: "full-stack developer, React, Node.js, web development, portfolio",
  authors: [{ name: "Dhananjay" }],
  openGraph: {
    title: "Dhananjay - Full Stack Developer",
    description: "Professional portfolio showcasing full-stack development projects and skills",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
