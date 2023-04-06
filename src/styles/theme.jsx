import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

const theme = {};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node.isRequired
};

export default Theme;
