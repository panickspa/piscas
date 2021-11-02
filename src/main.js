import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
document.addEventListener("deviceready", onDeviceReady, false)
function onDeviceReady(){
  // https://ourcodeworld.com/articles/read/101/how-to-list-your-cordova-app-in-open-with-menu-in-android-and-handle-the-intent-event
  return new Vue({
    router,
    store,
    vuetify,
    render: function (h) { return h(App) }
  }).$mount('#app')
}
