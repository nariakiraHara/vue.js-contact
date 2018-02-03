import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ContactConfirmation from '@/components/ContactConfirmation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/contacts/:id/confirmation',
      name: 'ContactConfirmation',
      component: ContactConfirmation
    }
  ]
})
