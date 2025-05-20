import { Helmet } from "react-helmet";
import { base_url } from "../../App";
import { memo } from "react";

const TestResultMetatagRenderer = memo(({ renderTestInfo, testParam, resultParam }) => {
  if (!renderTestInfo || !renderTestInfo.info) return null;
  
  const { info } = renderTestInfo;
  const resultUrl = `${base_url}/${testParam}/result/${resultParam}`;

  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>{info.mainTitle}</title>
      <meta name="title" content={info.mainTitle} />
      <meta name="description" content={info.subTitle} />
      <meta name="keywords" content={info.keywords} />
      <meta name="creator" content={info.creator} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="canonical"
        href={resultUrl}
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={resultUrl}
      />
      <meta property="og:title" content={info.mainTitle} />
      <meta property="og:description" content={info.subTitle} />
      <meta property="og:image" content={info.thumbImage} />
      <meta property="og:site_name" content={info.creator} />
      <meta property="og:locale" content={info.locale} />
      
      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={resultUrl}
      />
      <meta property="twitter:creator" content={info.creator} />
      <meta property="twitter:title" content={info.mainTitle} />
      <meta
        property="twitter:description"
        content={info.subTitle}
      />
      <meta property="twitter:image" content={info.thumbImage} />
      <meta property="twitter:image:alt" content={info.creator} />
    </Helmet>
  );
});

export default TestResultMetatagRenderer;