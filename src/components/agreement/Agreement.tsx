import React from 'react';
import { Row, Col, message, Checkbox, Form, Button, Typography } from "antd";

const { Title } = Typography;

const Agreement = () => {
    return (
        <>
            <Row justify="center" align="middle">
                <Col span={5}></Col>
                <Col span={5}>
                    <Title level={2}> One last step!</Title>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Form layout="vertical" name="basic">
                <Row justify="center" align="middle">
                    <Col span={4}></Col>
                    <Col span={5}>
                        <Form.Item
                            label="Agreement"
                            name="check1"
                            valuePropName="checked"
                            rules={[{ required: true, message: "Field is required!" }]}
                        >
                            <Checkbox>
                                I agree to the
                        <br /> <a href="#">Electronic Transaction Esign Consent</a>
                            </Checkbox>
                        </Form.Item>
                        <Form.Item
                            name="check2"
                            valuePropName="checked"
                            rules={[{ required: true, message: "Field is required!" }]}
                        >
                            <Checkbox>
                                I agree to the following agreements:
                        <br /> <a href="#">Privacy Notice</a>
                                <br /> <a href="#">Terms and Conditions</a>
                                <br /> <a href="#">Membership Agreement</a>
                            </Checkbox>
                        </Form.Item>
                    </Col>
                    <Col span={3}></Col>
                </Row>
                <Row justify="center" align="middle">
                    <Col span={4}></Col>
                    <Col span={5}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                AGREE & CREATE ACCOUNT
                        </Button>
                        </Form.Item>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </Form>
        </>
    );
}

export default Agreement;
