import { useEffect } from "react";

const AdsenseUnit = ({ slot }) => {
  useEffect(() => {
    if (window) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <div>
      <ins 
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3520081564557367"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </div>
  );
};

export default AdsenseUnit;

// 좋은 퀄리티의 콘텐츠(텍스트+이미지)
// 어느정도 기간이 지난 도메인