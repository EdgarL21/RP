import { Wrapper } from "./Selfie.styles";

const Selfie = () => {
  return (
    <Wrapper>
      <div className="selfie-background">
        <img className="selfie" src="./public/images/selfie.jpg" alt="selfie" />
      </div>
    </Wrapper>
  );
};

export default Selfie;
