import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCart = styled(motion.div)`
  position: absolute;
  right: 0;
  background: ${(props) => props.theme.colors.mainWhite};
  padding: 2.4em;
  height: 100vh;
  z-index: 9999;
  text-align: center;
  overflow: auto;

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 0.8rem;
  }
  @media (min-width: ${({ theme }) => theme.media.laptop}) {
    font-size: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.media.laptopL}) {
    font-size: 1.2rem;
  }
`;

export const StyledCartElementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
  padding: 1em;
`;

export const CartTitle = styled.div`
  font-size: 3em;
  margin-bottom: 1em;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
