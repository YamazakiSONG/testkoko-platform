import { useNavigate } from "react-router-dom";
import { eventSenderGA } from "../../tools/tools";
import { memo, useCallback, useMemo } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  padding: 0 1rem;
`;

const StyledSkyButton = styled.button`
  background: #00BFFF;
  
  color: white;
  border: none;
  border-radius: 50px;
  padding: 1.2rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: 'Arial', sans-serif;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  min-width: 200px;
  height: 60px;
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 8px 25px rgba(135, 206, 235, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.5px;
  
  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 
      0 15px 35px rgba(135, 206, 235, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
  
  &:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: 
      0 5px 15px rgba(135, 206, 235, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  
  &:focus {
    outline: none;
    box-shadow: 
      0 8px 25px rgba(135, 206, 235, 0.3),
      0 0 0 3px rgba(135, 206, 235, 0.3);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem 2rem;
    min-width: 180px;
    height: 55px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.9rem 1.8rem;
    min-width: 160px;
    height: 50px;
  }
`;

// 언어별 텍스트 객체를 컴포넌트 외부로 이동
const foreignTextsObject = {
  Kor : {
    goHome : "다른 테스트 하러 가기",
  },
  Eng : {
    goHome : "Go to Other Tests",
  },
  Jp : {
    goHome : "他のテストをしに行く",
  }
};

// React 컴포넌트 정의
function GoAnotherTestBtn({lang}) {
  const navigate = useNavigate();
  
  // 언어에 맞는 버튼 텍스트를 메모이제이션
  const buttonText = useMemo(() => {
    if (!lang) return foreignTextsObject.Kor.goHome;
    return foreignTextsObject[lang]?.goHome || foreignTextsObject.Kor.goHome;
  }, [lang]);

  // 이벤트 핸들러 메모이제이션
  const onClickGoHomeButton = useCallback((e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    eventSenderGA("Paging","Go-Home Button","Result");
    navigate("/");
  }, [navigate]);

  return(
    <ButtonContainer>
      <StyledSkyButton onClick={onClickGoHomeButton}>
        {buttonText}
      </StyledSkyButton>
    </ButtonContainer>
  );
}

// memo로 감싸기: React 19에서는 컴포넌트를 먼저 정의하고 별도로 memo() 래핑하는 방식이 더 안정적
export default memo(GoAnotherTestBtn);