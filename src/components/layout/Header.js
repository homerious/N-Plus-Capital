// src/components/layout/Header.js
'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import LanguageSwitcher from '@/components/common/LanguageSwitcher'

export default function Header({ locale, activeSection, onMobileMenuToggle, isMobileMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const menuItems = [
    { id: 'about', label: '關於我們', href: '/about' },
    { id: 'business', label: '業務領域', href: '/business' },
    { id: 'advantage', label: '核心優勢', href: '/advantage' },
    { id: 'qualification', label: '資質認證', href: '/qualification' },
    { id: 'strength', label: '實力展現', href: '/strength' },
    { id: 'team', label: '專業團隊', href: '/team' },
    { id: 'contact', label: '聯絡我們', href: '/contact' }
  ]

  // 检查是否在首页
  const isHomePage = pathname === '/' || pathname === `/${locale}`

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Header */}
      <header className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-44 ${
        isScrolled
          ? 'bg-[rgba(171,144,100,0.7)] backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center h-40">
            {/* Logo */}
            <div className={`flex-shrink-0 mt-10 mb-3 ${pathname === '/' ? 'logo-animation' : ''}`}>
              <Link href={`/${locale ? locale : ''}`} className="flex items-center h-24">
                <h3 className={'text-5xl text-white text-center font-bold'} style={{ fontFamily: 'CormorantSC' }}>N PLUS CAPITAL</h3>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className={`w-full flex justify-around items-center relative h-16 ${pathname === '/' ? 'nav-in-animation' : ''}`}>
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative px-3 py-2 text-white hover:text-gray-200 font-medium transition-colors duration-200 text-xl ${
                    isHomePage && activeSection === item.id
                      ? (isScrolled ? 'text-gray-900' : 'text-white')
                      : ''
                  }`}
                >
                  {item.label}
                  <span
                    data-name={item.href}
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-white ${
                      new RegExp(pathname).test(item.href) && pathname !== '/' ? '' : 'hidden'
                    }`}
                  />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[rgba(171,144,100,0.95)] backdrop-blur-md shadow-lg'
          : 'bg-[rgba(0,0,0,0.3)] backdrop-blur-sm'
      }`}>
        <div className="flex items-center justify-between px-4 py-3 h-16">
          {/* Mobile Logo */}
          <Link href={`/${locale ? locale : ''}`} className="flex items-center">
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMCAxMGExIDEgMCAxIDAtMiAwek02IDEwYTEgMSAwIDAgMC0yIDB6bTE0LjI5MyAyLjcwN2ExIDEgMCAwIDAgMS40MTQtMS40MTR6TTEyIDNsLjcwNy0uNzA3YTEgMSAwIDAgMC0xLjQxNCAwem0tOS43MDcgOC4yOTNhMSAxIDAgMSAwIDEuNDE0IDEuNDE0ek03IDIyaDEwdi0ySDd6bTEzLTN2LTloLTJ2OXpNNiAxOXYtOUg0djl6bTE1LjcwNy03LjcwN2wtOS05bC0xLjQxNCAxLjQxNGw5IDl6bS0xMC40MTQtOWwtOSA5bDEuNDE0IDEuNDE0bDktOXpNMTcgMjJhMyAzIDAgMCAwIDMtM2gtMmExIDEgMCAwIDEtMSAxek03IDIwYTEgMSAwIDAgMS0xLTFINGEzIDMgMCAwIDAgMyAzeiIgLz4KPC9zdmc+"
              alt="Logo"
              width={140}
              height={50}
              className="h-8 sm:h-10 w-auto text-white"
            />
          </Link>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher - Mobile */}
            <div className="hidden sm:block">
              <LanguageSwitcher locale={locale} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={onMobileMenuToggle}
              className={`p-2 rounded-md transition-all duration-200 ${
                isScrolled
                  ? 'text-white hover:bg-white/20'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                {/* Hamburger/Close Icon Animation */}
                <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 top-2.5' : ''
                }`} />
                <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 top-2.5' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
