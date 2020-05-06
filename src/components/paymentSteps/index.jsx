// @flow
import React from "react";
import { Button, Breadcrumb } from "antd";
import { CheckOutlined, RightOutlined } from "@ant-design/icons";
import Typography from "../Typography";
import { StyledBreadCrumb, MinimumVisibleButton } from "./styles";

const PaymentSteps = () => (
  <StyledBreadCrumb separator={<RightOutlined theme="error" />}>
    <Breadcrumb.Item href="">
      <Button type="danger" shape="circle" icon={<CheckOutlined />} />
      <Typography type="danger" rank={5}>
        Carrinho
      </Typography>
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <Button danger shape="circle">
        2
      </Button>
      <Typography type="danger" rank={5}>
        Pagamento
      </Typography>
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <Button danger shape="circle">
        3
      </Button>
      <Typography type="danger" rank={5}>
        Confirmação
      </Typography>
    </Breadcrumb.Item>
  </StyledBreadCrumb>
);

export const PaymentStepsMinimized = () => (
  <MinimumVisibleButton type="link" style={{ color: "#fff", paddingLeft: 0 }}>
    <strong>Etapa 2 </strong>
    de 3
  </MinimumVisibleButton>
);

export default PaymentSteps;
