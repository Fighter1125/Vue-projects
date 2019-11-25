import Vue from 'vue'
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
import Recommend from '@/components/recommend/recommend'
import Singer from '@/components/singer/singer'
import Rank from '@/components/rank/rank'
import Search from '@/components/search/search'
import SingerInfo from '@/components/singer-info/singer-info'
import DiscInfo from 'components/disc-info/disc-info'
import RankInfo from 'components/rank-info/rank-info'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    }, {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: DiscInfo
        }
      ]
    }, {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerInfo
        }
      ]
    }, {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: RankInfo
        }
      ]
    }, {
      path: '/search',
      component: Search
    }

    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
})
