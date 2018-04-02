import Vue from 'vue'
import Router from 'vue-router'
import wechat from '../components/wechat/wechat.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wechat',
      component:wechat
    }
  ]
})
