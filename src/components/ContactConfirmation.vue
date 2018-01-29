<template>
  <div class="inquiryInfo">
    <h1>お問い合わせありがとうございました。</h1>
    <h2>以下がお問い合わせいただいた内容となります。ご確認ください。</h2>
    <h3>お客様情報</h3>
    <h3>氏名：{{userName}}</h3>
    <h3>お問い合わせ内容：</h3>
    <h3>{{message}}</h3>
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
