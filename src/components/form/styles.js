// @flow
import { Form } from "antd";
import styled from "styled-components";

export const StyledFormItem = styled(Form.Item)`
  margin-top: 24px;
  input,
  div.ant-select-selector {
    z-index: 11;
    background-color: transparent !important;
    color: #3c3c3c;
    border-top-color: transparent !important;
    border-top-color: transparent !important;
    border-right-color: transparent !important;
    border-left-color: transparent !important;
    padding-left: 0 !important;
  }

  div.ant-select-selector {
    border-width: 0 !important;
    border-bottom-width: 1px !important;
  }

  label,
  input {
    font-size: ${({ theme }) => theme["font-size"].input};
  }

  label {
    color: #bfbfbf;
    position: absolute;
    width: 100%;
    left: 0;
    z-index: 10;
    padding: 4px 11px 4px 0;
    cursor: text;
    &::before,
    &::after {
      display: none;
    }
  }

  input:focus + label,
  div.ant-select.ant-select-focused + label,
  label.hasValue {
    top: -65%;
    padding-bottom: 0;
    line-height: 1;
    font-size: ${({ theme }) => theme["font-size"]["input-legend"]};
  }
`;
