import {toast} from "react-toastify";
import { useState, useEffect } from "react";


//importando arquivos 
import Menu from "../../components/Menu";

//importando banco de dados
import { db } from "../../db/firebaseConection";
import { collection, onSnapshot, query, orderBy, doc, deleteDoc } from "firebase/firestore";




export default function Painel() {



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
 
             setLikis(lista);
 
         })

 
     }, []);


     //função de deletar do banco
    async function Deletar(id){
        const docRef = doc(db, "noticias", id);
        await deleteDoc(docRef);
        toast.success(' deletado com sucesso !')
    }

     

    return (
        
        <section className="card-news" >
            <Menu/>
            {links.map((item, index) => (

                <div className="card-image" >
                    <div className="titulo">{item.titulo}</div>
        
                    <button onClick={ ()=> Deletar(item.id)} >Deletar</button>

                </div>

            ))}

        </section>


    )
}