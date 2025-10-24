import { Helmet } from "react-helmet-async";

export default function SEOWrapper({ children, title, des, link = "" }) {
  return (
    <>
      <Helmet>
        <title>{`${title ?? ""} | Edu`}</title>
        <meta
          name="description"
          content={
            des ??
            "Learn more about education, courses, and resources on our website."
          }
        />
        <link
          rel="canonical"
          href={`${link}`}
        />
      </Helmet>
      {children}
    </>
  );
}
