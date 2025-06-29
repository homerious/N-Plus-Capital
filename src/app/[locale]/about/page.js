'use client'

import Image from "next/image";
import { getMessages } from "@/lib/i18n";

export default function About({ params }) {
  const locale = params.locale;
  const messages = getMessages(locale);
  const aboutMsg = messages.about;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Banner */}
      <div id="hero-banner" className="h-screen w-full relative">
        {/* 视频背景 */}
        <video
          src="/video/aboutUs.mp4"
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
            {aboutMsg.hero.title}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 md:mb-12 font-medium opacity-90">
            {aboutMsg.hero.titleEn}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto opacity-95">
            {aboutMsg.hero.description}
          </p>
        </div>
      </div>

      {/* 装饰元素 - 桌面端显示 */}
      <div className="hidden xl:block absolute left-0 top-0 w-[25vw] h-screen HomeDecorationLeft pointer-events-none">
        <Image
          alt={aboutMsg.decorations.leftSide}
          width={1240}
          height={3240}
          src="/images/top-right.svg"
          className="h-full w-full object-contain opacity-80"
          priority={false}
        />
      </div>
      <div className="hidden xl:block absolute right-0 top-0 h-screen w-[25vw] HomeDecorationRight pointer-events-none">
        <Image
          alt={aboutMsg.decorations.rightSide}
          width={1240}
          height={3240}
          className="h-full w-full object-contain opacity-80"
          src="/images/top-right.svg"
          priority={false}
        />
      </div>

      {/* 渐变过渡区域 */}
      <div className="h-1/6 w-full absolute top-[80vh] bg-gradient-to-b from-transparent to-white pointer-events-none" />

      {/* 公司概况区域 */}
      <div className="relative bg-gradient-to-b from-white to-[#f0eddd] py-16 sm:py-24 md:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              {aboutMsg.overview.title}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 sm:mb-12 opacity-80">
              {aboutMsg.overview.titleEn}
            </h3>

            {/* 公司基本信息 */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-[#ab9064]/20">
                <h3 className="text-[#593725] lg:text-2xl font-semibold sm:text-xl mb-3">{aboutMsg.overview.companyInfo.name.value}</h3>
                <p className="text-lg sm:text-xl font-medium text-[#ab9064]">{aboutMsg.overview.companyInfo.name.label}</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-[#ab9064]/20">
                <h3 className="text-[#593725] lg:text-2xl font-semibold text-sm sm:text-base mb-3">{aboutMsg.overview.companyInfo.license.value}</h3>
                <p className="text-lg sm:text-xl font-medium text-[#ab9064]">{aboutMsg.overview.companyInfo.license.label}</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-[#ab9064]/20">
                <h3 className="text-[#593725] lg:text-2xl font-semibold text-sm sm:text-base mb-3">{aboutMsg.overview.companyInfo.history.value}</h3>
                <p className="text-lg sm:text-xl font-medium text-[#ab9064]">{aboutMsg.overview.companyInfo.history.label}</p>
              </div>
            </div>

            <div className="text-sm sm:text-lg lg:text-xl leading-relaxed sm:leading-relaxed lg:leading-loose text-[#593725] max-w-4xl mx-auto">
              <p className="mb-6">
                {aboutMsg.overview.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 使命愿景区域 */}
      <div className="relative bg-gradient-to-b from-[#f0eddd] to-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* 使命 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 shadow-xl border border-[#ab9064]/20">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#ab9064] mb-4 font-bold">
                  {aboutMsg.mission.title}
                </h3>
                <h4 className="text-lg sm:text-xl text-[#ab9064] mb-6 opacity-80">
                  {aboutMsg.mission.titleEn}
                </h4>
                <div className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed space-y-4">
                  <p className="font-semibold text-lg sm:text-xl text-[#ab9064] mb-4">
                    {aboutMsg.mission.highlight}
                  </p>
                  <p>
                    {aboutMsg.mission.description}
                  </p>
                  <p className="font-medium text-[#ab9064]">
                    {aboutMsg.mission.commitment}
                  </p>
                </div>
              </div>
            </div>

            {/* 愿景 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 shadow-xl border border-[#ab9064]/20">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#ab9064] mb-4 font-bold">
                  {aboutMsg.vision.title}
                </h3>
                <h4 className="text-lg sm:text-xl text-[#ab9064] mb-6 opacity-80">
                  {aboutMsg.vision.titleEn}
                </h4>
                <div className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed space-y-4">
                  <p className="font-semibold text-lg sm:text-xl text-[#ab9064] mb-4">
                    {aboutMsg.vision.highlight}
                  </p>
                  <p>
                    {aboutMsg.vision.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 核心价值观区域 */}
      <div className="relative bg-gradient-to-b from-white to-[#f0eddd] py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              {aboutMsg.values.title}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 opacity-80">
              {aboutMsg.values.titleEn}
            </h3>
          </div>

          {/* 价值观网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {aboutMsg.values.items.map((value, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ab9064]/20 hover:shadow-2xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.iconPath} />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">{value.title}</h4>
                  <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 底部装饰渐变 */}
      <div className="h-32 w-full bg-gradient-to-b from-[#f0eddd] to-white" />
    </div>
  );
}
