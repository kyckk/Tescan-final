import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/PageHome.vue'
import BoardList from '@/views/board/BoardList.vue'
import BoardDetail from '@/views/board/BoardDetail.vue'
import BoardWrite from '@/views/board/BoardWrite.vue'
import SalesOppo from '@/views/salesOppo/SalesOppo.vue'
import EmpForm from '@/views/ts_emp/EmpForm.vue'



const routes = [
  {
    path: '/',
    name: 'PageHome',
    component: PageHome
  },
  // {
  //   path: '/about',
  //   name: 'PageAbout',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/PageAbout.vue')
  // },
  {
    path: '/board/list',
    name: 'BoardList',
    component: BoardList
  },
  {
    path: '/board/detail',
    name: 'BoardDetail',
    component: BoardDetail
  },
  {
    path: '/board/write',
    name: 'BoardWrite',
    component: BoardWrite,
    meta: { hideeHeader: true, hideFooter: true},
    
  },
  {
    path: '/emp',
    name: 'EmpForm',
    component: EmpForm
  },
  //영업기회
  {
    path: '/SalesOppo/Oppo',
    name: 'SalesOppo',
    component: SalesOppo
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router