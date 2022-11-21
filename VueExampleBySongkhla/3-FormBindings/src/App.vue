<script setup>
    import { ref } from 'vue'
    const text =ref('การทำ FormBindings')
    const onInput = (e)=>{text.value = e.target.value}
</script>
<template>
    <h1>การทำ FormBindings</h1>
    <input type="text" :value="text" @input="onInput" >
    <p>{{text}}</p>
</template>
