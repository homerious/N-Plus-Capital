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
          src="/video/contact.mp4"
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
            聯絡
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 md:mb-12 font-medium opacity-90">
            CONTACT
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto opacity-95">
          </p>
        </div>
      </div>

      {/* 装饰元素 - 桌面端显示 */}
      <div className="hidden xl:block absolute left-0 top-0 w-[25vw] h-screen HomeDecorationLeft pointer-events-none">
        <Image
          alt="装饰元素左侧"
          width={620}
          height={1620}
          src="/images/top-right.svg"
          className="h-full w-full object-contain opacity-80"
          priority={false}
        />
      </div>
      <div className="hidden xl:block absolute right-0 top-0 h-screen w-[25vw] HomeDecorationRight pointer-events-none">
        <Image
          alt="装饰元素右侧"
          width={620}
          height={1620}
          className="h-full w-full object-contain opacity-80"
          src="/images/top-right.svg"
          priority={false}
        />
      </div>

      {/* 渐变过渡区域 */}
      <div className="h-1/6 w-full absolute top-[80vh] bg-gradient-to-b from-transparent to-white pointer-events-none" />

      {/* 内容区域 */}
      <div className="relative bg-gradient-to-b from-white to-[#f0eddd] py-16 sm:py-24 md:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className=" py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* 左侧 - 地址信息 */}
                <div className="space-y-8 sm:space-y-12">
                  {/* 中文地址 */}
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 mt-1">
                      <Image
                        src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23linear-gradient);}.cls-2{fill:url(%23linear-gradient-2);}%3c/style%3e%3clinearGradient%20id='linear-gradient'%20x1='7.17'%20y1='30'%20x2='52.83'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d0b486'/%3e%3cstop%20offset='1'%20stop-color='%23b28033'/%3e%3c/linearGradient%3e%3clinearGradient%20id='linear-gradient-2'%20x1='20.44'%20y1='22.74'%20x2='39.56'%20y2='22.74'%20xlink:href='%23linear-gradient'/%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m30.07,0C19.85.21,12.24,6.6,9.18,12.84c-1.49,3.03-2.92,8.14-1.31,15.26.51,2.28,1.35,4.5,2.49,6.6,1.62,3,3.03,5.4,5.44,8.79,2.09,2.93,4.39,5.87,6.83,8.73l.07.07c2.08,2.2,4.18,4.41,6.28,6.63l1.02,1.08,7.38-7.8c2.4-2.81,4.7-5.74,6.81-8.71,2.41-3.39,3.82-5.79,5.44-8.79,1.14-2.09,1.97-4.31,2.49-6.6,1.61-7.12.17-12.23-1.31-15.26C47.16,5.36,38.82.2,30.07,0Zm19.31,27.48c-.46,2.04-1.21,4.02-2.22,5.88-1.61,2.97-2.92,5.21-5.26,8.5-2.05,2.88-4.28,5.73-6.63,8.48l-5.26,5.56-5.27-5.56c-2.37-2.77-4.6-5.63-6.63-8.48-2.34-3.29-3.65-5.52-5.26-8.5-1.01-1.87-1.76-3.85-2.22-5.88-1.15-5.08-.78-9.59,1.1-13.4,2.59-5.29,9.41-11.07,18.28-11.26,8.91.22,15.71,5.99,18.29,11.26,1.87,3.82,2.24,8.33,1.09,13.4Z'/%3e%3cpath%20class='cls-2'%20d='m30,13.18c-5.27,0-9.56,4.29-9.56,9.56s4.29,9.56,9.56,9.56,9.56-4.29,9.56-9.56-4.29-9.56-9.56-9.56Zm0,16.31c-3.72,0-6.74-3.03-6.74-6.75s3.03-6.75,6.74-6.75,6.74,3.03,6.74,6.75-3.03,6.75-6.74,6.75Z'/%3e%3c/svg%3e"
                        alt="地址图标"
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                      />
                    </div>
                    <div className="flex-1">
                      <a
                        href="https://maps.app.goo.gl/JW1EDwgcbuG1LeFB6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[#ab9064] hover:text-[#9a7f57] transition-colors duration-200"
                      >
                        <div className="text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed">
                          N Plus Capital Limited
                        </div>
                        <div className="text-base sm:text-lg lg:text-xl leading-relaxed mt-1 sm:mt-2">
                          香港荃湾横窝仔街16-26号顺力工业大厦15楼04C室
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* 英文地址 */}
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 mt-1">
                      {/* 占位符，保持对齐 */}
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"></div>
                    </div>
                    <div className="flex-1">
                      <a
                        href="https://maps.app.goo.gl/JW1EDwgcbuG1LeFB6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[#ab9064] hover:text-[#9a7f57] transition-colors duration-200"
                      >
                        <div className="text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed">
                          N Plus Capital Limited
                        </div>
                        <div className="text-base sm:text-lg lg:text-xl leading-relaxed mt-1 sm:mt-2">
                          Rm 04C, 15/F, Sunwise Industrial Building, <br />
                          16-26 Wang Wo Tsai Street, Tsuen Wan, Hong Kong
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* 右侧 - 联系方式 */}
                <div className="space-y-8 sm:space-y-12">
                  {/* 电话 */}
                  <div className="flex items-center gap-4 sm:gap-6 hidden">
                    <div className="flex-shrink-0">
                    </div>
                    <div className="flex-1">
                      <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#ab9064] leading-relaxed">
                        000 0000 0000
                      </div>
                    </div>
                  </div>

                  {/* 邮箱 */}
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23linear-gradient);}%3c/style%3e%3clinearGradient%20id='linear-gradient'%20x1='0'%20y1='30'%20x2='60'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d0b486'/%3e%3cstop%20offset='1'%20stop-color='%23b28033'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m60,8.56H0v42.87h60V8.56Zm-4.58,2.78l-17.12,18.35c-2.17,2.32-5.12,3.6-8.3,3.6s-6.12-1.28-8.29-3.6L4.58,11.34h50.83ZM2.78,13.47l14.47,15.49L2.78,46.23V13.47Zm1.58,35.19l14.75-17.59,1.22,1.15c2.59,2.44,6.12,3.85,9.68,3.85s7.08-1.4,9.68-3.84l1.22-1.14,14.74,17.58H4.36Zm52.87-2.44l-14.47-17.25,14.47-15.5v32.75Z'/%3e%3c/svg%3e"
                        alt="邮箱图标"
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                      />
                    </div>
                    <div className="flex-1">
                      <a
                        href="info@npluscapital.com"
                        className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#ab9064] hover:text-[#9a7f57] transition-colors duration-200 leading-relaxed underline decoration-transparent hover:decoration-current underline-offset-4"
                      >
                        info@npluscapital.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
