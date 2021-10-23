import { createApp } from 'vue'
import App from "../src/App.vue"
import router from "../routes/index"
import VueAOS from "@dcasia/vue-aos";
import "@dcasia/vue-aos/dist/vue-aos.css";

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faUserSecret)


import './index.css'



createApp(App)
    .use(router)
    .use(VueAOS)
    // .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
