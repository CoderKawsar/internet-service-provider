import { Space, Spin } from "antd";

function Loading() {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin size="large"></Spin>
    </Space>
  );
}

export default Loading;
