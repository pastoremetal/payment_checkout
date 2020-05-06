// @flow
import React from "react";
import { Typography } from "antd";
import styled from "styled-components";
import { RefactoredTypographyProps } from "./types";

const textTypes = {
  text: Typography.Text,
  title: Typography.Title,
  Paragraph: Typography.Paragraph,
};

const WrappedTypography = ({
  children,
  textType,
  color,
  rank,
  lineHeight,
  strong,
  ...props
}: { strong: Boolean } & RefactoredTypographyProps) => {
  const Component = textTypes[textType];
  return (
    <Component strong {...props}>
      {children}
    </Component>
  );
};

const StyledWrapped = styled(WrappedTypography)`
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) => props.lineHeight && `line-height: ${props.lineHeight}`};
  font-size: ${(props) =>
    props.rank
      ? props.theme["font-size"][`heading-${props.rank}`]
      : props.theme["font-size"]["heading-1"]};
`;

const RefactoredTypography = ({
  children,
  textType,
  color,
  rank,
  lineHeight,
  ...props
}: RefactoredTypographyProps) => {
  return (
    <StyledWrapped
      textType={textType}
      color={color}
      rank={rank}
      lineHeight={lineHeight}
      {...props}
    >
      {children}
    </StyledWrapped>
  );
};

const props = {
  color: null,
  rank: 1,
  textType: "text",
  lineHeight: null,
};

WrappedTypography.defaultProps = props;
RefactoredTypography.defaultProps = props;

export { RefactoredTypography as default };
