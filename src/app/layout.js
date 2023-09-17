import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "GDSC SSIT",
  image: "https://raw.githubusercontent.com/fenilmodi00/GCCP-Jams/main/public/assets/Screenshot%202023-09-12%20191408.png",
  type: "website",
  description: "This is the leaderboard for the GDSC SSIT GCCF Jams.",
  keywords: ["gccf", "jams", "ssit", "gdscssit"],
  robots: "index,follow",

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <head>
        
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        
      </body>
    </html>
  )
}
