import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.colors.mainNav};
  padding: 0.875em;
`;

export const StyledLink = styled(NavLink)`
  margin: auto 0;
  color: ${(props) => props.theme.colors.mainWhite};
  font-size: 2rem;
  text-decoration: none;

  &.active {
    font-weight: bold;
    text-decoration: underline;
    color: ${(props) => props.theme.colors.mainYellow};
  }

  &:hover {
    color: ${(props) => props.theme.colors.mainYellow};
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const StyledLogo = styled(Link)`
  font-size: 4rem;
  font-weight: bolder;
  color: ${(props) => props.theme.colors.mainYellow};
  text-decoration: none;
`;

export const StyledLinksWrapper = styled.div`
  display: flex;

  & > * {
    margin: auto 2rem;
  }
`;

export const StyledMain = styled.main`
  margin: 0 auto;
  width: 80%;
  text-align: center;
`;
