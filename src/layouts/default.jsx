// @flow
import React from "react";
import type { Node } from "react";
import { Layout } from "antd";
import TopBar from "./components/topBar";
import { StyledContent } from "./styles";

const Default = ({ children }: { children: Node }) => (
  <Layout>
    <TopBar />
    <StyledContent>{children}</StyledContent>
  </Layout>
);

export default Default;
