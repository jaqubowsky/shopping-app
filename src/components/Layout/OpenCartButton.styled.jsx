import styled from "styled-components";
import { IoMdCart } from "react-icons/io";

export const StyledCartIcon = styled(IoMdCart)`
  color: ${(props) => props.theme.colors.mainNav};
  z-index: 1;
  font-size: 2em;
`;

export const StyledCartButton = styled.button`
  position: relative;
  padding: 2em;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.mainWhite};
  cursor: pointer;
  border: none;
`;

export const StyledItemNumber = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -5px;
  bottom: -5px;
  color: ${(props) => props.theme.colors.mainNav};
  border-radius: 50%;
  background: ${(props) => props.theme.colors.mainYellow};
  padding: 0.3em 0.8em;
  font-weight: bolder;
  font-size: 0.8rem;

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 1rem;
  }
  @media (min-width: ${({ theme }) => theme.media.laptop}) {
    font-size: 1.1rem;
  }

  @media (min-width: ${({ theme }) => theme.media.laptopL}) {
    font-size: 1.2rem;
  }
`;
