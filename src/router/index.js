import Vue from 'vue'
import VueRouter from 'vue-router'
import MessageView from '../views/MessageView.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/:channelId',
      name: 'MessageView',
      conponent: MessageView
    },
    {
      path: '*',
      redirect: '/general'
    }
  ]

const router = new VueRouter({
  routes
})

export default router
