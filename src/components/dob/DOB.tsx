import React from 'react';
import { Row, Col, DatePicker, Form, Button, Typography } from "antd";
const { Title } = Typography;

const DOB = () => {
    return (
        <>
            <Row justify="center" align="middle">
                <Col span={4}></Col>
                <Col span={5}>
                    <Title level={2}> What's your date of birth?</Title>
                </Col>
                <Col span={3}></Col>
            </Row>
            <Form layout="vertical" name="basic">
                <Row justify="center" align="middle">
                    <Col span={4}></Col>
                    <Col span={4}>
                        <Form.Item
                            label="Select Your Birthday"
                            name="dob"
                            rules={[{ required: true, message: "Field is required!" }]}
                        >
                            <DatePicker />
                        </Form.Item>
                    </Col>
                    <Col span={4}></Col>
                </Row>
                <Row justify="center" align="middle">
                    <Col span={4}></Col>
                    <Col span={4}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Continue
                        </Button>
                        </Form.Item>
                    </Col>
                    <Col span={4}></Col>
                </Row>
            </Form>
        </>
    );
}

export default DOB;
