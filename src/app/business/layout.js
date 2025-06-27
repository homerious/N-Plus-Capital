'use client'
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import {useEffect} from "react";

export default function FamilyLayout({ locale,children }) {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';

    // 清理函数：组件卸载时恢复
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);
  return  <>
    <Layout locale={locale}> {children}</Layout>
    <Image
      src="/images/organic-shape.svg"
      width={1500}
      height={1500}
      alt="organic-shape"
      className="absolute w-full scale-50 sm:scale-50 lg:scale-50 bottom-0 right-0 translate-x-1/4 sm:translate-x-1/2 translate-y-[110%] opacity-50 lg:opacity-100"
    />
  </>;
}
