import { useState, useEffect } from 'react';
import Intro from './Intro';
import Loading from './Loading';
import Quiz from './Quiz';

function IntroRenderer({ currentTest }){
  // 테스트 점수를 저장할 상태
  const [scores, setScores] = useState({});
  
  // mode 종류 : intro, quiz, loading
  // default mode : intro
  const [mode, setMode] = useState("intro");

  // 테스트 타입에 따라 초기 점수 상태 설정
  useEffect(() => {
    if (currentTest?.info?.testType === 'MBTI') {
      setScores({
        E: 0, I: 0,
        N: 0, S: 0,
        T: 0, F: 0,
        J: 0, P: 0,
      });
    } else if (currentTest?.info?.testType === 'T_PERSONALITY' || currentTest?.info?.testType === 'OLD_MAN') {
      setScores({ total: 0 });
    }
  }, [currentTest?.info?.testType]);

  if(mode === 'intro'){
    return <Intro info={currentTest?.info} setMode={setMode}/>; 
  } else if (mode === 'quiz'){
    return <Quiz
              questions={currentTest?.questions}
              scores={scores}
              setScores={setScores}
              setMode={setMode}
              currentTest={currentTest}
            />;
  } else if (mode === 'loading'){
    return <Loading scores={scores} currentTest={currentTest}/>;
  } else {
    return <div>잘못된 페이지입니다!</div>
  }
}

export default IntroRenderer;