// @flow
import React from "react";
import type { FormItemProps } from "./types";
import { StyledFormItem } from "./styles";

const RefactoredFormItem = ({ children, label, ...props }: FormItemProps) => (
  <StyledFormItem {...props}>
    {React.cloneElement(children, { labelText: label })}
  </StyledFormItem>
);

export { RefactoredFormItem as default };
