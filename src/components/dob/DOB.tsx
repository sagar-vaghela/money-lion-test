import React from 'react';
import { Row, Col, DatePicker, Form, Button, Typography } from "antd";
import moment from "moment";

const { Title } = Typography;

interface dobProps {
    changeCurrentComp: any;
    changeValuesFunc: any;
    values: any;
}

export const DOB: React.FC<dobProps> = ({changeCurrentComp, values, changeValuesFunc}) => {
    const onFinish = (data: { dob: string }) => {
        console.log(values);
        let result = {
            ...values,
            dob: moment(data.dob).format("DD/MM/YYYY"),
        }
        console.log("values", result);
        changeValuesFunc(result);
        changeCurrentComp(4);
      };
      
    return (
        <>
            <Row justify="center" align="middle">
                <Col span={4}></Col>
                <Col span={5}>
                    <Title level={2}> What's your date of birth?</Title>
                </Col>
                <Col span={3}></Col>
            </Row>
            <Form layout="vertical" name="basic" onFinish={onFinish}>
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