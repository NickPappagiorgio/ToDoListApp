// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBGEmS9_UYIXRU-0_MqkSvH4C37a3UXr5M',
    authDomain: 'todolistapp-d0465.firebaseapp.com',
    databaseURL: 'https://todolistapp-d0465.firebaseio.com',
    projectId: 'todolistapp-d0465',
    storageBucket: 'todolistapp-d0465.appspot.com',
    messagingSenderId: '349833614714'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
