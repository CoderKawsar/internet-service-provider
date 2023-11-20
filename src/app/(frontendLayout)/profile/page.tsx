"use client";

import { Layout, Card, Space, Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Head from "next/head";
import { getUserInfo } from "@/services/user.service";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import {
  useGetAllCustomersQuery,
  useGetCustomerByUserIdQuery,
} from "@/redux/api/customerApi";

const { Content } = Layout;
const { Title } = Typography;

const ProfilePage = () => {
  // @ts-ignore
  const { id } = getUserInfo();
  const { data: user, isLoading } = useGetSingleUserQuery(id);
  const { data: customer } = useGetCustomerByUserIdQuery(id);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Head>
        <title>User Profile</title>
      </Head>
      <Content className="p-4">
        <Card>
          <Space direction="vertical" align="center">
            <Avatar size={96} icon={<UserOutlined />} />
            <Title level={4}>{user?.name}</Title>
            <Title level={5}>Email: {user?.email}</Title>
          </Space>
          <Title level={5}>Contact No: {user?.contactNo}</Title>
          <Title level={5}>Address: {user?.address}</Title>
          <Title level={5}>Package: {customer?.package?.speed} MbPS</Title>
        </Card>
      </Content>
    </Layout>
  );
};

export default ProfilePage;
