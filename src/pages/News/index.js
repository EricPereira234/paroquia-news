import "./news.css";

//importando arquivos
import imagem from "../../images/natalSemFome.jpeg";

export default function News() {
    return (
        <section className="card-news" >
            <div className="card-news-block" >

                <div className="card-news-item" >
                    <img src={imagem} /> <label>Titulo</label>
                    <label>Capanha natal sem fomo da paróquia de cocal</label>
                    <a className="btn-mais" href="/" >Leia mais</a>
                </div>
                <div className="card-news-item" >
                    <img src={imagem} /> <label>Titulo</label>
                    <label>Capanha natal sem fomo da paróquia de cocal</label>
                    <a className="btn-mais" href="/" >Leia mais</a>
                </div>
                <div className="card-news-item" >
                    <img src={imagem} /> <label>Titulo</label>
                    <label>Capanha natal sem fomo da paróquia de cocal</label>
                    <a className="btn-mais" href="/" >Leia mais</a>
                </div>
                <div className="card-news-item" >
                    <img src={imagem} /> <label>Titulo</label>
                    <label>Capanha natal sem fomo da paróquia de cocal</label>
                    <a className="btn-mais" href="/" >Leia mais</a>
                </div>
                <div className="card-news-item" >
                    <img src={imagem} /> <label>Titulo</label>
                    <label>Capanha natal sem fomo da paróquia de cocal</label>
                    <a className="btn-mais" href="/" >Leia mais</a>
                </div>

            </div>



            <div className="card-news-block" >

                <div className="card-news-item" >
                    <img src={imagem} /> <label>Titulo</label>
                    <label>Capanha natal sem fomo da paróquia de cocal</label>
                    <a className="btn-mais" href="/" >Leia mais</a>
                </div>
                <div className="card-news-item" >
                    <img src={imagem} /> <label>Titulo</label>
                    <label>Capanha natal sem fomo da paróquia de cocal</label>
                    <a className="btn-mais" href="/" >Leia mais</a>
                </div>
                <div className="card-news-item" >
                    <img src={imagem} /> <label>Titulo</label>
                    <label>Capanha natal sem fomo da paróquia de cocal</label>
                    <a className="btn-mais" href="/" >Leia mais</a>
                </div>
                <div className="card-news-item" >
                    <img src={imagem} /> <label>Titulo</label>
                    <label>Capanha natal sem fomo da paróquia de cocal</label>
                    <a className="btn-mais" href="/" >Leia mais</a>
                </div>

            </div>

        </section>
    )
}