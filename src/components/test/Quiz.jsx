import React from 'react';
import { useEffect, useState } from 'react'
import styles from "./quiz.module.css";
import { Progress } from 'antd';
import { arrayShuffler } from '../../tools/tools';

function Quiz({setMode, questions, scores, setScores, currentTest}) {
  const [questionNum, setQuestionNum] = useState(0);
  
  const onOptionClick = (answer) => {
    const testType = currentTest?.info?.testType;
    
    if (testType === 'MBTI') {
      // MBTI 테스트의 경우
      setScores({
        ...scores,
        [answer.type]: (scores[answer.type] || 0) + 1
      });
    } else if (testType === 'T_PERSONALITY' || testType === 'OLD_MAN') {
      // 점수 합산 방식 테스트의 경우
      setScores({
        ...scores,
        total: (scores.total || 0) + answer.score
      });
    }
    
    setQuestionNum((prev) => prev + 1);
  }
  
  useEffect(() => {
    if(questionNum === questions.length) {
      setMode("loading");
    }
  }, [questionNum, questions.length, setMode])

  const progressPercent = Math.floor((questionNum / questions.length) * 100);

  return (
    <div className={styles.quizContainer}>
      <h3 className={styles.questionText}>
        {questions[questionNum]?.question}
      </h3>
      
      <div style={{ width: '100%' }}>
        {questions[questionNum]?.answers && 
          arrayShuffler(questions[questionNum].answers).map((option) => (
            <button
              className={styles.optionButton}
              onClick={() => onOptionClick(option)}
              key={option.content}
            >
              <span>{option.content}</span>
            </button>
          ))
        }
      </div>

      <div className={styles.progressContainer}>
        <Progress 
          percent={progressPercent}
          showInfo={false}
          strokeColor={{
            '0%': '#87CEEB',
            '100%': '#1E90FF',
          }}
          trailColor="#f0f0f0"
          strokeWidth={8}
        />
        <div className={styles.progressText}>
          {questionNum + 1} / {questions.length}
        </div>
      </div>
    </div>
  )
}

export default Quiz

// 16 Results
// 12(4 x 3) Questions - Options selection
// E:2 / I: 1 / ... / J: 3 / P: 0
// MBTI Calcul ex. ENFJ