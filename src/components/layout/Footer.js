// src/components/layout/Footer.js
'use client'

import Image from 'next/image'
import { getMessages } from '@/lib/i18n'

export default function Footer({ locale }) {
  const messages = getMessages(locale)
  const footerMsg = messages.footer

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer-box bg-[#e9b97e]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-30 pb-5">
        {/* Contact Information */}
        <div className="contact-line flex flex-col lg:flex-row text-white gap-8 sm:gap-12 lg:gap-60">
          {/* Address */}
          <div className="contact-box flex-1">
            <div className="text-2xl sm:text-3xl mb-1">{footerMsg.address.title}</div>
            <div className="text-lg sm:text-xl mb-4 lg:mb-8">{footerMsg.address.titleEn}</div>

            <a
              className="content text-[#593725] block mb-4 lg:mb-8 hover:underline transition-all duration-200"
              href="https://maps.app.goo.gl/JW1EDwgcbuG1LeFB6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-base sm:text-lg leading-relaxed">
                {footerMsg.address.companyName}<br />
                {footerMsg.address.addressLocal}
              </div>
            </a>

            <a
              className="sub-content text-[#593725] block hover:underline transition-all duration-200"
              href="https://maps.app.goo.gl/JW1EDwgcbuG1LeFB6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-sm sm:text-base leading-relaxed max-w-xs lg:max-w-none">
                {footerMsg.address.companyNameEn} <br />
                {footerMsg.address.addressEn}
              </div>
            </a>
          </div>

          {/* Contact */}
          <div className="contact-box flex-1">
            <div className="text-2xl sm:text-3xl mb-1">{footerMsg.contact.title}</div>
            <div className="text-lg sm:text-xl mb-4 lg:mb-8">{footerMsg.contact.titleEn}</div>

            <div className="content img-content flex gap-3 items-center text-[#593725]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12.8"
                viewBox="0 0 12 9.6"
                className="email-icon flex-shrink-0"
              >
                <path
                  id="email_icon"
                  d="M15,7.2A1.2,1.2,0,0,0,13.8,6H4.2A1.2,1.2,0,0,0,3,7.2v7.2a1.2,1.2,0,0,0,1.2,1.2h9.6A1.2,1.2,0,0,0,15,14.4Zm-1.2,0L9,10.2l-4.8-3Zm0,7.2H4.2v-6l4.8,3,4.8-3Z"
                  transform="translate(-3 -6)"
                  fill="#593725"
                />
              </svg>
              <a
                href={`mailto:${footerMsg.contact.email}`}
                className="text-sm sm:text-base hover:underline transition-all duration-200 break-all"
              >
                {footerMsg.contact.email}
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="contact-box flex-1 lg:flex-initial hidden" >
            <div className="text-2xl sm:text-3xl mb-1">{footerMsg.socialMedia.title}</div>
            <div className="text-lg sm:text-xl mb-4 lg:mb-8">{footerMsg.socialMedia.titleEn}</div>

            <div className="flex gap-4">
              <a
                href={footerMsg.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                aria-label={footerMsg.socialMedia.linkedinLabel}
              >
                <svg
                  id="linkedin_icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="linkedin-img cursor-pointer hover:opacity-80 transition-opacity duration-200"
                >
                  <path
                    d="M11.915,11.363h4.457v2.22a5.113,5.113,0,0,1,4.762-2.424c4.741,0,5.867,2.542,5.867,7.2V27H22.2V19.426c0-2.656-.642-4.153-2.276-4.153-2.267,0-3.209,1.614-3.209,4.152V27h-4.8ZM3.684,26.8h4.8V11.159h-4.8ZM9.172,6.06a3.036,3.036,0,0,1-.9,2.162A3.085,3.085,0,0,1,3,6.06,3.041,3.041,0,0,1,3.9,3.9a3.1,3.1,0,0,1,4.364,0A3.046,3.046,0,0,1,9.172,6.06Z"
                    transform="translate(-3 -3)"
                    fill="#593725"
                  />
                </svg>
              </a>

              {/* 可以添加更多社交媒体图标 */}
              {/*
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg width="28" height="28" viewBox="0 0 24 24" className="cursor-pointer hover:opacity-80 transition-opacity duration-200">
                  // 其他社交媒体图标
                </svg>
              </a>
              */}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 my-6 sm:my-8 lg:my-7.5" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-sm sm:text-base">
          <div className="left order-2 sm:order-1 hidden">
            <span className="cursor-pointer hover:underline transition-all duration-200">
              {footerMsg.legal.termsOfUse}
            </span>
            <span className="mx-2 text-white/60">丨</span>
            <span className="cursor-pointer hover:underline transition-all duration-200">
              {footerMsg.legal.privacyPolicy}
            </span>
          </div>
          <div className="right order-1 sm:order-2 text-center sm:text-right">
            <span className="text-xs sm:text-sm lg:text-base">
              {footerMsg.legal.copyright}
            </span>
          </div>
        </div>

        {/* 回到顶部按钮 - 移动端 */}
        <button
          onClick={scrollToTop}
          className=" hidden lg:hidden fixed bottom-6 right-6 w-12 h-12 bg-[#ab9064] text-white rounded-full shadow-lg hover:bg-[#9a7f57] transition-all duration-200 z-40 flex items-center justify-center"
          aria-label={footerMsg.backToTop}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transform rotate-90"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
      </div>
    </footer>
  )
}
