<template>

<div class="pokemonContainer">
    <img class="PokemonOculto" :src="imagenFuente" alt="">
    <img :src="imagenFuente" alt="" v-if="mostrarPokemon">
</div>
 <!--'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg'-->

</template>

<script>

export default {
    props:{
        pokemonId:{
            type: Number,
            required: true
        },
        mostrarPokemon:{
            type: Boolean,
            required: true,
            default: false

        }
    },
    computed:{
        imagenFuente(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }
}
</script>

<style>

.PokemonOculto{

    filter:brightness(0)


}

img{
    height: 200px;
    position: absolute;
}

.pokemonContainer{
    height: 250px;
    justify-content: center;
    display: flex;
}


</style>