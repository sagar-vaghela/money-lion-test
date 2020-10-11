import React from 'react';
import { Row, Col, Checkbox, Form, Button, Typography, message } from "antd";
import axios from "axios";

const { Title } = Typography;
interface agreementProps {
    changeCurrentComp: any;
    changeValuesFunc: any;
    values: any;
}

export const Agreement: React.FC<agreementProps> = ({ changeCurrentComp, values, changeValuesFunc }) => {
    const onFinish = (data: { agreement1: boolean; agreement2: boolean }) => {
        let result = {
            ...values,
            agreement1: data.agreement1,
            agreement2: data.agreement2,
        }
        console.log("values", result);
        changeValuesFunc(result);
        onSubmit(result);

    };

    const onSubmit = (request: any) => {
        axios.post('https://5f79819fe402340016f93139.mockapi.io/api/user', request).then((res) => {
            if (res) {
                message.success("You are successfully registered");
                changeCurrentComp(1)
            } else {
                message.success("Something went wrong");
            }
        })

    }

    return (
        <>
            <Row justify="center" align="middle">
                <Col span={5}></Col>
                <Col span={5}>
                    <Title level={2}> One last step!</Title>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Form layout="vertical" name="basic" onFinish={onFinish}>
                <Row justify="center" align="middle">
                    <Col span={4}></Col>
                    <Col span={5}>
                        <Form.Item
                            label="Agreement"
                            name="agreement1"
                            valuePropName="checked"
                            rules={[{ required: true, message: "Field is required!" }]}
                        >
                            <Checkbox>
                                I agree to the
                                <br /> <a href="#">Electronic Transaction Esign Consent</a>
                            </Checkbox>
                        </Form.Item>
                        <Form.Item
                            name="agreement2"
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