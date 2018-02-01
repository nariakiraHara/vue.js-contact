<template>
  <div id="app">
    <headerItem></headerItem>
    <router-view/>
  </div>
</template>

<script>
import headerItem from './components/HeaderItem'
export default {
  name: 'app',
  components : {
    headerItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding-left: 80px;
}
</style>
