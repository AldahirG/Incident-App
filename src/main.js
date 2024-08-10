import { createApp } from 'vue'
import './style.css'
import './assets/tailwind.css';
import router from './router/router';
import App from './App.vue'

const app = createApp(App);

app.use(router);

createApp(App).mount('#app')
