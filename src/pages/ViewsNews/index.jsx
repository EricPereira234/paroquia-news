import styles from "./viewNews.module.css";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../db/firebaseConection';

export default function ViewsNews() {
  const { id } = useParams();
  const [materia, setMateria] = useState(null);

  useEffect(() => {
    const buscarDadosMateria = async () => {
      try {
        const materiaDoc = doc(db, 'noticias', id);
        const snapshot = await getDoc(materiaDoc);
        if (snapshot.exists()) {
          setMateria(snapshot.data());
        } else {
          console.log('Matéria não encontrada!.');
        }
      } catch (error) {
        console.error('Erro ao buscar dados da matéria:', error);
      }
    };

    buscarDadosMateria();
  }, [id]);

  if (!materia) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={styles.cardMateria} >
      <h2>{materia.titulo}</h2>
      <img src={materia.url} alt={materia.titulo} className={styles.imgMateria} />
      <p className={styles.texto} >{materia.materia}</p>
    </div>
  );
}