import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import globalComponents from '@/plugins/global-components';
import globalDirectives from '@/plugins/global-directives';

const app = createApp(App);
app.use(globalComponents);
app.use(globalDirectives);
app.use(router);
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

console.log(import.meta.env.VITE_APP_API_URL);
