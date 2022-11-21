<script setup>
  import {ref} from 'vue'
  defineProps({
    msg:String,
    msg_emit:String
  })
  const emit = defineEmits(['response'])
  emit('response', 'hello from child')

</script>
<template>
   <h1>การใช้งาน Components</h1>
   <p>So far, we've only been working with a single component.
    Real Vue applications are typically created with nested components.</p>
    <hr>
    <h2>{{ msg || 'No props passed yet' }}</h2>
    <hr>
    <h2>Child component</h2>
    <slot>Fallback content</slot>
</template>