import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Global styles
import './assets/styles/theme.css'
import './assets/styles/layout.css'
import './assets/styles/home.css'
import './assets/styles/blog.css'
import './assets/styles/projects.css'
import './assets/styles/about.css'
import './assets/styles/contact.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')