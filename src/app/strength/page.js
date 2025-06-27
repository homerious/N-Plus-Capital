import Image from "next/image";

// export default function Family() {
//   return <div className="relative w-full overflow-hidden">
//     <div id={'hero-banner'} className="h-screen w-full relative">
//       <video
//         src="/video/family.mp4"
//         poster="/images/loading.jpg"
//         className="absolute w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline // 移动端自动播放必需
//       ></video>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white titleEnterAnimation2 px-4">
//         <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 md:mb-16">
//           实力展现
//         </h3>
//         <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl leading-normal mx-auto">
//           FAMILY GOVERNANCE
//         </h4>
//         <p className=" sm:text-xl md:text-xl lg:text-xl mt-4 md:mt-8 lg:mt-12 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto leading-loose">
//           理资产规模持续稳健增长，服务涵盖机构投资者与高净值个人客户，在香港资产管理市场建立良好声誉与专业地位
//         </p>
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
//     <div className="h-1/8 w-full absolute top-[80vh] bg-linear-to-b from-transparent to-white"></div>
//
//     <div className="flex py-48 items-center justify-center bg-white">
//       <div  className="w-1/2">
//         <div  className="text-2xl sm:text-3xl lg:text-4xl leading-tight lg:leading-20 text-[#ab9064] text-center lg:text-left">家族治理</div>
//         <div  className="text-xl sm:text-2xl lg:text-3xl text-[#ab9064] text-center lg:text-left">FAMILY GOVERNANCE</div>
//         <div
//              className="mt-8 sm:mt-12 lg:mt-16 text-base sm:text-base lg:text-lg leading-loose lg:leading-loose text-[#593725] text-center lg:text-left">
//           在保證財富代際傳承的同時，還要滿足家族成員的現階段需求，併爲家族成員的福祉、企業運營和業務持續增長提供支持。
//           我們的家族治理平臺，是知識、經驗和運營能力的中心。依託親身實踐的寶貴經驗和專家智囊，助力家族成員從長遠利益出發，解決各類家庭事務及企業治理面臨的棘手問題。通過協助家族構建專屬的治理結構和策略，加強家族內部的一致性，制定並推進傳承計劃，保障家族持久興旺、基業長青。
//         </div>
//       </div>
//     </div>
//     <div className="flex py-48 items-center justify-center bg-[#f0eddd]">
//       <div className=" py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           {/* 标题区域 */}
//           <div className="text-center mb-12 sm:mb-16 lg:mb-20">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ab9064] mb-3 sm:mb-4">
//               裕承家族治理平台
//             </h2>
//             <h3 className="text-lg sm:text-xl lg:text-2xl text-[#ab9064] opacity-80 tracking-wider">
//               FAMILY GOVERNANCE PLATFORM
//             </h3>
//           </div>
//
//           {/* 家庭事務区域 */}
//           <div className="mb-16 sm:mb-20 lg:mb-24">
//             {/* 家庭事務标题 */}
//             <div className="flex items-center justify-center mb-8 sm:mb-12 lg:mb-16">
//               <div className="flex items-center gap-3 sm:gap-4">
//                 <img
//                   src="/images/investment-family.svg"
//                   alt="家庭事務"
//                   className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
//                 />
//                 <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#ab9064]">
//                 家庭事務
//               </span>
//               </div>
//             </div>
//
//             {/* 家庭事務服务项目 */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
//               {[
//                 {
//                   icon: "/images/1-1.svg",
//                   name: "家族治理與財富傳承"
//                 },
//                 {
//                   icon: "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;}%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m13.71,56.05H1.86c-.48,0-.88-.39-.88-.88V7.47c0-1.09.33-2.17.94-3.12.32-.5,1.14-.5,1.47,0,.9,1.39,2.58,2.25,4.39,2.25s3.49-.86,4.39-2.25c.32-.5,1.14-.5,1.47,0,.62.95.94,2.03.94,3.12v47.7c0,.48-.39.88-.88.88Zm-10.97-1.75h10.1V7.47c0-.35-.05-.69-.14-1.03-1.27,1.2-3.04,1.91-4.91,1.91s-3.64-.71-4.91-1.91c-.09.34-.14.68-.14,1.03v46.83Z'/%3e%3cpath%20class='cls-1'%20d='m10.75,44.08h-5.92c-.41,0-.75-.34-.75-.75V10.74c0-.41.34-.75.75-.75h5.92c.41,0,.75.34.75.75v32.58c0,.41-.34.75-.75.75Zm-5.17-1.5h4.42V11.49h-4.42v31.08Z'/%3e%3cpath%20class='cls-1'%20d='m10.75,52.96h-5.92c-.41,0-.75-.34-.75-.75v-5.92c0-.41.34-.75.75-.75h5.92c.41,0,.75.34.75.75v5.92c0,.41-.34.75-.75.75Zm-5.17-1.5h4.42v-4.42h-4.42v4.42Z'/%3e%3cpath%20class='cls-1'%20d='m25.56,56.05h-11.85c-.48,0-.88-.39-.88-.88V7.47c0-1.09.33-2.17.94-3.12.16-.25.44-.4.73-.4h0c.3,0,.57.15.73.4.9,1.39,2.58,2.25,4.39,2.25s3.49-.86,4.39-2.25c.32-.5,1.14-.5,1.47,0,.62.95.94,2.03.94,3.12v47.7c0,.48-.39.88-.88.88Zm-10.97-1.75h10.1V7.47c0-.35-.05-.69-.14-1.03-1.27,1.2-3.04,1.91-4.91,1.91s-3.64-.71-4.91-1.91c-.09.34-.14.68-.14,1.03v46.83Z'/%3e%3cpath%20class='cls-1'%20d='m22.59,44.08h-5.92c-.41,0-.75-.34-.75-.75V10.74c0-.41.34-.75.75-.75h5.92c.41,0,.75.34.75.75v32.58c0,.41-.34.75-.75.75Zm-5.17-1.5h4.42V11.49h-4.42v31.08Z'/%3e%3cpath%20class='cls-1'%20d='m22.59,52.96h-5.92c-.41,0-.75-.34-.75-.75v-5.92c0-.41.34-.75.75-.75h5.92c.41,0,.75.34.75.75v5.92c0,.41-.34.75-.75.75Zm-5.17-1.5h4.42v-4.42h-4.42v4.42Z'/%3e%3cpath%20class='cls-1'%20d='m37.41,56.05h-11.85c-.48,0-.88-.39-.88-.88V7.47c0-1.09.33-2.17.94-3.12.16-.25.44-.4.73-.4h0c.3,0,.57.15.73.4.9,1.39,2.58,2.25,4.39,2.25s3.49-.86,4.39-2.25c.32-.5,1.14-.5,1.47,0,.62.95.94,2.03.94,3.12v47.7c0,.48-.39.88-.88.88Zm-10.97-1.75h10.1V7.47c0-.35-.05-.69-.14-1.03-1.27,1.2-3.04,1.91-4.91,1.91s-3.64-.71-4.91-1.91c-.09.34-.14.68-.14,1.03v46.83Z'/%3e%3cpath%20class='cls-1'%20d='m34.44,44.08h-5.92c-.41,0-.75-.34-.75-.75V10.74c0-.41.34-.75.75-.75h5.92c.41,0,.75.34.75.75v32.58c0,.41-.34.75-.75.75Zm-5.17-1.5h4.42V11.49h-4.42v31.08Z'/%3e%3cpath%20class='cls-1'%20d='m34.44,52.96h-5.92c-.41,0-.75-.34-.75-.75v-5.92c0-.41.34-.75.75-.75h5.92c.41,0,.75.34.75.75v5.92c0,.41-.34.75-.75.75Zm-5.17-1.5h4.42v-4.42h-4.42v4.42Z'/%3e%3cpath%20class='cls-1'%20d='m48.09,56.05c-.16,0-.32-.04-.46-.13-.2-.12-.34-.32-.39-.54l-9.66-40.46c-.23-.95-.17-1.95.17-2.9.1-.28.33-.49.62-.56.29-.07.59.01.81.22,1.02.97,2.58,1.35,4.07.99,1.5-.36,2.72-1.4,3.19-2.72.1-.28.33-.49.62-.56.29-.07.59.01.81.22.73.7,1.24,1.57,1.46,2.51l9.66,40.46c.11.47-.18.94-.65,1.05l-10.05,2.4c-.07.02-.13.02-.2.02Zm-8.9-42.23c0,.23.03.46.09.69l9.46,39.61,8.35-1.99-9.46-39.61c-.05-.23-.13-.44-.23-.65-.86,1.22-2.19,2.13-3.74,2.5-1.54.37-3.15.16-4.46-.54Z'/%3e%3cpath%20class='cls-1'%20d='m48.2,45.28c-.14,0-.27-.04-.39-.11-.17-.1-.29-.27-.34-.46l-6.6-27.63c-.05-.19-.01-.4.09-.57.1-.17.27-.29.46-.34l5.02-1.2c.19-.05.4-.01.57.09s.29.27.34.46l6.6,27.63c.1.4-.15.81-.56.9l-5.02,1.2c-.06.01-.12.02-.17.02Zm-5.7-27.83l6.25,26.17,3.56-.85-6.25-26.17-3.57.85Z'/%3e%3cpath%20class='cls-1'%20d='m50,52.81c-.14,0-.27-.04-.39-.11-.17-.1-.29-.27-.34-.46l-1.2-5.02c-.1-.4.15-.81.56-.9l5.02-1.2c.19-.05.4-.01.57.09s.29.27.34.46l1.2,5.02c.1.4-.15.81-.56.9l-5.02,1.2c-.06.01-.12.02-.17.02Zm-.3-5.22l.85,3.57,3.57-.85-.85-3.57-3.57.85Z'/%3e%3c/svg%3e",
//                   name: "法律與財稅規劃"
//                 },
//                 {
//                   icon: "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;}%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m17.87,28.4h23.38c.2-.07.35-.14.49-.27.03-.06.07-.11.1-.15.03-.03.06-.07.06-.1v-.38c0-24.44,0-25.9-.07-26.1-.01-.04-.02-.05-.02-.07-.13-.33-.51-.58-.91-.58-20.49,0-23.13,0-23.31.06-.01,0-.03.02-.06.02-.13.07-.32.16-.38.23-.21.2-.31.44-.31.69v25.7c.23.51.6.86,1.02.95Zm2.46-2l2.79-2.91h12.61l.04.04,2.87,2.87h-18.3Zm3.32-4.8V7.65h11.55v13.96h-11.55Zm16.46,3.43l-2.91-2.91V7.03l.04-.04,2.87-2.99v21.03Zm-1.36-22.29l-3.02,2.91h-12.6l-.08-.08-2.72-2.83h18.42Zm-19.71,1.45l2.71,2.83v15.19l-.07.07-2.65,2.76V4.2Z'/%3e%3cpath%20class='cls-1'%20d='m58.2,57.16h-3.9v-27.25c0-1.3-.58-2.59-1.55-3.46l-.22-.2.23-.19c.98-.8,1.54-2.06,1.54-3.46,0-2.56-2.08-4.65-4.65-4.65s-4.65,2.09-4.65,4.65c0,1.3.58,2.59,1.55,3.47l.22.2-.23.19c-.98.8-1.54,2.06-1.54,3.46v3.05l-.15.07c-8.25,3.55-15.97,3.38-20.99,2.61-4.36-.69-7.48-1.99-8.62-2.52l-.15-.07v-3.04c0-1.3-.58-2.59-1.55-3.46l-.22-.2.23-.19c.98-.8,1.54-2.06,1.54-3.46,0-2.56-2.08-4.65-4.65-4.65s-4.65,2.09-4.65,4.65c0,1.3.58,2.59,1.55,3.46l.22.2-.22.19c-.98.8-1.54,2.06-1.54,3.46v27.25H1.8c-.53,0-1,.47-1,1s.47,1,1,1h56.4c.53,0,1-.47,1-1,0-.81-.54-1.09-1-1.09Zm-45.1-.1h-5.28v-.03h-.13v-27.13c0-1.51,1.18-2.65,2.75-2.65,1.44,0,2.65,1.22,2.65,2.65v27.16Zm-2.65-31.81c-1.52,0-2.75-1.19-2.75-2.65s1.18-2.65,2.75-2.65,2.65,1.17,2.65,2.65-1.17,2.65-2.65,2.65Zm34.56,31.9H15.09v-17.16l.35.14c9.16,3.78,19.8,3.78,29.21,0l.35-.14v17.15Zm0-19.3l-.15.07c-4.73,2.04-9.78,3.07-15.01,3.07-2,0-4.01-.15-5.98-.46-4.36-.69-7.48-1.99-8.62-2.52l-.15-.07v-2.74l.35.14c9.21,3.7,19.85,3.67,29.22-.1l.35-.14v2.75Zm7.3,19.3h-5.4v-27.25c0-1.44,1.22-2.65,2.65-2.65s2.75,1.24,2.75,2.65v27.25Zm-2.75-31.9c-1.44,0-2.65-1.22-2.65-2.65s1.22-2.65,2.65-2.65c1.52,0,2.75,1.19,2.75,2.65s-1.23,2.65-2.75,2.65Z'/%3e%3c/svg%3e",
//                   name: "藝術收藏"
//                 },
//                 {
//                   icon: "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;}%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m49.39,31c-3.92-1.84-7.98-3.1-12.06-3.75l-.97-.16-.15.97c-1.35,8.59-2.74,14.73-4.16,18.27-1.14,2.85-1.91,2.99-2.05,2.99s-.91-.14-2.04-2.97c-1.41-3.51-2.8-9.62-4.14-18.16l-.15-.98-.97.17c-3.73.64-7.57,1.75-11.42,3.29-2.24.9-4.81,2.34-4.81,5.56v16.36c0,3.84,2.87,6.97,6.39,6.97h34.29c3.53,0,6.39-3.13,6.39-6.97v-14.8c0-2.94-1.63-5.61-4.15-6.79Zm-2.24,26.61H12.85c-2.45,0-4.44-2.25-4.44-5.02v-16.36c0-1.64,1.04-2.72,3.59-3.75,3.39-1.36,6.77-2.37,10.06-3.01,1.4,8.69,2.82,14.6,4.33,18.06,1.46,3.34,2.77,3.72,3.63,3.72h0c.86,0,2.18-.39,3.64-3.75,1.51-3.48,2.93-9.43,4.34-18.18,3.57.66,7.13,1.81,10.58,3.43,1.84.86,3.03,2.83,3.03,5.02v14.8c0,2.77-1.99,5.02-4.44,5.02Z'/%3e%3cpath%20class='cls-1'%20d='m22.39,22.42c2.18,2.46,4.88,3.82,7.61,3.82s5.43-1.36,7.61-3.82c2.2-2.49,3.58-5.68,3.9-8.98.34-3.52-.64-6.77-2.76-9.17-2.15-2.43-5.33-3.82-8.75-3.82s-6.61,1.39-8.75,3.82c-2.11,2.39-3.09,5.65-2.75,9.17.32,3.31,1.7,6.5,3.89,8.98ZM30,2.39c2.85,0,5.51,1.15,7.28,3.16,1.75,1.99,2.56,4.72,2.28,7.69-.28,2.9-1.49,5.7-3.42,7.88-1.8,2.04-3.98,3.16-6.15,3.16s-4.35-1.12-6.15-3.16c-1.92-2.18-3.14-4.98-3.41-7.88-.29-2.98.52-5.71,2.27-7.69,1.78-2.01,4.43-3.16,7.29-3.16Z'/%3e%3cpath%20class='cls-1'%20d='m27.5,32.26c.42.47.95.73,1.51.73h1.97c.56,0,1.09-.26,1.51-.73.36-.41.6-.95.67-1.5l.27-2.3c.04-.36-.07-.72-.3-.99-.23-.26-.57-.41-.92-.41h-4.42c-.35,0-.68.15-.91.41-.24.27-.35.63-.31.99l.27,2.3c.07.55.3,1.08.66,1.5Zm3.72-1.73c-.02.16-.09.32-.19.44-.03.04-.06.06-.08.07h-1.9s-.04-.03-.08-.07c-.1-.12-.17-.28-.19-.44l-.18-1.52h2.8l-.18,1.52Z'/%3e%3cpath%20class='cls-1'%20d='m26.26,40.12l2.02,4.37c.31.68.97,1.1,1.71,1.1s1.4-.42,1.71-1.1l2.01-4.34v-.03s-1.38-6.44-1.38-6.44l-.02-.08h-4.65l-1.4,6.49v.03Zm5.42-.23l-1.72,3.59-1.66-3.59.94-4.34h1.5l.94,4.34Z'/%3e%3c/svg%3e",
//                   name: "禮賓服務"
//                 },
//                 {
//                   icon: "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;}%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m56.82,41.33l-.19-.06v-21.22c0-.09-.02-.19-.05-.31l.22-.15-.24.09c-.15-.39-.5-.67-.91-.72l-27-8.96c-.26-.09-.41-.09-.68,0L.77,19.04c-.57.19-.77.65-.77,1.01,0,.61.49.9.78,1.02l8.36,2.78v17.64c0,.5.23.84.68,1.02l17.92,6.12c.12.05.23.1.36.13.09.03.17.04.22.04h.59l18.13-6.19c.39-.16.66-.57.66-1.01v-17.81l6.72-2.23v19.73l-.19.06c-1.9.57-3.18,2.28-3.18,4.26,0,2.46,2,4.47,4.47,4.47s4.47-2.05,4.47-4.47c0-1.98-1.28-3.69-3.18-4.26Zm-29.5,4.96l-15.97-5.45v-16.25l15.97,5.3v16.4Zm18.28-5.45l-16.07,5.43v-16.45l.18-.06,15.89-5.28v16.36Zm-17.28-12.84l-17.5-5.83c-.17-.09-.31-.14-.45-.16l-5.88-1.96,23.83-7.94,23.83,7.94-23.83,7.95Zm27.21,20.05c-1.3,0-2.36-1.06-2.36-2.36s1.06-2.36,2.36-2.36,2.36,1.06,2.36,2.36-1.06,2.36-2.36,2.36Z'/%3e%3c/svg%3e",
//                   name: "教育規劃"
//                 }
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-[#ab9064] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center hover:bg-[#9a7f57] transition-colors duration-300 cursor-pointer group"
//                 >
//                   <div className="flex flex-col items-center">
//                     <img
//                       src={item.icon}
//                       alt={item.name}
//                       className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-4 sm:mb-6 filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
//                     />
//                     <span className="text-white text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
//                     {item.name}
//                   </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//
//           {/* 家族企業区域 */}
//           <div>
//             {/* 家族企業标题 */}
//             <div className="flex items-center justify-center mb-8 sm:mb-12 lg:mb-16">
//               <div className="flex items-center gap-3 sm:gap-4">
//                 <img
//                   src="/images/investment-company.svg"
//                   alt="家族企業"
//                   className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
//                 />
//                 <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#ab9064]">
//                 家族企業
//               </span>
//               </div>
//             </div>
//
//             {/* 家族企業服务项目 */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
//               {[
//                 {
//                   icon: "/images/2-1.svg",
//                   name: "家族企業創新"
//                 },
//                 {
//                   icon: "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;}%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m51.28,38.25h-9.69c-1.45,0-2.77.51-3.81,1.36l-5.01-6.2c.6-.66.98-1.54.98-2.5,0-1.75-1.21-3.21-2.83-3.62v-5.53h3.93s.1,0,.15,0c0,0,.01,0,.02,0,.01,0,.02,0,.04,0,3.23-.11,5.82-2.76,5.82-6.02V6.03C40.88,2.7,38.17,0,34.85,0h-9.69C21.83,0,19.12,2.7,19.12,6.03v9.69c0,3.26,2.59,5.91,5.82,6.02.01,0,.02,0,.04,0,0,0,.01,0,.02,0,.05,0,.1,0,.15,0h3.93v5.53c-1.62.41-2.83,1.87-2.83,3.62,0,.96.38,1.84.98,2.5l-5.01,6.2c-1.04-.85-2.37-1.36-3.81-1.36h-9.69c-3.33,0-6.03,2.71-6.03,6.03v9.69c0,3.26,2.6,5.91,5.83,6.02.01,0,.02,0,.03,0,0,0,.01,0,.02,0,.05,0,.1,0,.15,0h9.69s.1,0,.15,0c0,0,.01,0,.02,0,.01,0,.02,0,.03,0,3.23-.11,5.83-2.76,5.83-6.02v-9.69c0-1.21-.36-2.33-.97-3.27l5.31-6.57c.39.14.8.22,1.23.22s.84-.09,1.23-.22l5.31,6.57c-.61.94-.97,2.07-.97,3.27v9.69c0,3.26,2.6,5.91,5.83,6.02.01,0,.02,0,.03,0,0,0,.01,0,.02,0,.05,0,.1,0,.15,0h9.69c.05,0,.1,0,.15,0,0,0,.01,0,.02,0,.01,0,.02,0,.03,0,3.23-.11,5.83-2.76,5.83-6.02v-9.69c0-3.32-2.71-6.03-6.03-6.03Zm-4.85,10.28s-.06,0-.09,0c-1.59-.05-2.87-1.35-2.87-2.95s1.33-2.96,2.95-2.96,2.96,1.33,2.96,2.96-1.28,2.9-2.87,2.95c-.03,0-.06,0-.09,0Zm-4.09,5.94c0-2.24,1.8-4.06,4.03-4.09.02,0,.04,0,.06,0s.04,0,.06,0c2.23.03,4.04,1.85,4.04,4.09v3.69h-8.19v-3.69Zm10.03,3.53v-3.53c0-2.19-1.2-4.11-2.97-5.14,1.11-.88,1.84-2.22,1.84-3.74,0-2.65-2.15-4.8-4.8-4.8s-4.8,2.15-4.8,4.8c0,1.52.73,2.86,1.83,3.74-1.77,1.03-2.97,2.94-2.97,5.14v3.53c-1.78-.48-3.1-2.1-3.1-4.03v-9.69c0-2.31,1.88-4.19,4.19-4.19h9.69c2.31,0,4.19,1.88,4.19,4.19v9.69c0,1.93-1.32,3.54-3.1,4.03Zm-24.28-27.09c0-1.05.86-1.91,1.91-1.91s1.91.85,1.91,1.91-.85,1.91-1.91,1.91-1.91-.86-1.91-1.91Zm1.91-10.99s0,0,0,0h-4.09v-3.69c0-2.24,1.8-4.05,4.03-4.09.02,0,.04,0,.06,0s.04,0,.06,0c2.23.04,4.03,1.85,4.03,4.09v3.69h-4.08s0,0,0,0Zm0-9.62s-.06,0-.09,0c-1.59-.05-2.87-1.35-2.87-2.95s1.33-2.96,2.96-2.96,2.95,1.33,2.95,2.96-1.28,2.9-2.87,2.95c-.03,0-.06,0-.09,0Zm5.94,9.46v-3.53c0-2.19-1.2-4.11-2.97-5.14,1.11-.88,1.83-2.22,1.83-3.74,0-2.65-2.15-4.8-4.8-4.8s-4.8,2.15-4.8,4.8c0,1.52.73,2.86,1.83,3.74-1.77,1.03-2.97,2.94-2.97,5.14v3.53c-1.78-.48-3.1-2.1-3.1-4.03V6.03c0-2.31,1.88-4.19,4.19-4.19h9.69c2.31,0,4.19,1.88,4.19,4.19v9.69c0,1.93-1.32,3.54-3.1,4.03Zm-22.37,28.78s-.06,0-.09,0c-1.59-.05-2.87-1.35-2.87-2.95s1.33-2.96,2.96-2.96,2.95,1.33,2.95,2.96-1.28,2.9-2.87,2.95c-.03,0-.06,0-.09,0Zm-4.09,5.94c0-2.24,1.81-4.06,4.04-4.09.02,0,.04,0,.06,0s.04,0,.06,0c2.23.03,4.03,1.85,4.03,4.09v3.69h-8.19v-3.69Zm10.03,3.53v-3.53c0-2.19-1.2-4.11-2.97-5.14,1.11-.88,1.83-2.22,1.83-3.74,0-2.65-2.15-4.8-4.8-4.8s-4.8,2.15-4.8,4.8c0,1.52.73,2.86,1.84,3.74-1.77,1.03-2.97,2.94-2.97,5.14v3.53c-1.78-.48-3.1-2.1-3.1-4.03v-9.69c0-2.31,1.88-4.19,4.19-4.19h9.69c2.31,0,4.19,1.88,4.19,4.19v9.69c0,1.93-1.32,3.54-3.1,4.03Z'/%3e%3c/svg%3e",
//                   name: "繼任規劃"
//                 },
//                 {
//                   icon: "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;}%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m59.63,29.32l-5.84-3.72c-.37-.23-.86-.12-1.09.24-.11.18-.15.39-.1.6.05.21.17.38.35.5l3.39,2.16h-5.71c-.21-4.88-2.11-9.52-5.38-13.08l4.01-4.01-.87,3.93c-.05.21,0,.42.11.6.11.18.29.3.5.35.28.06.54-.02.73-.21.1-.1.18-.24.21-.39l1.5-6.77c.06-.27-.02-.54-.21-.73-.19-.19-.47-.27-.73-.21l-6.77,1.5c-.42.1-.69.52-.6.94.1.42.52.69.95.6l3.93-.87-4.01,4.01c-3.58-3.29-8.22-5.21-13.08-5.42V3.66l2.16,3.39c.11.18.29.3.5.35.21.05.42,0,.6-.11.23-.15.36-.4.36-.67,0-.15-.04-.3-.12-.43L30.67.36c-.14-.22-.39-.35-.67-.35h0c-.28,0-.53.13-.67.35l-3.72,5.85c-.23.37-.12.86.24,1.09.18.11.41.15.6.11.21-.05.38-.17.5-.35l2.16-3.39v5.67h-.22s-.03.01-.03.01c-4.76.26-9.3,2.18-12.82,5.42l-4.02-4.02,3.93.87c.42.09.85-.18.94-.6.06-.27-.02-.54-.21-.73-.11-.11-.24-.18-.39-.21l-6.77-1.5c-.27-.06-.54.02-.73.21-.19.19-.27.46-.22.73l1.5,6.77c.09.42.53.7.94.6.43-.09.7-.52.6-.94l-.87-3.92,4.02,4.02c-3.27,3.57-5.18,8.21-5.39,13.07H3.67l3.39-2.16c.18-.11.3-.29.35-.5.05-.21,0-.42-.11-.6-.24-.37-.73-.47-1.1-.24L.37,29.32c-.23.15-.37.4-.37.67s.14.52.37.67l5.85,3.72c.36.23.87.11,1.09-.24.11-.18.15-.39.11-.6-.05-.21-.17-.38-.35-.5l-3.39-2.16h5.71c.21,4.87,2.11,9.5,5.38,13.08l-4.01,4.01.87-3.93c.09-.43-.18-.85-.6-.94-.42-.09-.85.18-.94.6l-1.5,6.77c-.06.27.02.54.21.73.19.19.49.27.73.21l6.76-1.5c.15-.03.28-.11.39-.21.19-.19.27-.47.21-.73-.09-.42-.51-.69-.95-.6l-3.93.87,4.02-4.02c3.53,3.25,8.09,5.17,12.87,5.42h.2v5.67l-2.16-3.39c-.11-.18-.29-.3-.5-.35-.21-.05-.42,0-.6.11-.37.23-.48.72-.24,1.09l3.72,5.84c.15.23.4.37.67.37s.52-.14.67-.37l3.72-5.85c.08-.13.12-.27.12-.42,0-.27-.14-.52-.37-.67-.37-.23-.86-.13-1.09.24l-2.16,3.39v-5.67c4.86-.21,9.5-2.13,13.08-5.42l4.01,4.01-3.93-.87c-.42-.09-.85.18-.94.6-.09.43.18.85.6.94l6.76,1.5c.27.06.54-.02.73-.21.19-.19.27-.46.21-.73l-1.5-6.77c-.04-.15-.11-.28-.21-.39-.19-.19-.47-.27-.73-.21-.21.05-.38.17-.5.35-.11.18-.15.39-.11.6l.87,3.93-4-4c3.26-3.57,5.17-8.21,5.37-13.09h5.71l-3.39,2.16c-.18.11-.3.29-.35.5-.05.21,0,.42.11.6.23.36.73.47,1.09.24l5.84-3.72c.23-.15.37-.4.37-.67s-.14-.52-.37-.67Zm-18.04,2.25h7.16c-.31,3.69-1.68,7.17-3.98,10.09-1.48-1.04-3.08-1.92-4.77-2.62.91-2.38,1.44-4.89,1.6-7.47Zm7.23-1.84h-7.18c-.03-2.63-.45-5.23-1.27-7.71,1.76-.77,3.43-1.75,4.98-2.91,2.22,3.12,3.41,6.79,3.46,10.62Zm-9.01,0h-8.89s0-5.61,0-5.61c2.65-.06,5.25-.54,7.75-1.43.73,2.27,1.12,4.63,1.14,7.04Zm-.07-9.44c-1.37-3.31-3.49-6.34-6.16-8.8,4.11.8,7.87,2.97,10.64,6.17-1.4,1.04-2.9,1.93-4.48,2.63Zm-8.83,1.99v-10.64c3.15,2.48,5.61,5.7,7.12,9.33-2.29.81-4.68,1.25-7.12,1.31Zm6.63,17.82c-1.52,3.17-3.8,6.01-6.63,8.24v-9.37c2.27.06,4.5.44,6.63,1.13Zm1.74.64c1.5.62,2.94,1.4,4.27,2.31-2.68,2.78-6.19,4.7-9.96,5.43,2.41-2.22,4.33-4.82,5.7-7.75Zm-8.37-3.6v-5.56h8.84c-.15,2.35-.65,4.65-1.48,6.83-2.37-.78-4.84-1.2-7.36-1.26Zm-9.06-16.43c1.55-3.61,4.04-6.8,7.22-9.25v10.79c-2.48-.13-4.91-.65-7.22-1.55Zm-3.67,10.87c.16,2.68.74,5.29,1.71,7.76-1.58.71-3.07,1.58-4.45,2.58-2.43-2.96-3.88-6.53-4.2-10.34h6.94Zm1.32-9.89c-.89,2.58-1.35,5.29-1.37,8.05h-6.96c.05-3.96,1.32-7.74,3.68-10.93,1.45,1.13,3.01,2.1,4.65,2.88Zm9.57,2.4v5.64h-9.11c.03-2.5.44-4.96,1.23-7.31,2.52.98,5.17,1.54,7.88,1.67Zm-8.91-4.12c-1.47-.71-2.87-1.58-4.16-2.58,2.67-2.97,6.25-5.03,10.12-5.84-2.55,2.37-4.61,5.27-5.96,8.43Zm.47,21.05c1.35,2.79,3.19,5.28,5.49,7.4-3.54-.75-6.87-2.56-9.44-5.13,1.23-.88,2.56-1.64,3.95-2.27Zm-.61-9.44h9.05s0,5.58,0,5.58c-2.57.12-5.08.62-7.47,1.49-.89-2.25-1.42-4.62-1.58-7.07Zm9.05,7.41v9.51c-2.85-2.19-5.18-5.01-6.73-8.18,2.16-.77,4.42-1.22,6.73-1.34Z'/%3e%3c/svg%3e",
//                   name: "全球業務拓展"
//                 },
//                 {
//                   icon: "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;}%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m37.85,2.25v-.05c-.01-.53-.43-.95-.95-.98h-.05s-.04,0-.05,0c-7.04,0-13.21,4.3-15.79,10.6-.46-2.77-1.76-5.41-3.86-7.52-.07-.07-.15-.14-.22-.2-.03-.03-.06-.06-.1-.09-.37-.35-.97-.35-1.36-.02-.02.02-.04.04-.06.06-5.19,5.19-5.42,13.54-.53,19.03l.04.04-6.13,6.13,1.05,1.05,6.13-6.13.04.04c2.64,2.35,5.94,3.52,9.23,3.52,3.55,0,7.1-1.36,9.79-4.05,0,0,.04-.04.05-.05.36-.38.34-1,0-1.39-.02-.02-.03-.04-.05-.05-2.26-2.27-5.15-3.6-8.15-3.96,6.46-2.44,10.98-8.64,10.98-15.97Zm-4.99,20.67c-4.45,3.76-11.08,3.72-15.52-.23-.05-.04-.1-.08-.15-.12-.03-.03-.06-.05-.09-.07-.05-.05-.1-.09-.16-.14-.04-.04-.08-.07-.15-.14-.1-.1-.19-.2-.28-.3l-.16-.18c-3.96-4.44-3.98-11.08-.21-15.54,3.64,4.05,4.05,10.1.93,14.63-.28.4-.23.94.12,1.28.34.34.88.39,1.28.12,4.44-3.06,10.33-2.72,14.37.69Zm-11.08-5.64c.04-.56.11-1.13.22-1.73h0c1.25-6.82,6.97-11.85,13.81-12.29-.48,7.54-6.43,13.53-14.03,14.02Z'/%3e%3cpath%20class='cls-1'%20d='m59.86,38.19c.05-.29-.02-.59-.2-.83-.21-.28-.54-.45-.89-.45-3.06,0-5.13-1.64-7.53-3.54-.58-.46-1.06-.84-1.58-1.22-2.19-1.63-4.97-3.3-8.95-3.3-1.74,0-3.06.02-4.13.05h-8.46c-1.84,0-3.33,1.56-3.33,3.49s1.5,3.48,3.33,3.48h7.82c1.1.24,1.85,1.25,1.85,2.45,0,.86-.4,1.65-1.08,2.11l-.04.02-2.89.82c-.98.25-1.96.53-2.99.84l-.2.06c-5.46,1.54-7.24,2.03-7.77,2.17-.25.01-.44,0-.6-.02l-.05-.02-12.27-8.48-2.25-1.73s-.07-.05-.11-.08c-.12-.08-.25-.15-.38-.22-.24-.13-.47-.23-.72-.31-.18-.06-.38-.1-.6-.14-.25-.04-.47-.06-.69-.06-.26,0-.51.03-.78.08-2.42.26-4.24,2.37-4.24,4.91,0,1.29.48,2.51,1.35,3.44.02.02.04.04.06.06.33.33.68.61,1.05.83l20.41,15.77c.1.08.21.13.33.17l.21.09c.97.36,1.88.42,2.84.22.02,0,.04,0,.06-.02l.1-.03c8.99-2.44,20.94-5.67,26.78-7.21.04-.01.08-.02.12-.04l.4-.16c2.2-.59,3.95-.91,4.94-.91.6,0,1.1-.49,1.1-1.1v-.8c.01-.09.02-.15.02-.22l-.02-10.17h0Zm-2.21,10.15h-.09c-1.13.15-2.6.46-4.36.93-.04.01-.08.02-.12.04l-.39.15c-7,1.84-22.24,5.98-26.74,7.2l-.06.02c-.2.04-.39.06-.58.06-.33,0-.65-.06-.99-.18l-.13-.06L3.87,40.79s-.09-.07-.14-.09c-.21-.12-.42-.27-.6-.47l-.03-.03c-.5-.52-.77-1.22-.77-1.96,0-1.43.99-2.6,2.31-2.73.04,0,.09-.01.13-.02.22-.05.49-.05.73-.02.1.02.2.04.28.06.11.04.22.09.34.15.08.05.16.09.23.14l.02.02,2.25,1.74,12.5,8.64c.1.07.22.13.34.16.45.12.96.16,1.57.13.07,0,.14-.01.21-.03.55-.14,3.16-.86,7.95-2.22l.23-.06c1.02-.31,1.98-.58,2.94-.83l3.09-.87c.09-.03.18-.06.26-.11,1.41-.83,2.29-2.39,2.29-4.08,0-2.3-1.57-4.25-3.73-4.62-.06-.01-.13-.02-.19-.02h-7.94c-.63,0-1.14-.58-1.14-1.29s.51-1.29,1.14-1.29h8.5c1.08-.03,2.43-.05,4.1-.05,3.33,0,5.64,1.38,7.64,2.87.51.38.99.76,1.53,1.18,2.21,1.75,4.5,3.56,7.67,3.94h.11s0,9.23,0,9.23l-.02.09Z'/%3e%3c/svg%3e",
//                   name: "企業社會責任"
//                 },
//                 {
//                   icon: "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2060%2060'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;}%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m39.57,22.33c.56,0,1.02-.46,1.02-1.02v-4.48h3.28c2.26,0,4.1-1.84,4.1-4.11V1.02c0-.56-.46-1.02-1.02-1.02h-7.39c-.56,0-1.02.46-1.02,1.02v6.37h-3.83V1.02c0-.56-.46-1.02-1.02-1.02h-7.39c-.56,0-1.02.46-1.02,1.02v6.37h-3.83V1.02c0-.56-.46-1.02-1.02-1.02h-7.39c-.56,0-1.02.46-1.02,1.02v11.69c0,2.26,1.84,4.11,4.1,4.11h3.28v4.48c0,.56.46,1.02,1.02,1.02h1.3c.02.51.03.94.03,1.34,0,6.46-1.59,12.87-4.61,18.52-.02.03-.03.05-.03.05-.02.03-.03.07-.04.11,0,.03-.02.06-.03.09,0,.03-.01.07-.02.11,0,.03,0,.07,0,.11v2.84h-3.98c-.56,0-1.02.46-1.02,1.02v12.46c0,.56.46,1.02,1.02,1.02h33.92c.56,0,1.02-.46,1.02-1.02v-12.46c0-.56-.46-1.02-1.02-1.02h-3.98v-2.8s0-.03,0-.05c0-.02,0-.04,0-.07v-.03s-.02-.07-.02-.09c0-.03-.02-.07-.04-.12-.01-.03-.02-.06-.04-.08l-.02-.04c-3.02-5.67-4.62-12.08-4.62-18.54,0-.39,0-.82.03-1.34h1.31ZM14.07,57.95v-10.41h31.87v10.41H14.07Zm0-55.91h5.34v6.37c0,.56.46,1.02,1.02,1.02h5.88c.56,0,1.02-.46,1.02-1.02V2.05h5.34v6.37c0,.56.46,1.02,1.02,1.02h5.88c.56,0,1.02-.46,1.02-1.03V2.05h5.34v10.67c0,1.14-.92,2.06-2.06,2.06h-27.75c-1.13,0-2.06-.92-2.06-2.06V2.05Zm26.87,40.89v2.55h-21.86v-2.55c3.1-5.91,4.74-12.57,4.74-19.27,0-.4,0-.83-.03-1.34h12.44c-.02.52-.03.94-.03,1.34,0,6.7,1.64,13.37,4.74,19.27Zm-2.39-26.12v3.46h-17.09v-3.46h17.09Z'/%3e%3cpath%20class='cls-1'%20d='m41.96,51.72h-23.91c-.56,0-1.02.46-1.02,1.02s.46,1.02,1.02,1.02h23.91c.56,0,1.02-.46,1.02-1.02s-.46-1.02-1.02-1.02Z'/%3e%3c/svg%3e",
//                   name: "戰略投資"
//                 }
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-[#ab9064] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center hover:bg-[#9a7f57] transition-colors duration-300 cursor-pointer group"
//                 >
//                   <div className="flex flex-col items-center">
//                     <img
//                       src={item.icon}
//                       alt={item.name}
//                       className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-4 sm:mb-6 filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
//                     />
//                     <span className="text-white text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
//                     {item.name}
//                   </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>;
// }
export default function Strength() {

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
            實力展現
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 md:mb-12 font-medium opacity-90">
            STRENGTH DEMONSTRATION
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto opacity-95">
            管理資產規模持續穩健增長，服務涵蓋機構投資者與高淨值個人客戶，在香港資產管理市場建立良好聲譽與專業地位
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

      {/* 资产规模与管理实力区域 */}
      <div className="relative bg-gradient-to-b from-white to-[#f0eddd] py-16 sm:py-24 md:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              資產管理實力
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 sm:mb-12 opacity-80">
              ASSET MANAGEMENT STRENGTH
            </h3>
          </div>

          {/* 核心数据展示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 sm:mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20 text-center">
              <div className="w-20 h-20 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">管理資產規模</h4>
              <p className="text-3xl sm:text-4xl font-bold text-[#593725] mb-2">數千萬</p>
              <p className="text-[#593725] text-sm sm:text-base">美元</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20 text-center">
              <div className="w-20 h-20 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">註冊用戶</h4>
              <p className="text-3xl sm:text-4xl font-bold text-[#593725] mb-2">5,200+</p>
              <p className="text-[#593725] text-sm sm:text-base">名客戶</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20 text-center">
              <div className="w-20 h-20 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-4">專業經驗</h4>
              <p className="text-3xl sm:text-4xl font-bold text-[#593725] mb-2">多年</p>
              <p className="text-[#593725] text-sm sm:text-base">投顧經驗</p>
            </div>
          </div>

          {/* 管理团队实力 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20 mb-16 sm:mb-20">
            <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-6 text-center">
              管理團隊實力
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ab9064]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-[#ab9064] mb-2">資深投資管理</h5>
                  <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                    CIO Ivy Xing 曾管理資產超過數千萬美元規模，具備豐富的機構級資產管理經驗
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ab9064]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-[#ab9064] mb-2">專業投顧背景</h5>
                  <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                    團隊具備多年專業投顧經驗，服務客戶基礎包括機構與高淨值個人投資者
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 客户数量和类型分布区域 */}
      <div className="relative bg-gradient-to-b from-[#f0eddd] to-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#ab9064] mb-4">
              客戶數量和類型分布
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ab9064] mb-8 opacity-80">
              CLIENT DISTRIBUTION
            </h3>
            <p className="text-[#593725] text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto mb-8">
              截至 2024 年 12 月底，N Plus Capital 已為超過 5,200 名註冊用戶提供專業投管服務。
            </p>
          </div>

          {/* 客户分布图表 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* 饼图区域 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#ab9064]/20">
              <h4 className="text-xl sm:text-2xl font-bold text-[#ab9064] mb-8 text-center">
                客戶類型分布
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
                    <p className="text-2xl font-bold text-[#ab9064]">5,200+</p>
                    <p className="text-sm text-[#593725]">註冊用戶</p>
                  </div>
                </div>
              </div>

              {/* 图例 */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-[#ab9064] rounded"></div>
                    <span className="text-[#593725] text-sm sm:text-base">初階理財用戶</span>
                  </div>
                  <span className="text-[#ab9064] font-semibold">40%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-[#c5a572] rounded"></div>
                    <span className="text-[#593725] text-sm sm:text-base">穩健投資者</span>
                  </div>
                  <span className="text-[#ab9064] font-semibold">35%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-[#d4b485] rounded"></div>
                    <span className="text-[#593725] text-sm sm:text-base">高淨值客戶</span>
                  </div>
                  <span className="text-[#ab9064] font-semibold">20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-[#e3c398] rounded"></div>
                    <span className="text-[#593725] text-sm sm:text-base">法人/機構客戶</span>
                  </div>
                  <span className="text-[#ab9064] font-semibold">5%</span>
                </div>
              </div>
            </div>

            {/* 客户类型详细说明 */}
            <div className="space-y-6">
              {[
                {
                  title: "初階理財用戶（約占 40%）",
                  description: "希望獲取每日收益、帳戶流動性強，使用活期理財產品的用戶。",
                  color: "#ab9064"
                },
                {
                  title: "穩健投資者（約占 35%）",
                  description: "對收益與風險有平衡訴求，參與新股申購與結構化基金的中期投資人。",
                  color: "#c5a572"
                },
                {
                  title: "高淨值客戶（約占 20%）",
                  description: "持有資產配置規模 $100 萬以上，偏好 PIPE、Pre-IPO 等股權型配置。",
                  color: "#d4b485"
                },
                {
                  title: "法人/機構客戶（約占 5%）",
                  description: "包括中小企業、家族信託與機構資金，關注長期穩健配置與合規報告。",
                  color: "#e3c398"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#ab9064]/20">
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-4 h-4 rounded mt-1 flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div>
                      <h5 className="text-lg font-semibold text-[#ab9064] mb-2">{item.title}</h5>
                      <p className="text-[#593725] text-sm sm:text-base leading-relaxed">
                        {item.description}
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
              市場地位與專業認可
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h5 className="text-lg font-semibold text-[#ab9064] mb-3">香港市場地位</h5>
                <p className="text-[#593725] text-sm leading-relaxed">
                  在香港資產管理市場建立良好聲譽與專業地位
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h5 className="text-lg font-semibold text-[#ab9064] mb-3">穩健增長</h5>
                <p className="text-[#593725] text-sm leading-relaxed">
                  管理資產規模持續穩健增長，客戶信任度不斷提升
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#ab9064]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#ab9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h5 className="text-lg font-semibold text-[#ab9064] mb-3">多元化服務</h5>
                <p className="text-[#593725] text-sm leading-relaxed">
                  服務涵蓋機構投資者與高淨值個人客戶
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
