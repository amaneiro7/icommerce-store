import Header from './Header'
import Footer from './Footer'
import './Layout.css'

function Layout ({ children }) {
  return (
    <main className='Main'>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
