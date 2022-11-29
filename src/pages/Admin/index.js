import "./painel.css";
import { useState, useEffect } from "react";
import {toast} from "react-toastify";

//importando banco de dados
import { db } from "../../db/firebaseConection";
import { addDoc, collection, onSnapshot, query, orderBy, doc, deleteDoc } from "firebase/firestore";

export default function Painel() {
    const [tituloAdmin, setTitulo] = useState('');
    const [materia, setMateria] = useState('');
    const [foto, setFoto] = useState('')


     //função que salva as noticias
     async function SalvaRegitro() {
        if(tituloAdmin === '' || setTitulo === ''){
            toast.error('Preencha todos os campos');
            return;
        }

  
        addDoc(collection(db, "noticias"), {
            titulo: tituloAdmin,
            materia: materia,
            foto: foto,
            created: new Date(),
        }).then(()=>{
            setTitulo('');
            setMateria('');
            setFoto('');
            toast.success('salvo com sucesso!');
        }).catch((err)=>{
            toast.error('que pena não salvou !')
        })
       
    }

   
    return (
        <>

            <div className="card-materia" >
                <label>Título da publicação</label>
                <input type={'text'} placeholder="Título.." 
                     value={tituloAdmin}
                     onChange={(e) => setTitulo(e.target.value)}
                />
                <label>Texto da publicação</label>
                <textarea className="text" 
                    value={materia}
                    onChange={(e) => setMateria(e.target.value)}
                />

                <label>Imagem</label>
                <input type={'file'} 
                    value={foto}
                    onChange={(e) => setFoto(e.target.value)}
                />
                <button className="btn-salvar" onClick={SalvaRegitro} >Salvar</button>
            </div>

        </>
    )
}