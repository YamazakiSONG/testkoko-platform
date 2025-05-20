import { useEffect, useState, useCallback, useMemo, memo } from 'react';
import { TESTS } from '../../data/TESTS';
import { Link, useSearchParams } from 'react-router-dom';
import { base_url } from '../../App';
import { FloatButton, Skeleton } from 'antd';
import { eventSenderGA } from '../../tools/tools';
import styled from 'styled-components';


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
    margin: 0;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    height: auto;
    max-width: 95%;
    max-height: 85%;
    object-fit: contain;
    object-position: top center;
    transition: all 0.3s ease;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.8rem 1rem;
  background: ${props => props.bgColor || 'rgba(0, 0, 0, 0.6)'};
  color: white;
  text-align: left;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

const TitleText = styled.h3`
  font-size: ${props => props.textSize || '1.3rem'};
  font-weight: 600;
  color: ${props => props.textColor || 'white'};
  margin: 0 0 0.2rem 0;
  
  @media (max-width: 768px) {
    font-size: ${props => props.textSize ? `calc(${props.textSize} * 0.9)` : '1.2rem'};
    margin: 0 0 0.1rem 0;
  }
`;

const DescriptionText = styled.p`
  font-size: ${props => props.textSize || '1.3rem'};
  color: ${props => props.textColor || 'rgba(255, 255, 255, 0.9)'};
  margin: 0;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: ${props => props.textSize ? `calc(${props.textSize} * 0.9)` : '0.9rem'};
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

// 메인 컴포넌트 함수
function ThumbnailListComponent(){
    const [searchParams] = useSearchParams();
    const [testList, setTestList] = useState([]);

    // 검색 파라미터 값을 메모이제이션
    const currentLanguage = useMemo(() => searchParams.get("lang") || 'Kor', [searchParams]);
    const currentCategory = useMemo(() => searchParams.get("cat"), [searchParams]);

    useEffect(() => {
        // 검색 매개변수 변경시에만 필터링 수행
        const filteredTests = TESTS.filter((test) => {
            if (currentCategory) {
                return test?.info?.lang === currentLanguage && test?.info?.category === currentCategory;
            }
            return test?.info?.lang === currentLanguage;
        });
        
        setTestList(filteredTests);
    }, [currentLanguage, currentCategory]);

    // 이벤트 핸들러를 메모이제이션
    const onBackToTopButtonClick = useCallback(() => {
        eventSenderGA("BackToTop","BackToTopButton","MainPage");
    }, []);

    // 스켈레톤 로딩 상태를 메모이제이션
    const skeletonStyle = useMemo(() => ({
        height: "20rem", 
        width: "100%", 
        margin: "1rem 0"
    }), []);

    // 플로트 버튼 스타일을 메모이제이션
    const floatButtonStyle = useMemo(() => ({
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1000,
        width: '40px',
        height: '40px'
    }), []);

    return(
        <>
            <ThumbnailContainer>
                {testList.length > 0 ? (
                    testList.map((test) => (
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
                                    <TextContainer bgColor={test?.info?.color}>
                                        <TitleText 
                                            textSize={test?.info?.textSize}
                                            textColor={test?.info?.textColor}
                                        >
                                            {test?.info?.mainTitle}
                                        </TitleText>
                                        <DescriptionText 
                                            textSize={test?.info?.descriptionTextSize}
                                            textColor={test?.info?.descriptionTextColor}
                                        >
                                            {test?.info?.subTitle}
                                        </DescriptionText>
                                    </TextContainer>
                                </ImageContainer>
                            </Link>
                        </ThumbnailItem>
                    ))
                ) : (
                    <Skeleton active style={skeletonStyle}/>
                )}
            </ThumbnailContainer>
            <FloatButton.BackTop 
                visibilityHeight={50} 
                onClick={onBackToTopButtonClick}
                style={floatButtonStyle}
            />
        </>
    );
}

// memo로 감싸서 불필요한 리렌더링 방지
const ThumbnailList = memo(ThumbnailListComponent);

export default ThumbnailList;