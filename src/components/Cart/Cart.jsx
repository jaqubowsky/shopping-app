import PropTypes from "prop-types";
import { StyledCart, ButtonWrapper } from "./Cart.styled";
import Button from "../Button/Button";

export default function Cart({ handleClick, handleCheckout, handleCloseModal }) {
  return (
    <StyledCart onClick={handleClick}>
      <h2>Your shopping cart</h2>
      <ButtonWrapper>
        <Button color="red" handleClick={handleCloseModal} name="Close" />
        <Button color="#ffb840" handleClick={handleCheckout} name="Checkout" />
      </ButtonWrapper>
    </StyledCart>
  );
}

Cart.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleCheckout: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired
};
