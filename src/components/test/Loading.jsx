import React, { useEffect, useState } from 'react'
import Lottie from "react-lottie";
import * as animationData from '../../assets/loading-animation.json';
import { useNavigate } from 'react-router-dom';

function Loading({mbtiScore, currentTest}) {
  const navigate = useNavigate();
  const [finalQuery, setFinalQuery] = useState("");
  const defaultOption = {
    loop : true,
    autoplay : true,
    animationData : animationData.default,
    rendererSettings : {
      preserveAspectRatio: "xMidYMid slice",
    }
  }

  useEffect(() => {
    // 4개의 슬록 [[E,I],[N,S],[T,F],[J,P]]
    const mbtiPairs = [
      ["E","I"],
      ["N","S"],
      ["T","F"],
      ["J","P"],
    ]
    // 비어있는 문자열
    let resultType = "";
    // Array 순회 -> 각 슬롯의 winner 선정 -> 문자열 변수에 추가
    for(let pair of mbtiPairs){
      let firstType = pair[0];  // E
      let secondType = pair[1]; // I
      
      let firstTypeScore = mbtiScore[firstType];   //2
      let secondTypeScore = mbtiScore[secondType]; //1

      //동률(=)인 경우는 없다. 왜? 홀수개의 질문이라서
      firstTypeScore > secondTypeScore ? (
        resultType += firstType
      ) : (
        resultType += secondType
      )
    }
    const resultQuery = currentTest?.results?.find((result)=>(
      result?.type === resultType
    ))?.query;
    setFinalQuery(resultQuery);
  },[mbtiScore, currentTest])

  //이탈률이 적은 로딩 시간 -> 3.7초
  const loadingTime = 4000; //ms
  useEffect(()=>{
    //resultPage로 보내는 작업
    let timeOut = setTimeout(() => {
      //resultQuery 결과 페이지로 라우팅 하기
      finalQuery && navigate(`/${currentTest?.info?.mainUrl}/result/${finalQuery}`);
    },[loadingTime]);
    
    return () => { //메모리 누수를 막기 위함
      clearTimeout(timeOut);
    };

  },[loadingTime,navigate,finalQuery,currentTest?.info?.mainUrl])

  return <Lottie 
            options={defaultOption}
            height={250}
            width={250}
            style={{marginTop : "10rem"}}
            isClickToPauseDisabled={true} // 이 속성이 클릭 시 멈춤을 방지함
          />;
}

export default Loading;

// Loading Animation
// mbtiScore Calculate -> Result MBTI Type ex. "ENFP"
// N초 후 -> Result Page Routing
// base_url/attackOfTitanMBTI/result/ENFJ