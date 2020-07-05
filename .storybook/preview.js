import React from "react";
import { addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withPlayroom } from "storybook-addon-playroom";
import GlobalStyle from "../src/styles/global";

addDecorator(withPlayroom);
addDecorator(withA11y);
addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
