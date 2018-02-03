import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'

Vue.use(VueFire)

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAPKdTXUzpAH98SnTD-VN6zuH-vs1NB6-Q",
    authDomain: "inquiry-vue.firebaseapp.com",
    databaseURL: "https://inquiry-vue.firebaseio.com",
    projectId: "inquiry-vue",
    storageBucket: "inquiry-vue.appspot.com",
    messagingSenderId: "622863755174"
}
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp