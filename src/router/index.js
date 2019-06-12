
/**
 * Created by wangyayun on 17/2/16.
 */

import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/entry/loginPage'
Vue.use(Router)
//webpack中 require.ensure()实现按需加载模块

const entry = {
  login:r => require.ensure([], () => r(require('../components/entry/loginPage')))
}
const home={
  homePage:r => require.ensure([], () => r(require('../components/main/homePage'))),
  masterPage:r => require.ensure([], () => r(require('../components/main/masterPage'))),
  navBar:r => require.ensure([], () => r(require('../components/main/navBar'))),
  headerBar:r => require.ensure([], () => r(require('../components/main/headerBar')))
}
const table={
  menuList:r => require.ensure([], () => r(require('../components/table/menuList'))),
}
const routers=[
  {
    path: '/',
    name: 'Login',
    component: entry.login
  },
  {
    path: '/homePage',
    name: 'Home',
    component: home.homePage,
    children:[{
      path: '/navBar',
      name: 'navBar',
      component: home.navBar
    },{
      path: '/headerBar',
      name: 'headerBar',
      component: home.headerBar
    },{
      path: '/masterPage',
      name: 'masterPage',
      component: home.masterPage,
      
    },{
      path: '/menuList',
      name: 'menuList',  
      component:table.menuList
    }]
  }
]
const router= new Router({
  mode: 'history',          // 切换路径模式，变成history模式,不然路径为/#/home
  scrollBehavior: () => ({  // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    y: 0
  }),
  routes: routers
})

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin && !store.state.userToken) { // 用户界面都需要登录
    next({
      path: '/'
    })
  } else {
    next()
  }
})
router.afterEach((to, from) => {
  window.scrollTo(0, 0)
  // if (to.meta.initAxios) { // initAxios 初始化页面时有接口请求
  //   Indicator.close()
  // }
  // if (window.gtag) {
  //   window.gtag('event', to.fullPath, {
  //     from: from.fullPath,
  //     to: to.fullPath
  //   })
  // }
})
export default router
