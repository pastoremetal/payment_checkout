// @flow
import React from "react";
import { Col, Row, Button, Form } from "antd";
import { FormItem, Input, Select, Option, MaskedInput } from "../../form";
import Typography from "../../Typography";

const getInstallments = () => {
  const installments = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const i of Array(5).keys()) {
    installments.push(
      <Option value={i} key={i}>
        {`${i + 1} parcela${i > 0 ? "s" : ""}`}
      </Option>
    );
  }
  return installments;
};

const CreditCardForm = ({
  formik,
  setIsCvvFocus,
  setIsCompleted,
}: {
  formik: Object,
  setIsCvvFocus: (Boolean) => void,
  setIsCompleted: (Boolean) => void,
}) => (
  <Form
    name="credit_card"
    onValuesChange={(vals) => formik.setValues({ ...formik.values, ...vals })}
  >
    <Row gutter={{ xs: 15, lg: 15 }}>
      <Col xs={24}>
        <FormItem
          label="Número do cartão"
          name="card_number"
          rules={[{ required: true, message: "Número de cartão inválido" }]}
        >
          <MaskedInput mask="1111 1111 1111 1111" />
        </FormItem>
      </Col>
      <Col xs={24}>
        <FormItem
          label="Nome (igual ao cartão)"
          name="card_name"
          rules={[{ required: true, message: "Insira seu nome completo" }]}
        >
          <Input />
        </FormItem>
      </Col>
      <Col xs={24} lg={12}>
        <FormItem
          label="Validade"
          name="card_validity"
          rules={[{ required: true, message: "Data inválida" }]}
        >
          <MaskedInput mask="11/11" />
        </FormItem>
      </Col>
      <Col xs={24} lg={12}>
        <FormItem
          label="CVV"
          name="card_cvv"
          rules={[{ required: true, message: "Código inválido" }]}
        >
          <MaskedInput
            mask="111"
            onFocus={() => setIsCvvFocus(true)}
            onBlur={() => setIsCvvFocus(false)}
          />
        </FormItem>
      </Col>
      <Col xs={24}>
        <FormItem
          label="Número de parcelas"
          name="card_installments"
          rules={[
            {
              required: true,
              message: "Insira o número de parcelas",
            },
          ]}
        >
          <Select>{getInstallments()}</Select>
        </FormItem>
      </Col>
    </Row>
    <Row justify="end" style={{ marginTop: "2.857rem" }}>
      <Col xs={24} lg={12}>
        <Form.Item>
          <Button
            onClick={() => setIsCompleted(true)}
            htmlType="submit"
            type="primary"
            shape="round"
            size="large"
            danger
            style={{ width: "100%" }}
          >
            <Typography rank={5} strong>
              CONTINUAR
            </Typography>
          </Button>
        </Form.Item>
      </Col>
    </Row>
  </Form>
);

export default CreditCardForm;
