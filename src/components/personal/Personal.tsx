import React from 'react';
import { Row, Col, Input, Form, Button, Typography } from "antd";

const { Title } = Typography;

interface personalProps {
    changeCurrentComp: any;
    changeValuesFunc: any;
    values: any;
}

export const Personal: React.FC<personalProps> = ({changeCurrentComp, values, changeValuesFunc}) => {
    const onFinish = (data: {
        firstName: string;
        lastName: string;
        Email: string;
      }) => {
          let result = {
              ...values,
              Email: data.Email,
              firstName: data.firstName,
              lastName: data.lastName,
          }
        console.log("values", result);
        changeValuesFunc(result);
        changeCurrentComp(3);
      };
    return (
        <>
            <Row justify="center" align="middle">
                <Col span={4}></Col>
                <Col span={4}>
                    <Title level={2}> Create Your Account</Title>
                </Col>
                <Col span={4}></Col>
            </Row>
            <Form layout="vertical" name="basic" onFinish={onFinish}>
                <Row justify="center" align="middle">
                    <Col span={3}></Col>
                    <Col span={6}>
                        <Form.Item
                            label="First Name"
                            name="firstName"
                            rules={[{ required: true, message: "Field is required!" }]}
                        >
                            <Input placeholder="Please enter first name" />
                        </Form.Item>
                        <Form.Item
                            label="Last Name"
                            name="lastName"
                            rules={[{ required: true, message: "Field is required!" }]}
                        >
                            <Input placeholder="Please enter last name" />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="Email"
                            rules={[
                                { required: true, message: "Field is required!" },
                                {
                                    type: "email",
                                    message: "Please add valid Email!",
                                },
                            ]}
                        >
                            <Input placeholder="Please enter first name" />
                        </Form.Item>
                    </Col>
                    <Col span={3}></Col>
                </Row>
                <Row justify="center" align="middle">
                    <Col span={5}></Col>
                    <Col span={1}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Continue
                            </Button>
                        </Form.Item>
                    </Col>
                    <Col span={5}></Col>
                </Row>
            </Form>
        </>
    );
}