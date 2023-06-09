import { Outlet } from "react-router-dom";
import { useState } from "react";
import {
  StyledHeader,
  StyledLink,
  StyledNav,
  StyledLinksWrapper,
  StyledLogo,
  StyledMain
} from "./Layout.styled";
import OpenCartButton from "./OpenCartButton";
import CartModal from "../Cart/CartModal";

function Layout() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledLogo to=".">FakeStore</StyledLogo>
          <StyledLinksWrapper>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="products">Products</StyledLink>
            <StyledLink to="contact">Contact</StyledLink>
            <OpenCartButton handleOpenCart={openCart} />
          </StyledLinksWrapper>
        </StyledNav>
      </StyledHeader>
      <StyledMain>
        <Outlet />
      </StyledMain>
      <CartModal isOpen={isCartOpen} handleOpenCart={openCart} />
    </>
  );
}

export default Layout;
