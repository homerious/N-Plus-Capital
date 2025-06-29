// src/contexts/LocaleContext.js
'use client'

import { createContext, useContext } from 'react'
import { defaultLocale, getMessages } from '@/lib/i18n'

const LocaleContext = createContext({
  locale: defaultLocale,
  messages: {}
})

export function LocaleProvider({ locale, children }) {
  const messages = getMessages(locale)

  const value = {
    locale,
    messages
  }

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context.locale
}

export function useMessages() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useMessages must be used within a LocaleProvider')
  }
  return context.messages
}

export function useLocaleContext() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useLocaleContext must be used within a LocaleProvider')
  }
  return context
}
