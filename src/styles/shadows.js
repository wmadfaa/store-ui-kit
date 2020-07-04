import { rgba } from "polished";

import colors from "./colors";

export default {
  light: (color = colors.main["dark-gray"]) => `0px 3px 52px ${rgba(color, 0.06)}`,
  hover: (color = colors.main.gray) => `3px 7px 18px ${rgba(color, 0.083)}`,
  "hover-left": (color = colors.main.gray) => `-10px 5px 18px ${rgba(color, 0.083)}`,
};
