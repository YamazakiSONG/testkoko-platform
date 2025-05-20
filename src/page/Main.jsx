import { memo } from 'react';
import LanguageIcons from "../components/main/LanguageIcons";
import MainBanner from "../components/main/MainBanner";
import CategoryButtons from "../components/main/CategoryButtons";
import ThumbnailList from "../components/main/ThumbnailList";
import MainMetatagRenderer from '../components/metatagRenderer/MainMetatagRenderer';
import GlobalStyle from '../globalStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const MainContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    
    @media (max-width: 768px) {
        padding: 0 10px;
    }
`;

const ContentWrapper = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    @media (max-width: 768px) {
        gap: 1rem;
    }
`;

// 메인 컴포넌트를 일반 함수로 정의
function MainComponent(){
    return (
        <>
            <MainMetatagRenderer />
            <GlobalStyle />
            <Header />
            <MainContainer>
                <ContentWrapper>
                    <LanguageIcons/>
                    <MainBanner/>
                    <CategoryButtons/>
                    <ThumbnailList/>
                </ContentWrapper>
            </MainContainer>
            <Footer />
        </>
    );
}

// memo로 감싸서 불필요한 리렌더링 방지
const Main = memo(MainComponent);

export default Main;