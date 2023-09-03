import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cadastroCliente',
    name: 'Home',
    component: () => import('../components/cadastroCliente.vue')
  },
  {
    path: '/login',
    name: 'Home',
    component: () => import('../components/login.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
