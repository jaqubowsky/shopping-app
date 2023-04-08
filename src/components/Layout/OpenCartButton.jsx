import PropTypes from "prop-types";
import { StyledCartButton, StyledCartIcon } from "./OpenCartButton.styled.jsx";

export default function OpenCartButton({ handleOpenCart }) {
  return (
    <StyledCartButton onClick={handleOpenCart}>
      <StyledCartIcon />
    </StyledCartButton>
  );
}

OpenCartButton.propTypes = { handleOpenCart: PropTypes.func.isRequired };
