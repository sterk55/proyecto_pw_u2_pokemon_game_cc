<template>
    <!--TODO: img-->
  <!--TODO: opciones-->
  <h1>¿Quien es este Pokemon?</h1>
  <PokemonPicture :pokemonId="22" :mostrarPokemon="true"  />
  <PokemonOptions/>
  
</template>

<script>
import PokemonPicture from './PokemonPicture.vue'
import PokemonOptions from './PokemonOptions.vue'


export default {
components:{
    PokemonPicture,
    PokemonOptions
}
}
</script>

<style>

</style>