import React from 'react';
import { Row, Col, Input, Form, Button, Typography } from "antd";

const { Title } = Typography;
const Personal = () => {
    return (
        <>
            <Row justify="center" align="middle">
                <Col span={4}></Col>
                <Col span={4}>
                    <Title level={2}> Create Your Account</Title>
                </Col>
                <Col span={4}></Col>
            </Row>
            <Form layout="vertical" name="basic">
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
                            name="email"
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

export default Personal;
