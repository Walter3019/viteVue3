import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
// router
import router from './router/index'
// vuex
import store from './store/index'
// element plus
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
