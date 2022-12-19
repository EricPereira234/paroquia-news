import "./menu.css";

//importando icones
import { FaHome } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { TfiAgenda } from "react-icons/tfi";


export default function Menu(){
    return(
        <nav className="nav-menu">
         <a href="/" ><FaHome/></a>
         <a href="/horarios" ><BiTimeFive/></a>
         <a href="/encontros" ><TfiAgenda/></a>
        </nav>
    )
}