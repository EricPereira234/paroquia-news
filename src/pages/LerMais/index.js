import "./lerMais.css";
import { useState, useEffect } from "react";

//importando banco de dados
import { db } from "../../db/firebaseConection";
import { collection, onSnapshot, query, orderBy} from "firebase/firestore";


//importando arquivos
import Header from "../../components/Header";

export default function Ler() {

     //buscando registros no firestory
     const [links, setLikis] = useState([]);

     useEffect(() => {
 
         const linksRef = collection(db, "noticias");
         const queryRef = query(linksRef, orderBy("created", "asc"));
 
         const unsub = onSnapshot(queryRef, (snapshot) => {
             let lista = [];
             snapshot.forEach((doc) => {
                 lista.push({
                     id: doc.id,
                     titulo: doc.data().titulo,
                     materia: doc.data().materia
                 })
             })
 
             setLikis(lista.slice(0,30));
 
         })
 
     }, []);

    return (
        <div className="card-ler">
            <Header />
           
            {links.map((item, index) => (
             
            <div className="card-ler-body" >
                <h3>{item.titulo}</h3>
                desevolvimento da matéria
            </div>
            
            ))}
        
        </div>
    )
}