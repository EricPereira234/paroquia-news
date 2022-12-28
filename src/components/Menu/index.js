import "./menu.css";
import { Link } from "react-router-dom";

//importando icones
import { FaHome } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { TfiAgenda } from "react-icons/tfi";
import { RiLoginCircleFill } from "react-icons/ri";


export default function Menu(){
    return(
        <nav className="nav-menu">
         <Link to="/" ><FaHome/></Link>
         <Link to="/horarios" ><BiTimeFive/></Link>
         <Link to="/encontros" ><TfiAgenda/></Link>
         <Link to="/login" ><RiLoginCircleFill/></Link>
        </nav>
    )
}