import { Spin } from "antd";

function LoadingSpinner() {
  return (
    <Spin tip="Loading" size="large">
      <div className="Loading" />
    </Spin>
  );
}

export default LoadingSpinner;
