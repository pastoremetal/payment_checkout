// @flow
import styled from "styled-components";
import { Breadcrumb, Button } from "antd";
import { responsiveMap } from "../../theme";

export const StyledBreadCrumb = styled(Breadcrumb)`
  display: none;

  @media${responsiveMap[3]}{
    display: block;
  }
  a {
    > button {
      margin-right: 0.714rem;
    }
  }
  span.ant-breadcrumb-separator {
    color: ${({ theme }) => theme.colors["red-color"]};
  }
`;

export const MinimumVisibleButton = styled(Button)`
  position: absolute;
  text-align: center;
  width: 100%;
  @media${responsiveMap[3]}{
    display: none;
  }
`;
