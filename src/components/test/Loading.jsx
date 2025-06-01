import React, { useEffect, useState } from 'react'
import Lottie from "react-lottie";
import * as animationData from '../../assets/loading-animation.json';
import { useNavigate } from 'react-router-dom';
import TestCalculatorFactory from './calculators/TestCalculatorFactory';

function Loading({scores, currentTest}) {
  const navigate = useNavigate();
  const [finalQuery, setFinalQuery] = useState("");
  
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    }
  }

  useEffect(() => {
    try {
      const calculator = TestCalculatorFactory.getCalculator(currentTest?.info?.testType);
      const resultQuery = calculator.calculate(scores, currentTest);
      setFinalQuery(resultQuery);
    } catch (error) {
      navigate('/');
    }
  }, [scores, currentTest, navigate]);

  // 이탈률이 적은 로딩 시간 -> 3.7초
  const loadingTime = 4000; //ms
  useEffect(() => {
    const timeOut = setTimeout(() => {
      finalQuery && navigate(`/${currentTest?.info?.mainUrl}/result/${finalQuery}`);
    }, loadingTime);
    
    return () => {
      clearTimeout(timeOut);
    };
  }, [loadingTime, navigate, finalQuery, currentTest?.info?.mainUrl]);

  return (
    <Lottie 
      options={defaultOption}
      height={250}
      width={250}
      style={{marginTop: "10rem"}}
      isClickToPauseDisabled={true}
    />
  );
}

export default Loading;

// Loading Animation
// mbtiScore Calculate -> Result MBTI Type ex. "ENFP"
// N초 후 -> Result Page Routing
// base_url/attackOfTitanMBTI/result/ENFJ