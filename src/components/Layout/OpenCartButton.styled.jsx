import styled from "styled-components";
import { IoMdCart } from "react-icons/io";

export const StyledCartIcon = styled(IoMdCart)`
  color: black;
  z-index: 1;
  font-size: 2em;
`;

export const StyledCartButton = styled.button`
  position: relative;
  padding: 1.3rem;
  border-radius: 50%;
  background: white;
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
  color: #252525;
  border-radius: 50%;
  background: #ffb840;
  width: 10px;
  height: 10px;
  padding: 0.9rem;
  font-weight: bolder;
`;
