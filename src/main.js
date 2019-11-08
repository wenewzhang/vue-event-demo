import Vue from 'vue'
import App from './App.vue'
// import { BlogPost } from './components/BlogPost'

Vue.config.productionTip = false

// Vue.component('blog-post', BlogPost)
new Vue({
  render: h => h(App),
}).$mount('#app')
