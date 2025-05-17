import { Helmet } from "react-helmet";
import { base_url } from "../../App";

const TestResultMetatagRenderer = ({ renderTestInfo }) => {

  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>{renderTestInfo?.info?.mainTitle}</title>
      <meta name="title" content={renderTestInfo?.info?.mainTitle} />
      <meta name="description" content={renderTestInfo?.info?.subTitle} />
      <meta name="keywords" content={renderTestInfo?.info?.keywords} />
      <meta name="creator" content={renderTestInfo?.info?.creator} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="canonical"
        href={base_url + `/${renderTestInfo?.info?.mainUrl}`}
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={base_url + `/${renderTestInfo?.info?.mainUrl}`}
      />
      <meta property="og:title" content={renderTestInfo?.info?.mainTitle} />
      <meta property="og:description" content={renderTestInfo?.info?.subTitle} />
      <meta property="og:image" content={renderTestInfo?.info?.thumbImage} />
      <meta property="og:site_name" content={renderTestInfo?.info?.creator} />
      <meta property="og:locale" content={renderTestInfo?.info?.locale} />
      
      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={base_url + `/${renderTestInfo?.info?.mainUrl}`}
      />
      <meta property="twitter:creator" content={renderTestInfo?.info?.creator} />
      <meta property="twitter:title" content={renderTestInfo?.info?.mainTitle} />
      <meta
        property="twitter:description"
        content={renderTestInfo?.info?.subTitle}
      />
      <meta property="twitter:image" content={renderTestInfo?.info?.thumbImage} />
      <meta property="twitter:image:alt" content={renderTestInfo?.info?.creator} />
    </Helmet>
  );
};

export default TestResultMetatagRenderer;