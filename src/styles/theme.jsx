import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mainNav: "#252525",
    mainModal: "#25252567",
    mainYellow: "#ffb840",
    mainYellowHover: "#FFB840DD",
    mainWhite: "#FBFAF5",
    mainGrey: "#828282",
    mainGreyHover: "#828282BB",
    mainRed: "#ff2e2e",
    mainRedHover: "#FF2E2EE5",
    mainBorder: "E5E5E5FF",
    mainHover: "#252525e4"
  }
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node.isRequired
};

export default Theme;
