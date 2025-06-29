'use client'

import Image from "next/image";
import { getMessages } from "@/lib/i18n";

export default function Investment({ params }) {
  const locale = params.locale;
  const messages = getMessages(locale);
  const investmentMsg = messages.investment;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Banner */}
      <div id="hero-banner" className="h-screen w-full relative">
        <video
          src="/video/investment.mp4"
          poster="/images/loading.jpg"
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white titleEnterAnimation2 px-4 w-full max-w-6xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 md:mb-8 font-bold">
            {investmentMsg.hero.title}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 md:mb-12 font-medium opacity-90">
            {investmentMsg.hero.titleEn}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto opacity-95">
            {investmentMsg.hero.description}
          </p>
        </div>
      </div>

      {/* 装饰元素 - 桌面端显示 */}
      <div className="hidden xl:block absolute left-0 top-0 w-[25vw] h-screen HomeDecorationLeft pointer-events-none">
        <Image
          alt={investmentMsg.decorations.leftSide}
          width={1240}
          height={3240}
          src="/images/top-right.svg"
          className="h-full w-full object-contain opacity-80"
          priority={false}
        />
      </div>
      <div className="hidden xl:block absolute right-0 top-0 h-screen w-[25vw] HomeDecorationRight pointer-events-none">
        <Image
          alt={investmentMsg.decorations.rightSide}
          width={1240}
          height={3240}
          className="h-full w-full object-contain opacity-80"
          src="/images/top-right.svg"
          priority={false}
        />
      </div>

      {/* 渐变过渡区域 */}
      <div className="h-1/6 w-full absolute top-[80vh] bg-gradient-to-b from-transparent to-white pointer-events-none" />

      {/* 核心业务概述区域 */}
      <div className="relative bg-gradient-to-b from-white to-[#f0eddd] py-16 sm:py-24 md:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              {investmentMsg.coreBusiness.title}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 sm:mb-12 opacity-80">
              {investmentMsg.coreBusiness.titleEn}
            </h3>

            {/* 核心业务卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16 sm:mb-20">
              {investmentMsg.coreBusiness.items.map((business, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ab9064]/20 hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={business.iconPath} />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">{business.title}</h4>
                  <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                    {business.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 具体投资领域区域 */}
      <div className="relative bg-gradient-to-b from-[#f0eddd] to-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              {investmentMsg.investmentAreas.title}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 opacity-80">
              {investmentMsg.investmentAreas.titleEn}
            </h3>
            <p className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto mb-12">
              {investmentMsg.investmentAreas.description}
            </p>
          </div>

          {/* 投资方向卡片 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {investmentMsg.investmentAreas.areas.map((area, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#ab9064]/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-[#ab9064]">{index + 1}</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064]">{area.title}</h4>
                </div>
                <p className="text-sm text-[#ab9064] mb-4 font-medium">{area.subtitle}</p>
                <p className="text-[#593725] text-sm sm:text-base leading-relaxed mb-4">
                  {area.description}
                </p>
                <ul className="text-[#593725] text-sm leading-relaxed space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 投资优势 */}
          <div className="mt-16 sm:mt-20 bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
            <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-6 text-center">{investmentMsg.investmentAreas.advantagesTitle}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {investmentMsg.investmentAreas.advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#ab9064] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                    {advantage}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 服务客户类型区域 */}
      <div className="relative bg-gradient-to-b from-white to-[#f0eddd] py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              {investmentMsg.clientTypes.title}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 opacity-80">
              {investmentMsg.clientTypes.titleEn}
            </h3>
            <p className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto mb-12">
              {investmentMsg.clientTypes.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {investmentMsg.clientTypes.types.map((clientType, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={clientType.iconPath} />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064]">{clientType.title}</h4>
                </div>
                <p className="text-sm text-[#ab9064] mb-4 font-medium">{clientType.goal}</p>
                <ul className="text-[#593725] text-sm leading-relaxed space-y-2 mb-4">
                  {clientType.characteristics.map((characteristic, charIndex) => (
                    <li key={charIndex}>• {characteristic}</li>
                  ))}
                </ul>
                <div className="bg-[#ab9064]/5 rounded-lg p-4">
                  <p className="text-xs text-[#ab9064] font-medium mb-2">{clientType.recommendLabel}：</p>
                  <p className="text-xs text-[#593725]">{clientType.recommendedProducts}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
