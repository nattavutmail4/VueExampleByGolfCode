<script setup>
  import {ref ,computed } from 'vue'

  // ให้แต่ละ ID ไม่ซ้ำกัน
  let id = 0
  const msg = ref('Example 5-ListRendering');
  const newTodo = ref('')
  const todos = ref([
      {id:id++,text:'Learn HTML'},
      {id:id++,text:'Learn CSS'},
      {id:id++,text:'Learn BOOTSTRAP'},
      {id:id++,text:'Learn JAVASCRIPT'},
      {id:id++,text:'Learn VUE'},
  ])
  const addTodo = ()=>{
     if(newTodo.value != 0 || newTodo.value !=''){
       todos.value.push({id:id++,text:newTodo.value})
       newTodo.value = ''
     }
  }
  const removeTodo = (todo)=>{
    todos.value = todos.value.filter((t) => t !== todo)
  }

  const hideCompleted = ref(false)
  const filteredTodos = computed(() => {
    return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
  })
</script>

<template>
    <h1>{{msg}}</h1>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="newTodo">
      <button>Add Todo</button>
    </form>
    <ul>
       <li v-for="(todo,index) in filteredTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.done">
         {{ index +1}} &spades; {{todo.text}}
         <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>

