import {useEffect, useState} from 'react';
import { TESTS } from '../../data/TESTS';
import { Link, useSearchParams } from 'react-router-dom';
import { base_url } from '../../App';
import { FloatButton, Skeleton } from 'antd';
import { eventSenderGA } from '../../tools/tools';
import CoupangDynamicBanner from '../CoupangDynamicBanner';
import styled from 'styled-components';

const CategoryText = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  font-size: 1.2rem;
  z-index: 1;
  transition: all 0.3s ease;
  background: linear-gradient(45deg, #87CEEB, #ff79b0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  
  &.top {
    top: 15px;
  }
  
  &.bottom {
    bottom: 15px;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    
    &.top {
      top: 10px;
    }
    
    &.bottom {
      bottom: 10px;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 450px;
  position: relative;
  padding-top: 80.67%;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-top: 75%;
    border-radius: 12px;
    margin: 0.5rem 0;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);

    ${CategoryText} {
      background: linear-gradient(45deg, #ff4081, #ff79b0);
      -webkit-background-clip: text;
      background-clip: text;
    }
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    max-width: 95%;
    max-height: 85%;
    object-fit: contain;
    object-position: center;
    transition: all 0.3s ease;
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 2rem 1rem;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
    gap: 1.5rem;
  }
`;

const ThumbnailItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 0.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 0;
  }
`;

function ThumbnailList(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [testList, setTestList] = useState(TESTS);

    useEffect(()=>{
        const currentLanguage = searchParams.get("lang") || 'Kor';
        const currentCategory = searchParams.get("cat");
        if(currentCategory){
            console.log(1);
            console.log(TESTS);
            const filteredTests = TESTS.filter((test) => (
                test?.info?.lang === currentLanguage && test?.info?.category === currentCategory
            ))
            setTestList(filteredTests);
        } else {
            console.log(2);
            console.log(TESTS);
            const filteredTests = TESTS.filter(
                (test) => test?.info?.lang === currentLanguage
            );
            setTestList(filteredTests);
        }        
    },[searchParams])

    console.log('testList',testList);

    const onBackToTopButtonClick = () => {
        eventSenderGA("BackToTop","BackToTopButton","MainPage");
    }

    return(
    <ThumbnailContainer>
        {testList ? (
            testList?.map((test,idx) => (
                <ThumbnailItem key={test?.info?.mainUrl}>
                    <Link
                        to={`${base_url}/${test?.info?.mainUrl}`}
                        style={{ width: '100%', textDecoration: 'none' }}
                    >
                        <ImageContainer>
                            <img
                                src={test?.info?.thumbImage} 
                                alt={test?.info?.mainUrl}
                                loading="lazy"
                            />
                        </ImageContainer>
                    </Link>
                    {idx % 2 === 0 && (
                        <div style={{ width: '100%', margin: '1rem 0' }}>
                            <CoupangDynamicBanner unit={"introBanner"} />
                        </div>
                    )}
                </ThumbnailItem>
            )) 
        ) : (
            <Skeleton active style={{height: "20rem", width: "100%", margin: "1rem 0"}}/>
        )}
        <FloatButton.BackTop 
            visibilityHeight={400} 
            onClick={onBackToTopButtonClick}
            style={{
                bottom: 24,
                right: 24,
                '@media (max-width: 768px)': {
                    bottom: 16,
                    right: 16
                }
            }}
        />
    </ThumbnailContainer>
    );
}

export default ThumbnailList;