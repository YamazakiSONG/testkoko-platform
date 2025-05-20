import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Main from "./page/Main";
import Test from "./page/Test";
import TestResult from "./page/TestResult";
import Privacy from './page/Privacy';
import Blog from './page/Blog';
import { useEffect } from 'react';
import ReactGA4 from 'react-ga4';
import ScrollToTop from './utils/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

export const base_url = "https://testkoko.com";
//export const base_url = "http://localhost:5173";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
    position: relative;
  }

  #root {
    width: 100%;
    overflow-x: hidden;
    position: relative;
  }
`;

function App() {

  useEffect(()=>{
    ReactGA4.initialize(
      [
        {
          trackingId : "G-WHCMJFLWFP",
          gaOptions: {
            siteSpeedSampleRate: 100
          }
        }
      ]
    )
  },[])
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Main Thumbnail List Page */}
          <Route path="/" element={<Main/>} />
          {/* Test Intro-Quiz-Loading Page */}
          <Route path="/:testParam" element={<Test/>} />
          {/* Test Result Page */}
          <Route path="/:testParam/result/:resultParam" element={<TestResult/>} />
          {/* Blog Page */}
          <Route 
            path="/blog/:testParam/:resultParam" element={<Blog />}
          />
          {/* Privacy Page */}
          <Route 
            path="/privacy" element={<Privacy />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

//주소 체계
//1. 메인 썸네일 리스트 페이지 => root/
//2. 테스트 페이지 - Intro / Quiz / Loading - 동적 라우팅 필요 => root/:testName
//3. 결과 페이지 - 동적 라우팅 필요 => root/:testName/result/:resultName

//Dynamic Routing : 동적 라우팅
// /:testParam

/**
 * [GA]
 * - Test Start Button(Intro)
 * - Copy Test Link Button(Intro, Result)
 * - Go-to-another Test Button(Result)
 * - Go-to-Other Tests Button(Intro, Result)
 */