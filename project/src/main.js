import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServer'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  store,
}).$mount('#app')

router.beforeEach(async (to,from,next)=>{
  if(localStorage.getItem('token')){
    if(to.path == '/login'){
      next('/home')
      // next()
    }else{
      if(store.state.user.userInfo.name){
        next()
      }else{
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (e) {
          await store.dispatch('getLogout')
          next('/login')
        }
      }
    }
  }else{
    next()
  }
})
