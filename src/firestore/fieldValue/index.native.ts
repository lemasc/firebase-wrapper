import firestore from "@react-native-firebase/firestore";
import type { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

// Many types needed to rewrite.
import type { Primitive, NestedUpdateFields } from "firebase/firestore";

const { serverTimestamp, arrayRemove, arrayUnion, increment } =
  firestore.FieldValue;

export { serverTimestamp, arrayRemove, arrayUnion, increment };

type FieldValue = FirebaseFirestoreTypes.FieldValue;

type WithFieldValue<T> =
  | T
  | (T extends Primitive
      ? T
      : T extends {}
      ? {
          [K in keyof T]: WithFieldValue<T[K]> | FieldValue;
        }
      : never);

type PartialWithFieldValue<T> =
  | Partial<T>
  | (T extends Primitive
      ? T
      : T extends {}
      ? {
          [K in keyof T]?: PartialWithFieldValue<T[K]> | FieldValue;
        }
      : never);

type Timestamp = FirebaseFirestoreTypes.Timestamp;
type WhereFilterOp = FirebaseFirestoreTypes.WhereFilterOp;

type UpdateData<T> = T extends Primitive
  ? T
  : T extends {}
  ? {
      [K in keyof T]?: UpdateData<T[K]> | FieldValue;
    } & NestedUpdateFields<T>
  : Partial<T>;

export type {
  Timestamp,
  FieldValue,
  WithFieldValue,
  PartialWithFieldValue,
  UpdateData,
  WhereFilterOp,
};
