<script setup>
  import {ref} from 'vue'
  const awesome = ref(true)
  const toggle = ()=>{
    awesome.value = !awesome.value
  }
</script>

<template>
  <h1>การใช้งาน ConditionalRendering</h1>
  <button @click="toggle">toggle</button>
  <h1 v-if="awesome">Vue is awesome !</h1>
  <h1 v-else>Oh no 😢</h1>
</template>
