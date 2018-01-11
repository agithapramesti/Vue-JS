import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/pages/About'
import Learn from '@/pages/Learn'
import LearnApl from '@/pages/LearnApl'
import LoopTest from '@/pages/LoopTest'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/learn',
      name: 'Learn',
      component: Learn	
    },
    {
      path: '/learn-apl',
      name: 'LearnApl',
      component: LearnApl
    },
    {
      path: '/loop-test',
      name: 'LoopTest',
      component: LoopTest
    }
  ]
})
