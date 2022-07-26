import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// "main": ".dist/lib-components.common.js",
// vue-cli-service build --target lib --name lib-components ./src/install.js

createApp(App).use(store).use(router).mount('#app')
