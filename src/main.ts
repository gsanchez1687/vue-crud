//import main.css
import './assets/main.css';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//import bootstrap icon
import 'bootstrap-icons/font/bootstrap-icons.css';
//import tostification
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Toast, {
    position: "top-right",
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false,
})

app.mount('#app')
