// @flow
import { createGlobalStyle } from "styled-components";

export const responsiveMap = [
  "(min-width: 0px)",
  "(min-width: 576px)",
  "(min-width: 768px)",
  "(min-width: 992px)",
  "(min-width: 1200px)",
  "(min-width: 1600px)",
];

const themeObj = {
  main: {
    colors: {
      "red-color": "#DE4B4B",
      "input-color": "#3c3c3c",
    },
    "font-size": {
      "heading-1": "2.71rem",
      "heading-2": "2.14rem",
      "heading-3": "1.71rem",
      "heading-4": "1.42rem",
      "heading-5": "1rem",
      input: "1.214rem",
      "input-legend": "1rem",
    },
  },
};

export { themeObj as theme };

export const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
      background-color: #f7f7f7;
      font-size: 14px;
  }

  div.ant-select-item-option {
    color: ${({ theme }) => theme.colors["input-color"]};
  }
  
  .ant-btn-round {
    border-radius: 10px !important;
  }
`;
