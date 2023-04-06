import PropTypes from "prop-types";
import { StyledCartButton, StyledCartIcon } from "./CartButton.styled";

export default function CartButton({ handleClick }) {
  return (
    <StyledCartButton onClick={handleClick}>
      <StyledCartIcon />
    </StyledCartButton>
  );
}

CartButton.propTypes = { handleClick: PropTypes.func.isRequired };
