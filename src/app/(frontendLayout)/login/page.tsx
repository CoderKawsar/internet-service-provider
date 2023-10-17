"use client";

import { Button, Col, Row, message } from "antd";
import loginImage from "@/assets/images/login page.svg";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useLoginUserMutation } from "@/redux/api/userApi";
import { storeUserInfo } from "@/services/user.service";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/redux/features/userSlice";

function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();

  const onSubmit = async (data: any) => {
    try {
      const res = await loginUser({ ...data }).unwrap();
      if (res?.accessToken) {
        storeUserInfo({ accessToken: res?.accessToken });
        dispatch(login());
        router.push("/home");
        message.success("User logged in successfully!");
      }
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
                name="email"
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
