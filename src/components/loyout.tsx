import Footer from './footer'
import Header from './header'
import { ReactNode } from 'react'
 
export default function Layout({ children } : { children: ReactNode }) {
  return (
    <div>
    <Header />
    <main>{ children }</main>
    <Footer />
    </div>
  )
}