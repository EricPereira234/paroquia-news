import "./header.css";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

import { useState } from "react";


export default function Header() {
    let data = new Date();
    let dia = data.getDay();
    let semana;

    switch (dia) {
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
      
     
    const [Data , setData] = useState(semana);

    return (
        <nav className="card-header" >
            <div className="card-date">
                {Data}
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