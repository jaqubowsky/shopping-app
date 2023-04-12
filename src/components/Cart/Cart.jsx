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
      {cartEls.length > 0 && <StyledCartElementsWrapper>{cartEls}</StyledCartElementsWrapper>}
      <StyledButtonWrapper>
        <Button disabled={cartEls <= 0} checkout handleClick={handleCheckout} name="Checkout" />
        <Button close handleClick={handleCloseModal} name="Close" />
      </StyledButtonWrapper>
    </StyledCart>
  );
}

Cart.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleCheckout: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired
};
