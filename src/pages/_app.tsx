import Layout from "@/components/loyout";

import "@/styles/header.css";
import "@/styles/panel.css";
import "@/styles/userframe.css";
import "@/styles/contact.css";
import "@/styles/navigation.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
