// src/components/layout/Layout.js
'use client'

import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import MobileMenu from './MobileMenu'

export default function Layout({ children, locale }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // 监听滚动，更新活动导航项
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['aboutUs', 'investment', 'family', 'responsibility']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 监听路由变化，关闭移动端菜单
  useEffect(() => {
    closeMobileMenu()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        locale={locale}
        activeSection={activeSection}
        onMobileMenuToggle={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        locale={locale}
        activeSection={activeSection}
      />

      <main className={`app-main flex-1 transition-all duration-300 ${
        isMobileMenuOpen ? 'lg:ml-0' : ''
      }`}>
        {children}
      </main>

      <Footer locale={locale} />
    </div>
  )
}
