import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//importando arquivos
import Home from "./pages/Home";
import Encontros from "./pages/Encontros";
import Horarios from "./pages/Horarios";
import LerMais from "./pages/LerMais";
import Login from "./pages/Login";
import Admin from "./pages/Admin";


export default function Rota(){
    return(
        <Router>

            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/encontros" element={<Encontros/>} />
                <Route path="/horarios" element={<Horarios/>} />
                <Route path="/ler:id" element={<LerMais/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/dashboad" element={<Admin/>} />
                <Route path="*"  element={<h1>404</h1>} />
            </Routes>

        </Router>
    )
}