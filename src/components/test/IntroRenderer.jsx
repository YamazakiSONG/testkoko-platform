import { useState } from 'react';
import Intro from './Intro';
import Loading from './Loading';
import Quiz from './Quiz';

function IntroRenderer({ currentTest }){

  //MBTI 점수판
  const [mbtiScore, setMbtiScore] = useState({
    E: 0,
    I: 0,
    N: 0,
    S: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  })
  
  //mode 종류 : intro, quiz, loading
  //default mode : intro
  const [mode, setMode] = useState("intro");

  if(mode === 'intro'){
    return <Intro info={currentTest?.info} setMode={setMode}/>; 
  } else if (mode === 'quiz'){
    return <Quiz
              questions={currentTest?.questions}
              mbtiScore={mbtiScore}
              setMbtiScore={setMbtiScore}
              setMode={setMode}
            />;
  } else if (mode === 'loading'){
    return <Loading mbtiScore={mbtiScore} currentTest={currentTest}/>;
  } else {
    return <div>잘못된 페이지입니다!</div>
  }
}

export default IntroRenderer;