import Vue from 'vue'
import Router from 'vue-router'
// 一级组件
import DashBoard from '@/views/dashboard/DashBoard.vue'
import state from '@/store/state'

// 懒加载二级组件 Tarbar
const Home = () => import('@/views/home/Home.vue')
const Category = () => import('@/views/category/Category')
const Eat = () => import('@/views/eat/Eat')
const Cart = () => import('@/views/cart/Cart')
const Mine = () => import('@/views/mine/Mine')
const GoodsDetail = () => import('@/views/common/GoodsDetail')

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
          // 主页
          path: 'home',
          name: 'home',
          component: Home,
          meta: {
            keepAlive: true
          }
        },
        {
          // 分类
          path: 'category',
          name: 'category',
          component: Category,
          meta: {
            keepAlive: true
          }
        },
        {
          // 吃什么
          path: 'eat',
          name: 'eat',
          component: Eat,
          meta: {
            keepAlive: true
          }
        },
        {
          // 购物车
          path: 'cart',
          name: 'cart',
          component: Cart,
          meta: {
            keepAlive: true
          }
        },
        {
          // 我的
          path: 'mine',
          name: 'mine',
          component: Mine,
          meta: {
            keepAlive: true
          }
        },
        {
          // 商品详情
          path: 'goodsDetail',
          name: 'goodsDetail',
          component: GoodsDetail
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
