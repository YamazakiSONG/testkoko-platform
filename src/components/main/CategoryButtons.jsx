import { useEffect, useState, useMemo, useCallback, memo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './categoryButtons.module.css';

// 언어별 텍스트 객체는 컴포넌트 외부로 이동
const foreignTextsObject = {
    Kor : {
        all : {
            text: "전체",
        },
        love : {
            text: "연애",
        },
        characteristic: {
            text: "성격",
        }
    },
    Eng : {
        all : {
            text: "All",
        },
        love : {
            text: "Love",
        },
        characteristic: {
            text: "Personality",
        }
    },
    Jp : {
        all : {
            text: "すべて",
        },
        love : {
            text: "れんあい",
        },
        characteristic: {
            text: "せいかく",
        }
    }
};

// 메인 컴포넌트 함수
function CategoryButtonsComponent(){
    const [searchParams] = useSearchParams();
    const [language, setLanguage] = useState('Kor');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const navigate = useNavigate();

    useEffect(() => {
        const currentLang = searchParams.get('lang') || 'Kor';
        const currentCat = searchParams.get('cat') || 'all';
        setLanguage(currentLang);
        setSelectedCategory(currentCat);
    }, [searchParams]);

    // 이벤트 핸들러를 메모이제이션
    const onCategoryButtonClick = useCallback((category) => {
        if(category === "all"){
            navigate(`/?lang=${language}`);
        } else if(category === 'love' || category === 'characteristic'){
            navigate(`/?lang=${language}&cat=${category}`);
        } else {
            alert('잘못된 카테고리입니다.');
            navigate(`/?lang=${language}`);
        }
        setSelectedCategory(category);
    }, [navigate, language]);

    // 버튼 클래스명 계산 함수를 메모이제이션
    const getButtonClassName = useCallback((category) => {
        return `${styles.categoryButton} ${selectedCategory === category ? styles.categoryButtonSelected : ''}`;
    }, [selectedCategory]);

    return (
        <div className={styles.categoryButtonContainer}>
            <button 
                className={getButtonClassName('all')}
                onClick={() => onCategoryButtonClick("all")}
            >
                {foreignTextsObject[language].all.text}
            </button>
            <button 
                className={getButtonClassName('love')}
                onClick={() => onCategoryButtonClick("love")}
            >
                {foreignTextsObject[language].love.text}
            </button>
            <button 
                className={getButtonClassName('characteristic')}
                onClick={() => onCategoryButtonClick("characteristic")}
            >
                {foreignTextsObject[language].characteristic.text}
            </button>
        </div>
    );
}

// memo로 감싸서 불필요한 리렌더링 방지
const CategoryButtons = memo(CategoryButtonsComponent);

export default CategoryButtons;