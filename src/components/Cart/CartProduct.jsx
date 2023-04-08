import PropTypes from "prop-types";
import {
  StyledCartProductWrapper,
  StyledDescriptionWrapper,
  StyledQuantityWrapper,
  StyledAddQuantityButton,
  StyledDecreaseQuantityButton,
  StyledImage
} from "./CartProduct.styled";
import truncate from "../../utils";

function CartProduct({ img, title, price, quantity }) {
  return (
    <StyledCartProductWrapper>
      <StyledImage src={img} alt={title} />
      <StyledDescriptionWrapper>
        <h4>{truncate(title, 15)}</h4>
        <span>{`$${price}`}</span>
        <StyledQuantityWrapper>{quantity}</StyledQuantityWrapper>
      </StyledDescriptionWrapper>
    </StyledCartProductWrapper>
  );
}

CartProduct.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number
};

CartProduct.defaultProps = {
  quantity: 0
};

export default CartProduct;
