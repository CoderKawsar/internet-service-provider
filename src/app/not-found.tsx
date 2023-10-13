import Image from "next/image";
import notFoundImg from "../assets/images/404 page not found (1).svg";
import Link from "next/link";
import { Button, Col, Row } from "antd";

function NotFoundPage() {
  return (
    <Row justify="center" align="middle">
      <Col span={16} className="w-full">
        <Image
          src={notFoundImg}
          layout="responsive"
          className="custom-img"
          alt="404 Not Found"
        />
      </Col>
      <Col span={8}>
        <h1 className="text-4xl font-semibold">Page Not Found</h1>
        <p className="text-lg text-gray-600">
          The page you are looking for does not exist.
        </p>
        <Button type="primary" danger>
          <Link href="/">Go back to home</Link>
        </Button>
      </Col>
    </Row>
  );
}

export default NotFoundPage;
