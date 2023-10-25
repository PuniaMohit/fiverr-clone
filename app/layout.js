import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Header'
import Footer from './Footer'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>{children}<Footer/></body>
    </html>
  )
}
