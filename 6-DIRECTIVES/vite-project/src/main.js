import { createApp } from 'vue'
// import "./assets/tailwind.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import App from './App.vue'

createApp(App)
.directive('focus',(el,binding)=>{
    el.focus() //สร้างสำเร็จมันจะทำการ focus ที่ช่อง inputให้ทันที
})
.directive('new',(el,binding)=>{
     const expiredDate = new  Date (binding.value)
     const currentDate = new Date ()
     if(currentDate < expiredDate){
        const div = document.createElement('div')
        div.style.width='0.5rem',
        div.style.height='0.5rem',
        div.style.backgroundColor='red',
        div.style.borderRadius='50%',
        div.style.position='absolute',
        div.style.right="0",
        div.style.top="0",
        div.style.transform="transt()"
        el.style.position="relative"
        el.append(div)
     }
})
.mount('#app')
