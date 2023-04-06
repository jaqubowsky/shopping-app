import styled from "styled-components";
import { IoMdCart } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  background: #060606;
  padding: 2em;
`;

export const StyledLink = styled(NavLink)`
  margin: auto 0;
  color: white;
  font-size: 2rem;
  text-decoration: none;
`;

export const StyledCartIcon = styled(IoMdCart)`
  color: black;
  z-index: 1;
  font-size: 2em;
`;

export const StyledIconWrapper = styled.div`
  padding: 1.3rem;
  border-radius: 50%;
  background: white;
  cursor: pointer;
`;

export const StyledLogo = styled(Link)`
  font-size: 4rem;
  font-weight: bolder;
  color: #ffb840;
  text-decoration: none;
`;

export const StyledNav = styled.nav`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const StyledLinksWrapper = styled.div`
  display: flex;

  & > * {
    margin: auto 2rem;
  }
`;
