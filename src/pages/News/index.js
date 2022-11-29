import "./news.css";
import { useState, useEffect } from "react";

//importando banco de dados
import { db } from "../../db/firebaseConection";
import { collection, onSnapshot, query, orderBy, doc, deleteDoc } from "firebase/firestore";

//importando arquivos
import imagem from "../../images/natalSemFome.jpeg";

export default function News() {

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
                     materia: doc.data().materia,
                     foto: doc.data().foto
                 })
             })
 
             setLikis(lista.slice(0,10));
 
         })
 
     }, []);

    return (
        <section className="card-news" >
            
            <a href="/ler" className="card-image" >
                <img src={imagem} />
                <label>Natal sem Fome</label>
            </a>

             {links.map((item,index)=>(
                 <div className="card-news-block" >

                 <div className="card-news-item" >
                     <img src={imagem} /> <label>Titulo</label>
                     <label>{item.materia.substring(0,50)}..</label>
                     <a className="btn-mais" href="/ler" >Leia mais</a>
                 </div>
               
             </div>
             ))}
           


        </section>
    )
}