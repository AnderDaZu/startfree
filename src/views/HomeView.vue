<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
    <MiTiendaComponent/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MiTiendaComponent from '@/components/MiTiendaComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MiTiendaComponent
  }
}
</script>
