<template>
  <!--TODO Page-->
  <h1 v-if="!pokemonCorrecto">Espere por favor ...</h1>
  <div v-else>
  <!--<div v-if="pokemonCorrecto"></div>-->
    <h1>¿Quién es este pokemon?</h1>
    <PokemonPicture :pokemonId="pokemonCorrecto.id" :mostrarPokemon="mostrarPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @eventoHijo="validarRespuesta($event)"/>
</div>
<div v-if="mostraMensaje">
    <h1>{{mensajeResultado}}</h1>
    <button v-on:click="resetearJuego()" >Nuevo Juego</button>
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
      mostrarPokemon: false,
      mensajeResultado: "",
      mostraMensaje: false
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
    },
    validarRespuesta(pokemonSeleccionadoHijo){
      console.log("Se emitio un evento del hijo")
      console.log(pokemonSeleccionadoHijo)
              this.mostrarPokemon = true


      if(this.pokemonCorrecto.id === pokemonSeleccionadoHijo){
        console.log("Correcto")
        this.mensajeResultado = `CORRECTISIMO, ${this.pokemonCorrecto.nombre}`
      }else{
        console.log("Incorrecto")
        this.mensajeResultado = `INCORRECTISIMO, El pokemon es:  ${this.pokemonCorrecto.nombre}`
      }
      this.mostraMensaje = true
    },
    resetearJuego(){
      this.pokemonArr=[]
      this.pokemonCorrecto= null
      this.mostraMensaje=false
      this.mostrarPokemon=null
      this.mensajeResultado=""
      this.obtenerPokemonsArreglo()
    }
  },
  mounted() {
    this.obtenerPokemonsArreglo()
  }
}
</script>

<style>
</style>