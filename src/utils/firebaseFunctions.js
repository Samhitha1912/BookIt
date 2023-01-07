import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../components/firebase.config";

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "BookItem", `${Date.now()}`), data, {
    merge: true,
  });
};

// getall book items
export const getAllBookItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "bookItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};
