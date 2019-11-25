import Vue from 'vue'
import Router from 'vue-router'

import MRecommend from '../components/m-recommend'
import MHot from '../components/m-hot'
import MSearch from '../components/m-search'
import Detail from '../components/m-detail'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MRecommend',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'MRecommend',
      component: MRecommend
    },
    {
      path: '/hot',
      name: 'Mhot',
      component: MHot
    },
    {
      path: '/search',
      name: 'MSearch',
      component: MSearch
    },
    {
      path: '/datail/:item',
      name: 'Detail',
      component: Detail
    }
  ]
})
