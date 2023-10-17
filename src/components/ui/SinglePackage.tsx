import { Button, Card } from "antd";
import { WifiOutlined } from "@ant-design/icons";

function SinglePackage() {
  return (
    <div
      className="shadow rounded-md pb-6"
      style={{
        width: "300px",
      }}
    >
      <div className="bg-[#E52A29] p-2 flex flex-col items-center rounded-t">
        <h2 className="text-center text-white text-lg font-bold mb-0">MINOR</h2>
        <p className="mb-1 text-orange-400">
          <WifiOutlined className="text-3xl p-2 bg-white rounded-full" />
        </p>
      </div>
      <h2 className="text-2xl text-orange-400 text-center font-bold mb-8">
        8 Mbps
      </h2>
      <h4
        className="text-md text-center text-[#858686] mx-8 pb-4"
        style={{ borderBottom: "1px dashed #d2d2d2" }}
      >
        24 HOURS UNLIMITED
      </h4>
      <h4
        className="text-md text-center text-[#858686] mx-8 pb-4"
        style={{ borderBottom: "1px dashed #d2d2d2" }}
      >
        Fiber Optics
      </h4>
      <h4
        className="text-md text-center text-[#858686] mx-8 pb-4"
        style={{ borderBottom: "1px dashed #d2d2d2" }}
      >
        Talk Time - N/A
      </h4>
      <h4
        className="text-md text-center text-[#858686] mx-8 pb-4"
        style={{ borderBottom: "1px dashed #d2d2d2" }}
      >
        OTC Fee - 3000 Taka
      </h4>
      <h4
        className="text-md text-center text-[#858686] mx-8 pb-4"
        style={{ borderBottom: "1px dashed #d2d2d2" }}
      >
        24/7 Customer Care
      </h4>
      <h4 className="text-lg text-center font-bold">500৳ /MONTH</h4>
      <div className="flex justify-center">
        <Button type="primary" danger>
          Register
        </Button>
      </div>
    </div>
  );
}

export default SinglePackage;
