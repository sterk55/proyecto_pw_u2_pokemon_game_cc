<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
 <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <BuscarPokemon/>

</template>

<script>
import BuscarPokemon from './components/BuscarPokemon.vue'

export default {
  name: 'App',
  components: {
    BuscarPokemon
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
