import Image from "next/image";

// export default function Investment() {
//   return <div className="relative w-full">
//     <div id={'hero-banner'} className="h-screen w-full relative overflow-hidden">
//       <video
//         src="/video/investment.mp4"
//         poster="/images/loading.jpg"
//         className="absolute w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline // 移动端自动播放必需
//       ></video>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white titleEnterAnimation2 px-4">
//         <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 md:mb-16">
//           业务领域
//         </h3>
//         <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl leading-normal mx-auto">
//           ASSET MANAGEMENT
//         </h4>
//         <p className=" sm:text-xl md:text-xl lg:text-xl mt-4 md:mt-8 lg:mt-12 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto leading-loose">
//           提供全方位专业投资管理服务，涵盖资产管理、证券咨询与投资策略制定，从专业分析到资产配置，为您的财富增值保驾护航。我们秉承价值投资理念，基于深度市场研究与风险控制，构建多元化投资组合，追求长期稳健回报与资产保值增值目标        </p>
//       </div>
//     </div>
//     {/* 装饰元素 - 移动端隐藏或调整 */}
//     <div className="hidden lg:block absolute left-0 top-0 w-[25vw] h-screen HomeDecorationLeft">
//       <Image
//         alt="top-left"
//         width={620}
//         height={1620}
//         src="/images/top-right.svg"
//         className="h-full w-full object-contain"
//       />
//     </div>
//     <div className="hidden lg:block absolute right-10 top-0 h-screen w-[25vw] HomeDecorationRight">
//       <Image
//         alt="top-right"
//         width={620}
//         height={1620}
//         className="h-full w-full object-contain"
//         src="/images/top-right.svg"
//       />
//     </div>
//     <div className="h-1/6 w-full absolute top-[80vh] bg-linear-to-b from-transparent to-white"></div>
//
//     <div className="flex py-24 items-center justify-center bg-linear-to-b from-transparent to-[#f0eddd] relative">
//       <div  className="w-1/2">
//         <div  className="text-2xl sm:text-3xl lg:text-4xl leading-tight lg:leading-20 text-[#ab9064] text-center lg:text-left">資產管理</div>
//         <div  className="text-xl sm:text-2xl lg:text-3xl text-[#ab9064] text-center lg:text-left">ASSET MANAGEMENT</div>
//         <div
//              className="mt-8 sm:mt-12 lg:mt-16 text-base sm:text-base lg:text-lg leading-loose lg:leading-loose text-[#593725] text-center lg:text-left">
//           採用全球化資產配置和靈活多元的策略，通過裕承資產管理有限公司1構建獨家的投資渠道、選定的知名機構或直接投資於廣泛的資產類別，以實現我們的目標。與一些常青發展的捐贈基金、家族辦公室和基金會類似，我們專注於以下投資領域：
//           {/* 图标组 - 移动端网格布局 */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-6 sm:gap-8 lg:gap-32 mt-8 sm:mt-12 lg:mt-16 justify-center lg:justify-start">
//             {[
//               {
//                 icon:"data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23linear-gradient);}%3c/style%3e%3clinearGradient%20id='linear-gradient'%20x1='.5'%20y1='30'%20x2='59.5'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d0b486'/%3e%3cstop%20offset='1'%20stop-color='%23b28033'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m28.42,59.49h2.83c15.85-.66,28.24-13.59,28.24-29.49S47.1,1.17,31.25.51h-2.81s-.02,0-.03,0C12.75,1.35.5,14.28.5,30s12.25,28.66,27.92,29.49Zm-17.82-10.4c1.87-1.36,3.9-2.53,6.03-3.47,2.03,4.24,4.85,7.99,8.4,11.17-5.45-1.01-10.51-3.71-14.43-7.69Zm18.25,7.88c-4.32-3.25-7.79-7.45-10.1-12.2,3.24-1.18,6.63-1.85,10.1-2.01v14.21Zm0-16.5c-3.79.16-7.49.9-11.02,2.2-1.34-3.35-2.13-6.9-2.35-10.56h13.37s0,8.36,0,8.36Zm0-10.65h-13.44c.02-3.74.64-7.41,1.84-10.92,3.7,1.46,7.6,2.29,11.61,2.46v8.45Zm5.71,27.03c3.71-3.3,6.63-7.21,8.68-11.65,2.3.93,4.48,2.12,6.49,3.53-4.07,4.29-9.39,7.14-15.17,8.12Zm16.68-9.85c-2.2-1.57-4.6-2.88-7.12-3.9,1.35-3.5,2.14-7.2,2.35-11.01h10.65c-.42,5.47-2.44,10.61-5.88,14.91Zm.85-32.89c3.31,4.6,5.08,10.01,5.12,15.69h-10.66c-.02-3.88-.65-7.7-1.87-11.36,2.63-1.14,5.12-2.59,7.41-4.33Zm-1.41-1.8c-2.11,1.59-4.39,2.93-6.8,3.98-2.04-5-5.24-9.52-9.33-13.16,6.28,1.06,11.95,4.28,16.13,9.18ZM31.14,3.28c4.75,3.66,8.42,8.44,10.64,13.88-3.42,1.23-6.99,1.89-10.64,1.96V3.28Zm0,18.13c3.91-.08,7.74-.78,11.42-2.1,1.12,3.39,1.69,6.92,1.71,10.52h-13.13s0-8.42,0-8.42Zm0,10.71h13.06c-.21,3.52-.95,6.96-2.21,10.21-3.49-1.17-7.14-1.79-10.85-1.86v-8.34Zm0,10.62c3.4.07,6.75.64,9.96,1.69-2.25,4.78-5.67,9.01-9.96,12.31v-14ZM28.86,3.04v16.05c-3.71-.17-7.34-.95-10.79-2.31,2.28-5.41,6-10.14,10.79-13.74Zm-3.82.18c-3.93,3.52-7.04,7.86-9.07,12.65-2.24-1.07-4.37-2.39-6.33-3.93,4.05-4.56,9.46-7.62,15.39-8.72ZM8.21,13.71c2.15,1.7,4.48,3.14,6.94,4.29-1.32,3.79-2,7.76-2.02,11.83H2.78c.03-5.86,1.91-11.43,5.43-16.13Zm-5.34,18.42h10.33c.22,3.95,1.07,7.79,2.52,11.41-2.36,1.05-4.6,2.34-6.65,3.86-3.63-4.37-5.77-9.63-6.2-15.27Z'/%3e%3c/svg%3e",
//                 title: "公共市場"
//               },
//               {
//                 icon:"data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23linear-gradient);}.cls-2{fill:url(%23linear-gradient-2);}%3c/style%3e%3clinearGradient%20id='linear-gradient'%20x1='.72'%20y1='30'%20x2='56.98'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d0b486'/%3e%3cstop%20offset='1'%20stop-color='%23b28033'/%3e%3c/linearGradient%3e%3clinearGradient%20id='linear-gradient-2'%20x1='.72'%20x2='56.98'%20xlink:href='%23linear-gradient'/%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m52.41,22.36c-2.49-6.8-7.93-12.17-14.78-14.56,0-.06,0-.11,0-.17,0-4.21-3.43-7.64-7.64-7.64s-7.59,3.38-7.63,7.56c-7.17,2.27-12.89,7.8-15.45,14.84-3.87.37-6.91,3.63-6.91,7.6s2.79,6.95,6.44,7.53c2.3,7.75,8.36,13.9,16.07,16.29.68,3.51,3.78,6.18,7.49,6.18s6.95-2.79,7.53-6.43c7.34-2.53,13.1-8.48,15.34-15.96,3.97-.27,7.12-3.57,7.12-7.61s-3.4-7.61-7.59-7.64ZM30,1.93c3.01,0,5.45,2.34,5.67,5.29.01.14.04.28.04.42,0,.7-.14,1.36-.37,1.98-.81,2.17-2.89,3.73-5.34,3.73s-4.62-1.64-5.39-3.89c-.2-.58-.33-1.18-.33-1.82,0-.21.04-.4.06-.6.3-2.87,2.71-5.11,5.65-5.11ZM5.9,35.41c-2.3-.74-3.98-2.87-3.98-5.41,0-2.67,1.85-4.91,4.34-5.53.44-.11.9-.19,1.38-.19.39,0,.77.04,1.13.11,2.61.53,4.58,2.84,4.58,5.6s-2.15,5.24-4.92,5.63c-.26.04-.52.08-.8.08-.61,0-1.18-.12-1.73-.3Zm24.1,22.66c-2.44,0-4.51-1.54-5.33-3.69-.24-.63-.39-1.31-.39-2.02,0-.19.04-.37.06-.56.28-2.89,2.7-5.16,5.66-5.16s5.28,2.18,5.64,4.99c.03.24.07.48.07.72,0,.64-.13,1.25-.33,1.83-.77,2.25-2.88,3.88-5.38,3.88Zm7.51-7.07c-.64-3.57-3.76-6.28-7.51-6.28s-7,2.84-7.55,6.52c-6.36-2.24-11.37-7.32-13.49-13.72,3.58-.63,6.32-3.76,6.32-7.52s-2.51-6.62-5.86-7.42c2.37-5.91,7.25-10.55,13.32-12.59.99,3.06,3.87,5.28,7.26,5.28s6.13-2.12,7.18-5.07c5.85,2.16,10.53,6.74,12.8,12.54-3.05,1-5.26,3.87-5.26,7.25s2.43,6.52,5.7,7.38c-2.03,6.26-6.81,11.27-12.91,13.63Zm15.88-15.4c-.34.06-.68.1-1.03.1-.5,0-.97-.08-1.43-.2-2.45-.64-4.28-2.86-4.28-5.51s1.67-4.67,3.96-5.41c.56-.18,1.14-.3,1.75-.3.23,0,.45.04.68.07,2.83.34,5.04,2.73,5.04,5.64s-2.02,5.12-4.68,5.61Z'/%3e%3cpath%20class='cls-2'%20d='m28.72,38.78c-1.14-.03-2.13-.15-2.96-.33-.84-.19-1.63-.44-2.37-.76v-4.08c.84.37,1.73.67,2.68.89s1.84.37,2.65.44v-3.28c-1.1-.32-2.09-.7-2.96-1.15-.87-.44-1.56-1.03-2.05-1.75-.5-.72-.75-1.65-.75-2.79,0-1.62.53-2.83,1.59-3.64s2.45-1.28,4.18-1.4v-1.84h2.45v1.81c1.08.05,2.07.2,2.96.43.89.23,1.69.5,2.4.8l-1.15,3.57c-.66-.28-1.35-.51-2.07-.68s-1.44-.29-2.15-.36v3.23c1.24.37,2.3.77,3.17,1.19.87.42,1.54.95,2,1.6.46.65.69,1.5.69,2.55,0,1.44-.47,2.66-1.41,3.67-.94,1-2.43,1.61-4.45,1.83v2.19h-2.45v-2.13Zm0-14.09c-.98.09-1.47.45-1.47,1.09,0,.34.11.61.33.81.22.21.6.4,1.13.57v-2.48Zm2.45,10.19c1.01-.16,1.52-.57,1.52-1.23,0-.34-.11-.61-.32-.81-.21-.2-.61-.4-1.2-.57v2.61Z'/%3e%3c/svg%3e",
//                 title: "對衝基金"
//               },
//               {
//                 icon: "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23linear-gradient);}%3c/style%3e%3clinearGradient%20id='linear-gradient'%20x1='1.04'%20y1='30'%20x2='58.96'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d0b486'/%3e%3cstop%20offset='1'%20stop-color='%23b28033'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m58.38,19.58L30.41,2.89c-.29-.14-.6-.15-.92.01L1.56,19.57c-.35.17-.62.64-.47,1.1.15.46.49.72.91.72h4.15l-.88,3.14c-.07.29,0,.6.18.84.18.23.45.37.74.37h4.06v2.13c0,.48.45.93.93.93h.96v17.89h-4.66c-.48,0-.93.45-.93.93v3.42h-2.16c-.48,0-.93.45-.93.92v3.42h-.96c-.48,0-.93.45-.93.92s.45.93.93.93h54.32c.48,0,.93-.45.93-.93s-.45-.92-.93-.92h-.96v-3.52c0-.48-.44-.93-.93-.93h-2.16v-3.42c0-.48-.44-.93-.93-.93h-4.06v-17.89h.97c.49,0,.93-.44.93-.93v-2.13h3.46c.29,0,.56-.13.74-.37.19-.24.25-.54.17-.84l-.88-3.13h4.85c.43,0,.76-.26.91-.72l.02-.11c0-.32-.26-.72-.57-.88ZM5.33,55.27v-2.39h48.66v2.39H5.33Zm36.25-8.69v-17.79h4.33v17.79h-4.33Zm-33.15,4.34v-2.39h42.37v2.39H8.43Zm3.36-23.75h0s0,0,0,0h0Zm.4-.33c.02-.28.03-.66.03-1.21h8.02v1.21h-8.05Zm12.78,1.95h.97v17.89h-5.62v-17.89h.96c.49,0,.93-.44.93-.93v-2.13h1.83v2.13c0,.48.45.93.93.93Zm-6.52,0v17.79h-4.33v-17.79h4.33Zm7.46-1.95v-1.21h8.12v1.21h-8.12Zm12.75,1.95h.96v17.89h-5.62v-17.89h.96c.49,0,.93-.44.93-.93v-2.13h1.83v2.13c0,.48.44.93.93.93Zm-6.53,0v17.79h-4.33v-17.79h4.33Zm15.58-3.16v1.21h-8.02v-1.21h8.02Zm-39.46-4.24h42.84l.7,2.39H7.54l.7-2.39Zm-2.73-1.95L29.96,4.86l24.45,14.58H5.51Z'/%3e%3c/svg%3e",
//                 title: "實物資產"
//               },
//               {
//                 icon:"data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23linear-gradient);}%3c/style%3e%3clinearGradient%20id='linear-gradient'%20x1='.72'%20y1='30.12'%20x2='58.72'%20y2='30.12'%20gradientTransform='translate(.28%20-.12)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d0b486'/%3e%3cstop%20offset='1'%20stop-color='%23b28033'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m43.59,6.47l-3.56,3.56-.42.07c-1.74-.8-5.16-1.61-9.23,1.52l-.09.08-1.25,1.26c-4.7-3.19-8.44-1.22-9.49-.53l-3.15-3.15c-.85-.85-2.22-.85-3.07,0L1.64,20.98c-.85.85-.85,2.22,0,3.07l4.06,4.06c.04,2.51.94,5.08,2.67,7.68.76,1.14,1.66,2.17,2.62,3.15,1.1,1.11,2.21,2.21,3.32,3.32-1.26,1.84-.72,3.36.59,4.72,1.36,1.42,2.62,1.59,4.46,1.05l.05.02c.89,1.34,1.74,2.21,2.6,2.67l2.9,1.97c1.63,1.58,4.12,1.94,6.09.81.85-.49.99-.89,1.43-1.58,3.33,2.79,5.54,2.84,8.16-1.07l.05-.02c1.85.53,3.1.37,4.46-1.05,1.4-1.46,1.93-3.1.31-5.11-.15-.19-.06-.46.18-.5.86-.15,1.54-.73,1.95-1.26,1.29-1.66,1.21-3.41-.17-5.13.6-.61,1.21-1.21,1.81-1.82.82-.83,1.6-1.73,2.26-2.69,1.86-2.7,2.82-5.36,2.86-7.97l4.07-4.07c.85-.85.85-2.22,0-3.06l-11.71-11.71c-.85-.85-2.22-.85-3.06,0Zm-31.87,30.15c-1.7-1.79-2.97-3.78-3.53-6.02-.12-.5-.21-1.02-.26-1.54-.04-.43-.05-.87-.04-1.32l-4.89-4.89,12.21-12.21,3.12,3.12.26.26-.02.04,1.89.16.12-.31c.75-.51,3.84-2.23,7.97.92l5.47,5.49c.27.28.42.64.42,1.04,0,.39-.15.76-.43,1.04l-.36.36c-.57.57-1.5.57-2.07,0l-5.59-5.62-1.36.95,1.51,1.77.65.66c-.64.64-1.29,1.29-1.93,1.93-.16.16-.25.33-.3.51-.03.03-.06.07-.1.1-3.76,3.76-7.53,7.52-11.28,11.29-.75.75-1.24,1.52-1.49,2.28Zm18.13,15.23c-.43.41-.88.66-1.52.61-.89-.07-1.51-.75-1.95-1.18-.27-.26-.53-.52-.79-.79.62-.33,1.27-.79,1.98-1.39.44.69.58,1.09,1.43,1.58.38.22.78.38,1.19.49-.07.28-.18.52-.34.67Zm8.06-.76c-.84.99-1.8,1.07-3.02-.06-.19-.18-.38-.36-.57-.53.27-.18.52-.38.76-.6.7-.68,1.39-1.36,2.09-2.04.07.07.15.15.22.22,1.15,1.16,1.31,2.09.51,3.02Zm5.84-3.06c-.85,1.16-2.14,1.18-3.3.03-.58-.57-1.15-1.15-1.73-1.73.95-.93,1.9-1.85,2.85-2.78.53.54,1.07,1.07,1.61,1.61,1.03,1.04,1.21,2.01.57,2.88Zm2.37-6.85c-.43,1.08-1.71,1.59-2.73,1.03-.1-.05-.19-.12-.29-.18.92-.91,1.82-1.82,2.73-2.73.39.52.6,1.1.28,1.89Zm6-16.27c.01.45,0,.89-.04,1.32-.05.53-.14,1.04-.26,1.54-.56,2.26-1.84,4.25-3.55,6.05-2.32,2.44-4.75,4.78-7.13,7.16-2.5,2.5-4.99,5.01-7.51,7.49-.43.43-1.05,1.11-1.95,1.18-.65.05-1.09-.2-1.52-.61-.39-.37-.51-1.29-.36-1.87.16-.63.72-1.2,1.2-1.69,1.14-1.17,2.3-2.31,3.45-3.47.56-.56,1.12-1.13,1.67-1.7.59-.61,2.31-1.89,1.34-2.79-.88-.83-2.15.77-2.68,1.3-.56.56-1.12,1.13-1.69,1.68-2.64,2.58-5.25,5.2-7.96,7.71-1.23,1.14-2.19,1.05-3.02.07-.8-.93-.64-1.87.51-3.02,3-3,6-6,8.99-9,.42-.42.78-.7.86-1.34.06-.48-.12-.9-.61-.97-.82-.12-1.18.19-1.71.72-3.53,3.53-7.05,7.06-10.59,10.58-1.16,1.16-2.46,1.13-3.3-.03-.63-.87-.46-1.84.57-2.88,3.58-3.59,7.17-7.18,10.76-10.76.59-.58,1.05-1.24.33-1.91-.69-.64-1.28-.07-1.8.45-2.76,2.77-5.52,5.53-8.29,8.29-.37.37-.76.74-1.21.99-1.02.56-2.3.05-2.73-1.03-.44-1.1.13-1.8.83-2.5,4.59-4.57,9.17-9.14,13.72-13.75l1.88,1.89c.64.64,1.48.96,2.32.96.84,0,1.67-.32,2.31-.95l.36-.36c.62-.62.96-1.44.96-2.32,0-.82-.31-1.59-.85-2.2l-4.17-4.21h0s-.82-.82-.82-.82l1.11-1.12c1.72-1.31,3.26-1.77,4.53-1.84,2.32-.21,4.37,1,4.37,1l1.23-1.23,3.13-3.13,12.21,12.21-4.9,4.9Z'/%3e%3c/svg%3e",
//                 title: "私募股權"
//               },
//               {
//                 icon: "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23linear-gradient);}.cls-2{fill:url(%23linear-gradient-3);}.cls-3{fill:url(%23linear-gradient-2);}%3c/style%3e%3clinearGradient%20id='linear-gradient'%20x1='5.05'%20y1='30'%20x2='51.1'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d0b486'/%3e%3cstop%20offset='1'%20stop-color='%23b28033'/%3e%3c/linearGradient%3e%3clinearGradient%20id='linear-gradient-2'%20x1='5.05'%20y1='42.21'%20x2='51.1'%20y2='42.21'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-3'%20x1='5.05'%20y1='42.21'%20x2='51.1'%20y2='42.21'%20xlink:href='%23linear-gradient'/%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m20.56,25.76c-9.07,0-16.45,7.38-16.45,16.45s7.38,16.45,16.45,16.45c7.17,0,13.29-4.62,15.53-11.03,1.11.05,2.13.06,2.96.06,5.05,0,16.8-.53,16.8-5.49,0-.01,0-.03,0-.04,0-.01,0-.03,0-.04v-6.61c.03-.15.05-.3.05-.45,0-.15-.02-.29-.05-.43v-5.44c.03-.15.05-.3.05-.45,0-.15-.02-.29-.05-.43v-6.05c.03-.15.05-.3.05-.45,0-.26-.05-.5-.14-.74.05-.22.09-.44.09-.68,0-.02,0-.03,0-.04,0-.01,0-.03,0-.04v-6.61c.03-.15.05-.3.05-.45,0-.15-.02-.29-.05-.43v-6.05c.03-.15.05-.3.05-.45,0-.27-.05-.52-.14-.76-.15-.51-.46-.93-.89-1.2-3.43-2.91-14.37-3.01-15.82-3.01s-12.39.1-15.82,3.01c-.42.27-.74.69-.89,1.2-.09.24-.14.5-.14.77,0,.16.02.31.05.45v6.05c-.03.14-.05.28-.05.43,0,.16.02.31.05.45v6.61s0,.03,0,.04c0,.01,0,.03,0,.04,0,.24.04.46.09.68-.08.23-.13.48-.13.74,0,.16.02.31.05.45v3.58c-.55-.06-1.12-.09-1.69-.09Zm33.37,16.32s0,.08,0,.12c0,.02,0,.04,0,.05-.09,1.84-6.74,3.34-14.88,3.34-.81,0-1.6-.02-2.38-.05.22-1.08.34-2.19.34-3.33,0-.29,0-.58-.02-.87.76.02,1.46.03,2.06.03,3.79,0,11.34-.3,14.88-2.54v3.24Zm0-6.32s0,.08,0,.12c0,.02,0,.03,0,.05-.09,1.84-6.74,3.34-14.88,3.34-.79,0-1.56-.02-2.31-.04-.32-1.74-.91-3.39-1.74-4.9,1.54.09,2.96.12,4.05.12,3.79,0,11.34-.3,14.88-2.54v3.85Zm0-15.5s0,.08,0,.12c0,.02,0,.04,0,.05-.09,1.84-6.74,3.34-14.88,3.34s-14.79-1.49-14.88-3.34c0-.04,0-.07,0-.1,0-.02,0-.04,0-.07v-3.85c3.54,2.24,11.09,2.54,14.88,2.54s11.34-.3,14.88-2.54v3.85ZM39.05,3.76c8.45,0,13.69,1.57,14.57,2.55-.88.98-6.12,2.55-14.57,2.55s-13.69-1.57-14.57-2.55c.88-.98,6.12-2.55,14.57-2.55Zm0,7.52c1.34,0,10.73-.09,14.88-2.38v4.42s0,.08,0,.12c0,.02,0,.04,0,.06-.09,1.84-6.74,3.34-14.88,3.34s-14.79-1.5-14.88-3.34c0-.04,0-.07,0-.1,0-.02,0-.04,0-.07v-4.42c4.15,2.3,13.55,2.38,14.88,2.38Zm0,14.49c1.34,0,10.73-.09,14.88-2.38v5.42s0,.08,0,.12c0,.02,0,.04,0,.05-.09,1.84-6.74,3.34-14.88,3.34-1.96,0-3.82-.09-5.53-.24-2.3-2.94-5.59-5.08-9.35-5.93v-2.77c4.15,2.3,13.55,2.38,14.89,2.38Zm-4.14,16.43c0,7.91-6.44,14.35-14.35,14.35s-14.34-6.44-14.34-14.35,6.44-14.35,14.34-14.35,14.35,6.44,14.35,14.35Z'/%3e%3cpath%20class='cls-3'%20d='m9.47,42.21c0,6.11,4.97,11.09,11.09,11.09s11.09-4.97,11.09-11.09-4.97-11.09-11.09-11.09-11.09,4.97-11.09,11.09Zm20.77,0c0,5.34-4.34,9.68-9.68,9.68s-9.68-4.34-9.68-9.68,4.34-9.68,9.68-9.68,9.68,4.34,9.68,9.68Z'/%3e%3cpath%20class='cls-2'%20d='m19.75,47.74c-.72-.02-1.34-.09-1.86-.21-.53-.12-1.02-.28-1.5-.48v-2.57c.53.24,1.09.42,1.69.56s1.16.23,1.67.28v-2.07c-.69-.2-1.32-.44-1.86-.72-.55-.28-.98-.65-1.29-1.1-.31-.45-.47-1.04-.47-1.76,0-1.02.33-1.78,1-2.29s1.54-.8,2.63-.88v-1.16h1.55v1.14c.68.03,1.3.12,1.86.27.56.15,1.06.31,1.51.5l-.72,2.25c-.41-.18-.85-.32-1.3-.43s-.9-.18-1.35-.23v2.03c.78.24,1.45.48,2,.75.55.26.97.6,1.26,1.01.29.41.44.94.44,1.6,0,.91-.3,1.68-.89,2.31-.59.63-1.53,1.02-2.81,1.15v1.38h-1.55v-1.34Zm0-8.87c-.62.06-.92.29-.92.69,0,.21.07.38.21.51.14.13.38.25.71.36v-1.56Zm1.55,6.42c.64-.1.96-.36.96-.77,0-.21-.07-.38-.2-.51-.13-.13-.39-.25-.76-.36v1.65Z'/%3e%3c/svg%3e",
//                 title: "直接投資"
//               },
//               {
//                 icon: "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23linear-gradient);}.cls-2{fill:url(%23linear-gradient-8);}.cls-3{fill:url(%23linear-gradient-3);}.cls-4{fill:url(%23linear-gradient-4);}.cls-5{fill:url(%23linear-gradient-2);}.cls-6{fill:url(%23linear-gradient-6);}.cls-7{fill:url(%23linear-gradient-7);}.cls-8{fill:url(%23linear-gradient-5);}%3c/style%3e%3clinearGradient%20id='linear-gradient'%20x1='7.09'%20y1='30'%20x2='55.1'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d0b486'/%3e%3cstop%20offset='1'%20stop-color='%23b28033'/%3e%3c/linearGradient%3e%3clinearGradient%20id='linear-gradient-2'%20y1='15.05'%20x2='55.1'%20y2='15.05'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-3'%20y1='21.64'%20x2='55.1'%20y2='21.64'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-4'%20y1='21.64'%20x2='55.1'%20y2='21.64'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-5'%20y1='28.24'%20x2='55.1'%20y2='28.24'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-6'%20y1='34.83'%20x2='55.1'%20y2='34.83'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-7'%20y1='34.83'%20x2='55.1'%20y2='34.83'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-8'%20y1='41.43'%20x2='55.1'%20y2='41.43'%20xlink:href='%23linear-gradient'/%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m53.41,17.03c0-.1-.02-.19-.06-.29-.01-.03-.02-.07-.04-.1-.05-.12-.12-.23-.21-.32l-11.77-11.76c-.09-.09-.2-.16-.32-.21-.03-.02-.07-.02-.1-.04-.09-.03-.19-.05-.28-.06-.02,0-.04-.01-.07-.01H12.49c-.6,0-1.09.49-1.09,1.09v3.14h-3.72c-.56,0-1.01.45-1.01,1.01v27.44c-.05.13-.08.27-.08.42v17.34c0,.6.49,1.09,1.09,1.09h39.84c.6,0,1.09-.49,1.09-1.09v-3.05h3.72c.6,0,1.09-.49,1.09-1.09V17.1s-.01-.04-.01-.07Zm-3.72-1.03h-8.03V7.97l8.03,8.03Zm-3.27,37.57H8.77v-16.24c0-.15-.03-.29-.08-.42V10.49h2.71v40.04c0,.6.49,1.09,1.09,1.09h33.93v1.96Zm-32.84-4.14V6.43h25.89v10.67c0,.6.49,1.09,1.09,1.09h10.67v31.24H13.58Z'/%3e%3cpath%20class='cls-5'%20d='m19.44,16.14h16.04c.6,0,1.09-.49,1.09-1.09s-.49-1.09-1.09-1.09h-16.04c-.6,0-1.09.49-1.09,1.09s.49,1.09,1.09,1.09Z'/%3e%3cpath%20class='cls-3'%20d='m46.44,20.55h-8.42c-.6,0-1.09.49-1.09,1.09s.49,1.09,1.09,1.09h8.42c.6,0,1.09-.49,1.09-1.09s-.49-1.09-1.09-1.09Z'/%3e%3cpath%20class='cls-4'%20d='m19.44,22.74h14.37c.6,0,1.09-.49,1.09-1.09s-.49-1.09-1.09-1.09h-14.37c-.6,0-1.09.49-1.09,1.09s.49,1.09,1.09,1.09Z'/%3e%3cpath%20class='cls-8'%20d='m46.44,27.15h-27.01c-.6,0-1.09.49-1.09,1.09s.49,1.09,1.09,1.09h27.01c.6,0,1.09-.49,1.09-1.09s-.49-1.09-1.09-1.09Z'/%3e%3cpath%20class='cls-6'%20d='m46.44,33.74h-18.14c-.6,0-1.09.49-1.09,1.09s.49,1.09,1.09,1.09h18.14c.6,0,1.09-.49,1.09-1.09s-.49-1.09-1.09-1.09Z'/%3e%3cpath%20class='cls-7'%20d='m19.44,35.93h4.55c.6,0,1.09-.49,1.09-1.09s-.49-1.09-1.09-1.09h-4.55c-.6,0-1.09.49-1.09,1.09s.49,1.09,1.09,1.09Z'/%3e%3cpath%20class='cls-2'%20d='m46.44,40.34h-27.01c-.6,0-1.09.49-1.09,1.09s.49,1.09,1.09,1.09h27.01c.6,0,1.09-.49,1.09-1.09s-.49-1.09-1.09-1.09Z'/%3e%3c/svg%3e",
//                 title: "債券和信貸"
//               },
//               {
//                 icon: "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23linear-gradient);}.cls-2{fill:url(%23linear-gradient-8);}.cls-3{fill:url(%23linear-gradient-9);}.cls-4{fill:url(%23linear-gradient-3);}.cls-5{fill:url(%23linear-gradient-4);}.cls-6{fill:url(%23linear-gradient-2);}.cls-7{fill:url(%23linear-gradient-6);}.cls-8{fill:url(%23linear-gradient-7);}.cls-9{fill:url(%23linear-gradient-5);}%3c/style%3e%3clinearGradient%20id='linear-gradient'%20x1='.05'%20y1='12.15'%20x2='58'%20y2='12.15'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d0b486'/%3e%3cstop%20offset='1'%20stop-color='%23b28033'/%3e%3c/linearGradient%3e%3clinearGradient%20id='linear-gradient-2'%20y1='6.29'%20x2='58'%20y2='6.29'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-3'%20y1='19.71'%20y2='19.71'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-4'%20y1='28.15'%20x2='58'%20y2='28.15'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-5'%20y1='47.85'%20y2='47.85'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-6'%20y1='53.72'%20y2='53.72'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-7'%20y1='40.31'%20y2='40.31'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-8'%20y1='31.87'%20y2='31.87'%20xlink:href='%23linear-gradient'/%3e%3clinearGradient%20id='linear-gradient-9'%20y1='30'%20x2='58'%20y2='30'%20xlink:href='%23linear-gradient'/%3e%3c/defs%3e%3cg%3e%3cg%3e%3cpath%20class='cls-1'%20d='m50.59,19.44c-.45,0-.91-.24-1.15-.67-3.99-6.93-11.45-11.24-19.45-11.24-.75,0-1.34-.59-1.34-1.34s.59-1.34,1.34-1.34c8.94,0,17.29,4.82,21.76,12.58.37.64.16,1.45-.48,1.82-.19.13-.43.19-.67.19Z'/%3e%3cpath%20class='cls-6'%20d='m33.71,12.08c-.37,0-.78-.16-1.04-.48l-3.69-4.55c-.4-.51-.4-1.23.03-1.71l3.69-4.36c.48-.56,1.31-.64,1.9-.16.56.48.64,1.31.16,1.87l-2.97,3.51,3,3.69c.45.56.37,1.42-.19,1.87-.29.21-.59.32-.88.32Z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-4'%20d='m6.2,31.35c-.75,0-1.34-.59-1.34-1.34,0-8.94,4.82-17.29,12.58-21.76.64-.37,1.45-.16,1.82.48s.16,1.45-.48,1.82c-6.93,3.99-11.24,11.45-11.24,19.45,0,.72-.59,1.34-1.34,1.34Z'/%3e%3cpath%20class='cls-5'%20d='m6.2,31.35c-.29,0-.62-.11-.86-.32l-4.36-3.69c-.56-.48-.64-1.31-.16-1.9.48-.56,1.31-.64,1.9-.16l3.51,2.97,3.69-3c.56-.45,1.42-.37,1.87.19s.37,1.42-.19,1.87l-4.55,3.69c-.27.24-.56.35-.86.35Z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-9'%20d='m29.99,55.14c-8.94,0-17.29-4.82-21.76-12.58-.37-.64-.16-1.45.48-1.82s1.45-.16,1.82.48c3.99,6.93,11.45,11.24,19.45,11.24.75,0,1.34.59,1.34,1.34s-.59,1.34-1.34,1.34Z'/%3e%3cpath%20class='cls-7'%20d='m26.29,59.5c-.29,0-.62-.11-.86-.32-.56-.48-.64-1.31-.16-1.87l2.97-3.51-3-3.69c-.45-.56-.37-1.42.19-1.87s1.42-.37,1.87.19l3.69,4.55c.4.51.4,1.23-.03,1.71l-3.67,4.36c-.27.29-.64.45-1.02.45Z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-8'%20d='m41.89,51.95c-.45,0-.91-.24-1.15-.67-.37-.64-.16-1.45.48-1.82,6.93-3.99,11.24-11.45,11.24-19.45,0-.75.59-1.34,1.34-1.34s1.34.59,1.34,1.34c0,8.94-4.82,17.29-12.58,21.76-.21.13-.43.19-.67.19Z'/%3e%3cpath%20class='cls-2'%20d='m49.25,35.04c-.37,0-.78-.16-1.04-.51-.45-.56-.37-1.42.19-1.87l4.55-3.69c.51-.4,1.23-.4,1.71.03l4.36,3.69c.56.48.64,1.31.16,1.9-.48.56-1.31.64-1.87.16l-3.51-2.97-3.69,3c-.27.16-.56.27-.86.27Z'/%3e%3c/g%3e%3c/g%3e%3cpath%20class='cls-3'%20d='m28.72,38.78c-1.14-.03-2.13-.15-2.96-.33-.84-.19-1.63-.44-2.37-.76v-4.08c.84.37,1.73.67,2.68.89s1.84.37,2.65.44v-3.28c-1.1-.32-2.09-.7-2.96-1.15-.87-.44-1.56-1.03-2.05-1.75-.5-.72-.75-1.65-.75-2.79,0-1.62.53-2.83,1.59-3.64s2.45-1.28,4.18-1.4v-1.84h2.45v1.81c1.08.05,2.07.2,2.96.43.89.23,1.69.5,2.4.8l-1.15,3.57c-.66-.28-1.35-.51-2.07-.68s-1.44-.29-2.15-.36v3.23c1.24.37,2.3.77,3.17,1.19.87.42,1.54.95,2,1.6.46.65.69,1.5.69,2.55,0,1.44-.47,2.66-1.41,3.67-.94,1-2.43,1.61-4.45,1.83v2.19h-2.45v-2.13Zm0-14.09c-.98.09-1.47.45-1.47,1.09,0,.34.11.61.33.81.22.21.6.4,1.13.57v-2.48Zm2.45,10.19c1.01-.16,1.52-.57,1.52-1.23,0-.34-.11-.61-.32-.81-.21-.2-.61-.4-1.2-.57v2.61Z'/%3e%3c/svg%3e",
//                 title: "現金管理"
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
//           <p className="mt-8 sm:mt-12 lg:mt-16">
//             除此之外，我們通過ARTA社區網絡，提供獨有的戰略價值，以在各類投資中實現投資回報與子孫後代福祉的平衡。我們尤其關注市場機遇與社會影響力的結合，涵蓋醫療健康、可持續能源、教育科技、金融科技、職業發展及媒體領域。
//           </p>
//           <p className="mt-8 sm:mt-12 lg:mt-16 text-xs leading-relaxed">
//             1裕承資產管理有限公司根據《證券及期貨條例》（香港法例第 571章）獲香港證券及期貨事務監察委員會正式發牌（中央編號：AQW828），可從事第1類（證券交易）、第4類（就證券提供意見）和第9類（提供資產管理）受監管活動，及持有香港保險業監管局注冊保險經紀公司牌照 (牌照號碼 FB1532 - 經營業務系列: 一般及長期業務(包括相連長期業務))。
//           </p>
//         </div>
//       </div>
//     </div>
//
//   </div>;
// }

export default function Investment() {


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
            業務領域
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 md:mb-12 font-medium opacity-90">
            BUSINESS AREAS
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto opacity-95">
            提供全方位專業投資管理服務，涵蓋資產管理、證券諮詢與投資策略制定，從專業分析到資產配置，為您的財富增值保駕護航。我們秉承價值投資理念，基於深度市場研究與風險控制，構建多元化投資組合，追求長期穩健回報與資產保值增值目標
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

      {/* 核心业务概述区域 */}
      <div className="relative bg-gradient-to-b from-white to-[#f0eddd] py-16 sm:py-24 md:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              核心業務
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 sm:mb-12 opacity-80">
              CORE BUSINESS
            </h3>

            {/* 核心业务卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16 sm:mb-20">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ab9064]/20 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">資產管理</h4>
                <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                  專注於股票投資及資產配置，按投資授權進行組合管理，提供專業的投資組合構建服務
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ab9064]/20 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">證券諮詢</h4>
                <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                  提供證券及衍生工具的投資建議服務（第4類牌照），為客戶提供專業的投資諮詢
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ab9064]/20 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">投資策略</h4>
                <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                  透過投資顧問團隊，結合研究、市場分析與客戶授權，提供量身定制服務
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 具体投资领域区域 */}
      <div className="relative bg-gradient-to-b from-[#f0eddd] to-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              具體投資領域
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 opacity-80">
              DIVERSIFIED INVESTMENT STRATEGIES
            </h3>
            <p className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto mb-12">
              N Plus Capital 專注於多元化、穩健型資產配置，以「股權成長 + 收益管理」為核心策略，為客戶提供穿越週期的長期投資機會。我們的團隊結合市場趨勢與風險控制模型，重點聚焦以下四大投資方向：
            </p>
          </div>

          {/* 投资方向卡片 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* 新股申购 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#ab9064]/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-[#ab9064]">1</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064]">新股申購與股權打新</h4>
              </div>
              <p className="text-sm text-[#ab9064] mb-4 font-medium">Pre-IPO Allocation</p>
              <p className="text-[#593725] text-sm sm:text-base leading-relaxed mb-4">
                我們緊密對接境內外交易所的 IPO 上市流程，專注於已通過上市輔導的優質企業，參與其打新或私募前輪投資。
              </p>
              <ul className="text-[#593725] text-sm leading-relaxed space-y-2">
                <li>• 涵蓋港股、美股、A 股等主流資本市場</li>
                <li>• 目標企業具明確上市排期或保薦資格</li>
                <li>• 利用低配高爆發潛力，獲取稀缺性股權紅利</li>
              </ul>
            </div>

            {/* PIPE基金 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#ab9064]/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-[#ab9064]">2</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064]">PIPE 結構化定向增發基金</h4>
              </div>
              <p className="text-sm text-[#ab9064] mb-4 font-medium">Private Investment in Public Equity</p>
              <p className="text-[#593725] text-sm sm:text-base leading-relaxed mb-4">
                通過結構化 PIPE 項目，提前進入上市企業的定向增發輪，結合套利對沖機制實現中短期收益。
              </p>
              <ul className="text-[#593725] text-sm leading-relaxed space-y-2">
                <li>• 適合高淨值客戶與進階投資者</li>
                <li>• 可配置回購條款、轉讓機制、固定收益底倉等結構</li>
                <li>• 實現「控制風險前提下鎖定年化回報」</li>
              </ul>
            </div>

            {/* ETF配置 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#ab9064]/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-[#ab9064]">3</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064]">ETF 固定收益類配置</h4>
              </div>
              <p className="text-sm text-[#ab9064] mb-4 font-medium">Exchange-Traded Fund Allocation</p>
              <p className="text-[#593725] text-sm sm:text-base leading-relaxed mb-4">
                平台精選低波動、高流動性的指數型 ETF，適合長期持有、穩健增長的客戶資產配置。
              </p>
              <ul className="text-[#593725] text-sm leading-relaxed space-y-2">
                <li>• 投資組合由專業量化團隊設定跟蹤標的</li>
                <li>• 可作為客戶資金「基礎倉」或對沖資產波動的工具</li>
                <li>• 與活期理財帳戶結合使用，提升資金整體效率</li>
              </ul>
            </div>

            {/* 活期理财 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#ab9064]/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-[#ab9064]">4</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064]">活期理財帳戶</h4>
              </div>
              <p className="text-sm text-[#ab9064] mb-4 font-medium">Flexible Wealth Management</p>
              <p className="text-[#593725] text-sm sm:text-base leading-relaxed mb-4">
                提供每日收益 0.06%、無鎖定期的活期產品，適合資金調度、短期存放或低風險增值需求。
              </p>
              <ul className="text-[#593725] text-sm leading-relaxed space-y-2">
                <li>• 支持隨存隨取，收益按日複利結算</li>
                <li>• 配合平台打新或 PIPE 投資使用，實現資金調配效率最大化</li>
                <li>• 系統自動結息、透明可查</li>
              </ul>
            </div>
          </div>

          {/* 投资优势 */}
          <div className="mt-16 sm:mt-20 bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
            <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-6 text-center">投資優勢與原則</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#ab9064] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                  所有產品上線前，皆由平台專業團隊評估項目背景、財務模型與風險因子
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#ab9064] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                  每一檔產品均取得太平洋保險公司真實承保，平台承擔兜底責任範圍
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#ab9064] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                  嚴格落實資金託管、風控分層、複核交易、雙通道提領等機制
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#ab9064] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                  支持靈活組合配置：客戶可按資金流動性需求，自由切換不同產品倉位
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 服务客户类型区域 */}
      <div className="relative bg-gradient-to-b from-white to-[#f0eddd] py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              服務客戶類型
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 opacity-80">
              WHO WE SERVE
            </h3>
            <p className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto mb-12">
              N Plus Capital 以「專業金融產品 + 高標準安全保障 + 靈活流動配置」為基礎，致力於服務以下四類對資產配置與穩健增值有明確需求的客戶族群：
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* 初阶理财用户 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064]">初階理財用戶</h4>
              </div>
              <p className="text-sm text-[#ab9064] mb-4 font-medium">目標：安全起步、靈活儲值、低門檻參與</p>
              <ul className="text-[#593725] text-sm leading-relaxed space-y-2 mb-4">
                <li>• 對金融產品經驗有限，期望簡單上手</li>
                <li>• 希望閒置資金能有日常收益</li>
                <li>• 重視資金流動性、不願承擔大額風險</li>
                <li>• 多使用活期理財、ETF 配置等低風險產品組合</li>
              </ul>
              <div className="bg-[#ab9064]/5 rounded-lg p-4">
                <p className="text-xs text-[#ab9064] font-medium mb-2">推薦產品：</p>
                <p className="text-xs text-[#593725]">活期理財帳戶、基礎 ETF 策略組合</p>
              </div>
            </div>

            {/* 稳健型投资者 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064]">穩健型投資者</h4>
              </div>
              <p className="text-sm text-[#ab9064] mb-4 font-medium">目標：收益穩定、週期明確、風險可控</p>
              <ul className="text-[#593725] text-sm leading-relaxed space-y-2 mb-4">
                <li>• 有部分理財經驗，追求年化 8%~20% 的穩定回報</li>
                <li>• 可接受 1~6 個月的資金鎖定期</li>
                <li>• 關注資產安全與保險機制保障</li>
                <li>• 對打新項目或結構性基金有興趣，但重視退出機制與合規性</li>
              </ul>
              <div className="bg-[#ab9064]/5 rounded-lg p-4">
                <p className="text-xs text-[#ab9064] font-medium mb-2">推薦產品：</p>
                <p className="text-xs text-[#593725]">打新股權計劃（Pre-IPO）、結構化 PIPE 基金、活期搭配</p>
              </div>
            </div>

            {/* 高净值客户 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064]">高淨值客戶（HNWI）</h4>
              </div>
              <p className="text-sm text-[#ab9064] mb-4 font-medium">目標：多元配置、優化稅務、精準進入中早期股權項目</p>
              <ul className="text-[#593725] text-sm leading-relaxed space-y-2 mb-4">
                <li>• 擁有可配置資金規模 $100 萬以上</li>
                <li>• 具備資產分散配置意識，關注全球市場趨勢</li>
                <li>• 尋求股權型、戰略型、高槓桿結構配置方案</li>
                <li>• 重視平台安全、退出路徑、承保機制、報告透明度</li>
              </ul>
              <div className="bg-[#ab9064]/5 rounded-lg p-4">
                <p className="text-xs text-[#ab9064] font-medium mb-2">推薦產品：</p>
                <p className="text-xs text-[#593725]">PIPE 定增產品、Pre-IPO 股權申購、定制組合投組</p>
              </div>
            </div>

            {/* 企业法人/家族资金信托 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="currentColor" viewBox="0 0 16 13">
                    <path fillRule="evenodd" d="M7.08.222a.6.6 0 0 1 .84 0l6.75 6.64a.6.6 0 0 1-.84.856L13 6.902V12.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5V6.902l-.83.816a.6.6 0 1 1-.84-.856zm.42 1.27L12 5.918V12h-2V8.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V12H3V5.918zM7 12h2V9H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064]">企業法人／家族資金信託</h4>
              </div>
              <p className="text-sm text-[#ab9064] mb-4 font-medium">目標：資金長期配置、結構化管理、保值增值並存</p>
              <ul className="text-[#593725] text-sm leading-relaxed space-y-2 mb-4">
                <li>• 企業或家族辦公室持有長期閒置資金</li>
                <li>• 需滿足財務對帳、合規審計、信託結構需求</li>
                <li>• 重視穩定現金流、組合防禦配置與流動性安排</li>
                <li>• 傾向平台長期合作、策略定制與專屬顧問對接</li>
              </ul>
              <div className="bg-[#ab9064]/5 rounded-lg p-4">
                <p className="text-xs text-[#ab9064] font-medium mb-2">推薦方案：</p>
                <p className="text-xs text-[#593725]">專項基金配置、ETF-PIPE 搭配結構、專戶策略定制服務</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
