import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
  {
    path: '/cadastroCliente',
    name: 'cadastroCliente',
    component: () => import('../components/cadastroCliente.vue')
  },
  {
    path: '/atualizarCliente/:id',
    name: 'atualizarCliente',
    component: () => import('../components/cadastroCliente.vue')
  },
  {
    path: '/login',
    name: 'loginForm',
    component: () => import('../components/login.vue')
  },
  {
    path: '/perfil',
    name: 'perfilForm',
    component: () => import('../views/perfilPage.vue')
  },
  {
    path: '/loginAvap',
    name: 'loginAvap',
    component: () => import('../views/loginAvap.vue')
  },
  {
    path: '/ajudaPage',
    name: 'ajudaPage',
    component: () => import('../views/ajudaPage.vue')
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
    path: '/cadastroCarro',
    name: 'cadastroCarro',
    component: () => import('../components/cadastroCarro.vue')
  },
  {
    path: '/atualizarCarro/:id',
    name: 'atualizarCarro',
    component: () => import('../components/cadastroCarro.vue')
  },
  {
    path: '/telaPrincipal',
    name: 'telaPrincipal',
    component: () => import('../components/telaPrincipal.vue')
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
  {
    path: '/atualizarLocacao/:id',
    name: 'atualizarLocacao',
    component: () => import('../components/cadastroLocacao.vue')
  },
  {
    path: '/pageSobre',
    name: 'pageSobre',
    component: () => import('../components/pageSobre.vue')
  },
] 

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



export default router
