import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NotFound from '../pages/NoFind.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
  		path: '*',
      name: 'NotFound',
      component: NotFound
  	},
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
