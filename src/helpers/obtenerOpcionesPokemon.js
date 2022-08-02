const obtenerPokemons = () => {
    console.log('Método para calcular aleatoriamente')

    const vectorNumerico = obtenerVectorNumerico()
    const vectorObjetos =  convertirVectorNombres(vectorNumerico)
    console.table(vectorObjetos)
    return vectorObjetos


}

const getPokemonOptions = async () => {
    return await obtenerPokemons() //método fachada
}

function getNumeroAleatorio(min, max) {
    max++
    return Math.floor(Math.random() * (max - min) + min)
}

const obtenerVectorNumerico = () => {
    const arregloPokemonNumero = [getNumeroAleatorio(1, 600), getNumeroAleatorio(1, 600), getNumeroAleatorio(1, 600), getNumeroAleatorio(1, 600)]
    return arregloPokemonNumero
}

const convertirVectorNombres = async ([p1, p2, p3, p4] = []) => {
    //const pos1 = vector[0]
    const data1 = await obtenerNombrePokemonAPI(p1)
    const data2 = await obtenerNombrePokemonAPI(p2)
    const data3 = await obtenerNombrePokemonAPI(p3)
    const data4 = await obtenerNombrePokemonAPI(p4)
    console.log(data1)
    console.log(data2)
    console.log(data3)
    console.log(data4)
    return await[{ nombre: data1.name, id: data1.id }, { nombre: data2.name, id: data2.id }, { nombre: data3.name, id: data3.id }, { nombre: data4.name, id: data4.id }]
}

const obtenerNombrePokemonAPI = async (id) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())
    return data
}

export default getPokemonOptions