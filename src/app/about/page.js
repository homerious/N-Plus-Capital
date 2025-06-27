'use client'

import { useEffect, useState } from 'react';
import Image from "next/image";

export default function About() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 检测是否为移动设备
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = () => {
    console.warn('Video failed to load, using poster image');
  };

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
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
        />

        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-black/20" />

        {/* 文字内容 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white titleEnterAnimation2 px-4 w-full max-w-6xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 md:mb-8 font-bold">
            關於我們
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 md:mb-12 font-medium opacity-90">
            ABOUT US
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto opacity-95">
            立足香港國際金融中心，專業持牌資產管理機構，憑藉嚴格合規運營與專業投資能力，致力為客戶創造長期穩健投資回報
          </p>
        </div>
      </div>

      {/* 装饰元素 - 桌面端显示 */}
      <div className="hidden xl:block absolute left-0 top-0 w-[25vw] h-screen HomeDecorationLeft pointer-events-none">
        <Image
          alt="装饰元素左侧"
          width={1240}
          height={3240}
          src="/images/top-right.svg"
          className="h-full w-full object-contain opacity-80"
          priority={false}
        />
      </div>
      <div className="hidden xl:block absolute right-0 top-0 h-screen w-[25vw] HomeDecorationRight pointer-events-none">
        <Image
          alt="装饰元素右侧"
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
              公司概況
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 sm:mb-12 opacity-80">
              COMPANY OVERVIEW
            </h3>

            {/* 公司基本信息 */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-[#ab9064]/20">
                <h3 className="text-[#593725] lg:text-2xl font-semibold sm:text-xl mb-3">N Plus Capital Limited</h3>
                <p className="text-lg sm:text-xl font-medium text-[#ab9064] ">公司全稱</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-[#ab9064]/20">
                <h3 className="text-[#593725] lg:text-2xl font-semibold text-sm sm:text-base mb-3">SFC 第4類及第9類牌照</h3>
                <p className="text-lg sm:text-xl font-medium text-[#ab9064] ">監管牌照</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-[#ab9064]/20">
                <h3 className="text-[#593725] lg:text-2xl font-semibold text-sm sm:text-base mb-3">2017年至今</h3>
                <p className="text-lg sm:text-xl font-medium text-[#ab9064]">營運歷史</p>
              </div>
            </div>

            <div className="text-sm sm:text-lg lg:text-xl leading-relaxed sm:leading-relaxed lg:leading-loose text-[#593725] max-w-4xl mx-auto">
              <p className="mb-6">
                N Plus Capital Limited 是一家立足香港國際金融中心的專業持牌資產管理機構，持有香港證券及期貨事務監察委員會（SFC）第4類（就證券提供意見）及第9類（資產管理）牌照，憑藉嚴格合規運營與專業投資能力，致力為客戶創造長期穩健投資回報。
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
                  公司使命
                </h3>
                <h4 className="text-lg sm:text-xl text-[#ab9064] mb-6 opacity-80">
                  MISSION
                </h4>
                <div className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed space-y-4">
                  <p className="font-semibold text-lg sm:text-xl text-[#ab9064] mb-4">
                    以數據驅動專業投資，用制度保障客戶資產，為每一位投資者打造值得信賴的數字財富平台。
                  </p>
                  <p>
                    N Plus Capital 的使命，是通過嚴謹的產品篩選機制、智能化的風險管理系統、以及由第三方保險承保的資金保障體系，為客戶提供安全、高效、穩健的投資服務。
                  </p>
                  <p className="font-medium text-[#ab9064]">
                    我們致力於讓投資回歸本質，讓信任成為資本流動的基礎。
                  </p>
                </div>
              </div>
            </div>

            {/* 愿景 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 shadow-xl border border-[#ab9064]/20">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#ab9064] mb-4 font-bold">
                  公司願景
                </h3>
                <h4 className="text-lg sm:text-xl text-[#ab9064] mb-6 opacity-80">
                  VISION
                </h4>
                <div className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed space-y-4">
                  <p className="font-semibold text-lg sm:text-xl text-[#ab9064] mb-4">
                    成為亞洲領先的數字資產管理平台，讓優質金融服務普及到每一位用戶手中。
                  </p>
                  <p>
                    我們期望通過科技與專業的融合，打破金融壁壘，讓資本配置不再專屬於少數人；我們相信，普惠、透明、可驗證的金融服務，才能真正實現客戶與平台的雙向成長。
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
              核心價值觀
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 opacity-80">
              CORE VALUES
            </h3>
          </div>

          {/* 价值观网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* 专业 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ab9064]/20 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">專業審慎</h4>
                <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                  每一款產品均由金融專家評估，並建立風控邏輯，不盲目追求高收益。我們的團隊擁有多元背景，以專業能力構建客戶信任。
                </p>
              </div>
            </div>

            {/* 安全 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ab9064]/20 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">穩健安全</h4>
                <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                  系統嚴格執行身份驗證、交易控制、資金託管及保險機制。引入太平洋保險公司為每款產品提供真實有效的風險承保。
                </p>
              </div>
            </div>

            {/* 合规 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ab9064]/20 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">合規透明</h4>
                <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                  遵守金融監管規定，保障用戶數據與資金安全，做到清晰可查、合理可控。全流程遵循KYC與AML規範。
                </p>
              </div>
            </div>

            {/* 客户为本 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ab9064]/20 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">客戶為本</h4>
                <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                  以用戶利益為中心設計流程與產品，確保體驗與保障並行。不浮誇、不誤導，只提供真實可查、風險可控的投資選項。
                </p>
              </div>
            </div>

            {/* 数据驱动 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ab9064]/20 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">數據為本</h4>
                <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                  從產品篩選、風控模型、投資配置，到客戶資金的託管與監控，每一個決策都基於詳實數據、市場洞察與專業判斷。
                </p>
              </div>
            </div>

            {/* 成长 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ab9064]/20 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">共同成長</h4>
                <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                  我們不僅是一個投資平台，更是客戶長期財富成長的夥伴。陪伴用戶穿越市場週期，實現資產的長期穩健增長。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部装饰渐变 */}
      <div className="h-32 w-full bg-gradient-to-b from-[#f0eddd] to-white" />
    </div>
  );
}
