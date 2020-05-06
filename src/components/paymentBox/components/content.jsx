// @flow
import React from "react";
import { Row } from "antd";
import PaddingCol from "../../paddingCol";
import CreditCardForm from "./creditCardForm";
import PaymentSteps from "../../paymentSteps";

const Content = ({
  formik,
  setIsCvvFocus,
  setIsCompleted,
}: {
  formik: Object,
  setIsCvvFocus: (Boolean) => void,
  setIsCompleted: (Boolean) => void,
}) => (
  <PaddingCol xs={24} lg={14} tPadding={[3.857]} rPadding={[null, null, 4.571]}>
    <Row justify="end">
      <PaddingCol bPadding={[3.928]} hPadding={0}>
        <PaymentSteps />
      </PaddingCol>
      <PaddingCol xs={24} lg={22} hPadding={0}>
        <CreditCardForm
          formik={formik}
          setIsCvvFocus={setIsCvvFocus}
          setIsCompleted={setIsCompleted}
        />
      </PaddingCol>
    </Row>
  </PaddingCol>
);

export default Content;
