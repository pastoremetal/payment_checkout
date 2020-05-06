// @flow
import React from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";

type SVGProps = { src: String, width: Number };

const WrappedSVG = ({ src, width, ...props }: SVGProps) => (
  <SVG src={src} {...props} />
);

const StyledSVG = styled(WrappedSVG)`
  width: ${(props) => props.width}rem;
`;

const RefactoredSVG = ({ src, width, ...props }: SVGProps) => (
  <StyledSVG width={width} {...props} src={src} />
);

export { RefactoredSVG as default };
