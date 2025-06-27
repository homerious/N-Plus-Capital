'use client'

import {getMessages} from "@/lib/i18n";
import Image from "next/image";

import {useEffect, useState} from 'react';

function useChildrenAnimation(elementIds, options = {}) {
  const [animatedSections, setAnimatedSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.id;

          // 避免重复动画
          if (!animatedSections.has(elementId)) {
            // 获取该元素的所有直接子元素
            const children = Array.from(entry.target.children);

            // 为每个子元素添加动画类
            children.forEach((child, index) => {
              // 延迟添加动画激活类
              setTimeout(() => {
                child.classList.add('animate-in');
              }, index * 500); // 每个子元素延迟100ms
            });

            // 标记该元素已动画
            setAnimatedSections(prev => new Set([...prev, elementId]));
          }
        }
      });
    }, {
      threshold: 0.2, // 当元素20%进入视口时触发
      rootMargin: '-50px 0px', // 提前50px触发
      ...options
    });

    // 观察所有指定的元素
    elementIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        const children = Array.from(element.children);
        children.forEach((child, index) => {
          child.classList.add('animate-element');
        });
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [elementIds, animatedSections, options]);

  return animatedSections;
}

// export default function Home({locale}) {
//   const messages = getMessages(locale)
//
//   useChildrenAnimation([
//     'about',
//     'investment',
//     'family',
//     'responsibility'
//   ]);
//
//   return (
//     <div className="relative w-full overflow-hidden">
//       {/* Hero Banner - 移动端优化 */}
//       <div id={'hero-banner'} className="h-screen w-full relative">
//         <video
//           src="/video/loading.mp4"
//           poster="/images/loading.jpg"
//           className="absolute w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline // 移动端自动播放必需
//         ></video>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white titleEnterAnimation px-4">
//           <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 md:mb-16">
//             {messages.home.sloganZh}
//           </h3>
//           <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl leading-normal mx-auto">
//             {messages.home.sloganEn}
//           </h4>
//         </div>
//       </div>
//
//       {/* 装饰元素 - 移动端隐藏或调整 */}
//       <div className="hidden lg:block absolute left-0 top-0 w-[25vw] h-[150vh] HomeDecorationLeft">
//         <Image
//           alt="top-left"
//           width={1240}
//           height={3240}
//           src="/images/top-left.svg"
//           className="h-full w-full object-contain"
//         />
//       </div>
//       <div className="hidden lg:block absolute right-0 top-0 h-screen w-[25vw] HomeDecorationRight">
//         <Image
//           alt="top-right"
//           width={1240}
//           height={3240}
//           className="h-full w-full object-contain"
//           src="/images/top-right.svg"
//         />
//       </div>
//
//       {/* About Section - 移动端优化 */}
//       <div id={'about'} className="relative flex flex-col lg:flex-row justify-center items-center pt-20 sm:pt-32 md:pt-40 lg:pt-52 px-4 sm:px-6 lg:px-0">
//         <div className="w-full lg:w-[25vw] lg:translate-x-[-50%] max-w-2xl lg:max-w-none">
//           <div className="text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-20 text-[#ab9064] text-center lg:text-left">
//             關於我們
//           </div>
//           <div className="text-xl sm:text-2xl lg:text-3xl text-[#ab9064] text-center lg:text-left">
//             ABOUT US
//           </div>
//           <div className="mt-8 sm:mt-12 lg:mt-16 text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-loose text-[#593725] text-center lg:text-left">
//             立足香港国际金融中心，专业持牌资产管理机构，凭借严格合规运营与专业投资能力，致力为客户创造长期稳健投资回报
//             <br className="hidden sm:block" /><br className="hidden sm:block" />
//             以数据驱动专业投资，用制度保障客户资产，为每一位投资者打造值得信赖的数字财富平台。
//           </div>
//           <div className="flex justify-center lg:justify-start">
//             <button className="px-12 sm:px-16 lg:px-24 py-3 border border-[#ab9064] text-[#ab9064] text-center mt-8 sm:mt-12 lg:mt-16 rounded-full cursor-pointer tracking-[5px] sm:tracking-[8px] lg:tracking-[10px] text-sm sm:text-base" onClick={() => window.location.replace('/about')}>
//               瞭解更多
//             </button>
//           </div>
//         </div>
//         <Image
//           alt="about"
//           width={587}
//           height={1047}
//           className="hidden lg:block absolute w-48 -top-0 right-1/4"
//           src="/images/diamond.svg"
//         />
//       </div>
//
//       {/* Investment Section - 移动端优化 */}
//       <div id="business" className="relative flex flex-col lg:flex-row justify-center items-center pt-20 sm:pt-32 md:pt-40 lg:pt-52 pb-20 sm:pb-32 md:pb-40 lg:pb-52 investment-bg px-4 sm:px-6 lg:px-0">
//         <div className="w-full lg:w-[50vw] lg:translate-x-[-20%] max-w-4xl lg:max-w-none">
//           <div className="text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-20 text-[#ab9064] text-center lg:text-left">
//             业务领域
//           </div>
//           <div className="text-xl sm:text-2xl lg:text-3xl text-[#ab9064] text-center lg:text-left">
//             ASSET MANAGEMENT
//           </div>
//           <div className="mt-8 sm:mt-12 lg:mt-16 text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-loose text-[#593725] text-center lg:text-left">
//             我们提供全方位专业投资管理服务，涵盖资产管理、证券咨询与投资策略制定，从专业分析到资产配置，为您的财富增值保驾护航。我们秉承价值投资理念，基于深度市场研究与风险控制，构建多元化投资组合，追求长期稳健回报与资产保值增值目标
//           </div>
//
//           {/* 图标组 - 移动端网格布局 */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-6 sm:gap-8 lg:gap-32 mt-8 sm:mt-12 lg:mt-16 justify-center lg:justify-start">
//             {[
//               {
//                 icon:"data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23linear-gradient);}%3c/style%3e%3clinearGradient%20id='linear-gradient'%20x1='.72'%20y1='30.12'%20x2='58.72'%20y2='30.12'%20gradientTransform='translate(.28%20-.12)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d0b486'/%3e%3cstop%20offset='1'%20stop-color='%23b28033'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m43.59,6.47l-3.56,3.56-.42.07c-1.74-.8-5.16-1.61-9.23,1.52l-.09.08-1.25,1.26c-4.7-3.19-8.44-1.22-9.49-.53l-3.15-3.15c-.85-.85-2.22-.85-3.07,0L1.64,20.98c-.85.85-.85,2.22,0,3.07l4.06,4.06c.04,2.51.94,5.08,2.67,7.68.76,1.14,1.66,2.17,2.62,3.15,1.1,1.11,2.21,2.21,3.32,3.32-1.26,1.84-.72,3.36.59,4.72,1.36,1.42,2.62,1.59,4.46,1.05l.05.02c.89,1.34,1.74,2.21,2.6,2.67l2.9,1.97c1.63,1.58,4.12,1.94,6.09.81.85-.49.99-.89,1.43-1.58,3.33,2.79,5.54,2.84,8.16-1.07l.05-.02c1.85.53,3.1.37,4.46-1.05,1.4-1.46,1.93-3.1.31-5.11-.15-.19-.06-.46.18-.5.86-.15,1.54-.73,1.95-1.26,1.29-1.66,1.21-3.41-.17-5.13.6-.61,1.21-1.21,1.81-1.82.82-.83,1.6-1.73,2.26-2.69,1.86-2.7,2.82-5.36,2.86-7.97l4.07-4.07c.85-.85.85-2.22,0-3.06l-11.71-11.71c-.85-.85-2.22-.85-3.06,0Zm-31.87,30.15c-1.7-1.79-2.97-3.78-3.53-6.02-.12-.5-.21-1.02-.26-1.54-.04-.43-.05-.87-.04-1.32l-4.89-4.89,12.21-12.21,3.12,3.12.26.26-.02.04,1.89.16.12-.31c.75-.51,3.84-2.23,7.97.92l5.47,5.49c.27.28.42.64.42,1.04,0,.39-.15.76-.43,1.04l-.36.36c-.57.57-1.5.57-2.07,0l-5.59-5.62-1.36.95,1.51,1.77.65.66c-.64.64-1.29,1.29-1.93,1.93-.16.16-.25.33-.3.51-.03.03-.06.07-.1.1-3.76,3.76-7.53,7.52-11.28,11.29-.75.75-1.24,1.52-1.49,2.28Zm18.13,15.23c-.43.41-.88.66-1.52.61-.89-.07-1.51-.75-1.95-1.18-.27-.26-.53-.52-.79-.79.62-.33,1.27-.79,1.98-1.39.44.69.58,1.09,1.43,1.58.38.22.78.38,1.19.49-.07.28-.18.52-.34.67Zm8.06-.76c-.84.99-1.8,1.07-3.02-.06-.19-.18-.38-.36-.57-.53.27-.18.52-.38.76-.6.7-.68,1.39-1.36,2.09-2.04.07.07.15.15.22.22,1.15,1.16,1.31,2.09.51,3.02Zm5.84-3.06c-.85,1.16-2.14,1.18-3.3.03-.58-.57-1.15-1.15-1.73-1.73.95-.93,1.9-1.85,2.85-2.78.53.54,1.07,1.07,1.61,1.61,1.03,1.04,1.21,2.01.57,2.88Zm2.37-6.85c-.43,1.08-1.71,1.59-2.73,1.03-.1-.05-.19-.12-.29-.18.92-.91,1.82-1.82,2.73-2.73.39.52.6,1.1.28,1.89Zm6-16.27c.01.45,0,.89-.04,1.32-.05.53-.14,1.04-.26,1.54-.56,2.26-1.84,4.25-3.55,6.05-2.32,2.44-4.75,4.78-7.13,7.16-2.5,2.5-4.99,5.01-7.51,7.49-.43.43-1.05,1.11-1.95,1.18-.65.05-1.09-.2-1.52-.61-.39-.37-.51-1.29-.36-1.87.16-.63.72-1.2,1.2-1.69,1.14-1.17,2.3-2.31,3.45-3.47.56-.56,1.12-1.13,1.67-1.7.59-.61,2.31-1.89,1.34-2.79-.88-.83-2.15.77-2.68,1.3-.56.56-1.12,1.13-1.69,1.68-2.64,2.58-5.25,5.2-7.96,7.71-1.23,1.14-2.19,1.05-3.02.07-.8-.93-.64-1.87.51-3.02,3-3,6-6,8.99-9,.42-.42.78-.7.86-1.34.06-.48-.12-.9-.61-.97-.82-.12-1.18.19-1.71.72-3.53,3.53-7.05,7.06-10.59,10.58-1.16,1.16-2.46,1.13-3.3-.03-.63-.87-.46-1.84.57-2.88,3.58-3.59,7.17-7.18,10.76-10.76.59-.58,1.05-1.24.33-1.91-.69-.64-1.28-.07-1.8.45-2.76,2.77-5.52,5.53-8.29,8.29-.37.37-.76.74-1.21.99-1.02.56-2.3.05-2.73-1.03-.44-1.1.13-1.8.83-2.5,4.59-4.57,9.17-9.14,13.72-13.75l1.88,1.89c.64.64,1.48.96,2.32.96.84,0,1.67-.32,2.31-.95l.36-.36c.62-.62.96-1.44.96-2.32,0-.82-.31-1.59-.85-2.2l-4.17-4.21h0s-.82-.82-.82-.82l1.11-1.12c1.72-1.31,3.26-1.77,4.53-1.84,2.32-.21,4.37,1,4.37,1l1.23-1.23,3.13-3.13,12.21,12.21-4.9,4.9Z'/%3e%3c/svg%3e",
//                 title: "新股申购"
//               },
//               {
//                 icon: "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23linear-gradient);}.cls-2{fill:url(%23linear-gradient-3);}.cls-3{fill:url(%23linear-gradient-2);}%3c/style%3e%3clinearGradient%20id='linear-gradient'%20x1='5.05'%20y1='30'%20x2='51.1'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d0b486'/%3e%3cstop%20offset='1'%20stop-color='%23b28033'/%3e%3c/linearGradient%3e%3clinearGradient%20id='linear-gradient-2'%20x1='5.05'%20y1='42.21'%20x2='51.1'%20y2='42.21'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-3'%20x1='5.05'%20y1='42.21'%20x2='51.1'%20y2='42.21'%20xlink:href='%23linear-gradient'/%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m20.56,25.76c-9.07,0-16.45,7.38-16.45,16.45s7.38,16.45,16.45,16.45c7.17,0,13.29-4.62,15.53-11.03,1.11.05,2.13.06,2.96.06,5.05,0,16.8-.53,16.8-5.49,0-.01,0-.03,0-.04,0-.01,0-.03,0-.04v-6.61c.03-.15.05-.3.05-.45,0-.15-.02-.29-.05-.43v-5.44c.03-.15.05-.3.05-.45,0-.15-.02-.29-.05-.43v-6.05c.03-.15.05-.3.05-.45,0-.26-.05-.5-.14-.74.05-.22.09-.44.09-.68,0-.02,0-.03,0-.04,0-.01,0-.03,0-.04v-6.61c.03-.15.05-.3.05-.45,0-.15-.02-.29-.05-.43v-6.05c.03-.15.05-.3.05-.45,0-.27-.05-.52-.14-.76-.15-.51-.46-.93-.89-1.2-3.43-2.91-14.37-3.01-15.82-3.01s-12.39.1-15.82,3.01c-.42.27-.74.69-.89,1.2-.09.24-.14.5-.14.77,0,.16.02.31.05.45v6.05c-.03.14-.05.28-.05.43,0,.16.02.31.05.45v6.61s0,.03,0,.04c0,.01,0,.03,0,.04,0,.24.04.46.09.68-.08.23-.13.48-.13.74,0,.16.02.31.05.45v3.58c-.55-.06-1.12-.09-1.69-.09Zm33.37,16.32s0,.08,0,.12c0,.02,0,.04,0,.05-.09,1.84-6.74,3.34-14.88,3.34-.81,0-1.6-.02-2.38-.05.22-1.08.34-2.19.34-3.33,0-.29,0-.58-.02-.87.76.02,1.46.03,2.06.03,3.79,0,11.34-.3,14.88-2.54v3.24Zm0-6.32s0,.08,0,.12c0,.02,0,.03,0,.05-.09,1.84-6.74,3.34-14.88,3.34-.79,0-1.56-.02-2.31-.04-.32-1.74-.91-3.39-1.74-4.9,1.54.09,2.96.12,4.05.12,3.79,0,11.34-.3,14.88-2.54v3.85Zm0-15.5s0,.08,0,.12c0,.02,0,.04,0,.05-.09,1.84-6.74,3.34-14.88,3.34s-14.79-1.49-14.88-3.34c0-.04,0-.07,0-.1,0-.02,0-.04,0-.07v-3.85c3.54,2.24,11.09,2.54,14.88,2.54s11.34-.3,14.88-2.54v3.85ZM39.05,3.76c8.45,0,13.69,1.57,14.57,2.55-.88.98-6.12,2.55-14.57,2.55s-13.69-1.57-14.57-2.55c.88-.98,6.12-2.55,14.57-2.55Zm0,7.52c1.34,0,10.73-.09,14.88-2.38v4.42s0,.08,0,.12c0,.02,0,.04,0,.06-.09,1.84-6.74,3.34-14.88,3.34s-14.79-1.5-14.88-3.34c0-.04,0-.07,0-.1,0-.02,0-.04,0-.07v-4.42c4.15,2.3,13.55,2.38,14.88,2.38Zm0,14.49c1.34,0,10.73-.09,14.88-2.38v5.42s0,.08,0,.12c0,.02,0,.04,0,.05-.09,1.84-6.74,3.34-14.88,3.34-1.96,0-3.82-.09-5.53-.24-2.3-2.94-5.59-5.08-9.35-5.93v-2.77c4.15,2.3,13.55,2.38,14.89,2.38Zm-4.14,16.43c0,7.91-6.44,14.35-14.35,14.35s-14.34-6.44-14.34-14.35,6.44-14.35,14.34-14.35,14.35,6.44,14.35,14.35Z'/%3e%3cpath%20class='cls-3'%20d='m9.47,42.21c0,6.11,4.97,11.09,11.09,11.09s11.09-4.97,11.09-11.09-4.97-11.09-11.09-11.09-11.09,4.97-11.09,11.09Zm20.77,0c0,5.34-4.34,9.68-9.68,9.68s-9.68-4.34-9.68-9.68,4.34-9.68,9.68-9.68,9.68,4.34,9.68,9.68Z'/%3e%3cpath%20class='cls-2'%20d='m19.75,47.74c-.72-.02-1.34-.09-1.86-.21-.53-.12-1.02-.28-1.5-.48v-2.57c.53.24,1.09.42,1.69.56s1.16.23,1.67.28v-2.07c-.69-.2-1.32-.44-1.86-.72-.55-.28-.98-.65-1.29-1.1-.31-.45-.47-1.04-.47-1.76,0-1.02.33-1.78,1-2.29s1.54-.8,2.63-.88v-1.16h1.55v1.14c.68.03,1.3.12,1.86.27.56.15,1.06.31,1.51.5l-.72,2.25c-.41-.18-.85-.32-1.3-.43s-.9-.18-1.35-.23v2.03c.78.24,1.45.48,2,.75.55.26.97.6,1.26,1.01.29.41.44.94.44,1.6,0,.91-.3,1.68-.89,2.31-.59.63-1.53,1.02-2.81,1.15v1.38h-1.55v-1.34Zm0-8.87c-.62.06-.92.29-.92.69,0,.21.07.38.21.51.14.13.38.25.71.36v-1.56Zm1.55,6.42c.64-.1.96-.36.96-.77,0-.21-.07-.38-.2-.51-.13-.13-.39-.25-.76-.36v1.65Z'/%3e%3c/svg%3e",
//                 title: "PIPE"
//               },             {
//                 icon:"data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23linear-gradient);}.cls-2{fill:url(%23linear-gradient-2);}%3c/style%3e%3clinearGradient%20id='linear-gradient'%20x1='.72'%20y1='30'%20x2='56.98'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d0b486'/%3e%3cstop%20offset='1'%20stop-color='%23b28033'/%3e%3c/linearGradient%3e%3clinearGradient%20id='linear-gradient-2'%20x1='.72'%20x2='56.98'%20xlink:href='%23linear-gradient'/%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m52.41,22.36c-2.49-6.8-7.93-12.17-14.78-14.56,0-.06,0-.11,0-.17,0-4.21-3.43-7.64-7.64-7.64s-7.59,3.38-7.63,7.56c-7.17,2.27-12.89,7.8-15.45,14.84-3.87.37-6.91,3.63-6.91,7.6s2.79,6.95,6.44,7.53c2.3,7.75,8.36,13.9,16.07,16.29.68,3.51,3.78,6.18,7.49,6.18s6.95-2.79,7.53-6.43c7.34-2.53,13.1-8.48,15.34-15.96,3.97-.27,7.12-3.57,7.12-7.61s-3.4-7.61-7.59-7.64ZM30,1.93c3.01,0,5.45,2.34,5.67,5.29.01.14.04.28.04.42,0,.7-.14,1.36-.37,1.98-.81,2.17-2.89,3.73-5.34,3.73s-4.62-1.64-5.39-3.89c-.2-.58-.33-1.18-.33-1.82,0-.21.04-.4.06-.6.3-2.87,2.71-5.11,5.65-5.11ZM5.9,35.41c-2.3-.74-3.98-2.87-3.98-5.41,0-2.67,1.85-4.91,4.34-5.53.44-.11.9-.19,1.38-.19.39,0,.77.04,1.13.11,2.61.53,4.58,2.84,4.58,5.6s-2.15,5.24-4.92,5.63c-.26.04-.52.08-.8.08-.61,0-1.18-.12-1.73-.3Zm24.1,22.66c-2.44,0-4.51-1.54-5.33-3.69-.24-.63-.39-1.31-.39-2.02,0-.19.04-.37.06-.56.28-2.89,2.7-5.16,5.66-5.16s5.28,2.18,5.64,4.99c.03.24.07.48.07.72,0,.64-.13,1.25-.33,1.83-.77,2.25-2.88,3.88-5.38,3.88Zm7.51-7.07c-.64-3.57-3.76-6.28-7.51-6.28s-7,2.84-7.55,6.52c-6.36-2.24-11.37-7.32-13.49-13.72,3.58-.63,6.32-3.76,6.32-7.52s-2.51-6.62-5.86-7.42c2.37-5.91,7.25-10.55,13.32-12.59.99,3.06,3.87,5.28,7.26,5.28s6.13-2.12,7.18-5.07c5.85,2.16,10.53,6.74,12.8,12.54-3.05,1-5.26,3.87-5.26,7.25s2.43,6.52,5.7,7.38c-2.03,6.26-6.81,11.27-12.91,13.63Zm15.88-15.4c-.34.06-.68.1-1.03.1-.5,0-.97-.08-1.43-.2-2.45-.64-4.28-2.86-4.28-5.51s1.67-4.67,3.96-5.41c.56-.18,1.14-.3,1.75-.3.23,0,.45.04.68.07,2.83.34,5.04,2.73,5.04,5.64s-2.02,5.12-4.68,5.61Z'/%3e%3cpath%20class='cls-2'%20d='m28.72,38.78c-1.14-.03-2.13-.15-2.96-.33-.84-.19-1.63-.44-2.37-.76v-4.08c.84.37,1.73.67,2.68.89s1.84.37,2.65.44v-3.28c-1.1-.32-2.09-.7-2.96-1.15-.87-.44-1.56-1.03-2.05-1.75-.5-.72-.75-1.65-.75-2.79,0-1.62.53-2.83,1.59-3.64s2.45-1.28,4.18-1.4v-1.84h2.45v1.81c1.08.05,2.07.2,2.96.43.89.23,1.69.5,2.4.8l-1.15,3.57c-.66-.28-1.35-.51-2.07-.68s-1.44-.29-2.15-.36v3.23c1.24.37,2.3.77,3.17,1.19.87.42,1.54.95,2,1.6.46.65.69,1.5.69,2.55,0,1.44-.47,2.66-1.41,3.67-.94,1-2.43,1.61-4.45,1.83v2.19h-2.45v-2.13Zm0-14.09c-.98.09-1.47.45-1.47,1.09,0,.34.11.61.33.81.22.21.6.4,1.13.57v-2.48Zm2.45,10.19c1.01-.16,1.52-.57,1.52-1.23,0-.34-.11-.61-.32-.81-.21-.2-.61-.4-1.2-.57v2.61Z'/%3e%3c/svg%3e",
//                 title: "ETF"
//               },
//               {
//                 icon: "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23linear-gradient);}.cls-2{fill:url(%23linear-gradient-8);}.cls-3{fill:url(%23linear-gradient-9);}.cls-4{fill:url(%23linear-gradient-3);}.cls-5{fill:url(%23linear-gradient-4);}.cls-6{fill:url(%23linear-gradient-2);}.cls-7{fill:url(%23linear-gradient-6);}.cls-8{fill:url(%23linear-gradient-7);}.cls-9{fill:url(%23linear-gradient-5);}%3c/style%3e%3clinearGradient%20id='linear-gradient'%20x1='.05'%20y1='12.15'%20x2='58'%20y2='12.15'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d0b486'/%3e%3cstop%20offset='1'%20stop-color='%23b28033'/%3e%3c/linearGradient%3e%3clinearGradient%20id='linear-gradient-2'%20y1='6.29'%20x2='58'%20y2='6.29'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-3'%20y1='19.71'%20y2='19.71'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-4'%20y1='28.15'%20x2='58'%20y2='28.15'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-5'%20y1='47.85'%20y2='47.85'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-6'%20y1='53.72'%20y2='53.72'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-7'%20y1='40.31'%20y2='40.31'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-8'%20y1='31.87'%20y2='31.87'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-9'%20y1='30'%20x2='58'%20y2='30'%20xlink:href='%23linear-gradient'/%3e%3c/defs%3e%3cg%3e%3cg%3e%3cpath%20class='cls-1'%20d='m50.59,19.44c-.45,0-.91-.24-1.15-.67-3.99-6.93-11.45-11.24-19.45-11.24-.75,0-1.34-.59-1.34-1.34s.59-1.34,1.34-1.34c8.94,0,17.29,4.82,21.76,12.58.37.64.16,1.45-.48,1.82-.19.13-.43.19-.67.19Z'/%3e%3cpath%20class='cls-6'%20d='m33.71,12.08c-.37,0-.78-.16-1.04-.48l-3.69-4.55c-.4-.51-.4-1.23.03-1.71l3.69-4.36c.48-.56,1.31-.64,1.9-.16.56.48.64,1.31.16,1.87l-2.97,3.51,3,3.69c.45.56.37,1.42-.19,1.87-.29.21-.59.32-.88.32Z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-4'%20d='m6.2,31.35c-.75,0-1.34-.59-1.34-1.34,0-8.94,4.82-17.29,12.58-21.76.64-.37,1.45-.16,1.82.48s.16,1.45-.48,1.82c-6.93,3.99-11.24,11.45-11.24,19.45,0,.72-.59,1.34-1.34,1.34Z'/%3e%3cpath%20class='cls-5'%20d='m6.2,31.35c-.29,0-.62-.11-.86-.32l-4.36-3.69c-.56-.48-.64-1.31-.16-1.9.48-.56,1.31-.64,1.9-.16l3.51,2.97,3.69-3c.56-.45,1.42-.37,1.87.19s.37,1.42-.19,1.87l-4.55,3.69c-.27.24-.56.35-.86.35Z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-9'%20d='m29.99,55.14c-8.94,0-17.29-4.82-21.76-12.58-.37-.64-.16-1.45.48-1.82s1.45-.16,1.82.48c3.99,6.93,11.45,11.24,19.45,11.24.75,0,1.34.59,1.34,1.34s-.59,1.34-1.34,1.34Z'/%3e%3cpath%20class='cls-7'%20d='m26.29,59.5c-.29,0-.62-.11-.86-.32-.56-.48-.64-1.31-.16-1.87l2.97-3.51-3-3.69c-.45-.56-.37-1.42.19-1.87s1.42-.37,1.87.19l3.69,4.55c.4.51.4,1.23-.03,1.71l-3.67,4.36c-.27.29-.64.45-1.02.45Z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-8'%20d='m41.89,51.95c-.45,0-.91-.24-1.15-.67-.37-.64-.16-1.45.48-1.82,6.93-3.99,11.24-11.45,11.24-19.45,0-.75.59-1.34,1.34-1.34s1.34.59,1.34,1.34c0,8.94-4.82,17.29-12.58,21.76-.21.13-.43.19-.67.19Z'/%3e%3cpath%20class='cls-2'%20d='m49.25,35.04c-.37,0-.78-.16-1.04-.51-.45-.56-.37-1.42.19-1.87l4.55-3.69c.51-.4,1.23-.4,1.71.03l4.36,3.69c.56.48.64,1.31.16,1.9-.48.56-1.31.64-1.87.16l-3.51-2.97-3.69,3c-.27.16-.56.27-.86.27Z'/%3e%3c/g%3e%3c/g%3e%3cpath%20class='cls-3'%20d='m28.72,38.78c-1.14-.03-2.13-.15-2.96-.33-.84-.19-1.63-.44-2.37-.76v-4.08c.84.37,1.73.67,2.68.89s1.84.37,2.65.44v-3.28c-1.1-.32-2.09-.7-2.96-1.15-.87-.44-1.56-1.03-2.05-1.75-.5-.72-.75-1.65-.75-2.79,0-1.62.53-2.83,1.59-3.64s2.45-1.28,4.18-1.4v-1.84h2.45v1.81c1.08.05,2.07.2,2.96.43.89.23,1.69.5,2.4.8l-1.15,3.57c-.66-.28-1.35-.51-2.07-.68s-1.44-.29-2.15-.36v3.23c1.24.37,2.3.77,3.17,1.19.87.42,1.54.95,2,1.6.46.65.69,1.5.69,2.55,0,1.44-.47,2.66-1.41,3.67-.94,1-2.43,1.61-4.45,1.83v2.19h-2.45v-2.13Zm0-14.09c-.98.09-1.47.45-1.47,1.09,0,.34.11.61.33.81.22.21.6.4,1.13.57v-2.48Zm2.45,10.19c1.01-.16,1.52-.57,1.52-1.23,0-.34-.11-.61-.32-.81-.21-.2-.61-.4-1.2-.57v2.61Z'/%3e%3c/svg%3e",
//                 title: "活期理财"
//               }
//             ].map((item, index) => (
//               <div key={index} className="flex items-center flex-col">
//                 <Image
//                   src={item.icon}
//                   alt={item.title}
//                   width={60}
//                   height={60}
//                   className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[2.5vw] lg:h-[2.5vw] min-w-[48px] min-h-[48px]"
//                   unoptimized // 因为是 data URL，需要添加这个属性
//                 />
//                 <div className="text-sm sm:text-base lg:text-base leading-loose mt-2 sm:mt-4 text-center">
//                   {item.title}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-center lg:justify-start">
//             <button className="px-12 sm:px-16 lg:px-24 py-3 border border-[#ab9064] text-[#ab9064] text-center mt-8 sm:mt-12 lg:mt-16 rounded-full cursor-pointer tracking-[5px] sm:tracking-[8px] lg:tracking-[10px] text-sm sm:text-base" onClick={() => window.location.replace('/business')}>
//               瞭解更多
//             </button>
//           </div>
//         </div>
//
//         {/* 装饰元素 - 移动端隐藏 */}
//         <Image
//           alt="investment"
//           width={587}
//           height={1047}
//           className="hidden lg:block absolute w-48 -top-0 left-1/2 -translate-y-1/3"
//           src="/images/diamond.svg"
//         />
//         <div className="hidden lg:block absolute w-[620px] -top-0 -right-[100px] -translate-y-1/3 video-mask">
//           <video
//             src="/video/fire.mp4"
//             className="w-full h-full"
//             poster="http://www.artafo.com/assets/fire-br-ASEma.jpg"
//             autoPlay
//             loop
//             preload="auto"
//             muted
//             playsInline
//           />
//         </div>
//       </div>
//
//       {/* Family Section - 移动端优化 */}
//       <div id="advantage" className="relative w-full flex justify-center items-center family-bg px-4 sm:px-6 lg:px-0">
//         <div className="w-full lg:w-[50vw] max-w-4xl lg:max-w-none rounded-[20px] sm:rounded-[30px] family-box p-8 sm:p-16 lg:p-40 text-white my-20 sm:my-32 lg:my-52">
//           <div className="text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-20 text-center lg:text-left">
//             核心优势
//           </div>
//           <div className="text-xl sm:text-2xl lg:text-3xl text-center lg:text-left">
//             FAMILY GOVERNANCE
//           </div>
//           <div className="mt-8 sm:mt-12 lg:mt-16 text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-loose text-center lg:text-left">
//             汇聚资深专业团队，严格合规运营机制，量身定制投资方案，多元化服务能力，以专业实力助力客户实现稳健财富增值目标
//             <br className="hidden sm:block" /><br className="hidden sm:block" />
//             我们不只服务客户，更经营长期信任关系
//             N Plus Capital 的服务定位并非“客服中心”，而是“财富安全的守门人”。
//             我们始终相信：真正优秀的金融服务，不是包装出来的，是制度、透明度与陪伴感共同塑造的。
//           </div>
//           <div className="flex justify-center lg:justify-start">
//             <button className="px-12 sm:px-16 lg:px-24 py-3 border border-white text-white text-center mt-8 sm:mt-12 lg:mt-16 rounded-full cursor-pointer tracking-[5px] sm:tracking-[8px] lg:tracking-[10px] text-sm sm:text-base" onClick={() => window.location.replace('/advantage')}>
//               瞭解更多
//             </button>
//           </div>
//         </div>
//
//         {/* 装饰元素 - 移动端调整 */}
//         <Image
//           src="/images/organic-shape.svg"
//           width={1500}
//           height={1500}
//           alt="organic-shape"
//           className="absolute w-full scale-50 sm:scale-75 lg:scale-75 -top-0 right-0 translate-x-1/4 sm:translate-x-1/2 -translate-y-1/3 opacity-50 lg:opacity-100"
//         />
//       </div>
//
//       {/* Responsibility Section - 移动端优化 */}
//       <div id="qualification" className="relative w-full flex flex-col lg:flex-row justify-center items-center bg-[#f0eddd] responsibility-bg px-4 sm:px-6 lg:px-0">
//         <div className="w-full lg:w-[30vw] lg:-translate-x-2/3 max-w-2xl lg:max-w-none my-20 sm:my-32 lg:my-52 order-2 lg:order-1">
//           <div className="text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-20 text-[#ab9064] text-center lg:text-left">
//             资质认证
//           </div>
//           <div className="text-xl sm:text-2xl lg:text-3xl text-[#ab9064] text-center lg:text-left">
//             SOCIAL RESPONSIBILITY
//           </div>
//           <div className="mt-8 sm:mt-12 lg:mt-16 text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-loose text-[#593725] text-center lg:text-left">
//             持有香港证监会SFC第4类及第9类正规牌照，严格遵循监管要求，建立完善合规体系，为客户投资安全提供坚实法律保障。我们建立了专业规范的服务流程体系，确保投资决策透明高效，从客户需求分析到投资执行监控，提供全程专业服务          </div>
//           <div className="flex justify-center lg:justify-start">
//             <button className="px-12 sm:px-16 lg:px-24 py-3 border border-[#ab9064] text-[#ab9064] text-center mt-8 sm:mt-12 lg:mt-16 rounded-full cursor-pointer tracking-[5px] sm:tracking-[8px] lg:tracking-[10px] text-sm sm:text-base" onClick={() => window.location.replace('/qualification')}>
//               瞭解更多
//             </button>
//           </div>
//         </div>
//
//         {/* 装饰元素 - 移动端调整 */}
//         <div className="hidden lg:block absolute w-[620px] -top-30 -left-[100px] -translate-y-1/3 video-mask scale-75">
//           <video
//             src="/video/fire.mp4"
//             className="w-full h-full"
//             poster="http://www.artafo.com/assets/fire-br-ASEma.jpg"
//             autoPlay
//             loop
//             preload="auto"
//             muted
//             playsInline
//           />
//         </div>
//         <Image
//           alt="investment"
//           width={587}
//           height={1047}
//           className="hidden lg:block absolute w-48 -bottom-64 left-1/2 -translate-y-1/3"
//           src="/images/diamond.svg"
//         />
//       </div>
//       <div id="strength" className="relative w-full flex justify-center items-center family-bg px-4 sm:px-6 lg:px-0">
//         <div className="w-full lg:w-[50vw] max-w-4xl lg:max-w-none rounded-[20px] sm:rounded-[30px] p-8 sm:p-16 lg:p-40 text-white my-20 sm:my-32 lg:my-52" onClick={() => window.location.replace('/strength')}>
//           <div className="text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-20 text-center lg:text-left">
//             实力展现
//           </div>
//           <div className="text-xl sm:text-2xl lg:text-3xl text-center lg:text-left">
//             FAMILY GOVERNANCE
//           </div>
//           <div className="mt-8 sm:mt-12 lg:mt-16 text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-loose text-center lg:text-left">
//             我们的理资产规模持续稳健增长，服务涵盖机构投资者与高净值个人客户，在香港资产管理市场建立良好声誉与专业地位
//           </div>
//           <div className="flex justify-center lg:justify-start">
//             <button className="px-12 sm:px-16 lg:px-24 py-3 border border-white text-white text-center mt-8 sm:mt-12 lg:mt-16 rounded-full cursor-pointer tracking-[5px] sm:tracking-[8px] lg:tracking-[10px] text-sm sm:text-base" onClick={() => window.location.replace('/business')}>
//               瞭解更多
//             </button>
//           </div>
//         </div>
//
//         {/* 装饰元素 - 移动端调整 */}
//         <Image
//           src="/images/organic-shape.svg"
//           width={1500}
//           height={1500}
//           alt="organic-shape"
//           className="absolute w-full scale-50 sm:scale-75 lg:scale-75 -top-0 right-0 translate-x-1/4 sm:translate-x-1/2 -translate-y-1/3 opacity-50 lg:opacity-100"
//         />
//       </div>
//
//     </div>
//   );
// }

export default function Home({locale}) {
  const messages = getMessages(locale)

  useChildrenAnimation([
    'about',
    'business',
    'advantage',
    'qualification',
    'strength'
  ]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Banner - 移動端優化 */}
      <div id={'hero-banner'} className="h-screen w-full relative">
        <video
          src="/video/loading.mp4"
          poster="/images/loading.jpg"
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline // 移動端自動播放必需
        ></video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white titleEnterAnimation px-4">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 md:mb-16">
            {messages.home.sloganZh}
          </h3>
          <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl leading-normal mx-auto">
            {messages.home.sloganEn}
          </h4>
        </div>
      </div>

      {/* 裝飾元素 - 移動端隱藏或調整 */}
      <div className="hidden lg:block absolute left-0 top-0 w-[26vw] h-[150vh] HomeDecorationLeft">
        <Image
          alt="top-left"
          width={1240}
          height={3240}
          src="/images/top-left.svg"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="hidden lg:block absolute right-0 top-0 h-screen w-[26vw] HomeDecorationRight z-10">
        <Image
          alt="top-right"
          width={1240}
          height={3240}
          className="h-full w-full object-contain"
          src="/images/top-right.svg"
        />
      </div>

      {/* About Section - 移動端優化 */}
      <div id={'about'} className="relative flex flex-col lg:flex-row justify-center items-center pt-20 sm:pt-32 md:pt-40 lg:pt-52 px-4 sm:px-6 lg:px-0">
        <div className="w-full lg:w-[25vw] lg:translate-x-[-50%] max-w-2xl lg:max-w-none">
          <div className="text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-20 text-[#ab9064] text-center lg:text-left">
            關於我們
          </div>
          <div className="text-xl sm:text-2xl lg:text-3xl text-[#ab9064] text-center lg:text-left">
            ABOUT US
          </div>
          <div className="mt-8 sm:mt-12 lg:mt-16 text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-loose text-[#593725] text-center lg:text-left">
            立足香港國際金融中心，專業持牌資產管理機構，憑藉嚴格合規運營與專業投資能力，致力為客戶創造長期穩健投資回報
            <br className="hidden sm:block" /><br className="hidden sm:block" />
            以數據驅動專業投資，用制度保障客戶資產，為每一位投資者打造值得信賴的數字財富平台。
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="px-12 sm:px-16 lg:px-24 py-3 border border-[#ab9064] text-[#ab9064] text-center mt-8 sm:mt-12 lg:mt-16 rounded-full cursor-pointer tracking-[5px] sm:tracking-[8px] lg:tracking-[10px] text-sm sm:text-base" onClick={() => window.location.replace('/about')}>
              瞭解更多
            </button>
          </div>
        </div>
        <Image
          alt="about"
          width={587}
          height={1047}
          className="hidden lg:block absolute w-48 -top-0 right-1/4"
          src="/images/diamond.svg"
        />
      </div>

      {/* Investment Section - 移動端優化 */}
      <div id="business" className="relative flex flex-col lg:flex-row justify-center items-center pt-20 sm:pt-32 md:pt-40 lg:pt-52 pb-20 sm:pb-32 md:pb-40 lg:pb-52 investment-bg px-4 sm:px-6 lg:px-0">
        <div className="w-full lg:w-[50vw] lg:translate-x-[-20%] max-w-4xl lg:max-w-none">
          <div className="text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-20 text-[#ab9064] text-center lg:text-left">
            業務領域
          </div>
          <div className="text-xl sm:text-2xl lg:text-3xl text-[#ab9064] text-center lg:text-left">
            BUSINESS SCOPE
          </div>
          <div className="mt-8 sm:mt-12 lg:mt-16 text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-loose text-[#593725] text-center lg:text-left">
            我們提供全方位專業投資管理服務，涵蓋資產管理、證券諮詢與投資策略制定，從專業分析到資產配置，為您的財富增值保駕護航。我們秉承價值投資理念，基於深度市場研究與風險控制，構建多元化投資組合，追求長期穩健回報與資產保值增值目標
          </div>

          {/* 圖標組 - 移動端網格佈局 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-6 sm:gap-8 lg:gap-32 mt-8 sm:mt-12 lg:mt-16 justify-center lg:justify-start">
            {[
              {
                icon:"data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23linear-gradient);}%3c/style%3e%3clinearGradient%20id='linear-gradient'%20x1='.72'%20y1='30.12'%20x2='58.72'%20y2='30.12'%20gradientTransform='translate(.28%20-.12)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d0b486'/%3e%3cstop%20offset='1'%20stop-color='%23b28033'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m43.59,6.47l-3.56,3.56-.42.07c-1.74-.8-5.16-1.61-9.23,1.52l-.09.08-1.25,1.26c-4.7-3.19-8.44-1.22-9.49-.53l-3.15-3.15c-.85-.85-2.22-.85-3.07,0L1.64,20.98c-.85.85-.85,2.22,0,3.07l4.06,4.06c.04,2.51.94,5.08,2.67,7.68.76,1.14,1.66,2.17,2.62,3.15,1.1,1.11,2.21,2.21,3.32,3.32-1.26,1.84-.72,3.36.59,4.72,1.36,1.42,2.62,1.59,4.46,1.05l.05.02c.89,1.34,1.74,2.21,2.6,2.67l2.9,1.97c1.63,1.58,4.12,1.94,6.09.81.85-.49.99-.89,1.43-1.58,3.33,2.79,5.54,2.84,8.16-1.07l.05-.02c1.85.53,3.1.37,4.46-1.05,1.4-1.46,1.93-3.1.31-5.11-.15-.19-.06-.46.18-.5.86-.15,1.54-.73,1.95-1.26,1.29-1.66,1.21-3.41-.17-5.13.6-.61,1.21-1.21,1.81-1.82.82-.83,1.6-1.73,2.26-2.69,1.86-2.7,2.82-5.36,2.86-7.97l4.07-4.07c.85-.85.85-2.22,0-3.06l-11.71-11.71c-.85-.85-2.22-.85-3.06,0Zm-31.87,30.15c-1.7-1.79-2.97-3.78-3.53-6.02-.12-.5-.21-1.02-.26-1.54-.04-.43-.05-.87-.04-1.32l-4.89-4.89,12.21-12.21,3.12,3.12.26.26-.02.04,1.89.16.12-.31c.75-.51,3.84-2.23,7.97.92l5.47,5.49c.27.28.42.64.42,1.04,0,.39-.15.76-.43,1.04l-.36.36c-.57.57-1.5.57-2.07,0l-5.59-5.62-1.36.95,1.51,1.77.65.66c-.64.64-1.29,1.29-1.93,1.93-.16.16-.25.33-.3.51-.03.03-.06.07-.1.1-3.76,3.76-7.53,7.52-11.28,11.29-.75.75-1.24,1.52-1.49,2.28Zm18.13,15.23c-.43.41-.88.66-1.52.61-.89-.07-1.51-.75-1.95-1.18-.27-.26-.53-.52-.79-.79.62-.33,1.27-.79,1.98-1.39.44.69.58,1.09,1.43,1.58.38.22.78.38,1.19.49-.07.28-.18.52-.34.67Zm8.06-.76c-.84.99-1.8,1.07-3.02-.06-.19-.18-.38-.36-.57-.53.27-.18.52-.38.76-.6.7-.68,1.39-1.36,2.09-2.04.07.07.15.15.22.22,1.15,1.16,1.31,2.09.51,3.02Zm5.84-3.06c-.85,1.16-2.14,1.18-3.3.03-.58-.57-1.15-1.15-1.73-1.73.95-.93,1.9-1.85,2.85-2.78.53.54,1.07,1.07,1.61,1.61,1.03,1.04,1.21,2.01.57,2.88Zm2.37-6.85c-.43,1.08-1.71,1.59-2.73,1.03-.1-.05-.19-.12-.29-.18.92-.91,1.82-1.82,2.73-2.73.39.52.6,1.1.28,1.89Zm6-16.27c.01.45,0,.89-.04,1.32-.05.53-.14,1.04-.26,1.54-.56,2.26-1.84,4.25-3.55,6.05-2.32,2.44-4.75,4.78-7.13,7.16-2.5,2.5-4.99,5.01-7.51,7.49-.43.43-1.05,1.11-1.95,1.18-.65.05-1.09-.2-1.52-.61-.39-.37-.51-1.29-.36-1.87.16-.63.72-1.2,1.2-1.69,1.14-1.17,2.3-2.31,3.45-3.47.56-.56,1.12-1.13,1.67-1.7.59-.61,2.31-1.89,1.34-2.79-.88-.83-2.15.77-2.68,1.3-.56.56-1.12,1.13-1.69,1.68-2.64,2.58-5.25,5.2-7.96,7.71-1.23,1.14-2.19,1.05-3.02.07-.8-.93-.64-1.87.51-3.02,3-3,6-6,8.99-9,.42-.42.78-.7.86-1.34.06-.48-.12-.9-.61-.97-.82-.12-1.18.19-1.71.72-3.53,3.53-7.05,7.06-10.59,10.58-1.16,1.16-2.46,1.13-3.3-.03-.63-.87-.46-1.84.57-2.88,3.58-3.59,7.17-7.18,10.76-10.76.59-.58,1.05-1.24.33-1.91-.69-.64-1.28-.07-1.8.45-2.76,2.77-5.52,5.53-8.29,8.29-.37.37-.76.74-1.21.99-1.02.56-2.3.05-2.73-1.03-.44-1.1.13-1.8.83-2.5,4.59-4.57,9.17-9.14,13.72-13.75l1.88,1.89c.64.64,1.48.96,2.32.96.84,0,1.67-.32,2.31-.95l.36-.36c.62-.62.96-1.44.96-2.32,0-.82-.31-1.59-.85-2.2l-4.17-4.21h0s-.82-.82-.82-.82l1.11-1.12c1.72-1.31,3.26-1.77,4.53-1.84,2.32-.21,4.37,1,4.37,1l1.23-1.23,3.13-3.13,12.21,12.21-4.9,4.9Z'/%3e%3c/svg%3e",
                title: "新股申購"
              },
              {
                icon: "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23linear-gradient);}.cls-2{fill:url(%23linear-gradient-3);}.cls-3{fill:url(%23linear-gradient-2);}%3c/style%3e%3clinearGradient%20id='linear-gradient'%20x1='5.05'%20y1='30'%20x2='51.1'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d0b486'/%3e%3cstop%20offset='1'%20stop-color='%23b28033'/%3e%3c/linearGradient%3e%3clinearGradient%20id='linear-gradient-2'%20x1='5.05'%20y1='42.21'%20x2='51.1'%20y2='42.21'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-3'%20x1='5.05'%20y1='42.21'%20x2='51.1'%20y2='42.21'%20xlink:href='%23linear-gradient'/%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m20.56,25.76c-9.07,0-16.45,7.38-16.45,16.45s7.38,16.45,16.45,16.45c7.17,0,13.29-4.62,15.53-11.03,1.11.05,2.13.06,2.96.06,5.05,0,16.8-.53,16.8-5.49,0-.01,0-.03,0-.04,0-.01,0-.03,0-.04v-6.61c.03-.15.05-.3.05-.45,0-.15-.02-.29-.05-.43v-5.44c.03-.15.05-.3.05-.45,0-.15-.02-.29-.05-.43v-6.05c.03-.15.05-.3.05-.45,0-.26-.05-.5-.14-.74.05-.22.09-.44.09-.68,0-.02,0-.03,0-.04,0-.01,0-.03,0-.04v-6.61c.03-.15.05-.3.05-.45,0-.15-.02-.29-.05-.43v-6.05c.03-.15.05-.3.05-.45,0-.27-.05-.52-.14-.76-.15-.51-.46-.93-.89-1.2-3.43-2.91-14.37-3.01-15.82-3.01s-12.39.1-15.82,3.01c-.42.27-.74.69-.89,1.2-.09.24-.14.5-.14.77,0,.16.02.31.05.45v6.05c-.03.14-.05.28-.05.43,0,.16.02.31.05.45v6.61s0,.03,0,.04c0,.01,0,.03,0,.04,0,.24.04.46.09.68-.08.23-.13.48-.13.74,0,.16.02.31.05.45v3.58c-.55-.06-1.12-.09-1.69-.09Zm33.37,16.32s0,.08,0,.12c0,.02,0,.04,0,.05-.09,1.84-6.74,3.34-14.88,3.34-.81,0-1.6-.02-2.38-.05.22-1.08.34-2.19.34-3.33,0-.29,0-.58-.02-.87.76.02,1.46.03,2.06.03,3.79,0,11.34-.3,14.88-2.54v3.24Zm0-6.32s0,.08,0,.12c0,.02,0,.03,0,.05-.09,1.84-6.74,3.34-14.88,3.34-.79,0-1.56-.02-2.31-.04-.32-1.74-.91-3.39-1.74-4.9,1.54.09,2.96.12,4.05.12,3.79,0,11.34-.3,14.88-2.54v3.85Zm0-15.5s0,.08,0,.12c0,.02,0,.04,0,.05-.09,1.84-6.74,3.34-14.88,3.34s-14.79-1.49-14.88-3.34c0-.04,0-.07,0-.1,0-.02,0-.04,0-.07v-3.85c3.54,2.24,11.09,2.54,14.88,2.54s11.34-.3,14.88-2.54v3.85ZM39.05,3.76c8.45,0,13.69,1.57,14.57,2.55-.88.98-6.12,2.55-14.57,2.55s-13.69-1.57-14.57-2.55c.88-.98,6.12-2.55,14.57-2.55Zm0,7.52c1.34,0,10.73-.09,14.88-2.38v4.42s0,.08,0,.12c0,.02,0,.04,0,.06-.09,1.84-6.74,3.34-14.88,3.34s-14.79-1.5-14.88-3.34c0-.04,0-.07,0-.1,0-.02,0-.04,0-.07v-4.42c4.15,2.3,13.55,2.38,14.88,2.38Zm0,14.49c1.34,0,10.73-.09,14.88-2.38v5.42s0,.08,0,.12c0,.02,0,.04,0,.05-.09,1.84-6.74,3.34-14.88,3.34-1.96,0-3.82-.09-5.53-.24-2.3-2.94-5.59-5.08-9.35-5.93v-2.77c4.15,2.3,13.55,2.38,14.89,2.38Zm-4.14,16.43c0,7.91-6.44,14.35-14.35,14.35s-14.34-6.44-14.34-14.35,6.44-14.35,14.34-14.35,14.35,6.44,14.35,14.35Z'/%3e%3cpath%20class='cls-3'%20d='m9.47,42.21c0,6.11,4.97,11.09,11.09,11.09s11.09-4.97,11.09-11.09-4.97-11.09-11.09-11.09-11.09,4.97-11.09,11.09Zm20.77,0c0,5.34-4.34,9.68-9.68,9.68s-9.68-4.34-9.68-9.68,4.34-9.68,9.68-9.68,9.68,4.34,9.68,9.68Z'/%3e%3cpath%20class='cls-2'%20d='m19.75,47.74c-.72-.02-1.34-.09-1.86-.21-.53-.12-1.02-.28-1.5-.48v-2.57c.53.24,1.09.42,1.69.56s1.16.23,1.67.28v-2.07c-.69-.2-1.32-.44-1.86-.72-.55-.28-.98-.65-1.29-1.1-.31-.45-.47-1.04-.47-1.76,0-1.02.33-1.78,1-2.29s1.54-.8,2.63-.88v-1.16h1.55v1.14c.68.03,1.3.12,1.86.27.56.15,1.06.31,1.51.5l-.72,2.25c-.41-.18-.85-.32-1.3-.43s-.9-.18-1.35-.23v2.03c.78.24,1.45.48,2,.75.55.26.97.6,1.26,1.01.29.41.44.94.44,1.6,0,.91-.3,1.68-.89,2.31-.59.63-1.53,1.02-2.81,1.15v1.38h-1.55v-1.34Zm0-8.87c-.62.06-.92.29-.92.69,0,.21.07.38.21.51.14.13.38.25.71.36v-1.56Zm1.55,6.42c.64-.1.96-.36.96-.77,0-.21-.07-.38-.2-.51-.13-.13-.39-.25-.76-.36v1.65Z'/%3e%3c/svg%3e",
                title: "私募股權投資"
              },
              {
                icon:"data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23linear-gradient);}.cls-2{fill:url(%23linear-gradient-2);}%3c/style%3e%3clinearGradient%20id='linear-gradient'%20x1='.72'%20y1='30'%20x2='56.98'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d0b486'/%3e%3cstop%20offset='1'%20stop-color='%23b28033'/%3e%3c/linearGradient%3e%3clinearGradient%20id='linear-gradient-2'%20x1='.72'%20x2='56.98'%20xlink:href='%23linear-gradient'/%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m52.41,22.36c-2.49-6.8-7.93-12.17-14.78-14.56,0-.06,0-.11,0-.17,0-4.21-3.43-7.64-7.64-7.64s-7.59,3.38-7.63,7.56c-7.17,2.27-12.89,7.8-15.45,14.84-3.87.37-6.91,3.63-6.91,7.6s2.79,6.95,6.44,7.53c2.3,7.75,8.36,13.9,16.07,16.29.68,3.51,3.78,6.18,7.49,6.18s6.95-2.79,7.53-6.43c7.34-2.53,13.1-8.48,15.34-15.96,3.97-.27,7.12-3.57,7.12-7.61s-3.4-7.61-7.59-7.64ZM30,1.93c3.01,0,5.45,2.34,5.67,5.29.01.14.04.28.04.42,0,.7-.14,1.36-.37,1.98-.81,2.17-2.89,3.73-5.34,3.73s-4.62-1.64-5.39-3.89c-.2-.58-.33-1.18-.33-1.82,0-.21.04-.4.06-.6.3-2.87,2.71-5.11,5.65-5.11ZM5.9,35.41c-2.3-.74-3.98-2.87-3.98-5.41,0-2.67,1.85-4.91,4.34-5.53.44-.11.9-.19,1.38-.19.39,0,.77.04,1.13.11,2.61.53,4.58,2.84,4.58,5.6s-2.15,5.24-4.92,5.63c-.26.04-.52.08-.8.08-.61,0-1.18-.12-1.73-.3Zm24.1,22.66c-2.44,0-4.51-1.54-5.33-3.69-.24-.63-.39-1.31-.39-2.02,0-.19.04-.37.06-.56.28-2.89,2.7-5.16,5.66-5.16s5.28,2.18,5.64,4.99c.03.24.07.48.07.72,0,.64-.13,1.25-.33,1.83-.77,2.25-2.88,3.88-5.38,3.88Zm7.51-7.07c-.64-3.57-3.76-6.28-7.51-6.28s-7,2.84-7.55,6.52c-6.36-2.24-11.37-7.32-13.49-13.72,3.58-.63,6.32-3.76,6.32-7.52s-2.51-6.62-5.86-7.42c2.37-5.91,7.25-10.55,13.32-12.59.99,3.06,3.87,5.28,7.26,5.28s6.13-2.12,7.18-5.07c5.85,2.16,10.53,6.74,12.8,12.54-3.05,1-5.26,3.87-5.26,7.25s2.43,6.52,5.7,7.38c-2.03,6.26-6.81,11.27-12.91,13.63Zm15.88-15.4c-.34.06-.68.1-1.03.1-.5,0-.97-.08-1.43-.2-2.45-.64-4.28-2.86-4.28-5.51s1.67-4.67,3.96-5.41c.56-.18,1.14-.3,1.75-.3.23,0,.45.04.68.07,2.83.34,5.04,2.73,5.04,5.64s-2.02,5.12-4.68,5.61Z'/%3e%3cpath%20class='cls-2'%20d='m28.72,38.78c-1.14-.03-2.13-.15-2.96-.33-.84-.19-1.63-.44-2.37-.76v-4.08c.84.37,1.73.67,2.68.89s1.84.37,2.65.44v-3.28c-1.1-.32-2.09-.7-2.96-1.15-.87-.44-1.56-1.03-2.05-1.75-.5-.72-.75-1.65-.75-2.79,0-1.62.53-2.83,1.59-3.64s2.45-1.28,4.18-1.4v-1.84h2.45v1.81c1.08.05,2.07.2,2.96.43.89.23,1.69.5,2.4.8l-1.15,3.57c-.66-.28-1.35-.51-2.07-.68s-1.44-.29-2.15-.36v3.23c1.24.37,2.3.77,3.17,1.19.87.42,1.54.95,2,1.6.46.65.69,1.5.69,2.55,0,1.44-.47,2.66-1.41,3.67-.94,1-2.43,1.61-4.45,1.83v2.19h-2.45v-2.13Zm0-14.09c-.98.09-1.47.45-1.47,1.09,0,.34.11.61.33.81.22.21.6.4,1.13.57v-2.48Zm2.45,10.19c1.01-.16,1.52-.57,1.52-1.23,0-.34-.11-.61-.32-.81-.21-.2-.61-.4-1.2-.57v2.61Z'/%3e%3c/svg%3e",
                title: "ETF"
              },
              {
                icon: "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23linear-gradient);}.cls-2{fill:url(%23linear-gradient-8);}.cls-3{fill:url(%23linear-gradient-9);}.cls-4{fill:url(%23linear-gradient-3);}.cls-5{fill:url(%23linear-gradient-4);}.cls-6{fill:url(%23linear-gradient-2);}.cls-7{fill:url(%23linear-gradient-6);}.cls-8{fill:url(%23linear-gradient-7);}.cls-9{fill:url(%23linear-gradient-5);}%3c/style%3e%3clinearGradient%20id='linear-gradient'%20x1='.05'%20y1='12.15'%20x2='58'%20y2='12.15'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d0b486'/%3e%3cstop%20offset='1'%20stop-color='%23b28033'/%3e%3c/linearGradient%3e%3clinearGradient%20id='linear-gradient-2'%20y1='6.29'%20x2='58'%20y2='6.29'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-3'%20y1='19.71'%20y2='19.71'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-4'%20y1='28.15'%20x2='58'%20y2='28.15'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-5'%20y1='47.85'%20y2='47.85'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-6'%20y1='53.72'%20y2='53.72'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-7'%20y1='40.31'%20y2='40.31'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-8'%20y1='31.87'%20y2='31.87'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-9'%20y1='30'%20x2='58'%20y2='30'%20xlink:href='%23linear-gradient'/%3e%3c/defs%3e%3cg%3e%3cg%3e%3cpath%20class='cls-1'%20d='m50.59,19.44c-.45,0-.91-.24-1.15-.67-3.99-6.93-11.45-11.24-19.45-11.24-.75,0-1.34-.59-1.34-1.34s.59-1.34,1.34-1.34c8.94,0,17.29,4.82,21.76,12.58.37.64.16,1.45-.48,1.82-.19.13-.43.19-.67.19Z'/%3e%3cpath%20class='cls-6'%20d='m33.71,12.08c-.37,0-.78-.16-1.04-.48l-3.69-4.55c-.4-.51-.4-1.23.03-1.71l3.69-4.36c.48-.56,1.31-.64,1.9-.16.56.48.64,1.31.16,1.87l-2.97,3.51,3,3.69c.45.56.37,1.42-.19,1.87-.29.21-.59.32-.88.32Z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-4'%20d='m6.2,31.35c-.75,0-1.34-.59-1.34-1.34,0-8.94,4.82-17.29,12.58-21.76.64-.37,1.45-.16,1.82.48s.16,1.45-.48,1.82c-6.93,3.99-11.24,11.45-11.24,19.45,0,.72-.59,1.34-1.34,1.34Z'/%3e%3cpath%20class='cls-5'%20d='m6.2,31.35c-.29,0-.62-.11-.86-.32l-4.36-3.69c-.56-.48-.64-1.31-.16-1.9.48-.56,1.31-.64,1.9-.16l3.51,2.97,3.69-3c.56-.45,1.42-.37,1.87.19s.37,1.42-.19,1.87l-4.55,3.69c-.27.24-.56.35-.86.35Z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-9'%20d='m29.99,55.14c-8.94,0-17.29-4.82-21.76-12.58-.37-.64-.16-1.45.48-1.82s1.45-.16,1.82.48c3.99,6.93,11.45,11.24,19.45,11.24.75,0,1.34.59,1.34,1.34s-.59,1.34-1.34,1.34Z'/%3e%3cpath%20class='cls-7'%20d='m26.29,59.5c-.29,0-.62-.11-.86-.32-.56-.48-.64-1.31-.16-1.87l2.97-3.51-3-3.69c-.45-.56-.37-1.42.19-1.87s1.42-.37,1.87.19l3.69,4.55c.4.51.4,1.23-.03,1.71l-3.67,4.36c-.27.29-.64.45-1.02.45Z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-8'%20d='m41.89,51.95c-.45,0-.91-.24-1.15-.67-.37-.64-.16-1.45.48-1.82,6.93-3.99,11.24-11.45,11.24-19.45,0-.75.59-1.34,1.34-1.34s1.34.59,1.34,1.34c0,8.94-4.82,17.29-12.58,21.76-.21.13-.43.19-.67.19Z'/%3e%3cpath%20class='cls-2'%20d='m49.25,35.04c-.37,0-.78-.16-1.04-.51-.45-.56-.37-1.42.19-1.87l4.55-3.69c.51-.4,1.23-.4,1.71.03l4.36,3.69c.56.48.64,1.31.16,1.9-.48.56-1.31.64-1.87.16l-3.51-2.97-3.69,3c-.27.16-.56.27-.86.27Z'/%3e%3c/g%3e%3c/g%3e%3cpath%20class='cls-3'%20d='m28.72,38.78c-1.14-.03-2.13-.15-2.96-.33-.84-.19-1.63-.44-2.37-.76v-4.08c.84.37,1.73.67,2.68.89s1.84.37,2.65.44v-3.28c-1.1-.32-2.09-.7-2.96-1.15-.87-.44-1.56-1.03-2.05-1.75-.5-.72-.75-1.65-.75-2.79,0-1.62.53-2.83,1.59-3.64s2.45-1.28,4.18-1.4v-1.84h2.45v1.81c1.08.05,2.07.2,2.96.43.89.23,1.69.5,2.4.8l-1.15,3.57c-.66-.28-1.35-.51-2.07-.68s-1.44-.29-2.15-.36v3.23c1.24.37,2.3.77,3.17,1.19.87.42,1.54.95,2,1.6.46.65.69,1.5.69,2.55,0,1.44-.47,2.66-1.41,3.67-.94,1-2.43,1.61-4.45,1.83v2.19h-2.45v-2.13Zm0-14.09c-.98.09-1.47.45-1.47,1.09,0,.34.11.61.33.81.22.21.6.4,1.13.57v-2.48Zm2.45,10.19c1.01-.16,1.52-.57,1.52-1.23,0-.34-.11-.61-.32-.81-.21-.2-.61-.4-1.2-.57v2.61Z'/%3e%3c/svg%3e",
                title: "活期理財"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-center flex-col">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[2.5vw] lg:h-[2.5vw] min-w-[48px] min-h-[48px]"
                />
                <div className="text-sm sm:text-base lg:text-base leading-loose mt-2 sm:mt-4 text-center">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="px-12 sm:px-16 lg:px-24 py-3 border border-[#ab9064] text-[#ab9064] text-center mt-8 sm:mt-12 lg:mt-16 rounded-full cursor-pointer tracking-[5px] sm:tracking-[8px] lg:tracking-[10px] text-sm sm:text-base" onClick={() => window.location.replace('/business')}>
              瞭解更多
            </button>
          </div>
        </div>

        {/* 裝飾元素 - 移動端隱藏 */}
        <Image
          alt="investment"
          width={587}
          height={1047}
          className="hidden lg:block absolute w-48 -top-0 left-1/2 -translate-y-1/3"
          src="/images/diamond.svg"
        />
        <div className="hidden lg:block absolute w-[620px] -top-0 -right-[100px] -translate-y-1/3 video-mask">
          <video
            src="/video/fire.mp4"
            className="w-full h-full"
            poster="http://www.artafo.com/assets/fire-br-ASEma.jpg"
            autoPlay
            loop
            preload="auto"
            muted
            playsInline
          />
        </div>
      </div>

      {/* Family Section - 移動端優化 */}
      <div id="advantage" className="relative w-full flex justify-center items-center family-bg px-4 sm:px-6 lg:px-0">
        <div className="w-full lg:w-[50vw] max-w-4xl lg:max-w-none rounded-[20px] sm:rounded-[30px] family-box p-8 sm:p-16 lg:p-40 text-white my-20 sm:my-32 lg:my-52">
          <div className="text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-20 text-center lg:text-left">
            核心優勢
          </div>
          <div className="text-xl sm:text-2xl lg:text-3xl text-center lg:text-left">
            CORE ADVANTAGES
          </div>
          <div className="mt-8 sm:mt-12 lg:mt-16 text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-loose text-center lg:text-left">
            匯聚資深專業團隊，嚴格合規運營機制，量身定制投資方案，多元化服務能力，以專業實力助力客戶實現穩健財富增值目標
            <br className="hidden sm:block" /><br className="hidden sm:block" />
            我們不只服務客戶，更經營長期信任關係
            N Plus Capital 的服務定位並非&#34;客服中心&#34;，而是&#34;財富安全的守門人&#34;。
            我們始終相信：真正優秀的金融服務，不是包裝出來的，是制度、透明度與陪伴感共同塑造的。
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="px-12 sm:px-16 lg:px-24 py-3 border border-white text-white text-center mt-8 sm:mt-12 lg:mt-16 rounded-full cursor-pointer tracking-[5px] sm:tracking-[8px] lg:tracking-[10px] text-sm sm:text-base" onClick={() => window.location.replace('/advantage')}>
              瞭解更多
            </button>
          </div>
        </div>

        {/* 裝飾元素 - 移動端調整 */}
        <Image
          src="/images/organic-shape.svg"
          width={1500}
          height={1500}
          alt="organic-shape"
          className="absolute w-full scale-50 sm:scale-75 lg:scale-75 -top-0 right-0 translate-x-1/4 sm:translate-x-1/2 -translate-y-1/3 opacity-50 lg:opacity-100"
        />
      </div>

      {/* Responsibility Section - 移動端優化 */}
      <div id="qualification" className="relative w-full flex flex-col lg:flex-row justify-center items-center bg-[#f0eddd] responsibility-bg px-4 sm:px-6 lg:px-0">
        <div className="w-full lg:w-[30vw] lg:-translate-x-2/3 max-w-2xl lg:max-w-none my-20 sm:my-32 lg:my-52 order-2 lg:order-1">
          <div className="text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-20 text-[#ab9064] text-center lg:text-left">
            資質認證
          </div>
          <div className="text-xl sm:text-2xl lg:text-3xl text-[#ab9064] text-center lg:text-left">
            QUALIFICATIONS & CERTIFICATIONS
          </div>
          <div className="mt-8 sm:mt-12 lg:mt-16 text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-loose text-[#593725] text-center lg:text-left">
            持有香港證監會SFC第4類及第9類正規牌照，嚴格遵循監管要求，建立完善合規體系，為客戶投資安全提供堅實法律保障。我們建立了專業規範的服務流程體系，確保投資決策透明高效，從客戶需求分析到投資執行監控，提供全程專業服務
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="px-12 sm:px-16 lg:px-24 py-3 border border-[#ab9064] text-[#ab9064] text-center mt-8 sm:mt-12 lg:mt-16 rounded-full cursor-pointer tracking-[5px] sm:tracking-[8px] lg:tracking-[10px] text-sm sm:text-base" onClick={() => window.location.replace('/qualification')}>
              瞭解更多
            </button>
          </div>
        </div>

        {/* 裝飾元素 - 移動端調整 */}
        <div className="hidden lg:block absolute w-[620px] -top-30 -left-[100px] -translate-y-1/3 video-mask scale-75">
          <video
            src="/video/fire.mp4"
            className="w-full h-full"
            poster="http://www.artafo.com/assets/fire-br-ASEma.jpg"
            autoPlay
            loop
            preload="auto"
            muted
            playsInline
          />
        </div>
        <Image
          alt="investment"
          width={587}
          height={1047}
          className="hidden lg:block absolute w-48 -bottom-64 left-1/2 -translate-y-1/3"
          src="/images/diamond.svg"
        />
      </div>

      {/* Strength Section - 新樣式設計 */}
      <div id="strength" className="relative w-full flex justify-center items-center px-4 sm:px-6 lg:px-0 overflow-hidden family-bg2 " >


        <div className="w-full lg:w-[60vw] max-w-5xl lg:max-w-none rounded-[30px] sm:rounded-[40px] bg-[#e9b97e]/80 backdrop-filter backdrop-blur-sm p-10 sm:p-16 lg:p-20 text-white my-20 sm:my-32 lg:my-52 shadow-2xl border border-white/20 relative overflow-hidden">

          <div className="relative z-10">
            <div className="text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-20 text-center lg:text-left text-[#ab9064]">
              實力展現
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl text-center lg:text-left text-[#ab9064]">
              STRENGTH SHOWCASE
            </div>

            {/* 數據展示區域 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 my-12 sm:my-16">
              <div className="text-center p-4 bg-black/10 rounded-2xl backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">5000+</div>
                <div className="text-sm sm:text-base opacity-90">服務客戶</div>
              </div>
              <div className="text-center p-4 bg-black/20 rounded-2xl backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">50億+</div>
                <div className="text-sm sm:text-base opacity-90">管理資產</div>
              </div>
              <div className="text-center p-4 bg-black/20 rounded-2xl backdrop-blur-sm sm:col-span-2 lg:col-span-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">5年+</div>
                <div className="text-sm sm:text-base opacity-90">行業經驗</div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 lg:mt-16 text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left text-[#593725]">
              我們的管理資產規模持續穩健增長，服務涵蓋機構投資者與高淨值個人客戶，在香港資產管理市場建立良好聲譽與專業地位
              <br className="hidden sm:block" /><br className="hidden sm:block" />
              憑藉專業團隊與嚴謹投資流程，為客戶創造長期價值，成為值得信賴的財富管理夥伴。
            </div>

            <div className="flex justify-center lg:justify-start mt-12">
              <button
                className="group px-16 sm:px-20 lg:px-28 py-4 border-2 border-white text-white text-center rounded-full cursor-pointer tracking-[8px] sm:tracking-[10px] lg:tracking-[12px] text-sm sm:text-base font-medium transition-all duration-300 hover:bg-white hover:text-[#ab9064] hover:scale-105 hover:shadow-xl text-"
                onClick={() => window.location.replace('/strength')}
              >
                <span className="group-hover:animate-pulse text-[#593725]">瞭解更多</span>
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
