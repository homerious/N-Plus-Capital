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
//           src="/video/socialResponsibility.mp4"
//           className="absolute w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="metadata"
//
//         />
//
//         {/* 渐变遮罩 */}
//         <div className="absolute inset-0 bg-black/20" />
//
//         {/* 文字内容 */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white titleEnterAnimation2 px-4 w-full max-w-6xl">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 md:mb-8 font-bold">
//             资质认证
//           </h1>
//           <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 md:mb-12 font-medium opacity-90">
//             SOCIAL RESPONSIBILITY
//           </h2>
//           <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto opacity-95">
//             持有香港证监会SFC第4类及第9类正规牌照，严格遵循监管要求，建立完善合规体系，为客户投资安全提供坚实法律保障。我们建立了专业规范的服务流程体系，确保投资决策透明高效，从客户需求分析到投资执行监控，提供全程专业服务
//           </p>
//         </div>
//       </div>
//
//       {/* 装饰元素 - 桌面端显示 */}
//       <div className="hidden xl:block absolute left-0 top-0 w-[25vw] h-screen HomeDecorationLeft pointer-events-none">
//         <Image
//           alt="装饰元素左侧"
//           width={1240}
//           height={3240}
//           src="/images/top-right.svg"
//           className="h-full w-full object-contain opacity-80"
//           priority={false}
//         />
//       </div>
//       <div className="hidden xl:block absolute right-0 top-0 h-screen w-[25vw] HomeDecorationRight pointer-events-none">
//         <Image
//           alt="装饰元素右侧"
//           width={1240}
//           height={3240}
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

export default function Certification() {


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
            資質認證
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 md:mb-12 font-medium opacity-90">
            REGULATORY COMPLIANCE
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto opacity-95">
            持有香港證監會SFC第4類及第9類正規牌照，嚴格遵循監管要求，建立完善合規體系，為客戶投資安全提供堅實法律保障。我們建立了專業規範的服務流程體系，確保投資決策透明高效，從客戶需求分析到投資執行監控，提供全程專業服務
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

      {/* SFC持牌资质区域 */}
      <div className="relative bg-gradient-to-b from-white to-[#f0eddd] py-16 sm:py-24 md:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              SFC 持牌資質
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 sm:mb-12 opacity-80">
              SFC LICENSED QUALIFICATIONS
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
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">公司名稱</h4>
                <p className="text-[#593725] text-lg font-medium">N Plus Capital Limited</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">SFC 持牌機構編號</h4>
                <p className="text-[#593725] text-2xl font-bold">BLY077</p>
              </div>
            </div>
          </div>

          {/* 牌照种类与监管范围 */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#ab9064] mb-8 text-center">
              牌照種類與監管範圍
            </h3>
            <p className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed text-center mb-8 max-w-4xl mx-auto">
              N Plus Capital Limited 持有以下兩類 SFC 許可許可範圍：
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#ab9064]/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[#ab9064]">4</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#ab9064] mb-4">Type 4（資產管理）</h4>
                  <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                    資產管理業務，包括管理客戶投資組合
                  </p>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#ab9064]/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[#ab9064]">9</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#ab9064] mb-4">Type 9（為集體投資計劃提供意見）</h4>
                  <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                    就基金、ETF 等集體投資計劃提供專業意見與評估
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 当前合规状态 */}
          <div className="mb-16 sm:mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#ab9064] mb-6 text-center">
                當前合規狀態
              </h3>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
                  符合 SFC 對相關牌照資質的配置要求。公司持續維持活躍牌照狀態，無任何暫停、撤銷記錄，並接受 SFC 定期監督與審查。
                </p>
              </div>
            </div>
          </div>

          {/* SFC持牌的重要意义 */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#ab9064] mb-8 text-center">
              SFC 持牌的重要意義
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "合法合規經營",
                  description: "獲 SFC 授權才能合規開展資產管理與基金顧問業務",
                  icon: (
                    <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "專業管理責任",
                  description: "RO 需擔任高管職務並承諾承擔法律責任，保障服務質量",
                  icon: (
                    <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  title: "加強客戶信任",
                  description: "SFC 監管嚴格、透明度高，授權牌照提供客戶信心",
                  icon: (
                    <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )
                },
                {
                  title: "持續監管評估",
                  description: "定期提交審計報表與牌照續期申請，確保風控與合規長期到位",
                  icon: (
                    <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ab9064]/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#ab9064]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-[#ab9064] mb-3">{item.title}</h4>
                      <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                        {item.description}
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
              專業合規，值得信賴
            </h4>
            <p className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
              N Plus Capital Limited 獲得 SFC 核發的 <span className="font-bold text-[#ab9064]">BLY077 資產管理（Type 4）與集體投資計劃諮詢（Type 9）牌照</span>，並配備經驗豐富的 RO 團隊，符合監管標準並確保業務安全合規。
            </p>
          </div>
        </div>
      </div>

      {/* 合规政策概述区域 */}
      <div className="relative bg-gradient-to-b from-[#f0eddd] to-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              合規政策概述
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 opacity-80">
              COMPLIANCE POLICY OVERVIEW
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "監管合規框架",
                items: [
                  "嚴格遵循 SFC 監管要求和行業最佳實踐",
                  "建立完善的內部控制和風險管理體系",
                  "定期接受監管機構檢查和第三方審計",
                  "持續更新合規政策以適應法規變化"
                ]
              },
              {
                title: "客戶保護措施",
                items: [
                  "實施 KYC（了解您的客戶）和 AML（反洗錢）程序",
                  "客戶資金獨立託管，與公司資產嚴格分離",
                  "提供透明的費用結構和投資風險披露",
                  "建立客戶投訴處理機制和爭議解決程序"
                ]
              },
              {
                title: "專業責任制度",
                items: [
                  "指定負責人員（RO）承擔法律和監管責任",
                  "所有員工必須通過相關資格考試和持續培訓",
                  "建立利益衝突識別和管理機制",
                  "確保投資建議符合客戶最佳利益原則"
                ]
              },
              {
                title: "信息安全與隱私",
                items: [
                  "採用銀行級數據加密和安全防護措施",
                  "嚴格控制客戶信息訪問權限",
                  "定期進行網絡安全評估和滲透測試",
                  "遵循個人數據保護法規要求"
                ]
              }
            ].map((section, index) => (
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
              我們的合規承諾
            </h4>
            <p className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
              N Plus Capital Limited 致力於維持最高標準的合規運營，確保所有業務活動均符合監管要求。我們相信，嚴格的合規管理不僅是法律義務，更是對客戶信任的最佳回應。我們將持續投資於合規體系建設，為客戶提供安全、透明、專業的投資服務。
            </p>
          </div>
        </div>
      </div>

      {/* 底部装饰渐变 */}
      <div className="h-32 w-full bg-gradient-to-b from-white to-[#f0eddd]" />
    </div>
  );
}
