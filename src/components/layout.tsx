import Footer from './footer'
import Header from './header'
import { ReactNode } from 'react'
import PanelRouter from './panel/layout'
import { useRouter } from 'next/router'
 
export default function Layout({ children } : { children: ReactNode }) {
  const router = useRouter()

  if (router.pathname.includes('/panel')) {
    return <PanelRouter>{ children }</PanelRouter>
  }

  return (
    <div>
      <Header />
        <main>{ children }</main>
      <Footer />
    </div>
  )
}