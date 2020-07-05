import React from "react";
import { select, text } from "@storybook/addon-knobs";
import Text from "./Text";

export default {
  title: "Components/Base/Text",
  component: Text,
};

export const Standard = () => <Text>Text Component</Text>;

export const Headings = () => (
  <>
    <Text as="h1" category="h1">
      Category H1
    </Text>
    <Text as="h2" category="h2">
      Category H2
    </Text>
    <Text as="h3" category="h3">
      Category H3
    </Text>
    <Text as="h4" category="h4">
      Category H4
    </Text>
    <Text as="h5" category="h5">
      Category H5
    </Text>
  </>
);

export const Contents = () => (
  <>
    <Text as="p" category="body-large">
      Category body-large <br />
    </Text>
    <Text as="p" category="body">
      Category body <br />
    </Text>
    <Text as="label" category="button">
      Category button <br />
    </Text>
    <Text category="caption1">
      Category caption1 <br />
    </Text>
    <Text category="caption2">
      Category caption2 <br />
    </Text>
    <Text as="del" category="strike-large">
      Category strike-large <br />
    </Text>
    <Text as="del" category="strike-small">
      Category strike-small <br />
    </Text>
  </>
);

export const knobs = () => (
  <Text
    category={select(
      "category",
      [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "body-large",
        "body",
        "button",
        "caption1",
        "caption2",
        "strike-large",
        "strike-small",
      ],
      "body",
      "custom props"
    )}
    color={select(
      "color",
      ["white", "black", "snow", "pale-grey", "light-grey", "grey", "dark-grey"],
      "black",
      "custom props"
    )}
    status={select(
      "status",
      ["default", "disabled", "active", "focused", "error", "success", "warning"],
      undefined,
      "custom props"
    )}
  >
    {text("children", `go to the knobs tab to change my props ;)`)}
  </Text>
);
