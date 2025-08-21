
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../app/globals.css"
import {ThemeProvider} from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      
    
        <link rel="icon" href="https://ik.imagekit.io/b5qewhvhb/Screenshot%202025-07-18%20093202.png?updatedAt=1752811510301" />

      </head>
      
      <body className={inter.className}>
 
 
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
