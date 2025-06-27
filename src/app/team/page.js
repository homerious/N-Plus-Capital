'use client'

import { useEffect, useState } from 'react';
import Image from "next/image";

// export default function About() {
//
//   return (
//     <div className="relative w-full overflow-hidden">
//       {/* Hero Banner */}
//       <div id="hero-banner" className="h-screen w-full relative">
//         {/* 视频背景 */}
//         <video
//           src="/video/team.mp4"
//           className="absolute w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="metadata"
//
//         />
//
//
//         {/* 渐变遮罩 */}
//         <div className="absolute inset-0 bg-black/20" />
//
//         {/* 文字内容 */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white titleEnterAnimation2 px-4 w-full max-w-6xl">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 md:mb-8 font-bold">
//             专业团队
//           </h1>
//           <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 md:mb-12 font-medium opacity-90">
//             CONTACT
//           </h2>
//           <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto opacity-95">
//             我们的团队始终坚持以客户为中心的服务理念，提供个性化专业咨询与全方位投资支持，确保客户权益得到充分保护与尊重
//           </p>
//         </div>
//       </div>
//
//       {/* 装饰元素 - 桌面端显示 */}
//       <div className="hidden xl:block absolute left-0 top-0 w-[25vw] h-screen HomeDecorationLeft pointer-events-none">
//         <Image
//           alt="装饰元素左侧"
//           width={620}
//           height={1620}
//           src="/images/top-right.svg"
//           className="h-full w-full object-contain opacity-80"
//           priority={false}
//         />
//       </div>
//       <div className="hidden xl:block absolute right-0 top-0 h-screen w-[25vw] HomeDecorationRight pointer-events-none">
//         <Image
//           alt="装饰元素右侧"
//           width={620}
//           height={1620}
//           className="h-full w-full object-contain opacity-80"
//           src="/images/top-right.svg"
//           priority={false}
//         />
//       </div>
//
//       {/* 渐变过渡区域 */}
//       <div className="h-1/6 w-full absolute top-[80vh] bg-gradient-to-b from-transparent to-white pointer-events-none" />
//
//       {/* 内容区域 */}
//       <div className="relative bg-gradient-to-b from-white to-[#f0eddd] py-16 sm:py-24 md:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
//             {/* 文字内容 */}
//             <div className="w-full lg:w-1/2 max-w-3xl">
//               <div className="text-center lg:text-left">
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-2">
//                   社會責任
//                 </h2>
//                 <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-6 sm:mb-8 lg:mb-12 opacity-80">
//                   SOCIAL RESPONSIBILITY
//                 </h3>
//                 <div className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-relaxed lg:leading-loose text-[#593725] space-y-4 sm:space-y-6">
//                   解決世界上最關鍵問題的成本高達數萬億，遠遠超出了傳統慈善機構和大多數官方組織所能承受的範疇。我們積極與慈善基金會、影響力投資者、公共部門、企業和其他志同道合的家族共同貢獻資源，構建具有社會影響力的解決方案，並轉化爲行動付諸實踐。
// <br/><br/>
//                   我們的影響力投資基於社會效益與財務回報的平衡。通過投資於可持續能源、生物醫藥、健康及消費等領域的進步並推動其投入應用，以打破傳統障礙，改善數十億人的生活。
//                 </div>
//               </div>
//             </div>
//
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Team() {

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Banner */}
      <div id="hero-banner" className="h-screen w-full relative">
        {/* 视频背景 */}
        <video
          src="/video/team.mp4"
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
            專業團隊
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 md:mb-12 font-medium opacity-90">
            PROFESSIONAL TEAM
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto opacity-95">
            我們的團隊始終堅持以客戶為中心的服務理念，提供個性化專業諮詢與全方位投資支持，確保客戶權益得到充分保護與尊重
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

      {/* 团队理念区域 */}
      <div className="relative bg-gradient-to-b from-white to-[#f0eddd] py-16 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              Our Team
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 sm:mb-12 opacity-80">
              專業，是值得託付的根本
            </h3>
          </div>

          {/* 核心管理层 */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#ab9064] mb-8 text-center">
              核心管理層（Responsible Officers）
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* 郑伟良 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
                <div className="flex items-start space-x-6">
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-2">
                      鄭偉良（Henry Cheng）
                    </h4>
                    <p className="text-lg font-semibold text-[#593725] mb-4">資產管理總監</p>
                    <div className="space-y-2 text-sm sm:text-base text-[#593725]">
                      <p><span className="font-medium">SFC 註冊編號：</span>ABH991</p>
                      <p>擁有超過 15 年金融從業經驗，曾任職於多家國際投資銀行與家族辦公室</p>
                      <p>擅長跨境資產配置、IPO 項目承銷與結構化基金管理</p>
                      <p>目前擔任 N Plus Capital 資產管理業務負責人（Type 4 & 9 牌照持有人）</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 黄秋云 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
                <div className="flex items-start space-x-6">
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-2">
                      黃秋雲（Qiuyun Huang）
                    </h4>
                    <p className="text-lg font-semibold text-[#593725] mb-4">風控及產品負責人</p>
                    <div className="space-y-2 text-sm sm:text-base text-[#593725]">
                      <p><span className="font-medium">SFC 註冊編號：</span>BOL017</p>
                      <p>前亞洲知名證券公司資深產品經理，主導 PIPE 私募、ETF 組合建倉策略</p>
                      <p>擁有 CFA 國際金融分析師證書與香港本地基金銷售認證</p>
                      <p>專責平台風控機制、保險配置與投前盡職調查審核</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 历任重要成员 */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#ab9064] mb-8 text-center">
              歷任重要成員
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Helen Lo */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ab9064]/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#ab9064] mb-2">Helen Lo</h4>
                  <p className="text-base font-semibold text-[#593725] mb-3">前資產管理總監</p>
                  <div className="text-sm text-[#593725] space-y-2">
                    <p>負責組合投資與投資策略</p>
                    <p className="font-medium">任期：2017年10月–2020年5月</p>
                  </div>
                </div>
              </div>

              {/* Ivy Xing */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ab9064]/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#ab9064] mb-2">Ivy Xing</h4>
                  <p className="text-base font-semibold text-[#593725] mb-3">前首席投資官</p>
                  <div className="text-sm text-[#593725] space-y-2">
                    <p>管理資產規模超千萬美元</p>
                    <p className="font-medium">任期：2018年5月–2019年7月</p>
                  </div>
                </div>
              </div>

              {/* Chelsea Mak */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ab9064]/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#ab9064] mb-2">Chelsea Mak</h4>
                  <p className="text-base font-semibold text-[#593725] mb-3">公司負責人</p>
                  <div className="text-sm text-[#593725] space-y-2">
                    <p>負責合規與對外監管對接</p>
                    <p className="font-medium">Responsible Officer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 团队架构区域 */}
      <div className="relative bg-gradient-to-b from-[#f0eddd] to-white py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              團隊架構
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 opacity-80">
              TEAM STRUCTURE
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* 投资研究团队 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">
                  投資研究團隊
                </h4>
                <p className="text-sm text-[#ab9064] mb-4 font-medium">Investment & Research</p>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-[#593725]">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#ab9064] rounded-full mt-2 flex-shrink-0"></div>
                  <span>由來自投行、券商、信託公司與資管機構的資深研究員組成</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#ab9064] rounded-full mt-2 flex-shrink-0"></div>
                  <span>擅長一級股權市場分析（Pre-IPO）、行業輪動策略、估值建模與風險情境模擬</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#ab9064] rounded-full mt-2 flex-shrink-0"></div>
                  <span>成員大多具備國際金融機構背景，熟悉香港與東南亞資本市場</span>
                </li>
              </ul>
            </div>

            {/* 风控与法务顾问 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">
                  風控與法務顧問
                </h4>
                <p className="text-sm text-[#ab9064] mb-4 font-medium">Risk & Compliance</p>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-[#593725]">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#ab9064] rounded-full mt-2 flex-shrink-0"></div>
                  <span>內部設有專職合規官（Compliance Officer）與外聘法律事務所合作</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#ab9064] rounded-full mt-2 flex-shrink-0"></div>
                  <span>負責平台 AML/KYC 審查、交易異常監控、SFC 報備與法規應對</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#ab9064] rounded-full mt-2 flex-shrink-0"></div>
                  <span>定期進行產品風險再評估與政策更新，確保操作合規無誤</span>
                </li>
              </ul>
            </div>

            {/* 客户服务团队 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">
                  客戶服務團隊
                </h4>
                <p className="text-sm text-[#ab9064] mb-4 font-medium">Client Success Team</p>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-[#593725]">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#ab9064] rounded-full mt-2 flex-shrink-0"></div>
                  <span>全員配備金融背景，具備中文簡體／繁體／英文三語服務能力</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#ab9064] rounded-full mt-2 flex-shrink-0"></div>
                  <span>提供每日在線服務（09:00–23:00），覆蓋開戶、儲值、建倉、提領全流程</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#ab9064] rounded-full mt-2 flex-shrink-0"></div>
                  <span>顧問型服務導向，支持一對一產品說明、資金路徑規劃與保單驗證</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 团队优势总结 */}
          <div className="mt-16 sm:mt-20 text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
            <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-6">
              團隊優勢
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h5 className="text-lg font-semibold text-[#ab9064] mb-3">專業資質</h5>
                <p className="text-[#593725] text-sm leading-relaxed">
                  團隊成員均具備相關金融資質認證，擁有豐富的行業經驗
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h5 className="text-lg font-semibold text-[#ab9064] mb-3">國際視野</h5>
                <p className="text-[#593725] text-sm leading-relaxed">
                  具備國際金融機構背景，熟悉全球資本市場運作
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h5 className="text-lg font-semibold text-[#ab9064] mb-3">客戶至上</h5>
                <p className="text-[#593725] text-sm leading-relaxed">
                  始終堅持以客戶為中心，提供個性化專業服務
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部装饰渐变 */}
      <div className="h-32 w-full bg-gradient-to-b from-white to-[#f0eddd]" />
    </div>
  );
}
