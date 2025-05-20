import { memo, useCallback } from 'react';
import { CircleFlag } from 'react-circle-flags';
import { useNavigate } from 'react-router-dom';
import styles from './languageIcons.module.css';

// 메인 컴포넌트 함수
function LanguageIconsComponent(){
    const navigate = useNavigate();

    // 이벤트 핸들러를 메모이제이션
    const onButtonClick = useCallback((lang) => {
        navigate(`/?lang=${lang}`);
    }, [navigate]);

    return (
        <div style={{ marginTop: '60px' }}>
            {/* -> mbti.com/?lang=Kor */}
            <CircleFlag
                className={styles.flagIcon}
                onClick={() => onButtonClick('Kor')} 
                countryCode='kr' width={48}/>
            {/* -> mbti.com/?lang=Eng */}
            <CircleFlag
                className={styles.flagIcon}
                onClick={() => onButtonClick('Eng')}
                countryCode='us' width={48}/>
            {/* -> mbti.com/?lang=Jp */}
            <CircleFlag
                className={styles.flagIcon}
                onClick={() => onButtonClick('Jp')}
                countryCode='jp' width={48}/>
        </div>
    );
}

// memo로 감싸서 불필요한 리렌더링 방지
const LanguageIcons = memo(LanguageIconsComponent);

// mbti.com/?lang=Eng&category=love

export default LanguageIcons;