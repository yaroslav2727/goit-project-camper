import { RotatingTriangles } from "react-loader-spinner";
import { Wrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <Wrapper>
      <RotatingTriangles />
    </Wrapper>
  );
};

export default Loader;
