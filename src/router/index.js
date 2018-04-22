import Vue from 'vue'
import Router from 'vue-router'
import Report from '@/components/Report'
import HelloWorld2 from '@/components/common/HelloWorld2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'report',
      component: Report
    },
    {
      path: '/report',
      name: 'report',
      component: Report
    },
    {
      path: '/helloWorld2',
      name: 'helloWorld2',
      component: HelloWorld2
    }
  ]
})
