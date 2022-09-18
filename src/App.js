import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Clasico from "./pages/clasico";
import Footer from "./pages/footer";
import Fresa from "./pages/fresa";
import Home from "./pages/home";
import Lucuma from "./pages/lucuma";
import Menta from "./pages/menta";
import ModalCarrito from "./pages/modalCarrito";
import Navbar from "./pages/navbar";

function App() {
  const [Inicio, setInicio] = useState(null);
  const [EstadoModal, CabiarEstadoModal] = useState("Cerrar");
  const [CantProductos, setCantProductos] = useState(0);
  const [CantClasico, setCantClasico] = useState(0);
  const [CantLucuma, setCantLucuma] = useState(0);
  const [CantFresa, setCantFresa] = useState(0);
  const [CantMenta, setCantMenta] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <ModalCarrito
          CabiarEstadoModal={CabiarEstadoModal}
          EstadoModal={EstadoModal}
          CantProductos={CantProductos}
          setCantProductos={setCantProductos}
          setCantClasico={setCantClasico}
          CantClasico={CantClasico}
          setCantLucuma={setCantLucuma}
          CantLucuma={CantLucuma}
          setCantFresa={setCantFresa}
          CantFresa={CantFresa}
          setCantMenta={setCantMenta}
          CantMenta={CantMenta}

        />
        <Navbar
          Inicio={Inicio}
          CantProductos={CantProductos}
          CabiarEstadoModal={CabiarEstadoModal}
        />
        <Routes>
          <Route exact path="/" element={<Home setInicio={setInicio} />} />
          <Route path="/Sabores/Clasico" element={<Clasico
            setInicio={setInicio}
            CantProductos={CantProductos}
            setCantProductos={setCantProductos}
            setCantClasico={setCantClasico}
            CantClasico={CantClasico}
          />} />
          <Route path="/Sabores/Lucuma" element={<Lucuma
            setInicio={setInicio}
            CantProductos={CantProductos}
            setCantProductos={setCantProductos}
            setCantLucuma={setCantLucuma}
            CantLucuma={CantLucuma}
          />}
          />
          <Route path="/Sabores/Fresa" element={<Fresa
            setInicio={setInicio}
            CantProductos={CantProductos}
            setCantProductos={setCantProductos}
            setCantFresa={setCantFresa}
            CantFresa={CantFresa}
          />}
          />
          <Route path="/Sabores/Menta" element={<Menta
            setInicio={setInicio}
            CantProductos={CantProductos}
            setCantProductos={setCantProductos}
            setCantMenta={setCantMenta}
            CantMenta={CantMenta}
          />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
