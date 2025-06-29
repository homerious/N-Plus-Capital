'use client'

import Image from "next/image";
import { getMessages } from "@/lib/i18n";

export default function Advantages({ params }) {
  const locale = params.locale;
  const messages = getMessages(locale);
  const advantagesMsg = messages.advantages;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Banner */}
      <div id="hero-banner" className="h-screen w-full relative">
        <video
          src="/video/family.mp4"
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
            {advantagesMsg.hero.title}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 md:mb-12 font-medium opacity-90">
            {advantagesMsg.hero.titleEn}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto opacity-95">
            {advantagesMsg.hero.description}
          </p>
        </div>
      </div>

      {/* 装饰元素 - 桌面端显示 */}
      <div className="hidden xl:block absolute left-0 top-0 w-[25vw] h-screen HomeDecorationLeft pointer-events-none">
        <Image
          alt={advantagesMsg.decorations.leftSide}
          width={1240}
          height={3240}
          src="/images/top-right.svg"
          className="h-full w-full object-contain opacity-80"
          priority={false}
        />
      </div>
      <div className="hidden xl:block absolute right-0 top-0 h-screen w-[25vw] HomeDecorationRight pointer-events-none">
        <Image
          alt={advantagesMsg.decorations.rightSide}
          width={1240}
          height={3240}
          className="h-full w-full object-contain opacity-80"
          src="/images/top-right.svg"
          priority={false}
        />
      </div>

      {/* 渐变过渡区域 */}
      <div className="h-1/6 w-full absolute top-[80vh] bg-gradient-to-b from-transparent to-white pointer-events-none" />

      {/* 核心优势区域 */}
      <div className="relative bg-gradient-to-b from-white to-[#f0eddd] py-16 sm:py-24 md:py-32 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              {advantagesMsg.coreAdvantages.title}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 sm:mb-12 opacity-80">
              {advantagesMsg.coreAdvantages.titleEn}
            </h3>
          </div>

          {/* 四大核心优势 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16 sm:mb-20">
            {advantagesMsg.coreAdvantages.items.map((advantage, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={advantage.iconPath} />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4 text-center">{advantage.title}</h4>
                <p className="text-[#593725] text-sm sm:text-base leading-relaxed text-center">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 平台服务优势区域 */}
      <div className="relative bg-gradient-to-b from-[#f0eddd] to-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              {advantagesMsg.platformAdvantages.title}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 opacity-80">
              {advantagesMsg.platformAdvantages.titleEn}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {advantagesMsg.platformAdvantages.items.map((item, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ab9064]/20">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#ab9064]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-[#ab9064]">{index + 1}</span>
                  </div>
                  <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 信任理念 */}
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
            <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-6">
              {advantagesMsg.platformAdvantages.trustTitle}
            </h4>
            <p className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
              {advantagesMsg.platformAdvantages.trustDescription}
            </p>
          </div>
        </div>
      </div>

      {/* 客户服务特色区域 */}
      <div className="relative bg-gradient-to-b from-white to-[#f0eddd] py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              {advantagesMsg.customerService.title}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 opacity-80">
              {advantagesMsg.customerService.titleEn}
            </h3>
            <p className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
              {advantagesMsg.customerService.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* 服务特色卡片 */}
            {advantagesMsg.customerService.features.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#ab9064]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-lg font-bold text-[#ab9064]">{index + 1}</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#ab9064]">{service.title}</h4>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#ab9064] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 服务理念 */}
          <div className="mt-16 sm:mt-20 text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
            <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-6">
              {advantagesMsg.customerService.philosophyTitle}
            </h4>
            <p className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto mb-4">
              {advantagesMsg.customerService.philosophyDescription1}
            </p>
            <p className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
              {advantagesMsg.customerService.philosophyDescription2}
            </p>
          </div>
        </div>
      </div>

      {/* 底部装饰渐变 */}
      <div className="h-32 w-full bg-gradient-to-b from-[#f0eddd] to-white" />
    </div>
  );
}
