import styled from "styled-components";

export const StyledCartProductWrapper = styled.div`
  display: flex;
  gap: 3em;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  width: 90%;
  margin: 0 auto 3em auto;
`;

export const StyledDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 0.5em;
`;

export const StyledImage = styled.img`
  width: 100px;
  height: 100%;
`;

export const StyledQuantity = styled.span`
  font-size: 1.1rem;
  font-weight: bolder;
  color: #222222;
`;

export const StyledPrice = styled.h4`
  color: #222222;
`;

export const StyledQuantityWrapper = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
`;
