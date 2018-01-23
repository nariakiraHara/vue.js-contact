<template>
  <div class="userInfo">
    <h1>ユーザー名</h1>
    <h2>{{userName}}</h2>
    <h1>メールアドレス</h1>
    <h2>{{email}}</h2>
  </div>
</template>
<script>
export default {
  name: 'userInfo',
  created: function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        const userInfo = initUser(user);
        userName: userInfo.userName
        email: userInfo.email
      } else {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
        // User is signed out.
      }
    });
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
