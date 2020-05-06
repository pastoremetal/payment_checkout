// @flow
import React, { useState } from "react";
import { Col, Row } from "antd";
import { useFormik } from "formik";
import LeftColumn from "./components/leftColumn";
import Content from "./components/content";

const PaymentBox = () => {
  const [isCvvFocus, setIsCvvFocus] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const formik = useFormik({
    initialValues: {
      card_number: null,
      card_name: null,
      card_validity: null,
      card_cvv: null,
      card_installments: null,
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Col xs={24} lg={20} style={{ backgroundColor: "#fff" }}>
      <Row>
        <LeftColumn
          formik={formik}
          isCvvFocus={isCvvFocus}
          isCompleted={isCompleted}
        />
        <Content
          formik={formik}
          setIsCvvFocus={setIsCvvFocus}
          setIsCompleted={setIsCompleted}
        />
      </Row>
    </Col>
  );
};

export default PaymentBox;
