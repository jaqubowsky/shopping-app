import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCart = styled(motion.div)`
  position: absolute;
  right: 0;
  background: white;
  width: 700px;
  max-width: 30%;
  padding: 2em;
  height: 100vh;
  z-index: 9999;
  text-align: center;
`;

export const StyledCartElementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
