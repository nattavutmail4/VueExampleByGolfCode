<script setup>
  import {ref} from 'vue'
  import ChildCompVue from './components/ChildComp.vue';
  const greeting = ref('Hello from parent')
  const childMsg = ref('No child msg yet')
  const msg = ref('from parent')
</script>

<template>
  <ChildCompVue :msg="greeting"></ChildCompVue><hr>
  <h1>emit</h1>
  <ChildCompVue @response="(msg_emit) => childMsg = msg_emit" />
  <p>{{ childMsg }}</p>
  <h1>slot</h1>
  <ChildCompVue>Message: {{ msg }}</ChildCompVue>

</template>
