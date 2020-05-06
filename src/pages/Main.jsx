// @flow
import React from "react";
import { Row, Skeleton } from "antd";
import Default from "../layouts/default";
import { PaymentBox, PaddingCol } from "../components";

const Main = () => (
  <Default>
    <Row>
      <PaymentBox />
      <PaddingCol xs={0} lg={4}>
        <PaddingCol style={{ backgroundColor: "#fff" }}>
          <Skeleton paragraph={{ rows: 4 }} active />
        </PaddingCol>
      </PaddingCol>
    </Row>
  </Default>
);

export default Main;
