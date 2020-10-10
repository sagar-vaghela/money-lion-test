import React from 'react';
import { Row, Col, Button, Typography } from "antd";
const { Title } = Typography;
export const Welcome: React.FC = () => {
    return (
        <>
            <Row justify="center" align="middle">
                <Col span={3}></Col>
                <Col span={6}>
                    <Title level={1}>Say Hello to MoneyLion</Title>
                </Col>
                <Col span={3}></Col>
            </Row>
            <Row justify="center" align="middle">
                <Col span={3}></Col>
                <Col span={6}>
                    <Title level={3}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make
                    </Title>
                </Col>
                <Col span={3}></Col>
            </Row>
            <Row justify="center" align="middle">
                <Col span={5}></Col>
                <Col span={2}>
                    <Button type="primary">APPLY NOW</Button>
                </Col>
                <Col span={5}></Col>
            </Row>
        </>
    );
}

export default Welcome;
