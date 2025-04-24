import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

const cursosRef = collection(db, 'cursos');

export const getCursos = async () => {
  const snapshot = await getDocs(cursosRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}