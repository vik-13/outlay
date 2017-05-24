// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAVdLc4U8vkAMhjDPn5Yu3wrYnhPw5T8CE',
    authDomain: 'my-wallet-c466c.firebaseapp.com',
    databaseURL: 'https://my-wallet-c466c.firebaseio.com',
    projectId: 'my-wallet-c466c',
    storageBucket: 'my-wallet-c466c.appspot.com',
    messagingSenderId: '109350421071'
  }
};
