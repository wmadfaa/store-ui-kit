import styled from "styled-components";
import propTypes from "prop-types";
import { typography, colors } from "../../styles";

const Text = styled.span`
  ${(props) => typography[props.category]}
  color: ${(props) => colors.neutral[props.color]};
  ${(props) => props.status && `color: ${colors.state[props.status]}`};
`;

Text.propTypes = {
  category: propTypes.oneOf([
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
  ]),
  color: propTypes.oneOf(["white", "black", "snow", "pale-grey", "light-grey", "grey", "dark-grey"]),
  status: propTypes.oneOf(["default", "disabled", "active", "focused", "error", "success", "warning"]),
};

Text.defaultProps = {
  category: "body",
  color: "black",
};

export default Text;
