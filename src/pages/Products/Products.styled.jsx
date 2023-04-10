import styled from "styled-components";

const StyledProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 30%));
  gap: 4rem;
  width: 80%;
  margin: 4rem auto;
`;

export default StyledProductsWrapper;
