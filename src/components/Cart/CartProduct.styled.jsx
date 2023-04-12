import styled from "styled-components";

export const StyledCartProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  margin: 0 auto 3em auto;
`;

export const StyledDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 50%;
`;

export const StyledImage = styled.img`
  width: 100px;
`;

export const StyledQuantity = styled.span`
  font-size: 1.1rem;
  font-weight: bolder;
  color: ${(props) => props.theme.colors.mainNav};
`;

export const StyledPrice = styled.h4`
  color: ${(props) => props.theme.colors.mainNav};
`;

export const StyledQuantityWrapper = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
`;
