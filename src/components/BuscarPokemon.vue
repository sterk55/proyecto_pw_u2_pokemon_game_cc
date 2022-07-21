<template>
  <h2>Consulta por tu pokemon favorito!!</h2>
  <table>
    <tr>
        <td><label for="">Inserte un numero:</label></td>
        
    </tr>
    <tr>
      <td><input type="text" id="idNumero"></td>
    </tr>
    <tr>
        <td><button v-on:click="ver()"  >Buscar Pokemon</button></td>
    </tr>
    <tr>
      <td><h3>{{nombre}}</h3></td>
    </tr>
    <tr>
      <td>
        <img :src="foto" alt="no se encontro" v-if="foto">
      </td>
    </tr>


  </table>

</template>

<script>
export default {
  data(){
    return{
      nombre: "",
      foto: null
    }
  },
  methods:{
    async resultadoPokemon(numero){
      const {name} = await fetch("https://pokeapi.co/api/v2/pokemon/"+numero).then(r => r.json())
      this.nombre = name
      this.foto = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+numero+'.svg';


    },
    ver(){
      this.resultadoPokemon(document.getElementById('idNumero').value)
    }




  }

}
</script>

<style>
table{
    margin: 0 auto;
}
</style>