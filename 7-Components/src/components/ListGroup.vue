<template>
  <ul class="list-group my-3">
    <li class="list-group-item" v-for="text of list">{{text}}</li>
  </ul>
</template>

<script>
  export default {
     props:{
       list:{
         type:Array,
         required:true
       }
     },
     data:()=>({

     })
  }
</script>