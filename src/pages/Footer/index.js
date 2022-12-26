import "./footer.css";

//importando arquivos
import logo from "../../images/logoEric.png";

export default function Footer(){
    return(
        <footer>
          <label>Paróquia Nossa Senhora do Perpétuos Socorro</label>
          <div className="card-logo-footer" >
            Criado por - 
            <img src={logo} /> <span>Eric Pereira</span>
          </div>
          
        </footer>
    )
}