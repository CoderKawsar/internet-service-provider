import { Button, Col, Row, message } from "antd";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import FormTextArea from "../Forms/FormTextArea";
import dynamic from "next/dynamic";
import { useSendFeedbackMutation } from "@/redux/api/userApi";

const FeedbackSection = () => {
  const [sendFeedback] = useSendFeedbackMutation();

  const onSubmit = async (data: any) => {
    const feedbackSent = await sendFeedback(data);
    if (feedbackSent) {
      message.success("Feeback sent successfully!");
    } else {
      message.error("Error occured sending feedback!");
    }
  };
  return (
    <div className="bg-primary text-white py-8 mt-24">
      <h2 className="text-center text-4xl mb-8 font-bold">Send Us Feedback</h2>
      <Form className="w-full max-w-screen-lg mx-auto" submitHandler={onSubmit}>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={24} md={12} lg={12}>
            <FormInput
              name="name"
              type="text"
              size="large"
              className="focus:bg-white hover:bg-white border-none outline-none"
              label="Your Name"
              required
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <FormInput
              name="email"
              type="email"
              size="large"
              className="focus:bg-white hover:bg-white border-none outline-none"
              label="Your Email Address"
              required
            />
          </Col>
        </Row>
        <FormTextArea
          className="focus:bg-white hover:bg-white border-none outline-none"
          name="message"
          label="Your Feedback"
          rows={3}
          required
        />
        <div className="flex justify-center mt-6">
          <Button danger htmlType="submit">
            Send Feedback
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default dynamic(() => Promise.resolve(FeedbackSection), { ssr: false });
