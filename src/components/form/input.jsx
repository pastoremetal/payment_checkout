// @flow
import React, { useState } from "react";
import { Input } from "antd";
import type { InputProps } from "./types";

const RefactoredInput = ({ labelText, id, ...props }: InputProps) => {
  const [hasValue, setHasValue] = useState(false);
  return (
    <React.Fragment>
      <Input
        id={id}
        {...props}
        onChange={(e) => {
          setHasValue(e.target.value !== undefined);
          props.onChange(e);
        }}
      />
      <label htmlFor={id} className={hasValue ? "hasValue" : ""}>
        {labelText}
      </label>
    </React.Fragment>
  );
};

export { RefactoredInput as default };
