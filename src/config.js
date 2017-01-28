export const cloudServiceSetting = {
  firebase: true,
}

export const auth = process.env.NODE_ENV === 'production' ? {
  firebase: {
    apiKey: 'AIzaSyA7r_EkOsBm2PtBx4GJrbMOqCK3oLPoUyo',
    authDomain: 'twfintech.firebaseapp.com',
    databaseURL: 'https://twfintech.firebaseio.com',
    storageBucket: 'twfintech.appspot.com',
  },
} : {
  firebase: {
    apiKey: 'AIzaSyA7r_EkOsBm2PtBx4GJrbMOqCK3oLPoUyo',
    authDomain: 'twfintech.firebaseapp.com',
    databaseURL: 'https://twfintech.firebaseio.com',
    storageBucket: 'twfintech.appspot.com',
  },
}

export const storageKey = 'set_storage_key'
