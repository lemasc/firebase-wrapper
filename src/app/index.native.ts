import firebaseApp, { ReactNativeFirebase } from "@react-native-firebase/app";
import { checkDefaultApp } from "./helpers";

export async function initializeApp(
  options: ReactNativeFirebase.FirebaseAppOptions,
  nameOrConfig?: string | ReactNativeFirebase.FirebaseAppConfig
): Promise<ReactNativeFirebase.FirebaseApp> {
  const { isDefaultApp, withConfig } = checkDefaultApp(nameOrConfig);
  if (isDefaultApp) {
    // Initializing [DEFAULT] app. Return as is
    if (withConfig) {
      console.warn(
        `[@lemasc/firebase-wrapper] Initializing default app with custom configuration is not possible. See https://rnfirebase.io/app/json-config for more information.`
      );
    }
    return firebaseApp.app();
  }
  // @ts-ignore
  return firebaseApp.initializeApp(options, nameOrConfig);
}
const getApp = firebaseApp.app;
const getApps = () => firebaseApp.apps;

type FirebaseApp = ReactNativeFirebase.FirebaseApp;
export { getApp, getApps };
export type { FirebaseApp };
