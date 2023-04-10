import styled from "styled-components";
import { motion } from "framer-motion";

const StyledButton = styled(motion.button)`
  background: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 20px;
  font-family: Karla, sans-serif;
  width: 100%;
  font-size: 1.2rem;
  padding: 0.5em 0;
  margin: 0.5em 0;
  cursor: pointer;
`;

export default StyledButton;
