// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Firebase from 'firebase'


Vue.config.productionTip = false

  // Initialize Firebase
  let config = {
    apiKey: "AIzaSyAPKdTXUzpAH98SnTD-VN6zuH-vs1NB6-Q",
    authDomain: "inquiry-vue.firebaseapp.com",
    databaseURL: "https://inquiry-vue.firebaseio.com",
    projectId: "inquiry-vue",
    storageBucket: "inquiry-vue.appspot.com",
    messagingSenderId: "622863755174"
  };
  firebase.initializeApp(config);

 // 初期化
function initUser(user) {
  return userInfo = {
      userid: user.uid,
      userName: user.displayName,
      email: user.email
  };
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
