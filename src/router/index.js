import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../components/Login')
const Home = () => import('../views/Home')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }

]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  //如果是登录页直接放行
  if (to.path === '/login') return next()
  //取出token 如果没有token 强制跳转到login页面
  const tokenStr = sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()

})
export default router
