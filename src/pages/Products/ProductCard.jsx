import PropTypes from "prop-types";
import { StyledProductCardWrapper, StyledProductImage } from "./ProductCard.styled";
import Button from "../../components/Button/Button";

export default function ProductCard({ name, price, img, handleUpdateCart }) {
  return (
    <StyledProductCardWrapper>
      <StyledProductImage src={img} />
      <h2>{name}</h2>
      <span>${price}</span>
      <Button name="Add to cart" color="black" handleClick={handleUpdateCart} />
    </StyledProductCardWrapper>
  );
}

ProductCard.propTypes = {
  handleUpdateCart: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
};
