import "./erro.css";
import { Link } from "react-router-dom";


export default function Erro(){
    return (
        <div className="card-erro" >
            <h1>404</h1>
            <b>Página não encontrada</b>
            <Link to={'/'} >Voltar</Link>
        </div>
    )
}