import { getFirestore, Firestore, query, collection, getDocs, getDoc, doc, addDoc } from 'firebase/firestore';
import { map } from 'lodash'
import firebaseApp from './fbase';

class ApiClient {
  private static _store: Firestore = getFirestore(firebaseApp);

  public static async get<T>(table: string, options?: { id: string }): Promise<T> {
    if (options?.id) {
      const docRef = doc(ApiClient._store, table, options.id);
      const snapshot = await getDoc(docRef);

      if (snapshot.exists()) return { id: options.id, ...snapshot.data() } as unknown as T;
    }

    const q = query(collection(ApiClient._store, table));
    const snapshot = await getDocs(q);

    return map(snapshot.docs, (doc) => ({ id: doc.id, ...doc.data() })) as unknown as T;
  }

  public static async post(table: string, data: any): Promise<string> {
    const newDocument = await addDoc(collection(ApiClient._store, table), data);

    return newDocument.id;
  }
}

export default ApiClient;
