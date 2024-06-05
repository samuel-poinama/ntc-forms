import Footer from '../footer'
import Header from './header'
import Navigation from './navigation'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <Navigation />
        <div className="flex flex-col flex-grow">
          <Header />
          <main className="flex-grow p-4 bg-white">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
 