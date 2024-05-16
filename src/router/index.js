import Vue from 'vue'
import Router from 'vue-router'
import projectLIst from '@/components/project/projectLIst.vue'
import customerLIst from '../../src/components/customer/customerLIst.vue'
import board from '@/components/board/Board.vue'
import progress from '@/components/progress/Progress.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: projectLIst
    },
    {
      path: '/customerLIst',
      name: 'customerLIst',
      component: customerLIst
    },
    {
      path: '/projectLIst',
      name: 'projectLIst',
      component: projectLIst
    },
    {
      path: '/board',
      name: 'board',
      component: board
    },
    {
      path: '/progress',
      name: 'progress',
      component: progress
    }
  ]
})
