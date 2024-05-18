import Vue from 'vue'
import Router from 'vue-router'
import projectList from '@/page/project/project-list.vue'
import customerList from '@/page/customer/customer-list.vue'
import board from '@/page/board/board.vue'
import progress from '@/page/progress/progress.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: projectList
    },
    {
      path: '/customerList',
      name: 'customerList',
      component: customerList
    },
    {
      path: '/projectList',
      name: 'projectList',
      component: projectList
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
