import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

const cursosRef = collection(db, 'cursos');

// buscar
export const getCursos = async () => {
  const snapshot = await getDocs(cursosRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// add
export const adicionarCurso = async (curso) => {
  const docRef = await addDoc(cursosRef, curso);
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