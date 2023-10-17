"use client";

import { Button, Col, Row } from "antd";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelect";
import { useEffect, useState } from "react";
import FormTextArea from "@/components/Forms/FormTextArea";
import {
  useGetAllCoverageDistrictsQuery,
  useGetUpazillaOrThanasOfADistrictIdQuery,
} from "@/redux/api/coverageApi";
import { ICoverageDistrict } from "@/interfaces/coverageDistrict";
import { ICoverageUpazillaOrThana } from "@/interfaces/coverageUpazillaOrThana";

function RegistrationPage() {
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [upazillaOrThanaOptions, setUpazillaOrThanaOptions] =
    useState<ICoverageUpazillaOrThana[]>();

  const { data: coverageDistricts } =
    useGetAllCoverageDistrictsQuery(undefined);
  const {
    data: coverageUpazillaOrThanas,
    isLoading,
    refetch,
  } = useGetUpazillaOrThanasOfADistrictIdQuery(selectedDistrict);

  const districtOptions = coverageDistricts?.map(
    (coverageDistrict: ICoverageDistrict) => {
      return {
        label: coverageDistrict.district,
        value: coverageDistrict.id,
      };
    }
  );

  useEffect(() => {
    setUpazillaOrThanaOptions(undefined);
    refetch();
    if (!!coverageUpazillaOrThanas) {
      const coverageUpazillaOrThanaOptions = coverageUpazillaOrThanas?.map(
        (coverageThana: ICoverageUpazillaOrThana) => {
          return {
            label: coverageThana.upazillaOrThana,
            value: coverageThana.id,
          };
        }
      );
      setUpazillaOrThanaOptions(coverageUpazillaOrThanaOptions);
    } else {
      setUpazillaOrThanaOptions(undefined);
    }
  }, [selectedDistrict, refetch]);

  const handleDistrictChange = (district: string) => {
    setSelectedDistrict(district);
  };

  const onSubmit = async (data: any) => {
    try {
      console.log("user registered in");
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="mx-32">
      <h1 className="text-center">Register</h1>
      <div>
        <Form submitHandler={onSubmit}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={12} md={12} lg={12} className="mb-4 gutter-row">
              <FormInput
                name="fullName"
                type="text"
                size="large"
                label="Full Name"
                required
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} className="mb-4 gutter-row">
              <FormInput
                name="mobileNumber"
                type="text"
                size="large"
                label="Mobile Number"
                required
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} className="mb-4 gutter-row">
              <FormInput
                name="id"
                type="email"
                size="large"
                label="Email"
                required
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} className="mb-4 gutter-row">
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
                required
              />
            </Col>

            <Col xs={24} sm={12} md={12} lg={12} className="mb-4 gutter-row">
              <FormSelectField
                name="district"
                size="large"
                label="District"
                options={districtOptions}
                handleChange={(e) => handleDistrictChange(e)}
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} className="mb-4 gutter-row">
              <FormSelectField
                name="thana"
                size="large"
                label="Thana"
                // @ts-ignore
                options={upazillaOrThanaOptions}
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} className="mb-4 gutter-row">
              <FormTextArea name="address" label="Address" />
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={12} md={12} lg={12} className="mb-4 gutter-row">
              <FormSelectField
                name="package"
                size="large"
                label="Package"
                options={[
                  {
                    label: "5 MbPS",
                    value: "5-mbps",
                  },
                  {
                    label: "10 MbPS",
                    value: "10-mbps",
                  },
                ]}
              />
            </Col>
          </Row>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default RegistrationPage;
