import { CollectionReference } from "../collection/index.native";
import type { StaticQuery } from "../query/index.native";
import type { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

function createQueryFactory(
  methods: QueryConstraintType[]
): Record<QueryConstraintType, (...args: any[]) => StaticQuery> {
  return Object.fromEntries(
    methods.map((type) => [
      type,
      (...args: any[]) => ({
        type,
        args,
      }),
    ])
  ) as any;
}

const { where, orderBy, startAt, endAt, startAfter, endBefore, limit } =
  createQueryFactory([
    "where",
    "orderBy",
    "startAt",
    "endAt",
    "startAfter",
    "endBefore",
    "limit",
    "limitToLast",
  ]);

export { where, orderBy, startAt, endAt, startAfter, endBefore, limit };

type FieldPath = FirebaseFirestoreTypes.FieldPath;

/**
 * The direction of a {@link orderBy} clause is specified as 'desc' or 'asc'
 * (descending or ascending).
 */
type OrderByDirection = "desc" | "asc";

export abstract class QueryConstraint {
  /** The type of this query constraints */
  abstract readonly type: QueryConstraintType;
}

/** Describes the different query constraints available in this SDK. */
type QueryConstraintType =
  | "where"
  | "orderBy"
  | "limit"
  | "limitToLast"
  | "startAt"
  | "startAfter"
  | "endAt"
  | "endBefore";

export type { FieldPath, OrderByDirection, QueryConstraintType };
