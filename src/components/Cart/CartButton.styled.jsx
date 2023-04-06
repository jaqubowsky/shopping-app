import styled from "styled-components";
import {IoMdCart} from "react-icons/io";

export const StyledCartIcon = styled(IoMdCart)`
  color: black;
  z-index: 1;
  font-size: 2em;
`;

export const StyledCartButton = styled.button`
  padding: 1.3rem;
  border-radius: 50%;
  background: white;
  cursor: pointer;
`;