"use client";
import { ConfigProvider, Layout, Menu } from "antd";
import Image from "next/image";
const { Header } = Layout;
import logoImage from "@/assets/images/logo.png";
import Link from "next/link";

function HeaderComponent() {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "white",
      }}
    >
      <Link
        href="/"
        className="flex items-center text-[#000000e0] hover:text-red-400 mr-8"
      >
        <Image src={logoImage} width={40} height={40} alt="Fast Wireless IT" />
        <p className="ml-2 text-4xl font-medium">FastWireless IT</p>
      </Link>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              horizontalItemHoverColor: "#ff7875",
              horizontalItemSelectedColor: "#ff7875",
            },
          },
        }}
      >
        <Menu
          theme="light"
          style={{ borderBottom: "0" }}
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </ConfigProvider>
      <div>
        <Link href="/login">Login</Link>
      </div>
    </Header>
  );
}

export default HeaderComponent;
