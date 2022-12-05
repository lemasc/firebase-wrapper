import { Firestore } from "../instance/index.native";
import type { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
import { createFactory } from "../../_internal";

const { doc } = createFactory<Firestore>(["doc"]);

function getDoc(doc: DocumentReference) {
  return doc.get();
}

function setDoc(doc: DocumentReference, data: any, options: any) {
  return doc.set(data, options);
}

function updateDoc(doc: DocumentReference, data: any) {
  return doc.update(data);
}

function deleteDoc(doc: DocumentReference) {
  return doc.delete();
}

export { getDoc, setDoc, updateDoc, deleteDoc, doc };

type DocumentReference = FirebaseFirestoreTypes.DocumentReference;
type DocumentData = FirebaseFirestoreTypes.DocumentData;
type DocumentSnapshot = FirebaseFirestoreTypes.DocumentSnapshot;
type SetOptions = FirebaseFirestoreTypes.SetOptions;

export type { DocumentReference, DocumentData, DocumentSnapshot, SetOptions };
