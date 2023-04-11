import styled, { css } from "styled-components";

export const StyledProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 30%));
  gap: 4rem;
  margin: 4rem auto;
`;

export const StyledCategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  margin: 3em auto;
`;
export const StyledCategory = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: none;
  border: 1px solid black;
  border-left: none;
  border-top: none;
  border-right: none;
  border-radius: 0 0 1px 1px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.colors.mainYellow};
    transform: scale(1.02);
    font-size: 110%;
  }

  ${(props) =>
    props.isActive &&
    css`
      border-bottom: 2px solid ${(props) => props.theme.colors.mainYellow};
      transform: scale(1.02);
      font-size: 110%;
    `}
`;
