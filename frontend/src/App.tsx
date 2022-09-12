import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./componentes/header"
import SalesCard from "./componentes/SalesCard"

function App() {
  return(
    <>
    <ToastContainer />
      <Header/>
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </> // para puxar mais de uma tag tem q abrir <> </> e colocar o código no meio 
  )
}

export default App
