<script setup>
  import {ref} from 'vue'
  const message = ref('Hello World!')
  const link = 'https://vuejs.org'
  // function
  const reverseMessage = async()=>{
    message.value = await message.value.split('').reverse('').join('')
  }
  const notify = ()=>{
    alert('navigation was prevented.')
  }
</script>

<template>
  <h1>{{message}}</h1>
  <button @click="reverseMessage">Reverse Message</button>
  <!-- Can also be an in line expression statement -->
  <button @click="message += '!'">Append "!"</button>
  <a :href="link" @click.prevent="notify">
    A linkwith e.preventDefault()
  </a>
</template>

<style scoped>
  button,a{
     display: block;
     margin-bottom: 1em;
  }
</style>
