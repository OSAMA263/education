import { Helmet } from "react-helmet-async";

export default function SEOWrapper({ children, title, des, link }) {
  return (
    <>
      <Helmet>
        <title>{`${title ?? ""}`}</title>
        <meta
          name="description"
          content={
            des ??
            "Learn more about education, courses, and resources on our website."
          }
        />
        <link
          rel="canonical"
          href={`https://osama263.github.io/education/#/${link ?? ""}`}
        />
      </Helmet>
      {children}
    </>
  );
}
