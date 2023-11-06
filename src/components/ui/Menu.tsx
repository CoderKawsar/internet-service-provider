import { authKey } from "@/constants/storageKey";
import { RootState } from "@/redux/store";
import dynamic from "next/dynamic";
import { getUserInfo, removeUserInfo } from "@/services/user.service";
import { Button, ConfigProvider, Menu, MenuProps, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/features/userSlice";

function MenuSection() {
  const [current, setCurrent] = useState<string>("home");
  const router = useRouter();
  const dispatch = useDispatch();

  const isLoggedIn =
    useSelector((state: RootState) => state.user.isLoggedIn) || !!getUserInfo();

  const logOut = () => {
    removeUserInfo(authKey);
    dispatch(logout());
    message.info("Logged out!");
    router.push("/home");
  };

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  const generalItems = [
    {
      key: "home",
      label: <Link href="/home">Home</Link>,
    },
    {
      key: "packages",
      label: <Link href="/packages">Packages</Link>,
    },
    {
      key: "services",
      label: "services",
    },
  ];

  const nonAuthMenuItems = [
    {
      key: "login",
      label: <Link href="/login">Login</Link>,
    },
    {
      key: "register",
      label: <Link href="/register">Register</Link>,
    },
  ];

  const authMenuItems = [
    {
      key: "profile",
      label: <Link href="/profile">My Profile</Link>,
    },
    {
      key: "logout",
      label: (
        <Button danger onClick={logOut}>
          Logout
        </Button>
      ),
    },
  ];
  return (
    <nav className="w-full flex justify-between">
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
          style={{ borderBottom: "0", width: "100%" }}
          mode="horizontal"
          selectedKeys={[current]}
          onClick={onClick}
          items={generalItems}
        />
      </ConfigProvider>
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
          selectedKeys={[current]}
          onClick={onClick}
          items={isLoggedIn ? authMenuItems : nonAuthMenuItems}
        />
      </ConfigProvider>
    </nav>
  );
}

export default dynamic(() => Promise.resolve(MenuSection), { ssr: false });
