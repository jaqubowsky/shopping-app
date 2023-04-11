import styled from "styled-components";
import { IoMdCart } from "react-icons/io";

export const StyledCartIcon = styled(IoMdCart)`
  color: ${(props) => props.theme.colors.mainNav};
  z-index: 1;
  font-size: 2em;
`;

export const StyledCartButton = styled.button`
  position: relative;
  padding: 1.3rem;
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
  left: 0;
  bottom: 0.1px;
  color: ${(props) => props.theme.colors.mainNav};
  border-radius: 50%;
  background: ${(props) => props.theme.colors.mainYellow};
  width: 10px;
  height: 10px;
  padding: 0.9rem;
  font-weight: bolder;
`;
