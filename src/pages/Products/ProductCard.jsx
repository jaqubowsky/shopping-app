import PropTypes from "prop-types";
import {
  StyledProductCardWrapper,
  StyledProductImage,
  StyledPrice,
  StyledUtils,
  StyledDescription,
  StyledProductImageContainer
} from "./ProductCard.styled";
import Button from "../../components/Button/Button";

export default function ProductCard({ name, price, img, handleUpdateCart }) {
  return (
    <StyledProductCardWrapper>
      <StyledProductImageContainer>
        <StyledProductImage src={img} />
      </StyledProductImageContainer>
      <StyledUtils>
        <StyledDescription>
          <h2>{name}</h2>
          <StyledPrice>${price}</StyledPrice>
        </StyledDescription>
        <Button name="Add to cart" handleClick={handleUpdateCart} />
      </StyledUtils>
    </StyledProductCardWrapper>
  );
}

ProductCard.propTypes = {
  handleUpdateCart: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
};
