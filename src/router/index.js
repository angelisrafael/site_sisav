import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
  {
    path: '/',
    redirect: 'loginForm',
    component: () => import('../components/login.vue')
  },
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
    path: '/telaConsulta',
    name: 'telaConsulta',
    component: () => import('../components/telaConsulta.vue')
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
  {
    path: '/minhasSolicitacoes',
    name: 'minhasSolicitacoes',
    component: () => import('../components/minhasSolicitacoes.vue')
  },
] 

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



export default router
