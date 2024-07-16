import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const bootstrapOption = 1
switch (bootstrapOption) {
    case 1: {
        import('@/assets/bootstrap01.scss');
        break;
    }
    case 2: {
        import('@/assets/bootstrap02.scss');
        break;
    }
    default: {
        import('@/assets/bootstrapDefault.scss');
        break;
    }
}

const app = createApp(App)

app.use(router)

app.mount('#app')
