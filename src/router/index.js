import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Child from '../components/childComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:name',
    component: () => import('../views/About.vue'),
    children: [
      { path: 'child', component: Child }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
