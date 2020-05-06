import React from "react";
import renderer from "react-test-renderer";
import Typography from "..";

test("Should render Typography", () => {
  const app = renderer.create(<Typography>adasd</Typography>).toJSON();
  expect(app).toMatchSnapshot();
});
