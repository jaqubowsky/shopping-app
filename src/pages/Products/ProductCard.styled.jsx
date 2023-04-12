import styled from "styled-components";

export const StyledProductCardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.mainBorder};
  font-size: 0.8rem;
  text-align: left;

  @media (min-width: ${({ theme }) => theme.media.laptop}) {
    font-size: 0.8rem;
  }

  @media (min-width: ${({ theme }) => theme.media.laptopL}) {
    font-size: 1rem;
  }
`;

export const StyledPrice = styled.span`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.mainPrice};
`;

export const StyledUtils = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2em;
  gap: 1.2em;
  justify-content: space-between;
  height: 45%;
  width: 100%;
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

export const StyledProductImage = styled.img`
  height: 100%;
  margin: 0 auto;
`;

export const StyledProductImageContainer = styled.div`
  height: 25em;
  padding: 3rem;
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainBorder};
`;
