import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
const app = firebase.initializeApp({
  apiKey: "AIzaSyDEfJ97g753qDLm7vCVFWxdHA9bWthvDxw",
  authDomain: "firegram-socialmedia-app.firebaseapp.com",
  projectId: "firegram-socialmedia-app",
  storageBucket: "firegram-socialmedia-app.appspot.com",
  messagingSenderId: "1054218056015",
  appId: "1:1054218056015:web:9131b2815ba011c859553a"
})
export const auth = app.auth()
export default app