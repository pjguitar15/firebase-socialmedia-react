import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const app = firebase.initializeApp({
  apiKey: "AIzaSyDEfJ97g753qDLm7vCVFWxdHA9bWthvDxw",
  authDomain: "firegram-socialmedia-app.firebaseapp.com",
  projectId: "firegram-socialmedia-app",
  storageBucket: "firegram-socialmedia-app.appspot.com",
  messagingSenderId: "1054218056015",
  appId: "1:1054218056015:web:9131b2815ba011c859553a"
})
export const projectStorage = firebase.storage()
export const projectFirestore = firebase.firestore()
export const auth = app.auth()
// initializes a timestamp
export const timestamp = firebase.firestore.FieldValue.serverTimestamp
export default app