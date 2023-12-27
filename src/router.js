import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//importando arquivos
import Home from "./pages/Home";
import Encontros from "./pages/Encontros";
import Horarios from "./pages/Horarios";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Painel from "./pages/PainelAdmin";
import ReunioesAdmin from "./pages/PainelAdmin/ReunioesAdminPainel";
import ViewsNews from "./pages/ViewsNews";
import Private from "./pages/Routes";
import Erro from "./Erro";



export default function Rota() {
    
    return (
        <Router>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/encontros" element={<Encontros />} />
                <Route path="/horarios" element={<Horarios />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard/painel" element={<Private> <Admin /> </Private> } />
                <Route path="/painel" element={<Private><Painel/></Private>} />
                <Route path="/painelReunioes" element={<Private><ReunioesAdmin/></Private>} />
                <Route path="/viewsnews/:id" element={<ViewsNews/>} />
                <Route path="*" element={<Erro/>} />
            </Routes>

        </Router>
    )
}