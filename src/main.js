import { createApp } from 'vue'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import './assets/main.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

createApp(App).use(vuetify).use(router).mount('#app')
