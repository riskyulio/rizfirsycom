import PageLayout from "../components/layout/page-layout/PageLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default MyApp;
