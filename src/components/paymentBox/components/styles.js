// @flow
import styled from "styled-components";
import { Col, Button } from "antd";
import PaddingCol from "../../paddingCol";
import { responsiveMap } from "../../../theme";

export const StyledColumn = styled(PaddingCol)`
  background-color: ${({ theme }) => theme.colors["red-color"]};
`;

export const CardColumn = styled(Col)`
  position: relative;
  @media${responsiveMap[3]}{
    right: -12px;
  }
  img {
    width: 100%;
    margin-bottom: -1px;
    box-shadow: 0px 10px 15px -11px rgba(0,0,0,0.75);
    z-index: 10;
    position: relative;
  }
  > div,
  >span {
    width: 100%;
    position: absolute;
    text-shadow: 0px 1px 2px #000000b3;
    padding-left: 1.785rem;
    padding-right: 1.785rem;
    display: flex;
    justify-content: space-between;
    z-index: 20;
  }
  > div:nth-child(2) {
    top: 42%;
    letter-spacing: 0.3rem;
    
    > { Typography } {
      width: 100%;
      text-align: center;
    }
  }
  > div:nth-child(3) {
    position: absolute;
    bottom: 15%;
    text-transform: uppercase;
  }
  > span {
    top: 48%;
    left: 42%;
    text-shadow: unset;
    strong {
      color: ${({ theme }) => theme.colors["input-color"]} !important;
    }
  }
`;

export const BackButton = styled(Button)`
  > span:first-child {
    font-size: 1.2rem;
    vertical-align: middle;
    font-weight: bold;
  }
  > span:last-child {
    display: none;
    @media${responsiveMap[3]}{
      display: inline-block
    }
  }
`;
