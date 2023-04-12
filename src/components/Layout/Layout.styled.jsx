import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.colors.mainNav};
  padding: 0.8em 0.2em;
  z-index: 9998;
`;

export const StyledLink = styled(NavLink)`
  margin: auto 0;
  color: ${(props) => props.theme.colors.mainWhite};
  font-size: 2em;
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
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  font-size: 0.6rem;

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 0.75rem;
  }

  @media (min-width: ${({ theme }) => theme.media.laptop}) {
    flex-direction: row;
  }

  @media (min-width: ${({ theme }) => theme.media.laptopL}) {
    font-size: 1rem;
  }
`;

export const StyledLogo = styled(Link)`
  font-size: 5em;
  font-weight: bolder;
  color: ${(props) => props.theme.colors.mainYellow};
  text-decoration: none;
`;

export const StyledLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;

  @media (min-width: ${({ theme }) => theme.media.laptop}) {
    display: flex;
    width: 50%;
  }
`;

export const StyledMain = styled.main`
  margin: 0 auto;
  width: 80%;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.media.laptop}) {
    font-size: 1.3rem;
  }
`;
