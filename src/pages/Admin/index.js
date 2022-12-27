import "./painel.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import Menu from "../../components/Menu";


//importando banco de dados
import { db } from "../../db/firebaseConection";
import { addDoc, collection, onSnapshot, query, orderBy, doc, deleteDoc } from "firebase/firestore";

export default function Painel() {
    const [tituloAdmin, setTitulo] = useState('');
    const [materia, setMateria] = useState('');

    const [tituloBatismo, setTituloBatismo] = useState('');
    const [materiaBatismo, setMateriaBatismo] = useState('');


    const [tituloCasmento, setTituloCasamento] = useState('');
    const [materiaCasamento, setMateriaCasamento] = useState('');
   
  
    //função que salva as noticias
    async function SalvaRegitro() {
        if (tituloAdmin === '' || materia === '') {
            toast.error('Preencha todos os campos');
            return;
        }


        addDoc(collection(db, "noticias"), {
            titulo: tituloAdmin,
            materia: materia,
            created: new Date(),
        }).then(() => {
            setTitulo('');
            setMateria('');
            toast.success('salvo com sucesso!');
        }).catch((err) => {
            toast.error('que pena não salvou !')
        })


    }





    //função que salva as Reuniões para o batismo
    async function SalvaBatismo() {
        if (tituloBatismo === '' || materiaBatismo === '') {
            toast.error('Preencha todos os campos');
            return;
        }


        addDoc(collection(db, "batismos"), {
            titulo: tituloBatismo,
            materia: materiaBatismo,
            created: new Date(),
        }).then(() => {
            setTituloBatismo('');
            setMateriaBatismo('');
            toast.success('salvo com sucesso!');
        }).catch((err) => {
            toast.error('que pena não salvou !')
        })


    }


     //função que salva as Reuniões para Casamentos
     async function SalvaCasamento() {
        if (tituloCasmento === '' || materiaCasamento === '') {
            toast.error('Preencha todos os campos');
            return;
        }


        addDoc(collection(db, "casamentos"), {
            titulo: tituloCasmento,
            materia: materiaCasamento,
            created: new Date(),
        }).then(() => {
            setTituloCasamento('');
            setMateriaCasamento('');
            toast.success('salvo com sucesso!');
        }).catch((err) => {
            toast.error('que pena não salvou !')
        })


    }




    return (
        <>
         <Menu/>

         <div className="card-painel" >
            <Link to={'/painel'} >Painel</Link>
            <Link to={'/painelReunioes'} >Reunião</Link>
         </div>

            <div className="card-materia" >
                <label>Data do evento</label>
                <input type={'text'} placeholder="Título.."
                    value={tituloAdmin}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <label>Texto da publicação</label>
                <textarea className="text"
                    value={materia}
                    onChange={(e) => setMateria(e.target.value)}
                />

                <button className="btn-salvar" onClick={SalvaRegitro} >Salvar</button>
            </div>

            <div className="card-materia" >
                <label>Batismo</label>
                <input type={'text'} placeholder="Horário"
                    value={tituloBatismo}
                    onChange={(e) => setTituloBatismo(e.target.value)}
                />
                <label>Dia da Reunião </label>
                <textarea className="text"
                    value={materiaBatismo}
                    onChange={(e) => setMateriaBatismo(e.target.value)}
                />

                <button className="btn-salvar" onClick={SalvaBatismo} >Salvar</button>
            </div>

            <div className="card-materia" >
                <label>Casamentos</label>
                <input type={'text'} placeholder="Horário"
                    value={tituloCasmento}
                    onChange={(e) => setTituloCasamento(e.target.value)}
                />
                <label>Dia da Reunião </label>
                <textarea className="text"
                    value={materiaCasamento}
                    onChange={(e) => setMateriaCasamento(e.target.value)}
                />

                <button className="btn-salvar" onClick={SalvaCasamento} >Salvar</button>
            </div>


          
        </>
    )
}