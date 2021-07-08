import { useState } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Loader from "@/components/Loader";
import "@/styles/globals.css";

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
    setLoading(false);
  });
  return (
    <Layout>
      <SEO title={process.env.siteTitle} />
      {loading && <Loader />}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
