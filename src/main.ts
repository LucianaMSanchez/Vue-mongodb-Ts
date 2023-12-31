import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'

import 'bootswatch/dist/quartz/bootstrap.min.css'

createApp(App)
.use(router)
.use(store, key)
.mount('#app')
