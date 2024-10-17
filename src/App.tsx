import styled, { keyframes } from "styled-components";
import logo from "./assets/transparent-logo.png";

const LINK =
  "https://chromewebstore.google.com/detail/darkly/efcgeahpfikenbddmbhichciiddnnhbc";

const StyledApp = styled.div`
  width: 100%;
  height: 100dvh;
  background: radial-gradient(
    farthest-corner at 0px 40%,
    #201f26 0%,
    var(--bg) 80%
  );
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    padding: 2rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

const Container = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const mobileTitleAnimation = keyframes`
  0% {
    transform: translateY(-17rem);
  }
  50% {
    transform: translateY(-17rem);
  }
  100% {
    transform: translateY(0);
  }
`;

const titleAnimation = keyframes`
  0% {
    transform: translateX(-17rem);
  }
  50% {
    transform: translateX(-17rem);
  }
  100% {
    transform: translateX(0);
  }
`;

const Title = styled.h1`
  transform: translateX(-17rem);
  font-size: 20rem;
  text-align: center;

  animation: ${titleAnimation} 3s forwards;

  @media (max-width: 900px) {
    font-size: 10rem;
    transform: translateY(-17rem);
    animation: ${mobileTitleAnimation} 3s forwards;
  }
`;

const logoAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
    transform: rotate(0deg) scale(0);
  }
  100% {
    opacity: 1;
    transform: rotate(360deg) scale(1);
  }
`;

const Logo = styled.img`
  width: 30rem;
  height: 30rem;

  animation: ${logoAnimation} 3s forwards;

  @media (max-width: 900px) {
    width: 20rem;
    height: 20rem;
  }
`;

const reveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Subheader = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  opacity: 0;
  transform: translateY(-100%);
  text-align: center;

  animation: ${reveal} 1.5s 3s forwards;

  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
`;

const buttonReveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%) skew(calc(-1 * var(--skew)));
  }
  100% {
    opacity: 1;
    transform: translateY(0) skew(calc(-1 * var(--skew)));
  }
`;

const Button = styled.a`
  --skew: 40deg;

  position: relative;
  height: 3.4rem;
  background: var(--main);
  color: var(--bg);
  width: 23rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;
  background: var(--bg);
  overflow: hidden;
  border: solid 2px var(--main);
  background: rgba(255, 255, 255, 0.05);

  opacity: 0;
  transform: translateY(-100%) skew(calc(-1 * var(--skew)));

  animation: ${buttonReveal} 1.5s 3s forwards;

  @media (max-width: 900px) {
    width: 22rem;
  }
`;

const ButtonText = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
  transform: skew(var(--skew));
  position: relative;
  color: var(--main);
  cursor: pointer;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
`;

const App = () => {
  return (
    <StyledApp>
      <Content>
        <Container>
          <Logo src={logo} alt="logo" />
          <Title>Darkly</Title>
        </Container>
        <Subheader>
          A Chrome extension that lets you apply dark mode to any website.
        </Subheader>
        <Button href={LINK} target="_blank">
          <ButtonText>Download for Chrome</ButtonText>
        </Button>
      </Content>
    </StyledApp>
  );
};

export default App;
