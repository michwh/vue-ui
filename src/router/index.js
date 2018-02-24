import Vue from 'vue'
import Router from 'vue-router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import home from '@/components/home'
import login from '@/components/login'
import register from '@/components/register'
import PersonalCenter from '@/components/PersonalCenter'
import release from '@/components/release'
import setUp from '@/components/setUp'
import myCollection from '@/components/myCollection'
import myRelease from '@/components/myRelease'
import myInformation from '@/components/myInformation'
Vue.use(MuseUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:login
    },
    {
      path:'/home',
      component:home
    },   
    // {
    //   path:'/login',
    //   component:login
    // },
    {
      path:'/register',
      component:register
    },
    {
       path:'/PersonalCenter',
       component:PersonalCenter
    },
    {
        path:'/release',
        component:release
    },
    {
      path:'/PersonalCenter/setUp',
       component:setUp
    },
    {
      path:'/PersonalCenter/myCollection',
       component:myCollection
    },
    {
      path:'/PersonalCenter/myRelease',
       component:myRelease
    },
    {
      path:'/PersonalCenter/setUp/myInformation',
       component:myInformation
    },
  ]
})
