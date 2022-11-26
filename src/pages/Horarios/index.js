import "./horarios.css";
import {AiOutlineArrowLeft} from "react-icons/ai";

//importando arquivos
import Header from "../../components/Header";

export default function Horarios() {
    return (
        <div className="card-horaios">
            <Header />
            <a href="/" className="aut" ><AiOutlineArrowLeft size={25} /></a>
            <h3>Horarios da Matriz</h3>
            <ul>
                <b>Turno Manhã e Tarde</b>
                <li>Domingo 06:00 as 10:30 e das 17:30 as 20:30</li>
                <li style={{ color: 'brown' }} > Segunda-Feira  Fechada</li>
                <li> Terça-Feira 7:00 as 12:00 e das 14:30 as 17:30</li>
                <li> Quarta-Feira 8:00 as 11:00 e das 14:30 as 19:30</li>
                <li> Quinta-Feira 7:00 as 12:00 // fechada a Tarde</li>
                <li> Sexta-Feira 7:00 as 12:00 e das 14:30 as 17:30</li>
                <li> Sábado 7:00 as 11:00 e das 15:30 as 19:00</li>
            </ul>

            <h3>Secretaria Paroquial</h3>
            <ul>
                <b>Turno Manhã e Tarde</b>
                <li> Segunda-Feira 8:00 as 12:00  e das 14:00 as 17:00</li>
                <li> Terça-Feira 8:00 as 12:00 e das 14:00 as 17:00</li>
                <li> Quarta-Feira 8:00 as 12:00 e das 14:00 as 17:00</li>
                <li> Quinta-Feira 8:00 as 12:00 e das 14:00 as 17:00</li>
                <li> Sexta-Feira 8:00 as 12:00 e das 14:00 as 17:00</li>
                <li> Sábado 8:00 as 11:00</li>
            </ul>
        </div>
    )
}