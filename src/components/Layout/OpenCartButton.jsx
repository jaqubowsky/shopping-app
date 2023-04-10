import PropTypes from "prop-types";
import { StyledCartButton, StyledCartIcon, StyledItemNumber } from "./OpenCartButton.styled";
import { useCart } from "../../context/CartContext";

export default function OpenCartButton({ handleOpenCart }) {
  const { getItemsQuantity } = useCart();

  return (
    <StyledCartButton onClick={handleOpenCart}>
      <StyledCartIcon />
      {getItemsQuantity() > 0 && <StyledItemNumber>{getItemsQuantity()}</StyledItemNumber>}
    </StyledCartButton>
  );
}

OpenCartButton.propTypes = { handleOpenCart: PropTypes.func.isRequired };
