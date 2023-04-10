import PropTypes from "prop-types";
import { useCart } from "../../context/CartContext";
import CartProduct from "./CartProduct";
import {
  StyledCart,
  StyledButtonWrapper,
  StyledCartElementsWrapper,
  CartTitle
} from "./Cart.styled";
import Button from "../Button/Button";

export default function Cart({ handleClick, handleCheckout, handleCloseModal }) {
  const { cartItems, addItemQuantity, decreaseItemQuantity } = useCart();

  const cartEls = cartItems.map((product) => (
    <CartProduct
      img={product.image}
      price={product.price}
      title={product.title}
      quantity={product.quantity}
      product={product}
      handleAddQuantity={() => addItemQuantity(product)}
      handleDecreaseQuantity={() => decreaseItemQuantity(product)}
    />
  ));

  return (
    <StyledCart onClick={handleClick}>
      <CartTitle>Your shopping cart</CartTitle>
      <StyledCartElementsWrapper>{cartEls}</StyledCartElementsWrapper>
      <StyledButtonWrapper>
        <Button color="red" handleClick={handleCloseModal} name="Close" />
        <Button color="#ffb840" handleClick={handleCheckout} name="Checkout" />
      </StyledButtonWrapper>
    </StyledCart>
  );
}

Cart.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleCheckout: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired
};
