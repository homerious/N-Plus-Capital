'use client'

import Image from "next/image";
import { getMessages } from "@/lib/i18n";

export default function Certification({ params }) {
  const locale = params.locale;
  const messages = getMessages(locale);
  const certificationMsg = messages.certification;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Banner */}
      <div id="hero-banner" className="h-screen w-full relative">
        {/* 视频背景 */}
        <video
          src="/video/p.mp4"
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />

        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-black/20" />

        {/* 文字内容 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white titleEnterAnimation2 px-4 w-full max-w-6xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 md:mb-8 font-bold">
            {certificationMsg.hero.title}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 md:mb-12 font-medium opacity-90">
            {certificationMsg.hero.titleEn}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto opacity-95">
            {certificationMsg.hero.description}
          </p>
        </div>
      </div>

      {/* 装饰元素 - 桌面端显示 */}
      <div className="hidden xl:block absolute left-0 top-0 w-[25vw] h-screen HomeDecorationLeft pointer-events-none">
        <Image
          alt={certificationMsg.decorations.leftSide}
          width={1240}
          height={3240}
          src="/images/top-right.svg"
          className="h-full w-full object-contain opacity-80"
          priority={false}
        />
      </div>
      <div className="hidden xl:block absolute right-0 top-0 h-screen w-[25vw] HomeDecorationRight pointer-events-none">
        <Image
          alt={certificationMsg.decorations.rightSide}
          width={1240}
          height={3240}
          className="h-full w-full object-contain opacity-80"
          src="/images/top-right.svg"
          priority={false}
        />
      </div>

      {/* 渐变过渡区域 */}
      <div className="h-1/6 w-full absolute top-[80vh] bg-gradient-to-b from-transparent to-white pointer-events-none" />

      {/* SFC持牌资质区域 */}
      <div className="relative bg-gradient-to-b from-white to-[#f0eddd] py-16 sm:py-24 md:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              {certificationMsg.sfcLicense.title}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 sm:mb-12 opacity-80">
              {certificationMsg.sfcLicense.titleEn}
            </h3>
          </div>

          {/* 公司基本信息 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 sm:mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 21V6c0-1 1-2 2-2h5c1 0 2 1 2 2v15m3-13h2c1 0 2 1 2 2v11M3 21h18m-4-5" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">{certificationMsg.sfcLicense.companyInfo.nameLabel}</h4>
                <p className="text-[#593725] text-lg font-medium">{certificationMsg.sfcLicense.companyInfo.name}</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">{certificationMsg.sfcLicense.companyInfo.licenseLabel}</h4>
                <p className="text-[#593725] text-2xl font-bold">{certificationMsg.sfcLicense.companyInfo.licenseNumber}</p>
              </div>
            </div>
          </div>

          {/* 牌照种类与监管范围 */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#ab9064] mb-8 text-center">
              {certificationMsg.sfcLicense.licenseTypes.title}
            </h3>
            <p className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed text-center mb-8 max-w-4xl mx-auto">
              {certificationMsg.sfcLicense.licenseTypes.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certificationMsg.sfcLicense.licenseTypes.types.map((type, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#ab9064]/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-[#ab9064]">{type.number}</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#ab9064] mb-4">{type.title}</h4>
                    <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 当前合规状态 */}
          <div className="mb-16 sm:mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#ab9064] mb-6 text-center">
                {certificationMsg.sfcLicense.complianceStatus.title}
              </h3>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
                  {certificationMsg.sfcLicense.complianceStatus.description}
                </p>
              </div>
            </div>
          </div>

          {/* SFC持牌的重要意义 */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#ab9064] mb-8 text-center">
              {certificationMsg.sfcLicense.importance.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certificationMsg.sfcLicense.importance.points.map((point, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ab9064]/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#ab9064]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={point.iconPath} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-[#ab9064] mb-3">{point.title}</h4>
                      <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 总结声明 */}
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
            <div className="w-24 h-24 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-6">
              {certificationMsg.sfcLicense.summary.title}
            </h4>
            <p className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
              {certificationMsg.sfcLicense.summary.description}
            </p>
          </div>
        </div>
      </div>

      {/* 合规政策概述区域 */}
      <div className="relative bg-gradient-to-b from-[#f0eddd] to-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              {certificationMsg.compliancePolicy.title}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 opacity-80">
              {certificationMsg.compliancePolicy.titleEn}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {certificationMsg.compliancePolicy.sections.map((section, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-6">{section.title}</h4>
                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#ab9064] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 合规承诺 */}
          <div className="mt-16 sm:mt-20 text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
            <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-6">
              {certificationMsg.compliancePolicy.commitment.title}
            </h4>
            <p className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
              {certificationMsg.compliancePolicy.commitment.description}
            </p>
          </div>
        </div>
      </div>

      {/* 底部装饰渐变 */}
      <div className="h-32 w-full bg-gradient-to-b from-white to-[#f0eddd]" />
    </div>
  );
}
