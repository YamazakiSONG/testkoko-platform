import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { memo, useMemo } from 'react';

// 빛나면서 크기가 변하는 애니메이션
const glowPulse = keyframes`
  0% { 
    transform: scale(1);
    box-shadow: 0 8px 25px rgba(255, 105, 180, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  50% { 
    transform: scale(1.05);
    box-shadow: 0 12px 35px rgba(255, 105, 180, 0.6),
                0 0 20px rgba(255, 105, 180, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
  100% { 
    transform: scale(1);
    box-shadow: 0 8px 25px rgba(255, 105, 180, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  padding: 0 1rem;
`;

const StyledButton = styled.button`
  background: #ff69b4;
  
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
  
  /* 텍스트 완벽 중앙 정렬 */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1;
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 8px 25px rgba(255, 105, 180, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.5px;
  
  animation: ${glowPulse} 2s ease-in-out infinite;
  
  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 
      0 15px 35px rgba(255, 105, 180, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
    
    animation: ${glowPulse} 1s ease-in-out infinite;
  }
  
  &:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: 
      0 5px 15px rgba(255, 105, 180, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    
    animation: none;
  }
  
  &:focus {
    outline: none;
    box-shadow: 
      0 8px 25px rgba(255, 105, 180, 0.3),
      0 0 0 3px rgba(255, 105, 180, 0.3);
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

// 외부로 이동한 다국어 텍스트 객체
const foreignTextsObject = {
  Kor: {
    btnText: "더 자세한 결과 보러가기",
  },
  Eng: {
    btnText: "See More Details",
  },
  Jp: {
    btnText: "もっと詳しい結果を見る",
  }
};

// 메인 컴포넌트 함수
function BlogButtonComponent({testParam, resultParam, lang}) {
  const navigate = useNavigate();
  
  // 필요한 데이터가 없으면 렌더링하지 않음
  if (!lang || !testParam || !resultParam) return null;

  // 버튼 텍스트를 메모이제이션
  const buttonText = useMemo(() => {
    return foreignTextsObject[lang]?.btnText || foreignTextsObject.Kor.btnText;
  }, [lang]);

  const handleClick = (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    navigate(`/blog/${testParam}/${resultParam}`);
  };

  return (
    <ButtonContainer>
      <StyledButton onClick={handleClick}>
        {buttonText}
      </StyledButton>
    </ButtonContainer>
  );
}

// memo로 감싸서 불필요한 리렌더링 방지
const BlogButton = memo(BlogButtonComponent);

export default BlogButton;