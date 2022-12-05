import {
  FirebaseApp,
  FirebaseAppSettings,
  FirebaseOptions,
  initializeApp as _initializeApp,
} from "firebase/app";
import { ConfigWithName } from "./helpers"

/**
 * Create (and initialize) a FirebaseApp.
 *
 * @param options Options to configure the services used in the App.
 */
 export function initializeApp(
  options: FirebaseOptions
): FirebaseApp;

/**
 * Create (and initialize) a FirebaseApp.
 *
 * @param options Options to configure the services used in the App.
 * @param config The optional config for your firebase app
 */
export function initializeApp<
  Config extends FirebaseAppSettings = FirebaseAppSettings,
  Returns = Config extends ConfigWithName ? Promise<FirebaseApp> : FirebaseApp
>(
  options: FirebaseOptions,
  config: Config
): Returns;

/**
 * Create (and initialize) a FirebaseApp.
 *
 * @param options Options to configure the services used in the App.
 * @param name The optional name of the app to initialize ('[DEFAULT]' if
 * omitted)
 */
export function initializeApp(
  options: FirebaseOptions,
  name: string
): Promise<FirebaseApp>;

export function initializeApp(
  options: FirebaseOptions,
  nameOrConfig?: any
): FirebaseApp | Promise<FirebaseApp> {
  return _initializeApp(options, nameOrConfig)
}

export { getApps, getApp } from "firebase/app";
export type { FirebaseApp } from "firebase/app"
