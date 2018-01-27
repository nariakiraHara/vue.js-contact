<template>
  <div class="userInfo">
    <h1>ユーザー名</h1>
    <h2>{{userName}}</h2>
    <h1>メールアドレス</h1>
    <h2>{{email}}</h2>
    <textarea v-model="message" placeholder="メッセージを入力してください。"/>
    <button v-on:click="sendMessage">送信</button>
  </div>
</template>
<script>
import firebase from 'firebase'
import firebaseApp from '../firebaseApp.js'
import authnicateUser from '../auth.js'

export default {
  name: 'userInfo',
  data() {
    return {
        userName: '',
        email: ''
    }
  },
  created: function() {
    authnicateUser().then((user)=> {
      userName: user.displayName
      email: user.email
    })
  },
  methods: {
    sendMessage: function( event) {
      if(!this.message) {
        alert('メッセージを入力してください。')
        return false
      }
      if(alert('メッセージを送信します。\\nよろしいですか??')) {
        firebase.database().ref('contact/').push({
          userName: this.userName,
          userEmail: this.email,
          message: this.message,
        });
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
