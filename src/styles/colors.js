const MAIN_COLORS = {
  primary: "#595CFF",
  secondary: "#8C8EFF",
  "primary-dark": "#383BE4",
};

const UI_COLORS = {
  positive: "#00CB6F",
  warning: "#FFBC2C",
  negative: "#EE7764",
  active: MAIN_COLORS.primary,
};

const NEUTRAL_COLORS = {
  white: "#FFFFFF",
  black: "#000000",
  snow: "#F9F9FB",
  "pale-grey": "#F0F0F5",
  "light-grey": "#E6E6EB",
  grey: "#AFB1BD",
  "dark-grey": "#82828B",
};

const STATE_COLORS = {
  default: NEUTRAL_COLORS["light-grey"],
  disabled: NEUTRAL_COLORS["pale-grey"],
  active: UI_COLORS.active,
  focused: NEUTRAL_COLORS.black,
  error: UI_COLORS.negative,
  success: UI_COLORS.positive,
  warning: UI_COLORS.warning,
};

export default { main: MAIN_COLORS, ui: UI_COLORS, neutral: NEUTRAL_COLORS, state: STATE_COLORS };
