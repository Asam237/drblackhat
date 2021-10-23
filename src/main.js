import { createApp } from 'vue'
import App from "../src/App.vue"
import router from "../routes/index"

import './index.css'



createApp(App)
    .use(router)
    .mount('#app')
