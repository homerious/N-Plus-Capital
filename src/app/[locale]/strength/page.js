'use client'

import Image from "next/image";
import { getMessages } from "@/lib/i18n";

export default function Strength({ params }) {
  const locale = params.locale;
  const messages = getMessages(locale);
  const strengthMsg = messages.strength;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Banner */}
      <div id="hero-banner" className="h-screen w-full relative">
        <video
          src="/video/q.mp4"
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
            {strengthMsg.hero.title}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 md:mb-12 font-medium opacity-90">
            {strengthMsg.hero.titleEn}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto opacity-95">
            {strengthMsg.hero.description}
          </p>
        </div>
      </div>

      {/* 装饰元素 - 桌面端显示 */}
      <div className="hidden xl:block absolute left-0 top-0 w-[25vw] h-screen HomeDecorationLeft pointer-events-none">
        <Image
          alt={strengthMsg.decorations.leftSide}
          width={1240}
          height={3240}
          src="/images/top-right.svg"
          className="h-full w-full object-contain opacity-80"
          priority={false}
        />
      </div>
      <div className="hidden xl:block absolute right-0 top-0 h-screen w-[25vw] HomeDecorationRight pointer-events-none">
        <Image
          alt={strengthMsg.decorations.rightSide}
          width={1240}
          height={3240}
          className="h-full w-full object-contain opacity-80"
          src="/images/top-right.svg"
          priority={false}
        />
      </div>

      {/* 渐变过渡区域 */}
      <div className="h-1/6 w-full absolute top-[80vh] bg-gradient-to-b from-transparent to-white pointer-events-none" />

      {/* 资产规模与管理实力区域 */}
      <div className="relative bg-gradient-to-b from-white to-[#f0eddd] py-16 sm:py-24 md:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              {strengthMsg.assetManagement.title}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 sm:mb-12 opacity-80">
              {strengthMsg.assetManagement.titleEn}
            </h3>
          </div>

          {/* 核心数据展示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 sm:mb-20">
            {strengthMsg.assetManagement.coreData.map((data, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20 text-center">
                <div className="w-20 h-20 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={data.iconPath} />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">{data.title}</h4>
                <p className="text-3xl sm:text-4xl font-bold text-[#593725] mb-2">{data.value}</p>
                <p className="text-[#593725] text-sm sm:text-base">{data.unit}</p>
              </div>
            ))}
          </div>

          {/* 管理团队实力 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20 mb-16 sm:mb-20">
            <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-6 text-center">
              {strengthMsg.assetManagement.teamStrength.title}
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {strengthMsg.assetManagement.teamStrength.points.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ab9064]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={point.iconPath} />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-[#ab9064] mb-2">{point.title}</h5>
                    <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 客户数量和类型分布区域 */}
      <div className="relative bg-gradient-to-b from-[#f0eddd] to-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              {strengthMsg.clientDistribution.title}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 opacity-80">
              {strengthMsg.clientDistribution.titleEn}
            </h3>
            <p className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto mb-8">
              {strengthMsg.clientDistribution.description}
            </p>
          </div>

          {/* 客户分布图表 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* 饼图区域 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
              <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-8 text-center">
                {strengthMsg.clientDistribution.chartTitle}
              </h4>

              {/* 简化的饼图表示 */}
              <div className="relative w-64 h-64 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full" style={{
                  background: `conic-gradient(
                    #ab9064 0deg 144deg,
                    #c5a572 144deg 270deg,
                    #d4b485 270deg 342deg,
                    #e3c398 342deg 360deg
                  )`
                }}>
                </div>
                <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#ab9064]">{strengthMsg.clientDistribution.totalUsers}</p>
                    <p className="text-sm text-[#593725]">{strengthMsg.clientDistribution.totalUsersLabel}</p>
                  </div>
                </div>
              </div>

              {/* 图例 */}
              <div className="space-y-3">
                {strengthMsg.clientDistribution.legend.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                      <span className="text-[#593725] text-sm sm:text-base">{item.label}</span>
                    </div>
                    <span className="text-[#ab9064] font-semibold">{item.percentage}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 客户类型详细说明 */}
            <div className="space-y-6">
              {strengthMsg.clientDistribution.details.map((detail, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#ab9064]/20">
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-4 h-4 rounded mt-1 flex-shrink-0"
                      style={{ backgroundColor: detail.color }}
                    ></div>
                    <div>
                      <h5 className="text-lg font-semibold text-[#ab9064] mb-2">{detail.title}</h5>
                      <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 市场地位与专业认可 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
            <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-8 text-center">
              {strengthMsg.marketPosition.title}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strengthMsg.marketPosition.points.map((point, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={point.iconPath} />
                    </svg>
                  </div>
                  <h5 className="text-lg font-semibold text-[#ab9064] mb-3">{point.title}</h5>
                  <p className="text-[#593725] text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 底部装饰渐变 */}
      <div className="h-32 w-full bg-gradient-to-b from-white to-[#f0eddd]" />
    </div>
  );
}
