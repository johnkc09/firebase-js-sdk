/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// eslint-disable-next-line import/no-extraneous-dependencies
import firebase from '@firebase/app-compat';
import { FirebaseNamespace } from '@firebase/app-types';

import { Firestore, IndexedDbPersistenceProvider } from '../src/api/database';

import { registerBundle } from './bundle';
import { configureForFirebase } from './config';
import { name, version } from './package.json';
import { setSDKVersion } from '../src/core/version';
/**
 * Registers the main Firestore ReactNative build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */
export function registerFirestore(instance: FirebaseNamespace): void {
  setSDKVersion(instance.SDK_VERSION);
  configureForFirebase(
    instance,
    (app, firestoreExp) =>
      new Firestore(app, firestoreExp, new IndexedDbPersistenceProvider())
  );
  instance.registerVersion(name, version, 'rn');
}

registerFirestore((firebase as unknown) as FirebaseNamespace);
registerBundle(Firestore);
