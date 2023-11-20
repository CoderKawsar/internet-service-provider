import { Spin } from "antd";

function LoadingSpinner() {
  return (
    <div className="h-96">
      <Spin tip="Loading" size="large">
        <div className="Loading" />
      </Spin>
    </div>
  );
}

export default LoadingSpinner;
