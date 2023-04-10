import PropTypes from "prop-types";
import {
  StyledCartProductWrapper,
  StyledDescriptionWrapper,
  StyledQuantityWrapper,
  StyledImage,
  StyledQuantity,
  StyledPrice
} from "./CartProduct.styled";
import Button from "../Button/Button";
import truncate from "../../utils";

function CartProduct({ img, title, price, quantity, handleAddQuantity, handleDecreaseQuantity }) {
  return (
    <StyledCartProductWrapper>
      <StyledImage src={img} alt={title} />
      <StyledDescriptionWrapper>
        <h3>{truncate(title, 15)}</h3>
        <StyledPrice>{`$${(price * quantity).toFixed(2)}`}</StyledPrice>
        <StyledQuantityWrapper>
          <Button name="-" handleClick={handleDecreaseQuantity} color="grey" />
          <StyledQuantity>{quantity}</StyledQuantity>
          <Button name="+" handleClick={handleAddQuantity} color="grey" />
        </StyledQuantityWrapper>
      </StyledDescriptionWrapper>
    </StyledCartProductWrapper>
  );
}

CartProduct.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  handleAddQuantity: PropTypes.func.isRequired,
  handleDecreaseQuantity: PropTypes.func.isRequired
};

CartProduct.defaultProps = {
  quantity: 0
};

export default CartProduct;
