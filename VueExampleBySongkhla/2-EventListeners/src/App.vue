<script setup>
  import {ref} from 'vue'
  const count = ref(0)
  const increment=()=>{ return count.value++}
</script>

<template>
  <h1>การทำ EventListeners</h1>
  <!-- make this button work -->
  <button v-on:click="increment">count is : {{count}}</button>
  <button @click="increment">count is :{{count}}</button>
</template>
