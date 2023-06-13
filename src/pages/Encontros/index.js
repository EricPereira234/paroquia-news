//nova versão
import "./Encontros.css";
import { useState, useEffect } from "react";

//importando arquivos
import Menu from "../../components/Menu";


//importando banco de dados
import { db } from "../../db/firebaseConection";
import { collection, onSnapshot, query, orderBy} from "firebase/firestore";


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

    return (
        <div className="card-horaios">
            <Menu />
            
            <h3>Reuniões de preparação para o Batismo</h3>
            {links.map((item, index) => (
                <ul>
                    <b>Reuniões</b>

                    <li>{item.materiaBatismo}</li>
                    <li style={{ color: '#F64C00' }} >Horário: {item.tituloBatismo}</li>
                </ul>
            ))}


            <h3>Reuniões de preparação para o Sacramento do Matrimônio</h3>
            {casamento.map((item, index) => (
                <ul>
                    <b>Reunião</b>

                    <li>{item.materiaCasamento}</li>
                    <li style={{ color: '#F64C00' }} >Horário: {item.tituloCasamento}</li>
                </ul>
            ))}
        </div>
    )
}