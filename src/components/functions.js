// @flow
// import { responsiveMap } from "./data";
import { responsiveMap } from "../theme";
import { paddingProps } from "./types";

export const mediaParser = ({
  inputVals,
  propName,
}: {
  inputVals: Number | Array<Number>,
  propName: String,
}) => {
  if (inputVals !== undefined && inputVals !== null) {
    if (typeof inputVals === "object") {
      return inputVals
        .map((value, key) => {
          return value !== null
            ? `@media${responsiveMap[key]} {
            ${propName}: ${value}rem;\n
          }\n`
            : "";
        })
        .join("");
    }
    return `${propName}: ${inputVals}rem;\n`;
  }
  return "";
};

export const paddingHandler = ({
  padding,
  vPadding,
  hPadding,
  lPadding,
  rPadding,
  tPadding,
  bPadding,
}: paddingProps) => {
  let style = "";
  style += mediaParser({ inputVals: padding, propName: "padding" });

  style += mediaParser({
    inputVals: lPadding,
    propName: "padding-left",
  });

  style += mediaParser({
    inputVals: rPadding,
    propName: "padding-right",
  });

  style += mediaParser({
    inputVals: tPadding,
    propName: "padding-top",
  });

  style += mediaParser({
    inputVals: bPadding,
    propName: "padding-bottom",
  });

  style += mediaParser({
    inputVals: vPadding,
    propName: "padding-top",
  });

  style += mediaParser({
    inputVals: vPadding,
    propName: "padding-bottom",
  });

  style += mediaParser({
    inputVals: hPadding,
    propName: "padding-left",
  });

  style += mediaParser({
    inputVals: hPadding,
    propName: "padding-right",
  });

  return style;
};
