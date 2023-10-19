"use client";

import { Button, Col, Row, message } from "antd";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelect";
import { useEffect, useState } from "react";
import {
  useGetAllCoverageDistrictsQuery,
  useGetCoverageAreasOfUpazillaOrThanaIdQuery,
  useGetUpazillaOrThanasOfADistrictIdQuery,
} from "@/redux/api/coverageApi";
import { useGetAllPackagesQuery } from "@/redux/api/packageApi";
import FormTextArea from "@/components/Forms/FormTextArea";
import { useRegisterUserMutation } from "@/redux/api/userApi";
import { useAddCustomerMutation } from "@/redux/api/customerApi";
import {
  ICoverageArea,
  ICoverageDistrict,
  ICoverageUpazillaOrThana,
  IPackage,
} from "@/types/common";

function RegistrationPage() {
  // defining states
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedUpazillaOrThana, setSelectedUpazillaOrThana] =
    useState<string>("");
  const [upazillaOrThanaOptions, setUpazillaOrThanaOptions] =
    useState<ICoverageUpazillaOrThana[]>();
  const [areaOptions, setAreaOptions] = useState<ICoverageArea[]>();
  const [upazillasIsLoading, setUpazillasIsLoading] = useState(false);
  const [areasIsLoading, setAreasIsLoading] = useState(false);

  // fetching coverage district, upazilla/thana, area
  const { data: coverageDistricts } =
    useGetAllCoverageDistrictsQuery(undefined);
  const { data: coverageUpazillaOrThanas, refetch: refetchCoverageUpazilla } =
    useGetUpazillaOrThanasOfADistrictIdQuery(selectedDistrict);
  const { data: coverageArea, refetch: refetchCoverageArea } =
    useGetCoverageAreasOfUpazillaOrThanaIdQuery(selectedUpazillaOrThana);
  const { data: packages } = useGetAllPackagesQuery({});

  // importing user/customer creation function
  const [registerUser] = useRegisterUserMutation();
  const [addCustomer] = useAddCustomerMutation();

  // fetching district options
  const districtOptions = coverageDistricts?.map(
    (coverageDistrict: ICoverageDistrict) => {
      return {
        label: coverageDistrict.district,
        value: coverageDistrict.id,
      };
    }
  );

  // fetching package options
  const packageOptions = packages?.packages?.map((netPackage: IPackage) => {
    return {
      label: `${netPackage.speed} MbPS`,
      value: netPackage.id,
    };
  });

  // fetching coverage upazilla/thana optioins on change
  useEffect(() => {
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
  }, [coverageUpazillaOrThanas]);

  // fetching coverage area optioins on change
  useEffect(() => {
    if (!!coverageArea) {
      const coverageAreaOptions = coverageArea?.map(
        (coverageArea: ICoverageArea) => {
          return {
            label: coverageArea.area,
            value: coverageArea.id,
          };
        }
      );
      setAreaOptions(coverageAreaOptions);
    } else {
      setAreaOptions(undefined);
    }
  }, [coverageArea]);

  // handling district change
  const handleDistrictChange = (district: string) => {
    setSelectedDistrict(district);
    setUpazillasIsLoading(true);
    refetchCoverageUpazilla().then(() => setUpazillasIsLoading(false));
  };

  // handling upazilla/thana change
  const handleUpazillaOrThanaChange = (upazillaOrThana: string) => {
    setSelectedUpazillaOrThana(upazillaOrThana);
    setAreasIsLoading(true);
    refetchCoverageArea().then(() => setAreasIsLoading(false));
  };

  // onsubmiting form, register user and add customer
  const onSubmit = async (data: any) => {
    const {
      name,
      email,
      password,
      contactNo,
      address,
      coverageAreaId,
      packageId,
    } = data;
    try {
      const user = await registerUser({
        name,
        email,
        password,
        contactNo,
        role: "customer",
        address,
      });
      await addCustomer({
        coverageAreaId,
        packageId,
        // @ts-ignore
        userId: user?.data?.id,
      });
      message.success("Customer registered successfully!");
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="mx-32">
      <h1 className="text-center">Register</h1>
      <div className="my-8">
        <Form submitHandler={onSubmit}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={12} md={12} lg={12} className="mb-4 gutter-row">
              <FormInput
                name="name"
                type="text"
                size="large"
                label="Full Name"
                required
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} className="mb-4 gutter-row">
              <FormInput
                name="contactNo"
                type="text"
                size="large"
                label="Contact Number"
                required
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} className="mb-4 gutter-row">
              <FormInput
                name="email"
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
                required
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} className="mb-4 gutter-row">
              <FormSelectField
                name="upazillaOrThana"
                size="large"
                label="Upazilla/Thana"
                // @ts-ignore
                options={upazillaOrThanaOptions}
                handleChange={(e) => handleUpazillaOrThanaChange(e)}
                required
                disabled={upazillasIsLoading}
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} className="mb-4 gutter-row">
              <FormSelectField
                name="coverageAreaId"
                size="large"
                label="Coverage Area"
                // @ts-ignore
                options={areaOptions}
                required
                disabled={areasIsLoading}
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} className="mb-4 gutter-row">
              <FormTextArea name="address" label="Address" required />
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={12} md={12} lg={12} className="mb-4 gutter-row">
              <FormSelectField
                name="packageId"
                size="large"
                label="Package"
                options={packageOptions ? packageOptions : []}
                required
              />
            </Col>
          </Row>
          <Button type="primary" htmlType="submit" danger>
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default RegistrationPage;
