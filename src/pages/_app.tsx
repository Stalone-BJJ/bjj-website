import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import pagetitle from "~/utils/pagetitle";
import { useRouter } from "next/router";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const { asPath } = useRouter();

  const title = process.env.NEXT_PUBLIC_PAGETITLE;
  const description =
    "Brazilian Jiu-Jitsu for everyone. Getting started at Stalone BJJ Academy is easy. Book your free trial class today.";
  const img = "/images/og2.png";
  const domain = "https://stalonebjj.com"; // this one is a bit trickier to do tidily; should pref get server url for page
  const url = domain + asPath;

  return (
    <>
      <Head>
        <title>{pagetitle()}</title>
        <link href="/static/favicon.ico" rel="shortcut icon" />
        <meta content="website" property="og:type" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={title} property="og:title" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="description" />
        <meta content={description} name="twitter:description" />
        <meta content={description} property="og:description" />
        <meta content={img} property="og:image" />
        <meta content={img} name="twitter:image" />
        <meta content={domain} property="twitter:domain" />
        <meta content={url} property="og:url" />
        <meta content={url} property="twitter:url" />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
