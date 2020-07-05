import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Text from "./Text";
import { colors } from "../../styles";

describe("Text Component", () => {
  it("changes font-size according to the category prop", () => {
    const tree = renderer.create(<Text category="h1" />).toJSON();
    expect(tree).toHaveStyleRule("font-size", "32px");
  });
  it("changes color according to the color prop", () => {
    const tree = renderer.create(<Text color="snow" />).toJSON();
    expect(tree).toHaveStyleRule("color", colors.neutral.snow);
  });
  it("changes color according to the status prop", () => {
    const tree = renderer.create(<Text status="success" />).toJSON();
    expect(tree).toHaveStyleRule("color", colors.state.success);
  });
});
