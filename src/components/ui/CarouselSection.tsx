import { Carousel, Col, Row } from "antd";
import Image from "next/image";

import carouselImage1 from "@/assets/images/carousel image/Carousel image 1.svg";
import carouselImage2 from "@/assets/images/carousel image/Carousel image 2.svg";
import carouselImage3 from "@/assets/images/carousel image/Carousel image 3.svg";
import carouselImage4 from "@/assets/images/carousel image/Carousel image 4.svg";

function CarouselSection() {
  return (
    <Carousel className="mt-12" autoplay>
      <div>
        <Row align="middle" justify="center">
          <Col span={10} className="text-right">
            <Image src={carouselImage1} alt="test" />
          </Col>
          <Col span={8}>
            <h2>Fast Internet Connection</h2>
            <p className="text-justify text-sm">
              Providing fast internet service, supported by robust
              infrastructure, enhances customer satisfaction and retention. It
              gives a competitive edge, enabling flexible pricing strategies and
              bundling options. It opens opportunities for data monetization,
              business solutions, and community development, ensuring long-term
              profitability and a positive impact.
            </p>
          </Col>
        </Row>
      </div>
      <div>
        <Row align="middle" justify="center">
          <Col span={10} className="text-right">
            <Image src={carouselImage2} alt="test" />
          </Col>
          <Col span={8}>
            <h2>
              Empowering Online Learning: The Profitable Journey of Reliable
              Internet Services
            </h2>
            <p className="text-justify text-sm">
              Delivering a seamless internet service for online learning is our
              priority. We ensure high-speed connectivity, minimal disruptions,
              and responsive support. By offering reliable internet, we empower
              students to access educational resources with ease. This results
              in improved online learning experiences, leading to higher
              customer satisfaction, increased subscriptions, and ultimately,
              profitability.
            </p>
          </Col>
        </Row>
      </div>
      <div>
        <Row align="middle" justify="center">
          <Col span={10} className="text-right">
            <Image src={carouselImage3} alt="test" />
          </Col>
          <Col span={8}>
            <h2>
              Level Up Your Gaming Experience: The Power of Our Internet Service
            </h2>
            <p className="text-justify text-sm">
              Enjoy unparalleled gaming with our high-speed internet. Low
              latency, zero lag, and seamless connectivity ensure a competitive
              edge. The result? Enhanced gameplay, robust multiplayer
              experiences, and happy gamers. Boost customer satisfaction and
              profits by choosing our internet service for an unbeatable gaming
              journey.
            </p>
          </Col>
        </Row>
      </div>
      <div>
        <Row align="middle" justify="center">
          <Col span={10} className="text-right">
            <Image src={carouselImage4} alt="test" />
          </Col>
          <Col span={8}>
            <h2>Connecting People and Supercharging Your Online Experience</h2>
            <p className="text-justify text-sm">
              Our internet service brings people closer than ever. Enjoy
              seamless video calls, quick social media browsing on Facebook, and
              rapid access to your favorite content on YouTube. With our extra
              speed, your most-used websites load faster. Unite with loved ones
              and experience a lightning-fast online world, enriching your
              connections and optimizing your digital life.
            </p>
          </Col>
        </Row>
      </div>
    </Carousel>
  );
}

export default CarouselSection;
