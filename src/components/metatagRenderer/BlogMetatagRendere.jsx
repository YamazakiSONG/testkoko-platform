import { Helmet } from "react-helmet";
import { base_url } from "../../App";

const BlogMetatagRenderer = ({ content }) => {

  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>{content?.title}</title>
      <meta name="title" content={content?.title} />
      <meta name="description" content={content?.description} />
      <meta name="keywords" content={content?.keywords} />
      <meta name="creator" content={content?.creator} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="canonical"
        href={base_url + `/blog/${content?.testUrl}`}
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={base_url + `/blog/${content?.testUrl}`}
      />
      <meta property="og:title" content={content?.title} />
      <meta property="og:description" content={content?.description} />
      <meta property="og:image" content={content?.testImage} />
      <meta property="og:site_name" content={content?.creator} />
      <meta property="og:locale" content={content?.locale} />
      
      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={base_url + `/blog/${content?.testUrl}`}
      />
      <meta property="twitter:creator" content={content?.creator} />
      <meta property="twitter:title" content={content?.title} />
      <meta
        property="twitter:description"
        content={content?.description}
      />
      <meta property="twitter:image" content={content?.testImg} />
      <meta property="twitter:image:alt" content={content?.creator} />
    </Helmet>
  );
};

export default BlogMetatagRenderer;