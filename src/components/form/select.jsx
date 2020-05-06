// @flow
import React, { useState } from "react";
import { Select } from "antd";
import type { SelectProps } from "./types";

const RefactoredInput = ({
  children,
  labelText,
  id,
  onChange,
  ...props
}: SelectProps) => {
  const [hasValue, setHasValue] = useState(false);
  return (
    <React.Fragment>
      <Select
        value="1"
        size="large"
        id={id}
        {...props}
        onChange={(e) => {
          onChange(e);
          setHasValue(e !== undefined && e !== "");
        }}
      >
        {children}
      </Select>
      <label htmlFor={id} className={hasValue ? "hasValue" : ""}>
        {labelText}
      </label>
    </React.Fragment>
  );
};

export const { Option } = Select;

export { RefactoredInput as default };
