import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    position: relative;
    -webkit-overflow-scrolling: touch;
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    background-color: #ffffff;
    -webkit-overflow-scrolling: touch;
    touch-action: manipulation;
  }

  #root {
    min-height: 100%;
    position: relative;
  }

  /* 모바일 터치 하이라이트 제거 */
  * {
    -webkit-tap-highlight-color: transparent;
  }

  /* 모바일 텍스트 선택 방지 */
  * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* 입력 필드는 선택 가능하도록 설정 */
  input, textarea {
    -webkit-user-select: auto;
    -khtml-user-select: auto;
    -moz-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }

  /* iOS 모멘텀 스크롤 활성화 */
  * {
    -webkit-overflow-scrolling: touch;
  }

  /* 터치 타겟 사이즈 최적화 */
  button, a, input, select {
    min-height: 44px;
    min-width: 44px;
  }

  /* 모바일 폰트 최적화 */
  @media (max-width: 768px) {
    h1 { font-size: 1.8rem; }
    h2 { font-size: 1.5rem; }
    h3 { font-size: 1.3rem; }
    h4 { font-size: 1.2rem; }
    h5 { font-size: 1.1rem; }
    h6 { font-size: 1rem; }
    p { font-size: 1rem; }
  }

  /* 스크롤바 최적화 */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default GlobalStyle; 