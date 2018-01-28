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
export default {
  name: 'inquiryInfo',
  data() {
    return {
      userName: this.$route.params.userName,
      message: this.$route.params.message
    }
  }
}
</script>
