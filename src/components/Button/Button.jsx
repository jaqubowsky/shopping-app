import PropTypes from "prop-types";
import StyledButton from "./Button.styled";

export default function Button({ handleClick, name, color }) {
  return (
    <StyledButton onClick={handleClick} color={color}>
      {name}
    </StyledButton>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};
