'use client'
import Layout from "@/components/layout/Layout";
import {useEffect} from "react";
import Image from "next/image";

export default function AboutLayout({ locale,children }) {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';

    // 清理函数：组件卸载时恢复
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);
  return  <>
    <Layout locale={locale}> {children}</Layout>
  </>;
}
