<template>
  <div class="flex flex-col items-center"> 
    <img class="max-w-xs" alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <CounterComponent/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CounterComponent from './components/CounterComponent'

export default {
  name: 'App',
  components: {
    // HelloWorld, 
    CounterComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
