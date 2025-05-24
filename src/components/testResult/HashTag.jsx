import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { TESTS } from '../../data/TESTS';

const HashTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
  margin: 0.5rem 0;
  padding: 0 1rem;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #f0f0f0;
  color: #666;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2px);
    background: #e5e5e5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &::before {
    content: '#';
    margin-right: 2px;
    color: #888;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;

function HashTag() {
  const { testParam, resultParam } = useParams();
  
  // 현재 테스트와 결과 정보 찾기
  const currentTest = TESTS.find(test => test.info.mainUrl === testParam);
  const currentResult = currentTest?.results?.find(result => result.query === resultParam);
  
  if (!currentResult?.hashTag || currentResult.hashTag.length === 0) {
    return null;
  }

  return (
    <HashTagContainer>
      {currentResult.hashTag.map((tag, index) => (
        <Tag key={index} onClick={() => {
          // 해시태그 클릭 시 클립보드에 복사
          navigator.clipboard.writeText(`#${tag}`);
        }}>
          {tag}
        </Tag>
      ))}
    </HashTagContainer>
  );
}

export default HashTag;