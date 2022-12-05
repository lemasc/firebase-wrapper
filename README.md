# @lemasc/firebase-wrapper

This library provides a minimum, tree-shakable API that wraps various functions of the Firebase SDKs (as needed by the RianArai project) and make sure that it's compatiable with both namespaced version (currently on React Native) and modular version (on the web).

## Installation

Install the library first.

```sh
npm install @lemasc/firebase-wrapper
```

This library adds compatibilty while preserving tree shaking benefits by using **resolve extensions** and **module alias**.

Depending on your framework and tools, this configuration might be different.

### With React Native

This library already provides support for React Native. By default we expect that you use

- `react-native-firebase` (Namespaced version) on mobile
- `firebase` (Modular version) on the Web

If you are using these dependencies, you are ready! Skip to the Usage section and it should work out of the box.


## Usage

```js
import { initializeApp, getApps, getApp } from "@lemasc/firebase-wrapper/app";
import { 
  getAuth, 
  // Most functions should also worked!
  signInWithCredential 
} from "@lemasc/firebase-wrapper/app"

// Your firebase config here.
const firebaseConfig = { ... }

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
