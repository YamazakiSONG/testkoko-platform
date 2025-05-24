import { TwitterShareButton, XIcon } from 'react-share';
import { base_url } from '../../App';
import styles from './shareButtonGroup.module.css';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import { memo, useMemo, useCallback } from 'react';
import KakaoShareButton from './KakaoShareButton';

// 언어별 텍스트 객체를 컴포넌트 외부로 이동
const foreignTextsObject = {
  Kor : {
    shareText : "친구에게 공유하기",
    copyLinkText : "URL이 복사되었습니다."
  },
  Eng : {
    shareText : "Share with Friends",
    copyLinkText : "URL copied."
  },
  Jp : {
    shareText : "友達に共有する",
    copyLinkText : "URLがコピーされました."
  },
};

// React 컴포넌트 정의
function ShareButtonGroup({testParam, resultParam, renderTestInfo, lang}) {
  const [_, copy] = useCopyToClipboard();

  // URL을 메모이제이션 (불필요한 문자열 연산 방지)
  const shareUrl = useMemo(() => {
    return `${base_url}/${testParam}/result/${resultParam}`;
  }, [testParam, resultParam]);

  // 언어에 맞는 공유 텍스트를 메모이제이션
  const shareText = useMemo(() => {
    if (!lang) return foreignTextsObject.Kor.shareText;
    return foreignTextsObject[lang]?.shareText || foreignTextsObject.Kor.shareText;
  }, [lang]);

  // 언어에 맞는 복사 알림 텍스트를 메모이제이션
  const copyAlertText = useMemo(() => {
    if (!lang) return foreignTextsObject.Kor.copyLinkText;
    return foreignTextsObject[lang]?.copyLinkText || foreignTextsObject.Kor.copyLinkText;
  }, [lang]);

  // URL 복사 핸들러를 메모이제이션
  const handleCopyUrl = useCallback((e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    copy(shareUrl);
    alert(copyAlertText);
  }, [copy, shareUrl, copyAlertText]);

  const handleShareButtonClick = useCallback((e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
  }, []);

  // 필요한 데이터가 없으면 렌더링하지 않음
  if (!testParam || !resultParam || !renderTestInfo) return null;

  return(
    <div onClick={handleShareButtonClick}>
      <h3>{shareText}</h3>
      <div className={styles.shareButtonDiv} onClick={handleShareButtonClick}>
        <div onClick={handleShareButtonClick}>
          <KakaoShareButton 
            shareUrl={shareUrl}
            title={renderTestInfo?.info?.mainTitle}
            description={renderTestInfo?.info?.subTitle}
            imageUrl={renderTestInfo?.info?.mainImage}
          />
        </div>
        <div onClick={handleShareButtonClick}>
          <TwitterShareButton
            title={renderTestInfo?.info?.mainTitle}
            url={shareUrl}
            hashtags={[renderTestInfo?.info?.mainTitle]}
            onClick={handleShareButtonClick}
          >
            <XIcon round={true} size={44} className={styles.socialMediaIcon}/>
          </TwitterShareButton>
        </div>
        <button 
          className={styles.urlShareButton} 
          onClick={handleCopyUrl}
        >
          URL
        </button>
      </div>
    </div>
  );
}

// memo로 컴포넌트 래핑: React 19에서 권장되는 방식
export default memo(ShareButtonGroup);