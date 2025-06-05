import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

const cursosRef = collection(db, 'cursos');

// buscar
export const getCursos = async (userId) => {
    const q = query(cursosRef, where('userId', '==', userId))
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
}
// add
export const adicionarCurso =  async (curso, userId) => {
    const docRef = await addDoc(cursosRef,
        {
            ...curso,
            userId
        }
    )
    return docRef.id;
}
// att
export const atualizarCurso = async (id, novosDados) => {
  const cursoRef = doc(db, 'cursos', id);
  await updateDoc(cursoRef, novosDados);
}

// del
export const deletarCurso = async (id) => {
  const cursoRef = doc(db, 'cursos', id);
  await deleteDoc(cursoRef);
}