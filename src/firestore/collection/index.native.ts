import { Firestore } from "../instance/index.native";
import { createFactory } from "../../_internal";
import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

const { collection, collectionGroup } = createFactory<Firestore>([
  "collection",
  "collectionGroup",
]);

function getDocs(instance: CollectionReference) {
  return instance.get();
}

type CollectionReference = FirebaseFirestoreTypes.CollectionReference;

export { getDocs, collection, collectionGroup };
export type { CollectionReference };
