import { IPackage } from "@/types/common";
import SinglePackage from "./SinglePackage";
import { Col, Row } from "antd";
import LoadingSpinner from "./LoadingSpinner";

function Packages({
  packages,
  loading,
}: {
  packages: IPackage[] | undefined;
  loading: boolean;
}) {
  return (
    <div className="mx-24">
      <div className="mb-16">
        <p className="text-center text-red-600 font-medium mb-2 leading-5">
          Our Packages
        </p>
        <h2 className="text-center text-4xl mt-0 mb-5">
          Pick The Best Plan For You
        </h2>
        <div className="content block w-20 h-1 bg-red-600 rounded-full m-auto mt-4 mb-2"></div>
        <p className="text-center font-medium text-sm  mt-0">
          Super Speed Optical Fiber Internet Connectivity with Real IP Right to
          Your Door Steps
        </p>
      </div>
      {loading && <LoadingSpinner />}
      <Row justify="center" gutter={[24, 64]}>
        {packages?.map((singlePackage: IPackage) => (
          <Col lg={8} key={singlePackage?.id}>
            <div>
              <SinglePackage packageInfo={singlePackage} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Packages;
