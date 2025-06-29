// src/components/common/LanguageSwitcher.js
'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { locales, localeNames, defaultLocale } from '@/lib/i18n'

export default function LanguageSwitcher({ currentLocale, isMobile }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const dropdownRef = useRef(null)

  // 获取当前实际的语言代码
  const getCurrentLocale = () => {
    if (!currentLocale) {
      const segments = pathname.split('/').filter(Boolean)
      if (segments.length > 0 && locales.includes(segments[0])) {
        return segments[0]
      }
      return defaultLocale
    }
    return currentLocale
  }

  const actualCurrentLocale = getCurrentLocale()

  const handleLanguageChange = (newLocale) => {
    // 获取当前路径，移除所有可能的语言前缀
    let pathWithoutLocale = pathname

    locales.forEach(locale => {
      if (pathWithoutLocale.startsWith(`/${locale}`)) {
        pathWithoutLocale = pathWithoutLocale.replace(`/${locale}`, '')
      }
    })

    if (!pathWithoutLocale.startsWith('/')) {
      pathWithoutLocale = '/' + pathWithoutLocale
    }

    if (!pathWithoutLocale || pathWithoutLocale === '/') {
      pathWithoutLocale = '/'
    }

    // 构建新的路径
    let newPath
    if (newLocale === defaultLocale) {
      newPath = pathWithoutLocale === '/' ? '/' : pathWithoutLocale
    } else {
      newPath = pathWithoutLocale === '/' ? `/${newLocale}` : `/${newLocale}${pathWithoutLocale}`
    }

    setIsOpen(false)
    router.push(newPath)
  }

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative pointer-events-auto" ref={dropdownRef}>
      {/* 触发按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-all duration-200 min-w-[120px] flex items-center justify-between"
        aria-label="选择语言 / Select Language"
        aria-expanded={isOpen}
      >
        <span>{localeNames[actualCurrentLocale]}</span>
        <svg
          className={`w-4 h-4 text-white opacity-70 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* 下拉菜单 */}
      {isOpen && (
        <div className={`absolute top-full left-0 mt-1 w-full bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg z-[60] overflow-hidden ${isMobile ? '-translate-y-[125%]' : ''}`}>
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-white/20 transition-colors duration-150 ${
                locale === actualCurrentLocale
                  ? 'bg-white/30 text-gray-900 font-medium'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {localeNames[locale]}
              {locale === actualCurrentLocale && (
                <span className="float-right">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
