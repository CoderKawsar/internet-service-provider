"use client";

import { Layout } from "antd";

const { Footer } = Layout;
import HeaderComponent from "@/components/ui/Header";

function FrontEndLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout className="layout">
      <HeaderComponent />
      <div className="bg-white min-h-screen">{children}</div>
      <Footer style={{ textAlign: "center" }}>
        Fastwireless IT - Internet Service Provider ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default FrontEndLayout;
