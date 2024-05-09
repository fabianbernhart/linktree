import './assets/main.css'

//mdi icons
import '@mdi/font/css/materialdesignicons.min.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';

const app = createApp(App);

app.use(createPinia());

// components
import iconVue from "@/components/icon/vue-icon.vue"
import listVue from "@/components/list/vue-list.vue"

app.component("fb-icon", iconVue);
app.component("fb-list", listVue)

export type {
    
}




app.mount('#app');







