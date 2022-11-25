import "./header.css";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";


export default function Header() {
    let data = new Date();
    let Sm = data.getDay();
    let DD = data.getDate()
    let MM = data.getMonth();
    let AA = data.getFullYear();
    let semana;
    let mes;

    //logica da data do inicio da página
    switch (Sm) {
        case 1:
            semana = 'Segunda-feira'
            break;
        case 2:
            semana = 'Terça-feira'
            break;
        case 3:
            semana = 'Quarta-feira'
            break;
        case 4:
            semana = 'Quinta-feira'
            break;
        case 5:
            semana = 'Sexta-feira'
            break;
        case 6:
            semana = 'Sábado'
            break;
        default:
            semana = 'Domingo'
    }

    switch (MM) {
        case 1:
            mes = 'Fevereiro'
            break;
        case 2:
            mes = 'Março'
            break;
        case 3:
            mes = 'Abril'
            break;
        case 4:
            mes = 'Maio'
            break;
        case 5:
            mes = 'Junho'
            break;
        case 6:
            mes = 'Julho'
            break;
        case 7:
            mes = 'Agosto'
            break;
        case 8:
            mes = 'Setembro'
            break;
        case 9:
            mes = 'Outubro'
            break;
        case 10:
            mes = 'Novembro'
            break;
        case 1:
            mes = 'Dezembro'
            break;

        default:
            semana = 'Janeiro'
    }
    //fim 



    return (
        <nav className="card-header" >
            <div className="card-date">
                {semana} - {DD} de {mes} de {AA}
            </div>
            <b>Paróquia Nossa Senhora do Perpétuo Socorro Cocal-PI</b>
            <div className="card-social">
                <a href="/" ><BsFacebook size={15} /></a>
                <a href="/" > <FaInstagram size={15} /></a>
                <a href="/" > <ImWhatsapp size={15} /></a>
            </div>
        </nav>
    )
}