import data from "../public/data.json";
import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import "../styles/globals.css";

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
              width: 800,
              height: 420,
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
          cardType: "summary_large_image",
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
