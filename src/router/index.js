import Vue from 'vue'
import VueRouter from 'vue-router'
import Skull from '../components/Skull.vue'
import AppRecipe from '../components/AppRecipe.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Recipe',
    component: AppRecipe}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router