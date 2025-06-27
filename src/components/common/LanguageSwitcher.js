// src/components/common/LanguageSwitcher.js
'use client'

import { usePathname, useRouter } from 'next/navigation'
import { locales, localeNames } from '@/lib/i18n'

export default function LanguageSwitcher({ currentLocale }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLanguageChange = (newLocale) => {
    // 获取当前路径，移除语言前缀
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/'

    // 构建新的路径
    const newPath = `/${newLocale}${pathWithoutLocale}`

    // 跳转到新语言页面
    router.push(newPath)
  }

  return (
    <div className="relative">
      <select
        value={currentLocale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 backdrop-blur-sm appearance-none cursor-pointer hover:bg-white/20 transition-all duration-200"
      >
        {locales.map((locale) => (
          <option
            key={locale}
            value={locale}
            className="bg-gray-800 text-white"
          >
            {localeNames[locale]}
          </option>
        ))}
      </select>

      {/* Custom dropdown arrow */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg
          className="w-4 h-4 text-white"
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
      </div>
    </div>
  )
}
