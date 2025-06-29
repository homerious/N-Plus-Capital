'use client'

import Image from "next/image";
import { getMessages } from "@/lib/i18n";

export default function Team({ params }) {
  const locale = params.locale;
  const messages = getMessages(locale);
  const teamMsg = messages.team;

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
            {teamMsg.hero.title}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 md:mb-12 font-medium opacity-90">
            {teamMsg.hero.titleEn}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto opacity-95">
            {teamMsg.hero.description}
          </p>
        </div>
      </div>

      {/* 装饰元素 - 桌面端显示 */}
      <div className="hidden xl:block absolute left-0 top-0 w-[25vw] h-screen HomeDecorationLeft pointer-events-none">
        <Image
          alt={teamMsg.decorations.leftSide}
          width={1240}
          height={3240}
          src="/images/top-right.svg"
          className="h-full w-full object-contain opacity-80"
          priority={false}
        />
      </div>
      <div className="hidden xl:block absolute right-0 top-0 h-screen w-[25vw] HomeDecorationRight pointer-events-none">
        <Image
          alt={teamMsg.decorations.rightSide}
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
              {teamMsg.overview.title}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 sm:mb-12 opacity-80">
              {teamMsg.overview.subtitle}
            </h3>
          </div>

          {/* 核心管理层 */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#ab9064] mb-8 text-center">
              {teamMsg.coreManagement.title}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {teamMsg.coreManagement.members.map((member, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
                  <div className="flex items-start space-x-6">
                    <div className="flex-1">
                      <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-2">
                        {member.name}
                      </h4>
                      <p className="text-lg font-semibold text-[#593725] mb-4">{member.position}</p>
                      <div className="space-y-2 text-sm sm:text-base text-[#593725]">
                        <p><span className="font-medium">{teamMsg.coreManagement.sfcNumberLabel}：</span>{member.sfcNumber}</p>
                        {member.details.map((detail, detailIndex) => (
                          <p key={detailIndex}>{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 历任重要成员 */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#ab9064] mb-8 text-center">
              {teamMsg.formerMembers.title}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {teamMsg.formerMembers.members.map((member, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ab9064]/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#ab9064] mb-2">{member.name}</h4>
                    <p className="text-base font-semibold text-[#593725] mb-3">{member.position}</p>
                    <div className="text-sm text-[#593725] space-y-2">
                      <p>{member.responsibility}</p>
                      <p className="font-medium">{member.tenure}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 团队架构区域 */}
      <div className="relative bg-gradient-to-b from-[#f0eddd] to-white py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              {teamMsg.teamStructure.title}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 opacity-80">
              {teamMsg.teamStructure.titleEn}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMsg.teamStructure.departments.map((department, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={department.iconPath} />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">
                    {department.name}
                  </h4>
                  <p className="text-sm text-[#ab9064] mb-4 font-medium">{department.nameEn}</p>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-[#593725]">
                  {department.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#ab9064] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 团队优势总结 */}
          <div className="mt-16 sm:mt-20 text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
            <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-6">
              {teamMsg.teamAdvantages.title}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMsg.teamAdvantages.advantages.map((advantage, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={advantage.iconPath} />
                    </svg>
                  </div>
                  <h5 className="text-lg font-semibold text-[#ab9064] mb-3">{advantage.title}</h5>
                  <p className="text-[#593725] text-sm leading-relaxed">
                    {advantage.description}
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
