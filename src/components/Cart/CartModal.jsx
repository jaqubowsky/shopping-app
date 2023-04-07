import PropTypes from "prop-types";
import { AnimatePresence } from "framer-motion";
import Cart from "./Cart";
import StyledCartModalBackground from "./CartModal.styled";

export default function CartModal({ isOpen, handleOpenCart }) {
  const backgroundVariants = {
    initial: {
      opacity: 0,
      x: 2000
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        stiffness: 100
      }
    },
    exit: {
      x: 2000,
      opacity: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <StyledCartModalBackground
          variants={backgroundVariants}
          animate="animate"
          initial="initial"
          exit="exit"
          onClick={handleOpenCart}>
          <Cart
            handleClick={(e) => e.stopPropagation()}
            handleCloseModal={handleOpenCart}
            handleCheckout={() => {}}
          />
        </StyledCartModalBackground>
      )}
    </AnimatePresence>
  );
}

CartModal.propTypes = {
  handleOpenCart: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};
