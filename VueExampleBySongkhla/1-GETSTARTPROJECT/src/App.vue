<script setup>
  import {reactive ,ref} from 'vue'
  const counter = reactive ({count:0});
  const message = ref('Hello World')
  // console.log(message.value)
  // message.value = 'Changed' //เปลี่ยนค่าจาก hello word เป็น Changed
  const titleClass = ref('title')
  const dynamicId  = ref('1')
</script>

<template>
  <h1>{{message}}</h1>
  <h1>{{message.split('').reverse().join('')}}</h1>
  <p> count is : {{ counter.count}}</p>
  <button @click="counter.count++">increase</button> |
  <button @click="counter.count--">remove</button>
  <br><hr>
  <h1>Attribute Bindings</h1>
  <p :class="titleClass">การทำ Attribute Bindings</p>
  <div :id="dynamicId">1</div>
</template>
<style scoped>
   .title{
    color:red;
   }
    h1{
       color:red;
    }
    p{
       font-size: 16px;
       color:blueviolet;
    }
    button{
       background-color: blue;
       color:white;
       padding: 6px;
       border-radius: 10px;
       border-top-left-radius: 6px;
       border-bottom-right-radius: 6px;
       cursor: pointer;
    }
</style>