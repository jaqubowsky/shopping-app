import PropTypes from "prop-types";
import { useContext } from "react";
import CartProduct from "./CartProduct";
import { StyledCart, StyledButtonWrapper, StyledCartElementsWrapper } from "./Cart.styled";
import CartContext from "./CartContext";
import Button from "../Button/Button";

export default function Cart({ handleClick, handleCheckout, handleCloseModal }) {
  const { cartItems } = useContext(CartContext);

  const cartEls = cartItems.map((product) => (
    <CartProduct img={product.image} price={product.price} title={product.title} />
  ));

  return (
    <StyledCart onClick={handleClick}>
      <h2>Your shopping cart</h2>
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
