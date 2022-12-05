import type { CollectionReference } from "../collection/index.native";
import type { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

function onSnapshot(query: any, ...args: any[]) {
  return query.onSnapshot(...args);
}

export type StaticQuery = {
  type: keyof CollectionReference;
  args: any[];
};

function query(ref: CollectionReference, ...query: StaticQuery[]) {
  // @ts-ignore
  return query.reduce((ref, cur) => ref[cur.type](...cur.args), ref);
}

type Query = FirebaseFirestoreTypes.Query;
type QuerySnapshot = FirebaseFirestoreTypes.QuerySnapshot;

interface Unsubscribe {
  /** Removes the listener when invoked. */
  (): void;
}

export { query, onSnapshot };
export type { Query, QuerySnapshot, Unsubscribe };
