import Layout from "@/components/loyout";
import { SessionProvider } from "next-auth/react";
import "@/styles/header.css";
import "@/styles/panel.css";
import "@/styles/userframe.css";
import "@/styles/contact.css";
import "@/styles/navigation.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
