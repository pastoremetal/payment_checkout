// @flow
import type { Node } from "react";
import { paddingProps } from "../types";

type componentProp = {
  children: Node,
};

export type paddingColProps = componentProp & paddingProps;
