// @flow

export type FormItemProps = {
  children: Node,
  label: String,
};

export type InputProps = {
  labelText: String,
  id: String,
  onChange?: (Object) => void,
};

export type SelectProps = {
  children: Node,
} & InputProps;
