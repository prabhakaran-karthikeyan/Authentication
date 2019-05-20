import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyDw0r8zK158ac6ffvVb_ml8vbolqPWUUhM",
        authDomain: "pranha-auth.firebaseapp.com",
        databaseURL: "https://pranha-auth.firebaseio.com",
        projectId: "pranha-auth",
        storageBucket: "pranha-auth.appspot.com",
        messagingSenderId: "688766302783",
        appId: "1:688766302783:web:9e867aafb7779c23"
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true})
}

const fireDb = firebase.firestore()
export {fireDb}
export {firebase}