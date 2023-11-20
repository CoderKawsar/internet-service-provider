import { Button, Card } from "antd";
import { WifiOutlined } from "@ant-design/icons";
import { IPackage } from "@/types/common";
import Link from "next/link";
import StreamingServices from "./StreamingServices";

function SinglePackage({ packageInfo }: { packageInfo: IPackage }) {
  const {
    id,
    speed,
    fee,
    noOfPublicIP,
    talkTime,
    OTCFee,
    noOfStreamingService,
    StreamingServicesForPackage,
  } = packageInfo;
  return (
    <div className="flex justify-center">
      <div
        className="shadow-lg rounded-md pb-6"
        style={{
          width: "350px",
        }}
      >
        <div className="bg-primary p-2 flex flex-col items-center rounded-t">
          <h2 className="text-center text-white text-lg font-semibold my-2 font-[Raleway]">
            FastWireless IT
          </h2>
          <p className="mb-1 text-orange-400">
            <WifiOutlined className="text-3xl p-2 bg-white rounded-full" />
          </p>
        </div>
        <h2 className="text-2xl text-orange-400 text-center font-bold my-8">
          {speed} Mbps
        </h2>
        <h4
          className="text-md text-center text-primary mx-8 pb-4"
          style={{ borderBottom: "1px dashed #d2d2d2" }}
        >
          24 HOURS UNLIMITED
        </h4>
        <h4
          className="text-md text-center text-primary mx-8 py-4"
          style={{ borderBottom: "1px dashed #d2d2d2" }}
        >
          Fiber Optics
        </h4>
        {noOfPublicIP ? (
          <h4
            className="text-md text-center text-primary mx-8 py-4"
            style={{ borderBottom: "1px dashed #d2d2d2" }}
          >
            {noOfPublicIP} Public IP
          </h4>
        ) : (
          ""
        )}
        <h4
          className="text-md text-center text-primary mx-8 py-4"
          style={{ borderBottom: "1px dashed #d2d2d2" }}
        >
          Talk Time - {talkTime ? `${talkTime} minutes` : "N/A"}
        </h4>
        <h4
          className="text-md text-center text-primary mx-8 py-4"
          style={{ borderBottom: "1px dashed #d2d2d2" }}
        >
          OTC Fee - {OTCFee} Taka
        </h4>
        <h4
          className="text-md text-center text-primary mx-8 py-4"
          style={{ borderBottom: "1px dashed #d2d2d2" }}
        >
          24/7 Customer Care
        </h4>
        {StreamingServicesForPackage?.length ? (
          <StreamingServices
            noOfStreamingService={noOfStreamingService}
            streamingServices={StreamingServicesForPackage}
          />
        ) : (
          ""
        )}
        <h4 className="text-lg text-center text-orange-400 font-bold py-6">
          {fee}৳{" "}
          <span className="font-normal text-sm text-primary">/Month</span>
        </h4>
        <Link href={`/register?packageId=${id}`}>
          <div className="flex justify-center">
            <Button type="primary" danger>
              Register
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SinglePackage;
