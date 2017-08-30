// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '../node_modules/less/dist/less'
import echarts from 'echarts'
Vue.use(VueRouter)
Vue.use(iView)
Vue.use(echarts)
Vue.config.productionTip = false

/* eslint-disable no-new */
// const routers = new VueRouter({
//     mode: 'history',
//     routes: routers
// })
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})