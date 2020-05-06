// @flow
import { Layout } from "antd";
import { grey } from "@ant-design/colors";
import styled from "styled-components";
import { responsiveMap } from "../theme";

const { Header, Content } = Layout;

export const StyledPageHeader = styled(Header)`
  border-bottom: 0.5px solid ${grey[2]};
  background-color: #fff;
  height: auto;
  padding: 25px 15px;

  > div {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }

  img {
    width: 260px;
    vertical-align: middle;
  }

  @media${responsiveMap[3]} {
    padding-left: 50px;
    padding-right: 50px;

    > div > div:first-child {
      text-align: left;
    }

    > div > div:last-child {
      text-align: right;
    }
  }
`;

export const StyledContent = styled(Content)`
  @media${responsiveMap[3]} {
    padding: 65px 50px;
  }
`;
