import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//importando arquivos
import Home from "./pages/Home";
import Encontros from "./pages/Encontros";
import Horarios from "./pages/Horarios";


export default function Rota(){
    return(
        <Router>

            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/encontros" element={<Encontros/>} />
                <Route path="/horarios" element={<Horarios/>} />
                <Route path="*"  element={<h1>404</h1>} />
            </Routes>

        </Router>
    )
}