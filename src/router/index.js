import Vue from 'vue'
import Router from 'vue-router'
import projectLIst from '@/components/project/projectLIst'
import customerLIst from '@/components/customer/customerLIst'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'projectLIst',
      component: projectLIst
    },
    {
      path: '/customerLIst',
      name: 'customerLIst',
      component: customerLIst
    },
  ]
})
