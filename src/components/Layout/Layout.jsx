import { Outlet } from "react-router-dom";

import {
  StyledHeader,
  StyledLink,
  StyledNav,
  StyledLinksWrapper,
  StyledLogo
} from "./Layout.styled";
import CartButton from "../Cart/CartButton.jsx";

function Layout() {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledLogo to=".">FakeStore</StyledLogo>
          <StyledLinksWrapper>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="products">Products</StyledLink>
            <StyledLink to="contact">Contact</StyledLink>
            <CartButton />
          </StyledLinksWrapper>
        </StyledNav>
      </StyledHeader>
      <Outlet />
    </>
  );
}

export default Layout;
