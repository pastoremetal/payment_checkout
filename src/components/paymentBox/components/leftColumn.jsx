// @flow
import React from "react";
import { Row, Col } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import SVG from "../../SVG";
import Typography from "../../Typography";
import Card from "../../../../public/card.svg";
import CardFrontEmpty from "../../../../public/cardFrontEmpty.png";
import CardBack from "../../../../public/cardBack.png";
import CardFrontFilled from "../../../../public/cardFrontFilled.png";
import PaddingCol from "../../paddingCol";
import { PaymentStepsMinimized } from "../../paymentSteps";
import { StyledColumn, CardColumn, BackButton } from "./styles";

function cardNumberParse(number: String) {
  if (number !== null && number.length > 0) {
    const num = number.replace(/[_]/gi, "*");
    return num.split(" ");
  }
  return null;
}

function fillCard(number: String) {
  const numberAr = cardNumberParse(number);
  const wrNum = numberAr !== null ? numberAr : ["****", "****", "****", "****"];
  const retNum = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const i of Array(4).keys()) {
    retNum.push(
      <Typography textType="text" rank={4} key={i}>
        {wrNum[i]}
      </Typography>
    );
  }
  return retNum;
}

const LeftColumn = ({
  formik,
  isCvvFocus,
  isCompleted,
}: {
  formik: Object,
  isCvvFocus: Boolean,
  isCompleted: Boolean,
}) => {
  const { values } = formik;
  return (
    <PaddingCol xs={24} lg={10} hPadding={0} style={{ overflow: "hidden" }}>
      <StyledColumn
        xs={24}
        lg={20}
        lPadding={[null, null, 4.571]}
        tPadding={[2.857, null, 3.857]}
      >
        <Row>
          <StyledColumn xs={24} bPadding={[2.142, null, 3.928]} hPadding={[0]}>
            <Row>
              <BackButton
                type="link"
                icon={<LeftOutlined />}
                style={{ color: "#fff", paddingLeft: 0 }}
              >
                <span>Alterar forma de pagamento</span>
              </BackButton>
              <PaymentStepsMinimized />
            </Row>
          </StyledColumn>
          <PaddingCol bPadding={2.142} hPadding={[0, null, 0]}>
            <Row style={{ flexWrap: "nowrap" }} align="middle">
              <Col xs={1} lg={0} offset={1} />
              <Col>
                <SVG src={Card} width={3.571} />
              </Col>
              <PaddingCol rPadding={[0]}>
                <Typography rank={4} lineHeight={1} strong>
                  Adicione um novo cartão de crédito
                </Typography>
              </PaddingCol>
              <Col xs={1} lg={0} />
            </Row>
          </PaddingCol>
        </Row>
      </StyledColumn>
      <StyledColumn
        xs={24}
        lg={23}
        lPadding={[null, null, 3.8]}
        rPadding={[null, null, 0]}
      >
        <Row>
          <CardColumn>
            {!isCvvFocus ? (
              <React.Fragment>
                <img
                  src={!isCompleted ? CardFrontEmpty : CardFrontFilled}
                  alt="cartão"
                />
                <div>{fillCard(values.card_number)}</div>
                <div>
                  <Typography textType="text" rank={5}>
                    {values.card_name && values.card_name !== ""
                      ? values.card_name
                      : "Nome do titular"}
                  </Typography>
                  <Typography textType="text" rank={5}>
                    {values.card_validity && values.card_validity !== ""
                      ? values.card_validity
                      : "0/0"}
                  </Typography>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <img src={CardBack} alt="cartão" />
                <span>
                  <Typography textType="text" rank={5}>
                    {values.card_cvv && values.card_cvv !== ""
                      ? values.card_cvv.replace(/[_]/gi, "*")
                      : "***"}
                  </Typography>
                </span>
              </React.Fragment>
            )}
          </CardColumn>
        </Row>
      </StyledColumn>
      <StyledColumn
        xs={24}
        lg={20}
        tPadding={[3.857]}
        style={{ height: "100%" }}
      />
    </PaddingCol>
  );
};
export default LeftColumn;
