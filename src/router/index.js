import Vue from 'vue'
import VueRouter from 'vue-router'
import Tool from '../views/Tool.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tool',
    component: Tool
  }
]

const router = new VueRouter({
  routes
})

export default router
