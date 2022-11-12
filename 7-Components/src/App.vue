
<template>
  <div class="container-fulid my-3">
    <div class="row">
      <div class="col-sm-12">
      <h1>&nbsp;Example Components</h1><hr>
      </div>
    </div>
    <section class="container my-3">
      <div class="row">
        <div class="col-sm-6">
          <ListGroup :list="numbers"></ListGroup>
          <button class="btn btn-primary" type="button" @click="numbers.push(number.length)">Add</button>
          <ListGroup :list="[1,2,3,4]"></ListGroup>

        </div>
        <div class="col-sm-6">&nbsp;</div>
      </div>
    </section>
  </div>
</template>
<script>
  import ListGroup from "./components/ListGroup.vue"  //import commponent
  export default {
     components:{
       ListGroup
     },
     data:()=>({
        numbers:[]
     })
  }
</script>
