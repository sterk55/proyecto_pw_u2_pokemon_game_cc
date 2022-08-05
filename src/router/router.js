import {createRouter, createWebHashHistory} from 'vue-router'

import AboutPage from "@/modulos/pokemon/pages/AboutPage.vue"
import ListPage from "../modulos/pokemon/pages/ListPage.vue"
import PokemonPage from "../modulos/pokemon/pages/PokemonPage.vue"
import NoPageFound from "../modulos/pokemon/pages/NoPageFound.vue"

const routes=[ 
    {path:'/', component: AboutPage},
    {path:'/list', component: ListPage},
    {path:'/id', component: PokemonPage},
    {path:'/:pathMatch(.*)*', component: NoPageFound},


]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  export default router

