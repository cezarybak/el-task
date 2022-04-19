import { Helmet } from "react-helmet";

type SeoType = {
  title: string;
  metaContent: string;
};

export const SEO = ({ title, metaContent }: SeoType) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={metaContent} />
    <meta property="og:type" content="website" />
  </Helmet>
);
