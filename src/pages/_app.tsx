import Layout from "@/components/loyout"
import { SessionProvider } from "next-auth/react"
import "@/styles/globals.css"
import "@/styles/header.css"
import "@/styles/footer.css"
import "@/styles/panel.css"
import "@/styles/contact.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
