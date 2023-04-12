import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background: ${(props) => props.theme.colors.mainNav};
  color: white;
  border: none;
  border-radius: 20px;
  font-family: Karla, sans-serif;
  width: 100%;
  font-size: 1.2rem;
  padding: 0.5em 0;
  margin: 0.5em 0;
  cursor: pointer;

  ${({ checkout }) =>
    checkout
      ? css`
          background: ${(props) => props.theme.colors.mainYellow};

          &:hover {
            background: ${(props) => props.theme.colors.mainYellowHover};
          }
        `
      : css`
          &:hover {
            background: ${(props) => props.theme.colors.mainHover};
          }
        `}
  ${({ close }) =>
    close &&
    css`
      background: ${(props) => props.theme.colors.mainRed};

      &:hover {
        background: ${(props) => props.theme.colors.mainRedHover};
      }
    `}
  ${({ quantity }) =>
    quantity &&
    css`
      background: ${(props) => props.theme.colors.mainGrey};

      &:hover {
        background: ${(props) => props.theme.colors.mainGreyHover};
      }
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      background: ${(props) => props.theme.colors.mainGrey};

      &:hover {
        background: ${(props) => props.theme.colors.mainGreyHover};
      }
    `}
  &:active {
    transform: translateY(1px);
  }

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 0.8rem;
  }
  @media (min-width: ${({ theme }) => theme.media.laptop}) {
    font-size: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.media.laptopL}) {
    font-size: 1.2em;
  }
`;

export default StyledButton;
