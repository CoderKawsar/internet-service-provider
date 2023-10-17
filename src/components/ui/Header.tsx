"use client";

import { Layout } from "antd";
import Image from "next/image";
const { Header } = Layout;
import logoImage from "@/assets/images/logo.png";
import Link from "next/link";
import MenuSection from "./Menu";

function HeaderComponent() {
  return (
    <Header
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        background: "white",
      }}
    >
      <Link
        href="/"
        className=" w-[450px] flex items-center text-[#000000e0] hover:text-red-400"
      >
        <Image src={logoImage} width={40} height={40} alt="Fast Wireless IT" />
        <h1 className="ml-2 text-4xl font-medium font-[Raleway]">
          FastWireless IT
        </h1>
      </Link>
      <MenuSection />
    </Header>
  );
}

export default HeaderComponent;
