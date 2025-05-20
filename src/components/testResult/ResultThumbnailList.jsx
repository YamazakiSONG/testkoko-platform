import { useState, useEffect, useCallback, memo, useMemo } from "react";
import { TESTS } from "../../data/TESTS";
import { Link, useSearchParams } from "react-router-dom";
import styles from './resultThumbnailList.module.css';
import { FloatButton, Skeleton } from 'antd';

// React 컴포넌트 정의
function ResultThumbnailList({ testParam, lang }) {
  const [searchParams] = useSearchParams();
  const [testList, setTestList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 로컬 검색어 파라미터보다 직접 전달된 props를 우선 사용하여 메모이제이션
  const currentLanguage = useMemo(() => 
    lang || searchParams.get("lang") || 'Kor',
    [lang, searchParams]
  );

  const currentTestParam = useMemo(() => 
    testParam || searchParams.get("test"),
    [testParam, searchParams]
  );

  // 스켈레톤 스타일 메모이제이션
  const skeletonStyle = useMemo(() => ({
    height: "20rem", 
    width: "100%", 
    margin: "1rem 0"
  }), []);

  // 결과가 없는 경우의 메시지를 언어별로 메모이제이션 (조건부 렌더링 이전으로 이동)
  const noResultsMessage = useMemo(() => {
    const messages = {
      'Kor': '해당 언어의 다른 테스트가 없습니다.',
      'Eng': 'No other tests available in this language.',
      'Jp': 'この言語の他のテストはありません。'
    };
    return messages[currentLanguage] || messages['Kor'];
  }, [currentLanguage]);

  // 이벤트 핸들러 메모이제이션
  const onBackToTopButtonClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    
    if (!currentLanguage || !currentTestParam) {
      setIsLoading(false);
      return;
    }
    
    const filteredTests = TESTS.filter((test) => {
      return test?.info?.mainUrl !== currentTestParam && 
             test?.info?.lang === currentLanguage;
    });
    
    setTestList(filteredTests);
    setIsLoading(false);
  }, [currentTestParam, currentLanguage]);

  // 로딩 중 화면 표시
  if (isLoading) {
    return <Skeleton active style={skeletonStyle} />;
  }

  return (
    <div className={styles.thumbnailContainer}>
      {testList.length > 0 ? (
        testList.map((test) => (
          <div key={test?.info?.mainUrl} className={styles.thumbnailItem}>
            <Link to={`/${test?.info?.mainUrl}`} style={{ width: '100%', textDecoration: 'none' }}>
              <div className={styles.imageContainer}>
                <img
                  src={test?.info?.thumbImage}
                  alt={test?.info?.mainUrl}
                  loading="lazy"
                />
                <div className={styles.textContainer}>
                  <h3 className={styles.titleText}>{test?.info?.mainTitle}</h3>
                  <p className={styles.descriptionText}>{test?.info?.subTitle}</p>
                </div>
              </div>
            </Link>
            {test?.info?.color && (
              <div 
                className={styles.colorBar} 
                style={{ backgroundColor: test.info.color }}
              />
            )}
          </div>
        ))
      ) : (
        <div className={styles.noResults}>{noResultsMessage}</div>
      )}
      <FloatButton.BackTop 
        visibilityHeight={400} 
        onClick={onBackToTopButtonClick}
      />
    </div>
  );
}

// memo로 컴포넌트 래핑: React 19에서 권장되는 방식
export default memo(ResultThumbnailList);