import "./home.css";

//importando arquivos
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import Menu from "../../components/Menu";
import Footer from "../Footer";
import News from "../News";


export default function Home(){
    return(
       <div className="card-body" >
         <Header/>
         <Logo/>
         <Menu/>
         <News/>
         <Footer/>
       </div>
    )
}