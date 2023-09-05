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
  {
    path: '/atualizarCliente',
    name: 'Home',
    component: () => import('../components/atualizarCliente.vue')
  },
  {
    path: '/listaCliente',
    name: 'Home',
    component: () => import('../components/listaClientes.vue')
  },
  {
    path: '/mostrarVeiculos',
    name: 'Home',
    component: () => import('../components/mostrarVeiculos.vue')
  },
  {
    path: '/telaPrincipal',
    name: 'Home',
    component: () => import('../components/telaPrincipal.vue')
  },
] 

const router = new VueRouter({
  routes
})

export default router
