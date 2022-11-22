<script setup>
  import {ref} from 'vue'

  const message = ref('Hello World')
  const isRed = ref(true)
  const color = ref('green')

  const toggleRed = ()=>{
    isRed.value = ! isRed.value
  }
  const toggleColor = ()=>{
    color.value = color.value === 'green' ? 'blue' : 'green'
  }
</script>

<template>
  <h1>การทำ Bindings</h1>
  <p>
    <span :title="message">
       Hover your mouse over me for a few seconds to see my
       dynamically bound title!
    </span>
  </p>
  <p :class="{red:isRed}" @click="toggleColor">
      This should be red... but click me toggle it.
  </p>
</template>
<style>
  .red{
     color:red;
  }
</style>
