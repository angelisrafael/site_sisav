import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
  {
    path: '/',
    redirect: 'loginAvap',
    component: () => import('../components/loginAvap.vue')
  },
  {
    path: '/perfil',
    name: 'perfilForm',
    component: () => import('../components/perfilPage.vue')
  },
  {
    path: '/loginAvap',
    name: 'loginAvap',
    component: () => import('../components/loginAvap.vue')
  },
  {
    path: '/ajudaPage',
    name: 'ajudaPage',
    component: () => import('../components/ajudaPage.vue')
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
