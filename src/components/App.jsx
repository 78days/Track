import Backgroundheading from "./Backgroundheading";
import Footer from "./Footer";
import Header from "./Header";
import Itemlist from "./Itemlist";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <Backgroundheading />

      <main>
        <Header />
        <Itemlist />
        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;
