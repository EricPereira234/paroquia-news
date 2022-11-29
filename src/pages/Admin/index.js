import "./painel.css";

export default function Painel(){
    return(
        <>
        
        <div className="card-materia" >
            <label>Título da publicação</label>
            <input type={'text'}  placeholder="Título.." />
            <label>Texto da publicação</label>
            <textarea  className="text" />

            <label>Imagem</label>
            <input type={'file'} />
        </div>

        </>
    )
}