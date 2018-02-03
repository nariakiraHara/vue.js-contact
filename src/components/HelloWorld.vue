<template>
  <div class="userInfo">
    <h2>ユーザー名</h2>
    <hr>
    <h3>{{userName}}</h3>
    <h2>メールアドレス</h2>
    <hr>
    <h3>{{email}}</h3><br><br>
    <el-input type="textarea" size="medium" rows="5" placeholder="内容を入力してください" v-model="message">
    </el-input><br><br>
    <el-button type="primary" v-on:click="sendMessage">送信</el-button>
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
        firebase.firestore().collection("contact").add({
          userName: this.userName,
          userEmail: this.email,
          message: this.message,
          userID: this.userId
        }).then((contactInfo) => {
          console.log(contactInfo)
          router.push({name: 'ContactConfirmation', params: {id: contactInfo.id}})
        });
      }
      this.message = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  text-align: left;
  margin-right: 1000px;
}
h1, h2 {
  font-weight: normal;
}
hr {
  text-align: left;
  margin-left: 0px;
  width: 20%;
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
