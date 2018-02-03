<template>
  <div class="inquiryInfo">
    <h2>お問い合わせありがとうございました。</h2>
    <hr>
    <h3>以下がお問い合わせいただいた内容となります。ご確認ください。</h3>
    <h3>お客様情報</h3>
    <hr>
    <h4>氏名</h4>
    <h4>{{userName}}</h4>
    <h3>お問い合わせ内容</h3>
    <h4>{{message}}</h4>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'inquiryInfo',
  data() {
    return {
      userName: '',
      message: ''
    }
  },
  created() {
  firebase.database().ref('contact/' + this.$route.params.id).once('value').then((snapshot) => {
    this.userName = snapshot.val().userName
    this.message = snapshot.val().message
  });
  }
}
</script>
<style>
  div {
    margin-left: 100px;
  }
  hr {
  text-align: left;
  margin-left: 0px;
  width: 40%;
}
</style>

