<template>
  <!--TODO Page-->
  <h1 v-if="!pokemonCorrecto">Espere por favor ...</h1>
  <div v-else>
  <!--<div v-if="pokemonCorrecto"></div>-->
    <h1>¿Quién es este pokemon?</h1>
    <PokemonPicture :pokemonId="pokemonCorrecto.id" :mostrarPokemon="mostrarPokemon" />
    <PokemonOptions :pokemons="pokemonArr" />
  </div>
</template>

<script>
import PokemonOptions from './PokemonOptions'
import PokemonPicture from './PokemonPicture'
import getPokemonOptions from '@/helpers/obtenerOpcionesPokemon'
//getPokemonOptions()
export default {
  components: {
    PokemonPicture,
    PokemonOptions
  },
  data() {
    return {
      pokemonArr: [],
      pokemonCorrecto: null,
      mostrarPokemon: false
    }
  },
  methods: {
    async obtenerPokemonsArreglo() {
      this.pokemonArr = await getPokemonOptions()
      const numAleatorio = Math.floor(Math.random() * 4)
      console.log(numAleatorio)
      this.pokemonCorrecto = this.pokemonArr[numAleatorio]
      console.log('Impresion desde el page')
      console.log(this.pokemonArr)
    }
  },
  mounted() {
    this.obtenerPokemonsArreglo()
  }
}
</script>

<style>
</style>