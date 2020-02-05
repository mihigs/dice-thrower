import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dice',
      component: require('@/components/Dice').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
