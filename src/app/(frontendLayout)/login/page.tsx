"use client";

import { Button, Col, Row } from "antd";
import loginImage from "@/assets/images/login page.svg";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";

function LoginPage() {
  const onSubmit = async (data: any) => {
    try {
      console.log("user logged in");
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Row
      justify="space-evenly"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={600} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={7}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          First login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="id"
                type="email"
                size="large"
                label="Email"
                required
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
                required
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default LoginPage;
