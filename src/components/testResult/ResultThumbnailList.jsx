import { useState } from "react";
import { TESTS } from "../../data/TESTS";
import { Link } from "react-router-dom";
import CoupangDynamicBanner from '../CoupangDynamicBanner';
import styles from './resultThumbnailList.module.css';

const ResultThumbnailList = ({ testParam }) => {
  const [testList] = useState(TESTS);

  return (
    <div className={styles.thumbnailContainer}>
      {testList
        .filter((test) => test?.info?.mainUrl !== testParam)
        .map((item, idx) => (
          <div key={`/${item?.info?.mainUrl}`} className={styles.thumbnailItem}>
            <Link to={`/${item?.info?.mainUrl}`} style={{ width: '100%' }}>
              <div className={styles.imageContainer}>
                <img
                  src={item?.info?.thumbImage}
                  alt={item?.info?.mainTitle}
                />
              </div>
            </Link>
            {idx % 2 === 0 && <CoupangDynamicBanner unit={"resultBanner"} />}
          </div>
        ))}
    </div>
  );
};

export default ResultThumbnailList;