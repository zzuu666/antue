import Vue from 'vue'
  import Router from 'vue-router'
  import componentsButtonEn from './components/button/index.en-US.vue'
import componentsButtonZh from './components/button/index.zh-CN.vue'
import componentsIconZh from './components/icon/index.zh-CN.vue'
import docsTestZh from './docs/test/dev-rules.zh-CN.vue'
Vue.use(Router)
let router = new Router({
    routes: [
      {
          path: '/components/button-en',
          component: componentsButtonEn,
          name: 'componentsButtonEn'
        },{
          path: '/components/button-zh',
          component: componentsButtonZh,
          name: 'componentsButtonZh'
        },{
          path: '/components/icon-zh',
          component: componentsIconZh,
          name: 'componentsIconZh'
        },{
          path: '/docs/test-zh',
          component: docsTestZh,
          name: 'docsTestZh'
        },
    ]
  })
  
  export default router