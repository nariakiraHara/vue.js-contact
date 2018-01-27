import firebase from 'firebase'
import firebaseApp from 'firebaseApp.js'
const provider = new firebase.auth.GoogleAuthProvider();
export default function authenticateUser () {
    return new Promise((resolve, reject) => {
        firebaseApp.auth().onAuthStateChanged(function (user) {
            if (user) {
                resolve(user)
            } else {
                /* eslint-disable */
                reject()
                firebaseApp.auth().signInWithRedirect(provider)
            }
        })
    })
}
