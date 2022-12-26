
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {FiTrash2 } from "react-icons/fi";
import {toast} from "react-toastify";

//importando arquivos
import Menu from "../../../components/Menu";


//importando banco de dados
import { db } from "../../../db/firebaseConection";
import { addDoc, collection, onSnapshot, query, orderBy, doc, deleteDoc } from "firebase/firestore";


export default function Encontros() {

    //buscando registros no firestory para batizados
    const [links, setLikis] = useState([]);

    useEffect(() => {

        const linksRef = collection(db, "batismos");
        const queryRef = query(linksRef, orderBy("created", "asc"));

        const unsub = onSnapshot(queryRef, (snapshot) => {
            let lista = [];
            snapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    tituloBatismo: doc.data().titulo,
                    materiaBatismo: doc.data().materia
                })
            })

            setLikis(lista.slice(0.1));

        })


    }, []);



    //buscando registros no firestory para casamentos
    const [casamento, setCasamento] = useState([]);

    useEffect(() => {

        const linksRef = collection(db, "casamentos");
        const queryRef = query(linksRef, orderBy("created", "asc"));

        const unsub = onSnapshot(queryRef, (snapshot) => {
            let lista = [];
            snapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    tituloCasamento: doc.data().titulo,
                    materiaCasamento: doc.data().materia
                })
            })

            setCasamento(lista.slice(0.1));

        })


    }, []);

    //função de deletar do banco collection batismos
    async function Deletar2(id){
        const docRef = doc(db, "batismos", id);
        await deleteDoc(docRef);
        toast.success('Link deletado com sucesso !')
    }

    //função de deletar do banco collection casamentos
    async function Deletar(id){
        const docRef = doc(db, "casamentos", id);
        await deleteDoc(docRef);
        toast.success('Link deletado com sucesso !')
    }

    return (
        <div className="card-horaios">
            <Menu />
            
            <h3>Reuniões de preparação para o Batismo</h3>
            {links.map((item, index) => (
                <ul>
                    <b>Reuniões</b>

                    <li>{item.materiaBatismo}</li>
                    <li style={{ color: 'brown' }} >Horário: {item.tituloBatismo}</li>
                    <button  onClick={() => Deletar2(item.id)} >
                        <FiTrash2 size={18} color="#000" />
                    </button>
                </ul>
            ))}


            <h3>Reuniões de preparação para o Sacramento do Matrimônio</h3>
            {casamento.map((item, index) => (
                <ul>
                    <b>Reuniões</b>

                    <li>{item.materiaCasamento}</li>
                    <li style={{ color: 'brown' }} >Horário: {item.tituloCasamento}</li>
                    <button  onClick={() => Deletar(item.id)} >
                        <FiTrash2 size={18} color="#000" />
                    </button>
                </ul>
            ))}
        </div>
    )
}