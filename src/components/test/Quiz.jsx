import React from 'react';
import { useEffect, useState } from 'react'
import styles from "./quiz.module.css";
import { Progress } from 'antd';
import { arrayShuffler } from '../../tools/tools';

function Quiz({setMode, questions, mbtiScore, setMbtiScore}) {
  const [questionNum, setQuestionNum] = useState(0);
  
  const onOptionClick = (type) => {
    mbtiScore[type] += 1;
    setMbtiScore({...mbtiScore});
    setQuestionNum((prev) => prev + 1);
  }
  
  useEffect(() => {
    if(questionNum === questions.length) {
      setMode("loading");
    }
  }, [questionNum, questions.length, setMode])

  return (
    <div className={styles.quizContainer}>
      <h3 className={styles.questionText}>
        {questions[questionNum]?.question.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h3>
      
      <div>
        {questions[questionNum]?.answers && 
          arrayShuffler(questions[questionNum].answers).map((option) => (
            <button
              className={styles.optionButton}
              onClick={() => onOptionClick(option.type)}
              key={option.content}
            >
              <span>
                {option.content.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </span>
            </button>
          ))
        }
      </div>

      <Progress 
        percent={(questionNum / questions.length) * 100} 
        showInfo={false}
      />
      <h4>
        {questionNum} / {questions.length}
      </h4>
    </div>
  )
}

export default Quiz

// 16 Results
// 12(4 x 3) Questions - Options selection
// E:2 / I: 1 / ... / J: 3 / P: 0
// MBTI Calcul ex. ENFJ