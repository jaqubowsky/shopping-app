import styled from "styled-components";
import { motion } from "framer-motion";

const StyledCartModalBackground = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 9998;
  background: ${(props) => props.theme.colors.mainModal};
`;

export default StyledCartModalBackground;
