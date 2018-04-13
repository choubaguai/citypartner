import Vue from 'vue'
import Router from 'vue-router'
// 一级路由
import Login from '@/views/login'
import beforelogin from '@/views/beforelogin'

import Main from '@/views/main'
// Main的子路由
import Store from '@/views/store'
import Check from '@/views/check'
import Operation from '@/views/operation'
import Mine from '@/views/mine'

//store=>storelist
import storelist from '@/components/store/storelist'
//check=>checkinfo
import checkinfo from '@/components/check/checkinfo'

import earningsInfo from '@/components/mine/earningsInfo'
import earningsAnalyze from '@/components/mine/earningsAnalyze'
import deposit from '@/components/mine/deposit'
import depositNum from '@/components/mine/depositNum'
import set from '@/components/mine/set'
import managment from '@/components/mine/managment'
import accountnum from '@/components/mine/accountnum'


import courier from '@/components/opration/courier'
import changepassword from '@/components/mine/changepassword'


Vue.use(Router)

const router= new Router({
  routes: [
    // 一级路由
    // 最外层的路由，对应app.vue文件的路由出口
    {
      path: '/',
      redirect: '/beforelogin'
    },

    {
      path: '/beforelogin',
      name: 'beforelogin',
      component: beforelogin
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      // meta: { requiresAuth: true },
      // 二级路由
      // 对应的事views文件下的main.vue路由的出口
      children:[
        {
          path: '/',
          redirect: 'store'
        },
        {
          path: 'store',
          components: {
            main: Store
          }
        },
        {
          path: 'check',
          components: {
            main: Check
          }
        },
       
        {
          path: 'operation',
          components: {
            main: Operation
          }
        },
        {
          path: 'mine',
          components: {
            main: Mine
          }
        },
      ]
    },
    //==========================
    {
      path:'/storelist',
      name: 'storelist',
      component: storelist
     },
    {
      path:'/checkinfo',
      name: 'checkinfo',
      component: checkinfo
    },
    {
      path:'/main/mine/earningsInfo',
      name: 'earningsInfo',
      component: earningsInfo
    },
    {
      path:'/main/mine/earningsAnalyze',
      name: 'earningsAnalyze',
      component: earningsAnalyze
    },
    {
      path:'/main/mine/deposit',
      name: 'deposit',
      component: deposit
    },
    {
      path:'/main/mine/depositNum',
      name: 'depositNum',
      component: depositNum
    },
    {
      path:'/main/mine/set',
      name: 'set',
      component: set
    },
    {
      path:'/main/mine/managment',
      name: 'managment',
      component: managment
    },
    {
      path:'/main/mine/accountnum',
      name: 'accountnum',
      component: accountnum
    },
    {
      path:'/main/opration/courier',
      name: 'courier',
      component: courier
    },
    {
      path:'/main/mine/set/changepassword',
      name: 'changepassword',
      component: changepassword
    },
  ]
})


// router.beforeEach((to,from,next)=>{
//   if(to.matched.some(r=>r.meta.requireAuth)){
//     let token = sessionStorage.token;
//     if(token === ''){
//       next();
//     }else{
//       next({
//         path:'/login',
//         query:{redirect:to.fullPath}
//       })
//     }
//   }else{
//     next();
//   }
// })

export default router