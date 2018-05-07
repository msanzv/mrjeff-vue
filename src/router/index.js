import Vue from 'vue'
import Router from 'vue-router'
import UserListPage from '@/components/UserListPage'
import UserDetailPage from '@/components/UserDetailPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'user-list',
      component: UserListPage
    },
    {
      path: '/users/:userId',
      name: 'user-detail',
      component: UserDetailPage
    }
  ]
})
