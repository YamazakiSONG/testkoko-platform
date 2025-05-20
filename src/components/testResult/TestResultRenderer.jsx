import styled from 'styled-components';
import { memo, useMemo } from 'react';

const ResultContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem 0.8rem;
  }
`;

const ResultTitle = styled.h3`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
  word-break: keep-all;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
`;

const ResultImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  display: block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    border-radius: 12px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  }
`;

// 언어별 텍스트 객체를 컴포넌트 외부로 이동
const foreignTextsObject = {
  Kor : {
    title : "결과는 ..."
  },
  Eng : {
    title : "Your Result is ..."
  },
  Jp : {
    title : "あなたの結果は ... "
  }
};

// 메인 컴포넌트 함수
function TestResultRenderer({renderResultInfo, lang}) {
  // 언어에 기반한 타이틀 텍스트를 메모이제이션
  const titleText = useMemo(() => {
    if (!lang) return foreignTextsObject.Kor.title; // 기본 한국어
    return foreignTextsObject[lang]?.title || foreignTextsObject.Kor.title;
  }, [lang]);
  
  if (!renderResultInfo) return null;

  return(
    <ResultContainer>
      <ResultTitle>{titleText}</ResultTitle>
      <ResultImage
        src={renderResultInfo.img_src}
        alt={renderResultInfo.type}
      />
    </ResultContainer>
  );
}

// memo로 컴포넌트 래핑: React 19에서 권장되는 방식
export default memo(TestResultRenderer);