import Vue from 'vue'
import Router from 'vue-router'
// 一级组件
import DashBoard from '@/views/dashboard/DashBoard.vue'
import state from '@/store/state'

// 缓存组件加载
const Home = () => import('@/views/home/Home.vue')

// 登陆
const Login = () => import('@/views/login/Login.vue')

Vue.use(Router)
const router = new Router({
  // 解决因页面较长出现滚动条，路由跳转的时候，不能置顶的问题
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  // 二级路由不需要加/ 
  routes: [
    // 默认跳转页面
    {
      path: '/',
      redirect: '/dashboard',
      // 是否数据缓存
      meta: {
        keepAlive: true
      }
    },
    // 根页面
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard,
      children: [
        {
          path: '/dashboard',
          redirect: '/dashboard/home',
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'home',
          name: 'home',
          component: Home,
          meta: {
            keepAlive: true
          }
        }
      ]
    },
    // 登陆页面
    {
      path: '/Login',
      name: 'login',
      component: Login
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next)=>{
  if(to.meta.requireAuth) {
    if(state.userInfo.token) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
