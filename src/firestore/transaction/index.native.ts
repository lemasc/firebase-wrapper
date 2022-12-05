import { createFactory } from "../../_internal";
import { Firestore } from "../instance/index.native";
import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

const { batch: writeBatch, runTransaction } = createFactory<Firestore>([
  "batch",
  "runTransaction",
]);

export { writeBatch, runTransaction };

type Transaction = FirebaseFirestoreTypes.Transaction;
export type { Transaction };
