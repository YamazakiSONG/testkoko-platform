import { useState, useEffect } from "react";
import { TESTS } from "../../data/TESTS";
import { Link, useSearchParams } from "react-router-dom";
import styles from './resultThumbnailList.module.css';
import { FloatButton, Skeleton } from 'antd';

const ResultThumbnailList = () => {
  const [searchParams] = useSearchParams();
  const [testList, setTestList] = useState([]);

  useEffect(() => {
    const currentLanguage = searchParams.get("lang") || 'Kor';
    const currentTestParam = searchParams.get("test");
    
    const filteredTests = TESTS.filter((test) => {
      return test?.info?.mainUrl !== currentTestParam && test?.info?.lang === currentLanguage;
    });
    
    setTestList(filteredTests);
  }, [searchParams]);

  const onBackToTopButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            {test?.info?.color && <div className={styles.colorBar} style={{ backgroundColor: test?.info?.color }}></div>}
          </div>
        ))
      ) : (
        <Skeleton active style={{ height: "20rem", width: "100%", margin: "1rem 0" }} />
      )}
      <FloatButton.BackTop 
        visibilityHeight={400} 
        onClick={onBackToTopButtonClick}
      />
    </div>
  );
};

export default ResultThumbnailList;