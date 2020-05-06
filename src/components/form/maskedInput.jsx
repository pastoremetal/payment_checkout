// @flow
import React, { useState } from "react";
import MaskedInput from "antd-mask-input";
import type { InputProps } from "./types";

const RefactoredMaskedInput = ({
  labelText,
  id,
  mask,
  onChange,
  ...props
}: InputProps & { mask: String }) => {
  const [hasValue, setHasValue] = useState(false);
  return (
    <React.Fragment>
      <MaskedInput
        mask={mask}
        placeholder=""
        id={id}
        {...props}
        onChange={(e) => {
          setHasValue(e.target.value !== undefined && e.target.value !== "");
          onChange(e);
        }}
      />
      <label htmlFor={id} className={hasValue ? "hasValue" : ""}>
        {labelText}
      </label>
    </React.Fragment>
  );
};

export { RefactoredMaskedInput as default };
