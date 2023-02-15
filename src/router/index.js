import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeMe from '@/views/HomeMe.vue'
import HomePage from '../views/HomePage.vue'
import playPage from '../views/playPage.vue'
import bookStore from '../views/bookStore.vue'
import searchPage from '../views/searchPage.vue'
import bookMain from '../views/bookMain.vue'
import topPage from '../views/topPage.vue'

import MyView from '../views/MyView.vue'



Vue.use(VueRouter)
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')   //懒加载示例
const routes = [{
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: { //路由层级 用于判断 路由是前进还是后退 做出不同的切换动画
      index: 1
    },
  },
  {
    path: '/playPage',
    name: 'playPage',
    component: playPage,
    meta: {
      index: 999
    },

  },
  // {
  //   path: '/HomeMe',
  //   name: 'HomeMe',
  //   component: HomeMe,
  //   meta: {
  //     index: 1
  //   },
  // },
  {
    path: '/my',
    name: 'my',
    component: MyView,
    meta: {
      index: 1
    },
    children: [
      //设置页面
      {
        path: '/my/setup',
        name: 'setup',
        component: () => import("@/components/SetUpView.vue"),
      },

      //手机登录页面      
      {
        path: '/my/logn',
        name: 'logn',
        component: () => import("@/components/LognView.vue"),
      },

      //忘记密码
      {
        path: '/my/logn/forgotpassword',
        name: 'forgotpassword',
        component: () => import("@/components/ForgotPasswordView.vue"),
      },
      //手机注册页面
      {
        path: '/my/logn/register',
        name: 'register',
        component: () => import("@/components/registerView.vue"),
      },

      //下载页面
      {
        path: '/my/download',
        name: 'download',
        component: () => import("@/components/DownloadView.vue"),
      },

      //信息页面
      {
        path: '/my/information',
        name: 'information',
        component: () => import("@/components/InformationView.vue"),
        // children: [
        //   {
        //     path: '/my/information/comment',
        //     name: 'comment',
        //     component: () => import("@/components/information/CommentView.vue"),
        //   },
        //   {
        //     path: '/my/information/dianzan',
        //     name: 'dianzan',
        //     component: () => import("@/components/information/DianZanView.vue"),
        //   },
        //   {
        //     path: '/my/information/gengxin',
        //     name: 'gengxin',
        //     component: () => import("@/components/information/GengXinView.vue"),
        //   },
        // ]
      },

      //积分兑换
      {
        path: '/my/jifen',
        name: 'jifen',
        component: () => import("@/components/GengXin/JiFenView.vue"),
      },

      //已购作品
      {
        path: '/my/buy',
        name: 'buy',
        component: () => import("@/components/GengXin/BuyView.vue"),
      },
      //兴趣管理
      {
        path: '/my/interest',
        name: 'interest',
        component: () => import("@/components/GengXin/InterestView.vue"),
      },
      //兴趣选择
      {
        path: '/my/xinqu',
        name: 'xinqu',
        component: () => import("@/components/XinQuView.vue"),
      },
      //任务中心
      {
        path: '/my/task',
        name: 'task',
        component: () => import("@/components/GengXin/TaskView.vue"),
      },
      //消费 充值 记录
      {
        path: '/my/consumption',
        name: 'consumption',
        component: () => import("@/components/GengXin/ConsumptionView.vue"),
      },

    ]
  },

  {
    path: '/bookStore',
    name: 'bookStore',
    component: bookStore,
    meta: {
      index: 2
    },
  },
  {
    path: '/searchPage',
    name: 'searchPage',
    component: searchPage,
    meta: {
      index: 2
    },
  },
  {
    path: '/bookMain',
    name: 'bookMain',
    component: bookMain,
    meta: {
      index: 99
    },
  },

  {
    path: '/topPage',
    name: 'topPage',
    component: topPage,
    meta: {
      index: 9
    },
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,


})

export default router