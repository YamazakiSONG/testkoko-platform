import { useEffect, memo } from 'react';
import styled from 'styled-components';
import styles from './shareButtonGroup.module.css';

const KakaoButton = styled.button`
  border: none;
  background-color: #FEE500;
  cursor: pointer;

  img {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 768px) {
    img {
      width: 24px;
      height: 24px;
    }
  }
`;

function KakaoShareButton({ shareUrl, title, description, imageUrl }) {
  useEffect(() => {
    // 카카오 SDK 스크립트 로드
    const script = document.createElement('script');
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.5/kakao.min.js";
    script.integrity = "sha384-dok87au0gKqJdxs7msEdBPNNKSRT+/mhTVzq+qOhcL464zXwvcrpjeWvyj1kCdq6";
    script.crossOrigin = "anonymous";
    script.async = true;

    script.onload = () => {
      // SDK 로드 완료 후 초기화
      window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleKakaoShare = (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: description,
          imageUrl: imageUrl,
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
        buttons: [
          {
            title: '결과 보기',
            link: {
              mobileWebUrl: shareUrl,
              webUrl: shareUrl,
            },
          },
        ],
      });
    }
  };

  return (
    <KakaoButton 
      onClick={handleKakaoShare}
      className={styles.shareButton}
    >
      <img 
        src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_small.png"
        alt="카카오톡 공유하기"
      />
    </KakaoButton>
  );
}

export default memo(KakaoShareButton); 