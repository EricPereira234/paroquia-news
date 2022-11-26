import "./Encontros.css";
import Header from "../../components/Header";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Encontros(){
    return (
        <div className="card-horaios">
        <Header />
        <a href="/" className="aut" ><AiOutlineArrowLeft size={25} /></a>
        <h3>Reuniões de preparação para o Batismo</h3>
        <ul>
            <b>Reuniões</b>
            <li>Dia 04/12 a 11/12 de Dezembro na Capela de São Francisco Av: Raimundo Alves Pereira</li>
            <li style={{ color: 'brown' }} > Horáio: 08:00h</li>
        </ul>


        <h3>Reuniões de preparação para o Sacramento do Matrimônio</h3>
        <ul>
            <b>Reuniões</b>
            <li>Dia 04/12 a 11/12 de Dezembro na Capela de São Francisco Av: Raimundo Alves Pereira</li>
            <li style={{ color: 'brown' }} > Horáio: 08:00h</li>
        </ul>
        </div>
    )
}