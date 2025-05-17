import { useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { eventSenderGA } from "../../tools/tools";
import styled, { keyframes } from 'styled-components';

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 140, 0, 0.3),
                0 0 10px rgba(255, 140, 0, 0.2),
                0 0 15px rgba(255, 140, 0, 0.1);
  }
  50% {
    box-shadow: 0 0 10px rgba(255, 140, 0, 0.4),
                0 0 20px rgba(255, 140, 0, 0.3),
                0 0 30px rgba(255, 140, 0, 0.2);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 140, 0, 0.3),
                0 0 10px rgba(255, 140, 0, 0.2),
                0 0 15px rgba(255, 140, 0, 0.1);
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

const ButtonContainer = styled.div`
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  background: linear-gradient(
    45deg,
    #FF8C00,
    #FFA500,
    #FF8C00,
    #FFA500,
    #FF8C00
  );
  background-size: 200% auto;
  width: 100%;
  max-width: 500px;
  min-width: 14rem;
  padding: 1rem 2rem;
  font-size: 1.3rem;
  color: white;
  border: none;
  border-radius: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.4s ease;
  animation: ${glowAnimation} 2s infinite, ${shimmerAnimation} 3s linear infinite;
  position: relative;
  overflow: visible;
  white-space: normal;
  line-height: 1.4;
  word-break: keep-all;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  height: 4.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

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

  &:hover {
    transform: translateY(-3px) scale(1.02);
    background-position: right center;
    box-shadow: 0 7px 20px rgba(255, 140, 0, 0.4);

    &::before {
      opacity: 0.6;
      transform: rotate(45deg) translate(50%, 50%);
    }
  }

  &:active {
    transform: translateY(1px) scale(0.98);
    box-shadow: 0 3px 10px rgba(255, 140, 0, 0.3);
  }

  @media (max-width: 768px) {
    min-width: auto;
    width: auto;
    max-width: none;
    font-size: 1.1rem;
    padding: 0.8rem 1.5rem;
    margin: 0 1rem;
    height: 4rem;
    background: linear-gradient(
      45deg,
      #FF8C00,
      #FFA500,
      #FF8C00
    );
  }

  .home-icon {
    margin-right: 8px;
    font-size: 1.2em;
    vertical-align: middle;
  }

  span {
    vertical-align: middle;
  }
`;

function GoAnotherTestBtn({testParam, resultParam, lang}){
  const navigate = useNavigate();
  const foreignTextsObject = {
    Kor : {
      goHome : "다른 테스트 하러 가기",
    },
    Eng : {
      goHome : "Go to other Tests",
    },
    Jp : {
      goHome : "他のテストをしに行く",
    }
  }

  const onClickGoHomeButton = () => {
    eventSenderGA("Paging","Go-Home Button","Result");
    navigate("/");
  }

  return(
    <ButtonContainer>
      <StyledButton onClick={onClickGoHomeButton}>
        <HomeOutlined className="home-icon" />
        <span>{lang && foreignTextsObject[lang]?.goHome}</span>
      </StyledButton>
    </ButtonContainer>
  )
}

export default GoAnotherTestBtn;