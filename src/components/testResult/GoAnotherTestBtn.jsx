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
  background: linear-gradient(to right, #48CAE4, #00B4D8);
  color: white;
  border: none;
  border-radius: 16px;
  padding: 0 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: 'Arial', sans-serif;
  cursor: pointer;
  min-width: 220px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: linear-gradient(to right, #90E0EF, #48CAE4);
  }
  
  &:active {
    background: linear-gradient(to right, #0096C7, #00B4D8);
  }
  
  &:focus {
    outline: none;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 2rem;
    min-width: 200px;
    height: 55px;
    border-radius: 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0 1.8rem;
    min-width: 180px;
    height: 50px;
    border-radius: 12px;
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