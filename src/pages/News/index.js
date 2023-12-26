import "./news.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


//importando banco de dados
import { db } from "../../db/firebaseConection";
import { collection, onSnapshot, query, orderBy, doc, deleteDoc } from "firebase/firestore";




export default function News() {


    //buscando registros manchete
    const [links1, setLikis1] = useState([]);

    useEffect(() => {

        const linksRef = collection(db, "noticias");
        const queryRef = query(linksRef, orderBy("created", "desc"));

        const unsub = onSnapshot(queryRef, (snapshot) => {
            let lista = [];
            snapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    titulo: doc.data().titulo,
                    materia: doc.data().materia,
                    url: doc.data().url
                })
            })

            setLikis1(lista.slice(0, 1));

        })


    }, []);


    //buscando registros no firestory
    const [links, setLikis] = useState([]);

    useEffect(() => {

        const linksRef = collection(db, "noticias");
        const queryRef = query(linksRef, orderBy("created", "desc"));

        const unsub = onSnapshot(queryRef, (snapshot) => {
            let lista = [];
            snapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    titulo: doc.data().titulo,
                    materia: doc.data().materia,
                    url: doc.data().url
                })
            })

            setLikis(lista.slice(1, 30));

        })


    }, []);



    return (
        <div className="card-geral">
            {links1.map((item, index) => (
                <Link to={`/viewsnews/${item.id}`} className="manchete" >
                    <div className="card-img" >
                        <img src={item.url} />
                    </div>
                    <label>{item.titulo}</label>
                </Link>
            ))}

            <section className="card-news" >

                {links.map((item, index) => (

                    <Link to={`/viewsnews/${item.id}`} className="card-image" >
                        <img src={item.url} className="img-noticia" />
                        <div className="titulo">{item.titulo}</div>
                        <label  >{item.materia}</label>

                    </Link>

                ))}

            </section>

        </div>


    )
}