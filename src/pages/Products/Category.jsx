import { StyledCategory } from "./Products.styled";

export default function Category({ handleClick, name, isActive }) {
  return (
    <StyledCategory isActive={isActive} onClick={handleClick}>
      {name}
    </StyledCategory>
  );
}
