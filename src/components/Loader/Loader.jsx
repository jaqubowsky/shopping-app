import { Oval } from "react-loader-spinner";
import StyledLoaderWrapper from "./Loader.styled";

function Loader() {
  return (
    <StyledLoaderWrapper>
      <Oval
        ariaLabel="loading-indicator"
        height={200}
        width={200}
        strokeWidth={1}
        strokeWidthSecondary={2}
        color="#ffb840"
        secondaryColor="white"
      />
    </StyledLoaderWrapper>
  );
}

export default Loader;
