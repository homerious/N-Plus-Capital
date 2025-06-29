// src/components/layout/MobileMenu.js
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { getMessages, defaultLocale } from '@/lib/i18n'
import LanguageSwitcher from '@/components/common/LanguageSwitcher'

export default function MobileMenu({ isOpen, onClose, locale, activeSection }) {
  const pathname = usePathname()
  const messages = getMessages(locale)
  const mobileMenuMsg = messages.mobileMenu

  // 构建带语言前缀的链接
  const buildLocalizedHref = (path) => {
    if (locale === defaultLocale) {
      return path
    }
    return `/${locale}${path}`
  }

  const menuItems = [
    { id: 'about', label: messages.header.nav.about, href: buildLocalizedHref('/about') },
    { id: 'business', label: messages.header.nav.business, href: buildLocalizedHref('/business') },
    { id: 'advantage', label: messages.header.nav.advantage, href: buildLocalizedHref('/advantage') },
    { id: 'qualification', label: messages.header.nav.qualification, href: buildLocalizedHref('/qualification') },
    { id: 'strength', label: messages.header.nav.strength, href: buildLocalizedHref('/strength') },
    { id: 'team', label: messages.header.nav.team, href: buildLocalizedHref('/team') },
    { id: 'contact', label: messages.header.nav.contact, href: buildLocalizedHref('/contact') }
  ]

  // 检查是否在首页
  const isHomePage = pathname === '/' || pathname === `/${locale}` || pathname === `/${locale}/`

  // 检查当前页面是否匹配菜单项
  const isCurrentPage = (href) => {
    const normalizedPathname = pathname.replace(/\/$/, '') || '/'
    const normalizedHref = href.replace(/\/$/, '') || '/'
    return normalizedPathname === normalizedHref
  }

  // 防止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // 点击背景关闭菜单
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm "
      onClick={handleBackdropClick}
    >
      {/* 菜单面板 */}
      <div className={`fixed top-16 left-0 right-0 bottom-0 bg-[#ab9064] transform transition-transform duration-300 ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* 菜单内容 */}
          <div className="flex-1 px-6 py-8 overflow-y-auto">
            <nav className="space-y-1">
              {menuItems.map((item, index) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  className={`block px-4 py-4 text-lg font-medium rounded-lg transition-all duration-200 ${
                    isCurrentPage(item.href)
                      ? 'bg-white/20 text-white'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  } ${
                    isHomePage && activeSection === item.id
                      ? 'bg-white/15 text-white'
                      : ''
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {(isCurrentPage(item.href) || (isHomePage && activeSection === item.id)) && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                </Link>
              ))}
            </nav>
          </div>

          {/* 底部区域 */}
          <div className="px-6 py-6 border-t border-white/20">
            {/* 语言切换器 */}
            <div className="mb-4">
              <div className="text-white/70 text-sm mb-2">{mobileMenuMsg.languageLabel}</div>
              {/* 修改语言切换器样式，确保下拉菜单可见 */}
              <div className="relative z-50">
                <LanguageSwitcher currentLocale={locale} isMobile={true}/>
              </div>
            </div>

            {/* 联系信息或其他内容 */}
            <div className="text-white/60 text-sm">
              <div className="mb-2">{mobileMenuMsg.copyright}</div>
              <div>{mobileMenuMsg.allRightsReserved}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
