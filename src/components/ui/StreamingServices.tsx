import { IStreamingServicesForPackage } from "@/types/common";
import { Col, Row } from "antd";
import Image from "next/image";

type IProps = {
  streamingServices: IStreamingServicesForPackage[];
  noOfStreamingService: number;
};

function StreamingServices({
  streamingServices,
  noOfStreamingService,
}: IProps) {
  return (
    <div className="flex flex-col items-center pb-8 mx-4">
      <h2 className="text-orange-400">Any {noOfStreamingService}</h2>
      <Row gutter={[16, 16]} justify="center" align="middle" wrap={true}>
        {streamingServices.map((streamingService) => (
          <Col lg={8} key={streamingService.id}>
            <div
              style={{
                width: "80px",
                height: "30px",
              }}
            >
              <Image
                src={streamingService.streamingService.photoURL}
                width={80}
                height={30}
                alt={streamingService.streamingService.service}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default StreamingServices;
