// @flow
import React from "react";
import { Row, Col, Button } from "antd";
import Logo from "../../../public/logo.png";
import { StyledPageHeader } from "../styles";

const TopBar = () => (
  <StyledPageHeader>
    <Row>
      <Col xs={24} lg={18}>
        <img src={Logo} alt="DemoShop" />
      </Col>
      <Col xs={24} lg={6}>
        <Button key="3" type="link">
          Item1
        </Button>
        <Button key="2" type="link">
          Item2
        </Button>
        <Button key="1" type="link">
          Item3
        </Button>
      </Col>
    </Row>
  </StyledPageHeader>
);

export default TopBar;
