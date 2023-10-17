import { authKey } from "@/constants/storageKey";
import { RootState } from "@/redux/store";
import { removeUserInfo } from "@/services/user.service";
import { Button, Col, ConfigProvider, Menu, MenuProps, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/features/userSlice";

function MenuSection() {
  const [current, setCurrent] = useState<string>("home");
  const router = useRouter();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  const logOut = () => {
    removeUserInfo(authKey);
    dispatch(logout());
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
      label: "Packages",
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
      key: "logout",
      label: (
        <Button danger onClick={logOut}>
          Logout
        </Button>
      ),
    },
  ];
  return (
    <nav className="w-full">
      <Row justify="space-between" style={{ width: "100%" }}>
        <Col lg={20}>
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
              items={generalItems}
            />
          </ConfigProvider>
        </Col>
        <Col lg={4}>
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
        </Col>
      </Row>
    </nav>
  );
}

export default MenuSection;
