import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//importando arquivos
import Home from "./pages/Home";


export default function Rota(){
    return(
        <Router>

            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="*"  element={<h1>404</h1>} />
            </Routes>

        </Router>
    )
}