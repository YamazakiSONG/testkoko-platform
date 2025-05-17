import {HomeOutlined} from '@ant-design/icons';
import { eventSenderGA } from '../../tools/tools';
import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-15deg);
  }
  75% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const HomeButtonContainer = styled.div`
  position: fixed;
  bottom: 30px;
  left: 20px;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    #87CEEB 0%,
    #00BFFF 40%,
    #1E90FF 70%,
    #4169E1 100%
  );
  background-size: 200% 200%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: scale(1.1);
    background: linear-gradient(
      135deg,
      #00BFFF 0%,
      #1E90FF 50%,
      #4169E1 100%
    );
    border-color: rgba(255, 255, 255, 1);
    
    .home-icon {
      animation: ${rotateAnimation} 0.5s ease;
      color: white;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .home-icon {
    font-size: 1.8rem;
    color: rgba(255, 255, 255, 0.9);
    transition: all 0.3s ease;
  }
`;

function GoToHomeButton({page}){
  const onClickGoToHomeButton = () => {
    eventSenderGA("Click","Go Home Floating Button",page);
  }

  return (
    <HomeButtonContainer onClick={onClickGoToHomeButton}>
      <a href="/">
        <HomeOutlined className="home-icon" />
      </a>
    </HomeButtonContainer>
  )
}

export default GoToHomeButton;