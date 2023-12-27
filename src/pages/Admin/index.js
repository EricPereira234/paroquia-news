import "./painel.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { v4 as uuidV4 } from 'uuid';

import Menu from "../../components/Menu";


//importando banco de dados
import { db, auth, storage } from "../../db/firebaseConection";
import { signOut } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function Painel() {

    const [tituloAdmin, setTitulo] = useState('');
    const [materia, setMateria] = useState('');
    const [carImages, setCarImages] = useState([]);
    // pegando a url da imagem para salvar no banco
    var valores = carImages.map(function(e) { return e.url; } );
    //console.log(valores[0])
   


    const [tituloBatismo, setTituloBatismo] = useState('');
    const [materiaBatismo, setMateriaBatismo] = useState('');


    const [tituloCasmento, setTituloCasamento] = useState('');
    const [materiaCasamento, setMateriaCasamento] = useState('');



    //função que salva as noticias
    async function SalvaRegitro() {
        

        //salvando texto da notícia
        if (tituloAdmin === '' || materia === '') {
            toast.error('Preencha todos os campos');
            return;
        }


        addDoc(collection(db, "noticias"), {
            titulo: tituloAdmin,
            materia: materia,
            url: valores[0],
            created: new Date(),
        }).then(() => {
            setTitulo('');
            setMateria('');
            toast.success('salvo com sucesso!');
        }).catch((err) => {
            toast.error('que pena não salvou !')
        })




    }


    // araea de upload de imagens
   
    async function handleFile(e) {
        if (e.target.files && e.target.files[0]) {
            const image = e.target.files[0]

            if (image.type === 'image/jpeg' || image.type === 'image/png') {
                await handleUpload(image)
            } else {
                alert("Envie uma imagem jpeg ou png!")
                return;
            }


        }
    }

    async function handleUpload(image) {

        const uidImage = uuidV4();

        const uploadRef = ref(storage, `images/${uidImage}`)

        uploadBytes(uploadRef, image)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    const imageItem = {
                        name: uidImage,
                        previewUrl: URL.createObjectURL(image),
                        url: downloadUrl,
                    }

                    setCarImages([imageItem])
                   


                })
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

    // função que desloga o usuário
    async function logout() {
        await signOut(auth)
        localStorage.clear("@detailUser2");
    }

    return (
        <>
            <Menu />

            <div className="card-painel" >
                <Link to={'/painel'} >Painel</Link>
                <Link to={'/painelReunioes'} >Reunião</Link>
                <Link onClick={logout} >Sair</Link>
            </div>



            <div className="card-materia" >
                <label>Criando Notícias</label>

                <div >
                   
                        
                        <div  className="card-input" >
                            <input type="file" accept="image/*"  onChange={handleFile} />
                        </div>
                 

                    {carImages.map(item => (
                        <div key={item.name}  className="card-img-post" >
                            
                            <img
                                src={item.previewUrl}
                                alt="Foto do carro"
                            />
                        </div>
                    ))}

                </div>

                <input type={'text'} placeholder="Título da notícia..."
                    value={tituloAdmin}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <label>Texto da publicação</label>
                <textarea className="textMateria"
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