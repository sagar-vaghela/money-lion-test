import React from "react";
import { Row, Card } from "antd";
import logo from '../../logo.svg';
export const Header: React.FC = () => {
  return (
    <Row justify="center">
      <Card style={{ width: "100%", textAlign: "center" }}>
        <img src={logo} className="logo-img" />
      </Card>
    </Row>
  );
};
