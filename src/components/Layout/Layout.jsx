import { Outlet } from "react-router-dom";

import {
  StyledHeader,
  StyledLink,
  StyledNav,
  StyledLinksWrapper,
  StyledLogo,
  StyledCartIcon,
  StyledIconWrapper
} from "./Layout.styled";

function Layout() {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledLogo>FakeStore</StyledLogo>
          <StyledLinksWrapper>
            <StyledLink>Home</StyledLink>
            <StyledLink>Products</StyledLink>
            <StyledLink>Contact</StyledLink>
            <StyledIconWrapper>
              <StyledCartIcon />
            </StyledIconWrapper>
          </StyledLinksWrapper>
        </StyledNav>
      </StyledHeader>
      <Outlet />
    </>
  );
}

export default Layout;
