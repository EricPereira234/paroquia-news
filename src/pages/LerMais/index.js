import "./lerMais.css";


//importando banco de dados
import { db } from "../../db/firebaseConection";
import { collection, onSnapshot, query, orderBy, doc, deleteDoc } from "firebase/firestore";

//importando arquivos
import Header from "../../components/Header";




export default function Ler() {


    const docRef = doc(db, "noticias", id);

    return (
        <div className="card-ler">
            <Header />

         
         
            <div className="card-ler-body" >
                <h3>{docRef.titulo}</h3>
                desevolvimento da matéria
            </div>
            
       
        
        </div>
    )
}