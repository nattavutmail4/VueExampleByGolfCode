<script setup>
  import {ref} from 'vue'
  import TodoItem from './components/TodoItem.vue' // import component เข้ามา
  let id =1;
  //จำลองข้อมูลเป็น array in object
  const groceryList = ref([
    { id: id++, text: 'Vegetables' },
    { id: id++, text: 'Cheese' },
    { id: id++, text: 'Whatever else humans are supposed to eat' }
  ])
</script>
<template>
  <ol>
     <!-- เรียกใช้งาน component todo
        :todo เป็นการทำ props
    -->
     <TodoItem
       v-for="item in groceryList"
       :todo="item"
       :key="item.id"
     ></TodoItem>
  </ol>
</template>
