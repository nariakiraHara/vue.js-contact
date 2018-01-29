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
import router from '../router'

export default {
  name: 'userInfo',
  data() {
    return {
        userName: '',
        email: '',
        userId: '',
        message: ''
    }
  },
  created: function() {
    authnicateUser().then((user)=> {
      this.userName = user.displayName
      this.email = user.email
      this.userId = user.uid
    })
  },
  methods: {
    sendMessage: function(event) {
      // メッセージ送信後にtextareaを初期化するとparamも消えるのでパラメータ用変数定義
      let paramMessage = this.message
      if(!this.message) {
        alert('メッセージを入力してください。')
        return false
      }
      if(confirm('メッセージを送信します。\r\nよろしいですか??')) {
        firebase.database().ref('contact/').push({
          userName: this.userName,
          userEmail: this.email,
          message: this.message,
          userID: this.userId
        }).then((contactInfo) => {
          router.push({name: 'ContactConfirmation', params: {id: contactInfo.key}})
        });
      }
      this.message = ''
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
