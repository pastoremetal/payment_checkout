// @flow
import React from "react";
import styled from "styled-components";
import { Col } from "antd";
import { paddingHandler } from "../functions";
import type { paddingColProps } from "./types";

const defaultProps = {
  padding: null,
  vPadding: null,
  hPadding: 1.071,
};

const WrappedCol = ({
  children,
  padding,
  vPadding,
  hPadding,
  lPadding,
  rPadding,
  tPadding,
  bPadding,
  ...props
}: paddingColProps) => <Col {...props}>{children}</Col>;

const StyledCol = styled(WrappedCol)`
  ${(props) => {
    const tst = paddingHandler({
      padding: props.padding,
      vPadding: props.vPadding,
      hPadding: props.hPadding,
      lPadding: props.lPadding,
      rPadding: props.rPadding,
      tPadding: props.tPadding,
      bPadding: props.bPadding,
    });
    return tst;
  }};
`;

const PaddingCol = ({
  children,
  padding,
  vPadding,
  hPadding,
  lPadding,
  rPadding,
  tPadding,
  bPadding,
  ...props
}: paddingColProps) => (
  <StyledCol
    {...props}
    padding={padding}
    vPadding={vPadding}
    hPadding={hPadding}
    lPadding={lPadding}
    rPadding={rPadding}
    tPadding={tPadding}
    bPadding={bPadding}
  >
    {children}
  </StyledCol>
);

WrappedCol.defaultProps = defaultProps;
PaddingCol.defaultProps = defaultProps;

export default PaddingCol;
