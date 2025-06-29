// src/components/layout/Header.js
'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import LanguageSwitcher from '@/components/common/LanguageSwitcher'
import { getMessages, defaultLocale } from "@/lib/i18n";

export default function Header({ locale, activeSection, onMobileMenuToggle, isMobileMenuOpen }) {
  const messages = getMessages(locale)
  const headerMsg = messages.header
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // 构建带语言前缀的链接
  const buildLocalizedHref = (path) => {
    // 如果是默认语言，不添加语言前缀
    if (locale === defaultLocale) {
      return path
    }
    // 非默认语言，添加语言前缀
    return `/${locale}${path}`
  }

  // 使用多语言的菜单项
  const menuItems = [
    { id: 'about', label: headerMsg.nav.about, href: buildLocalizedHref('/about') },
    { id: 'business', label: headerMsg.nav.business, href: buildLocalizedHref('/business') },
    { id: 'advantage', label: headerMsg.nav.advantage, href: buildLocalizedHref('/advantage') },
    { id: 'qualification', label: headerMsg.nav.qualification, href: buildLocalizedHref('/qualification') },
    { id: 'strength', label: headerMsg.nav.strength, href: buildLocalizedHref('/strength') },
    { id: 'team', label: headerMsg.nav.team, href: buildLocalizedHref('/team') },
    { id: 'contact', label: headerMsg.nav.contact, href: buildLocalizedHref('/contact') }
  ]

  // 检查是否在首页
  const isHomePage = pathname === '/' || pathname === `/${locale}` || pathname === `/${locale}/`

  // 检查当前页面是否匹配菜单项
  const isCurrentPage = (href) => {
    // 移除尾部斜杠进行比较
    const normalizedPathname = pathname.replace(/\/$/, '') || '/'
    const normalizedHref = href.replace(/\/$/, '') || '/'
    return normalizedPathname === normalizedHref
  }

  // 构建首页链接
  const homeHref = locale === defaultLocale ? '/' : `/${locale}`

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
          {/* 添加语言切换器到桌面端 */}
          <div className="absolute flex w-full left-0 justify-end p-6 pointer-events-none">
            <LanguageSwitcher currentLocale={locale} />
          </div>

          <div className="flex flex-col items-center justify-center h-36">
            {/* Logo */}
            <div className={`flex-shrink-0 mt-10 mb-3 ${isHomePage ? 'logo-animation' : ''}`}>
              <Link href={!locale ? '/' : `/${locale}`} className="flex items-center h-24">
                <Image
                  src="/images/logo.png"
                  alt={headerMsg.logoAlt}
                  width={150}
                  height={150}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className={`w-full flex justify-around items-center relative h-16 ${isHomePage ? 'nav-in-animation' : ''}`}>
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`relative px-3 py-2 text-white hover:text-gray-200 font-medium transition-colors duration-200 text-xl ${
                    isHomePage && activeSection === item.id
                      ? (isScrolled ? 'text-gray-900' : 'text-white')
                      : ''
                  } ${
                    isCurrentPage(item.href) ? 'text-gray-300' : ''
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-opacity duration-200 ${
                      isCurrentPage(item.href) ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </Link>
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
          <Link href={homeHref} className="flex items-center">
            <Image
              src="/images/logo.png"
              alt={headerMsg.logoAlt}
              width={100}
              height={100}
              className="h-8 sm:h-10 w-auto text-white"
            />
          </Link>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher - Mobile */}
            <div className="hidden sm:block">
              <LanguageSwitcher currentLocale={locale} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={onMobileMenuToggle}
              className={`p-2 rounded-md transition-all duration-200 ${
                isScrolled
                  ? 'text-white hover:bg-white/20'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={headerMsg.mobileMenuToggle}
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
