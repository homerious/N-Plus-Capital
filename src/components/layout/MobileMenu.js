// src/components/layout/MobileMenu.js
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { getMessages } from '@/lib/i18n'
import LanguageSwitcher from '@/components/common/LanguageSwitcher'

export default function MobileMenu({ isOpen, onClose, locale, activeSection }) {
  const pathname = usePathname()
  const messages = getMessages(locale)

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
      className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
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
                    pathname === item.href
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
                    {(pathname === item.href || (isHomePage && activeSection === item.id)) && (
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
              <div className="text-white/70 text-sm mb-2">語言 / Language</div>
              <LanguageSwitcher locale={locale} />
            </div>

            {/* 联系信息或其他内容 */}
            <div className="text-white/60 text-sm">
              <div className="mb-2">© 2024 裕承家族辦公室</div>
              <div>All rights reserved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
