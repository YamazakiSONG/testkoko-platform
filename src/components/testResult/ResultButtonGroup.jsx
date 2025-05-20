import {LinkOutlined, RedoOutlined} from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import styles from './resultButtonGroup.module.css';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import {base_url} from "../../App"
import { eventSenderGA } from "../../tools/tools"
import { memo, useCallback, useMemo } from 'react';

// 언어별 텍스트 객체를 컴포넌트 외부로 이동
const foreignTextsObject = {
  Kor : {
    copyLink : "링크 복사",
    redo : "다시하기",
    copyLinkText : "URL이 복사되었습니다."
  },
  Eng : {
    copyLink : "Copy the Link",
    redo : "Re-Do",
    copyLinkText : "URL copied."
  },
  Jp : {
    copyLink : "リンクをコピーする",
    redo : "やり直し",
    copyLinkText : "URLがコピーされました."
  }
};

// React 컴포넌트 정의
function ResultButtonGroup({testParam, resultParam, lang}) {
  const navigate = useNavigate();
  const [_, copy] = useCopyToClipboard();

  // URL을 메모이제이션
  const shareUrl = useMemo(() => {
    return `${base_url}/${testParam}/result/${resultParam}`;
  }, [testParam, resultParam]);

  // 언어에 맞는 버튼 텍스트를 메모이제이션
  const buttonTexts = useMemo(() => {
    if (!lang) return {
      copyLink: foreignTextsObject.Kor.copyLink,
      redo: foreignTextsObject.Kor.redo
    };
    
    return {
      copyLink: foreignTextsObject[lang]?.copyLink || foreignTextsObject.Kor.copyLink,
      redo: foreignTextsObject[lang]?.redo || foreignTextsObject.Kor.redo
    };
  }, [lang]);

  // 언어에 맞는 복사 알림 텍스트를 메모이제이션
  const copyAlertText = useMemo(() => {
    if (!lang) return foreignTextsObject.Kor.copyLinkText;
    return foreignTextsObject[lang]?.copyLinkText || foreignTextsObject.Kor.copyLinkText;
  }, [lang]);

  const onClickRedoButton = useCallback(() => {
    eventSenderGA("Paging","Re-Do Button","Result");
    navigate(`/${testParam}`);
  }, [navigate, testParam]);
  
  const onClickCopyUrlButton = useCallback(() => {
    eventSenderGA("Copy","Url Button","Result");
    copy(shareUrl);
    alert(copyAlertText);
  }, [copy, shareUrl, copyAlertText]);

  // 필요한 데이터가 없으면 렌더링하지 않음
  if (!testParam || !resultParam) return null;

  return (
    <div className={styles.buttonContainer}>
      <div className={styles.upperButtonGroup}>
        <button
          className={styles.upperButton}
          onClick={onClickCopyUrlButton}
        >
          <LinkOutlined />
          <span>{buttonTexts.copyLink}</span>
        </button>
        <button 
          className={styles.upperButton}
          onClick={onClickRedoButton}
        >
          <RedoOutlined />
          <span>{buttonTexts.redo}</span>
        </button>
      </div>
    </div>
  );
}

// memo로 컴포넌트 래핑: React 19에서 권장되는 방식
export default memo(ResultButtonGroup);