<template>
  <div class="inquiryInfo">
    <h2>お問い合わせありがとうございました。</h2>
    <hr>
    <h5>以下がお問い合わせいただいた内容となります。ご確認ください。</h5><br><br>
    <h3>お客様情報</h3>
    <hr>
    氏名
    <h4>　{{userName}}</h4>
    お問い合わせ内容
    <h4>　{{message}}</h4>
  </div>
</template>

<script>
import firebase,{ firestore } from 'firebase'

export default {
  name: 'inquiryInfo',
  data() {
    return {
      userName: '',
      message: ''
    }
  },
  created() {
    firebase.firestore().collection("contact").doc(this.$route.params.id).get().then((snapshot) => {
      console.log(snapshot)
      this.userName = snapshot.data().userName
      this.message = snapshot.data().message
      // this.userName = snapshot.val().userName
      // this.message = snapshot.val().message
    });
  }
}
</script>
<style>
  div {
    margin-left: 100px;
    margin-top: 10px;
  }
  hr {
  text-align: left;
  margin-left: 0px;
  width: 50%
}
</style>

