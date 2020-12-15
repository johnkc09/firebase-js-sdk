## API Report File for "@firebase/messaging-exp"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { FirebaseApp } from '@firebase/app-types-exp';
import { FirebaseMessaging } from '@firebase/messaging-types-exp';
import { MessagePayload } from '@firebase/messaging-types-exp';
import { NextFn } from '@firebase/util';
import { Observer } from '@firebase/util';
import { Unsubscribe } from '@firebase/util';

// @public (undocumented)
export function deleteToken(messaging: FirebaseMessaging): Promise<boolean>;

// @public (undocumented)
export function getMessaging(app: FirebaseApp): FirebaseMessaging;

// @public (undocumented)
export function getToken(messaging: FirebaseMessaging, options?: {
    vapidKey?: string;
    swReg?: ServiceWorkerRegistration;
}): Promise<string>;

// @public (undocumented)
export function onMessage(messaging: FirebaseMessaging, nextOrObserver: NextFn<MessagePayload> | Observer<MessagePayload>): Unsubscribe;


// (No @packageDocumentation comment for this package)

```