import data from "../public/data.json";
import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title={data.name}
        titleTemplate={data.name}
        defaultTitle={data.name}
        description={data.about}
        canonical={data.website}
        openGraph={{
          url: data.website,
          title: data.name,
          description: data.about,
          images: [
            {
              url: `${data.website}/logo.png`,
              width: 150,
              height: 150,
              alt: data.name,
            },
          ],
          profile: {
            firstName: "Abdella",
            gender: "Male",
            lastName: "Solomon",
            username: "abdesol",
          },
        }}
        twitter={{
          handle: "@AbdellaSolomon",
          site: "@AbdellaSolomon",
          cardType: "app",
        }}
      />
      <Head>
        <link rel="shortcut icon" href="/logo.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
