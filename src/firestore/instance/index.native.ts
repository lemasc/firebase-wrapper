import firestore from "@react-native-firebase/firestore";

const getFirestore = firestore;

type Firestore = ReturnType<typeof firestore>;

export { getFirestore };
export type { Firestore };
