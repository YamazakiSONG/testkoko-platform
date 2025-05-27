import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { memo, useMemo } from 'react';

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  padding: 0 1rem;
  width: 100%;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  background: linear-gradient(
    45deg,
    #ff4081,
    #ff79b0,
    #ff4081,
    #ff79b0,
    #ff4081
  );
  background-size: 200% auto;
  min-width: 10rem;
  width: auto;
  max-width: 70%;
  padding: 1rem 1.5rem;
  height: auto;
  min-height: 4rem;
  font-size: 1.3rem;
  color: white;
  border: none;
  border-radius: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.4s ease;
  animation: ${glowAnimation} 2s infinite, ${shimmerAnimation} 3s linear infinite, ${pulseAnimation} 2s ease-in-out infinite;
  position: relative;
  overflow: hidden;
  white-space: normal;
  line-height: 1.4;
  word-break: keep-all;
  word-wrap: break-word;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin: 1.5rem 0;
  
  /* 텍스트 중앙 정렬을 위한 Flexbox 설정 */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

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
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-3px) scale(1.03);
    background-position: right center;
    box-shadow: 0 10px 30px rgba(255, 64, 129, 0.6);

    &::before {
      opacity: 0.8;
      transform: rotate(45deg) translate(50%, 50%);
    }
  }

  &:active {
    transform: translateY(1px) scale(0.98);
    box-shadow: 0 3px 10px rgba(255, 64, 129, 0.3);
  }

  /* 태블릿 크기 */
  @media (max-width: 768px) {
    min-width: auto;
    width: 75%;
    max-width: 16rem;
    min-height: 3.5rem;
    font-size: 1.1rem;
    padding: 0.8rem 1.2rem;
    margin: 1.2rem 0;
    background: linear-gradient(
      45deg,
      #ff4081,
      #ff79b0,
      #ff4081
    );
  }

  /* 모바일 크기 */
  @media (max-width: 480px) {
    width: 80%;
    max-width: 14rem;
    min-height: 3.2rem;
    font-size: 1rem;
    padding: 0.7rem 1rem;
    margin: 1rem 0;
    border-radius: 1rem;
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