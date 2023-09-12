//import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';

/* import { initializeAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
 */
export const firebaseConfig = initializeApp({    
  apiKey: "AIzaSyDL_JbnvxBtLaKcd2VQbn9LyTiUOTP_Lvk",
  authDomain: "movie4pps.firebaseapp.com",
  databaseURL: "https://movie4pps-default-rtdb.firebaseio.com",
  projectId: "movie4pps",
  storageBucket: "movie4pps.appspot.com",
  messagingSenderId: "253150873253",
  appId: "1:253150873253:web:df2319f5bb28d16426ef4c"
});

//initialize Firebase 

/* const auth = initializeAuth(firebaseConfig);
setPersistence(auth, browserLocalPersistence, AsyncStorage);  */

/* export const auth = initializeAuth( firebaseConfig, {
    persistence: getReactNativePersistence(AsyncStorage),
}); */

export default firebaseConfig;
