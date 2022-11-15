import { createApp } from 'vue'
import App from './App.vue'
import './style.scss'
// import InputPassword from './components/InputPassword.vue'

createApp(App)
  // .component('InputPassword', InputPassword) // เป็น globel ไม่แนะนำ เหมาะสำหรับพวกทำ navbar footer เพราะต้องเรียกใช้
  .mount('#app')
