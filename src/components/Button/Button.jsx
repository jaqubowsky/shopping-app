import PropTypes from "prop-types";
import StyledButton from "./Button.styled";

export default function Button({ handleClick, name, checkout, close, quantity }) {
  return (
    <StyledButton close={close} checkout={checkout} quantity={quantity} onClick={handleClick}>
      {name}
    </StyledButton>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  checkout: PropTypes.bool,
  close: PropTypes.bool,
  quantity: PropTypes.bool
};

Button.defaultProps = {
  checkout: false,
  close: false,
  quantity: false
};
