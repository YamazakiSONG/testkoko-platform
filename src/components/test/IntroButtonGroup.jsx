import React from "react";
import { base_url } from "../../App";
import { LinkOutlined, HomeOutlined } from "@ant-design/icons";
import { eventSenderGA } from "../../tools/tools";
import { useNavigate } from "react-router-dom";
import { useCopyToClipboard } from '@uidotdev/usehooks';
import styles from "./introButtonGroup.module.css";

const IntroButtonGroup = ({ testParam, lang }) => {
  
  const navigate = useNavigate();
  const [copiedText, copy]=useCopyToClipboard();
  
  const foreignTextsObject = {
    Kor: {
      copyLink: "링크 복사",
      goToHome: "다른 테스트 하러가기",
    },
    Eng: {
      copyLink: "Copy the Link",
      goToHome: "Go to Other Tests",
    },
    Jp: {
      copyLink: "リンクをコピーする",
      goToHome: "別のテストをしに行く",
    },
  };
  
  const onClickCopyUrlButton = () => {
    copy(`${base_url}/${testParam}`);
    alert("링크가 복사되었습니다.");
    eventSenderGA("Copy", "Copy Url Button", "Intro");
  };

  const onClickGoHomeButton = () => {
    navigate("/");
  };

  return (
    <div className={styles.buttonContainer}>
          <button className={styles.upperButton} onClick={onClickCopyUrlButton}>
            <LinkOutlined />
        <span>{lang && foreignTextsObject[lang]?.copyLink}</span>
          </button>
        <button className={styles.bottomButton} onClick={onClickGoHomeButton}>
          <HomeOutlined /> 
        <span>{lang && foreignTextsObject[lang]?.goToHome}</span>
        </button>
    </div>
  );
};

export default IntroButtonGroup;