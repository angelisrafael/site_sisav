import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
  {
    path: '/cadastroCliente',
    name: 'cadastroCliente',
    component: () => import('../components/cadastroCliente.vue')
  },
  {
    path: '/login',
    name: 'loginForm',
    component: () => import('../components/login.vue')
  },
  {
    path: '/atualizarCliente',
    name: 'atualizarCliente',
    component: () => import('../components/atualizarCliente.vue')
  },
  {
    path: '/listaCliente',
    name: 'listaCliente',
    component: () => import('../components/listarClientes.vue')
  },
  {
    path: '/mostrarVeiculos',
    name: 'MostrarVeiculo',
    component: () => import('../components/mostrarVeiculos.vue')
  },
  {
    path: '/telaPrincipal',
    name: 'telaPrincipal',
    component: () => import('../components/telaPrincipal.vue')
  },
  {
    path: '/cadastroCarro',
    name: 'cadastroCarro',
    component: () => import('../components/cadastroCarro.vue')
  },

  {
    path: '/cadastroUsuario',
    name: 'cadastroUsuario',
    component: () => import('../components/cadastroUsuario.vue')
  },
  {
    path: '/cadastroLocacao',
    name: 'cadastroLocacao',
    component: () => import('../components/cadastroLocacao.vue')
  },
] 

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



export default router
