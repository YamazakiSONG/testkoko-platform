import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TestResultRenderer from '../components/testResult/TestResultRenderer';
import ShareButtonGroup from '../components/testResult/ShareButtonGroup';
import ResultButtonGroup from '../components/testResult/ResultButtonGroup';
import ResultThumbnailList from '../components/testResult/ResultThumbnailList';
import {TESTS} from '../data/TESTS.js';
import GoToHomeButton from '../components/test/GoToHomeButton.jsx';
import BlogButton from '../components/testResult/BlogButton.jsx';
import TestResultMetatagRenderer from '../components/metatagRenderer/TestResultMetatagRenderer.jsx';
import styled from 'styled-components';
import GoAnotherTestBtn from '../components/testResult/GoAnotherTestBtn.jsx';

const ResultPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 0.8rem;
  }
`;

const ContentSection = styled.div`
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;

function TestResult(){
    const navigate = useNavigate();
    const { testParam, resultParam } = useParams();
    const [renderResultInfo, setRenderResultInfo] = useState(null);
    const [renderTestInfo, setRenderTestInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // 검색 매개변수를 바꾸지 않는 언어 정보를 메모이제이션
    const lang = useMemo(() => {
        return renderTestInfo?.info?.lang;
    }, [renderTestInfo?.info?.lang]);

    useEffect(() => {
        setIsLoading(true);
        
        const testInfo = TESTS.find((test) => (test.info.mainUrl === testParam));
        if(!testInfo) {
            alert("존재하지 않는 테스트입니다!");
            navigate("/");
            return;
        }
        
        setRenderTestInfo(testInfo);

        const resultInfo = testInfo?.results?.find((result) => (
            result.query === resultParam
        ));
        
        if(!resultInfo){
            alert("존재하지 않는 결과값입니다!");
            navigate(`/${testInfo?.info?.mainUrl}`);
            return;
        }
        
        setRenderResultInfo(resultInfo);
        setIsLoading(false);
    }, [testParam, resultParam, navigate]);

    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    return (
        <ResultPageContainer>
            <TestResultMetatagRenderer 
                testParam={testParam}
                resultParam={resultParam}
                renderTestInfo={renderTestInfo}
            />
            <ContentSection>
                <TestResultRenderer
                    renderResultInfo={renderResultInfo}
                    lang={lang}
                />
            </ContentSection>
            <ContentSection>
                <ShareButtonGroup
                    testParam={testParam}
                    resultParam={resultParam}
                    renderTestInfo={renderTestInfo}
                    lang={lang}
                />
            </ContentSection>
            <ContentSection>
                <BlogButton
                    testParam={testParam}
                    resultParam={resultParam}
                    lang={lang}
                />
            </ContentSection>
            <ContentSection>
                <GoAnotherTestBtn
                    lang={lang}
                />
            </ContentSection>
            <ContentSection>
                <ResultButtonGroup
                    testParam={testParam}
                    resultParam={resultParam}
                    lang={lang}
                />
            </ContentSection>
            <ContentSection>
                <ResultThumbnailList 
                    testParam={testParam}
                    lang={lang}
                />
            </ContentSection>
            <ContentSection>
                <GoToHomeButton page="Result"/>
            </ContentSection>
        </ResultPageContainer>
    );
}

export default TestResult;

//TestResult 페이지까지 오는 방법 2가지
//1. Intro -> Quiz -> Loading -> Result
//2. 친구에게 공유 : 링크를 통해 결과 페이지로 Direct로 들어오는 경우
