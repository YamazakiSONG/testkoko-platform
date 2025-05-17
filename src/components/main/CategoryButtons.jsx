import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './categoryButtons.module.css';

function CategoryButtons(){
    const [searchParams] = useSearchParams();
    const [language, setLanguage] = useState('Kor');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const navigate = useNavigate();
    
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

    useEffect(() => {
        const currentLang = searchParams.get('lang') || 'Kor';
        const currentCat = searchParams.get('cat') || 'all';
        setLanguage(currentLang);
        setSelectedCategory(currentCat);
    }, [searchParams]);

    const onCategoryButtonClick = (category) => {
        if(category === "all"){
            navigate(`/?lang=${language}`);
        } else if(category === 'love' || category === 'characteristic'){
            navigate(`/?lang=${language}&cat=${category}`);
        } else {
            alert('잘못된 카테고리입니다.');
            navigate(`/?lang=${language}`);
        }
        setSelectedCategory(category);
    };

    const getButtonClassName = (category) => {
        return `${styles.categoryButton} ${selectedCategory === category ? styles.categoryButtonSelected : ''}`;
    };

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

export default CategoryButtons;