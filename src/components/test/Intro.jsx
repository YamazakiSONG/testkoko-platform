import IntroButtonGroup from './IntroButtonGroup';
import GoToHomeButton from './GoToHomeButton';
import { eventSenderGA } from "../../tools/tools"
import styled, { keyframes } from 'styled-components';

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(255, 64, 129, 0.5),
                0 0 20px rgba(255, 64, 129, 0.3),
                0 0 30px rgba(255, 64, 129, 0.2),
                0 0 40px rgba(255, 64, 129, 0.1);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 64, 129, 0.8),
                0 0 40px rgba(255, 64, 129, 0.6),
                0 0 60px rgba(255, 64, 129, 0.4),
                0 0 80px rgba(255, 64, 129, 0.2);
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 64, 129, 0.5),
                0 0 20px rgba(255, 64, 129, 0.3),
                0 0 30px rgba(255, 64, 129, 0.2),
                0 0 40px rgba(255, 64, 129, 0.1);
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
`;

const shimmerAnimation = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const IntroContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const Title = styled.h1`
  width: 100%;
  margin: 1.5rem 0 0.5rem;
  padding: 0 1rem;
  word-break: keep-all;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SubTitle = styled.h3`
  width: 100%;
  margin: 0.5rem 0 1.5rem;
  padding: 0 1rem;
  word-break: keep-all;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

const IntroImage = styled.img`
  width: 600px;
  height: 650px;
  object-fit: contain;
  cursor: pointer;
  display: block;
  border-radius: 12px;
  margin: 0;
  padding: 0;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-width: 400px;
    max-height: 450px;
    aspect-ratio: 400/450;
    border-radius: 8px;
    margin: 0 auto;
  }
  
  @media (max-width: 480px) {
    width: 85%;
    max-width: 430px;
    max-height: 480px;
    aspect-ratio: 430/480;
  }
`;

const StartButton = styled.button`
  background: linear-gradient(
    45deg,
    #ff4081,
    #ff79b0,
    #ff4081,
    #ff79b0,
    #ff4081
  );
  background-size: 200% auto;
  min-width: 14rem;
  width: auto;
  padding: 1rem 2rem;
  height: 4rem;
  font-size: 1.5rem;
  color: white;
  border: none;
  border-radius: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.4s ease;
  animation: ${glowAnimation} 2s infinite, ${shimmerAnimation} 3s linear infinite, ${pulseAnimation} 2s ease-in-out infinite;
  position: relative;
  overflow: visible;
  white-space: normal;
  line-height: 1.4;
  word-break: keep-all;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin: 1.5rem 0;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.8) 0%,
      transparent 60%
    );
    transform: rotate(45deg);
    transition: all 0.3s ease;
    opacity: 0;
  }


  &:active {
    transform: translateY(1px) scale(0.98);
    box-shadow: 0 3px 10px rgba(255, 64, 129, 0.3);
  }

  @media (max-width: 768px) {
    min-width: auto;
    width: 80%;
    max-width: 12rem;
    height: 3.5rem;
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;
    margin: 1.2rem 0;
    background: linear-gradient(
      45deg,
      #ff4081,
      #ff79b0,
      #ff4081
    );
  }
`;

const Description = styled.p`
  margin: 1rem 0;
  line-height: 1.5;
  word-break: keep-all;
  padding: 0 1rem;

  span {
    font-weight: bold;
    color: #FF6B6B;
  }
`;

function Intro({info, setMode}) {
  const onImageClick = () => {
    //이미지 클릭 시 mode가 quiz로 변경되면서 퀴즈 페이지로 이동
    eventSenderGA(
      "Paging",
      "Test Start Button",
      "Intro"
    )
    setMode("quiz");
  }
  
  const foreignTextsObject = {
    Kor : {
      startButton : "시작하기",
      comment : "로 여러분의 성향을 테스트해보세요"
    },
    Eng : {
      startButton : "START",
      comment : " to test yout personality!"
    },
    Jp : {
      startButton : "スタート",
      comment : "であなたの性格をテストしてみましょう"
    },
  } 

  return (
    <IntroContainer>
      <Title>{info?.mainTitle}</Title>
      <SubTitle>{info?.subTitle}</SubTitle>
      <ImageWrapper>
        <IntroImage
          src={info?.mainImage} 
          alt={info?.mainTitle}
        />
      </ImageWrapper>
      <StartButton onClick={onImageClick}>
        {info && foreignTextsObject[info?.lang].startButton}
      </StartButton>
      <Description>
        <span>{info?.mainTitle}</span>
        {info && foreignTextsObject[info?.lang].comment}
      </Description>
      <IntroButtonGroup testParam={info?.mainUrl} lang={info?.lang}/>
      <GoToHomeButton page="Intro"/>
    </IntroContainer>
  )
}

export default Intro