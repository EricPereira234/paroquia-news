import styles from "./viewNews.module.css";
import { useParams } from 'react-router-dom';

export default function ViewsNews() {
    const { id, titulo } = useParams();
    // Simulando recuperação de dados do usuário por ID
    const usuario = { id: parseInt(id), titulo: titulo};

    console.log(id)
    return (
        <div className={styles.cardViews} >
            <label>{titulo}</label>
        </div>
    )
}