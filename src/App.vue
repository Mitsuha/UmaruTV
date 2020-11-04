<template>
  <div id="app">
    <router-view></router-view>
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  import Router from './route'

  export default {
    name: 'App',
    router: Router,
    components: {
      // HelloWorld

    }
  }
</script>

<style>
  *{
    margin: 0;
  }
  a{
    text-decoration: none;
  }
</style>
