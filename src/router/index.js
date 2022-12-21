import { createRouter,  createWebHistory} from 'vue-router'
// import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')

  },
  
  {
    path:'/data-sharing',
    name:'Data-Sharing',
    component:() => import('@/views/DataSharingView.vue')
  },
  // {
  //   path:'/data-sharing-2',
  //   name:'Data-Sharing-2',
  //   component:() => import('@/views/DataSharingEmitView.vue')
  // },
  {
    path:'/table',
    name:'Table',
    component:() => import('@/views/TableView.vue')
  },
  {
    path:'/form-builder',
    name:'Form',
    component:() => import('@/views/FormView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
