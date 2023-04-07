import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCart = styled(motion.div)`
  position: absolute;
  right: 0;
  background: white;
  width: 20%;
  padding: 2em;
  height: 100vh;
  z-index: 9999;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
