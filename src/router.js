import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//importando arquivos
import Home from "./pages/Home";
import Encontros from "./pages/Encontros";
import Horarios from "./pages/Horarios";
import LerMais from "./pages/LerMais";
import Login from "./pages/Login";


export default function Rota(){
    return(
        <Router>

            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/encontros" element={<Encontros/>} />
                <Route path="/horarios" element={<Horarios/>} />
                <Route path="/ler" element={<LerMais/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="*"  element={<h1>404</h1>} />
            </Routes>

        </Router>
    )
}