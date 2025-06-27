// src/lib/i18n.js (更新版本)
import { notFound } from 'next/navigation'

export const locales = ['zh-CN', 'zh-TW', 'en']
export const defaultLocale = 'zh-TW'

export const localeNames = {
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  'en': 'English'
}

// 获取消息内容，支持默认语言回退
export function getMessages(locale = defaultLocale) {
  try {
    return require(`../messages/${locale}.json`)
  } catch (error) {
    // 如果指定语言不存在，回退到默认语言
    if (locale !== defaultLocale) {
      try {
        return require(`../messages/${defaultLocale}.json`)
      } catch (fallbackError) {
        console.error(`Failed to load messages for both ${locale} and ${defaultLocale}`)
        notFound()
      }
    }
    console.error(`Failed to load messages for locale: ${locale}`)
    notFound()
  }
}

export function isValidLocale(locale) {
  return locales.includes(locale)
}

// 获取当前语言，如果没有指定则使用默认语言
export function getCurrentLocale(locale) {
  return locale && isValidLocale(locale) ? locale : defaultLocale
}

// 格式化语言代码用于 HTML
export function formatLocaleForHtml(locale = defaultLocale) {
  const localeMap = {
    'zh-CN': 'zh-Hans',
    'zh-TW': 'zh-Hant',
    'en': 'en'
  }
  return localeMap[locale] || locale
}
