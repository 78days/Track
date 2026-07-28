import Backgroundheading from './Backgroundheading'
import Footer from './Footer'
import Header from './Header'
import Itemlist from './Itemlist'
import Sidebar from './Sidebar'
const App = () => {
  return (
    <>

    <Backgroundheading/>
    <main>
      <Header/>
      <Sidebar/>
      <Itemlist/>
    </main>
    <Footer/>
    </>
  )
}

export default App