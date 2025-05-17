import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, XIcon } from 'react-share';
import { base_url } from '../../App';
import styles from './shareButtonGroup.module.css';
import { useCopyToClipboard } from '@uidotdev/usehooks';

function ShareButtonGroup({testParam, resultParam, renderTestInfo, lang}) {

  const [copiedText, copy]=useCopyToClipboard();

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
  }


  return(
    <div>
      <h3>{lang && foreignTextsObject[lang].shareText}</h3>
      <div className={styles.shareButtonDiv}>
        <FacebookShareButton
          url={`${base_url}/${testParam}/result/${resultParam}`}
          hashtag={`#${renderTestInfo?.info?.mainTitle}`}
        >
          <FacebookIcon round={true} size={44} className={styles.socialMediaIcon}/>
        </FacebookShareButton>
        <TwitterShareButton
          title={renderTestInfo?.info?.mainTitle}
          url={`${base_url}/${testParam}/result/${resultParam}`}
          hashtags={[renderTestInfo?.info?.mainTitle]}  
        >
          <XIcon round={true} size={44} className={styles.socialMediaIcon}/>
        </TwitterShareButton>
        <button className={styles.urlShareButton} onClick={()=>{
         copy(`${base_url}/${testParam}/result/${resultParam}`)
         alert(lang && foreignTextsObject[lang].copyLinkText);
        }}>
          URL
        </button>
        
      </div>
    </div>
  )
}

export default ShareButtonGroup;