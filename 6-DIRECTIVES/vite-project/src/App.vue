<script setup>
  //Single-file components sfc
  const version = '1.0.0'
</script>
<template >
  <div className="container">
      <section className="row">
         <section className="col-sm-6">
          <h1  className="text-primary" >VERSION:{{version}}</h1>
         </section>
         <section className="col-sm-6">
           
         </section>
      </section>
  </div>
  
  <input type="text" v-bind:value="message">
             <input type="text" :value="message">  

   <input type="text" v-on:change="alertText('Change')">
   <input type="text" @change="alertText('Change')">

   <hr>
     <h1>{{message}}</h1>
     <h1 v-text="message"></h1>
     <h1 v-html="message"></h1>
     <input type="text" v-model="message">
     <input type="text" :value="message" @input="message = $event.target.value">
   <hr>
   <!-- v-if การเช็คเงือนไข -->
   <label>True?</label>
   <input type="checkbox" v-model="checked">
   <h1 v-if="checked">Is is true!</h1>
   <!-- v-else if = "condition" -->
   <h1 v-else>It is False</h1>
   <h1 v-show="checked">It is show</h1>
   <hr>
   <!-- loop ของ vue -->
   <ul>
    <!-- array loop -->
     <li v-for="num in 5">{{num}}</li> 
   </ul>

   <hr>
   <!-- object loop -->
   <ul>
       <li v-for="(value,key,index) in {a:1,b:2,c:3,d:4}">{{value}} : {{key}} : {{index+1}}</li>
   </ul>

   <!-- loop array -->

   <ul>
      <li v-for="num of [1,2,3,4]">{{num}}</li>
   </ul>

   <hr>
    <!-- v-focus เป็นการสร้างขึ้นมาเองไฟล์จะอยู่ที่ main.js-->
    <input type="text" v-focus>
    <button className="btn-danger"  v-new="'2021-11-25'">Old</button>
    
    <button v-new="'2022-12-30'">New</button>
   <hr>
   <button @click="count++">Increase</button>
   <p>{{count}}</p>
</template>
<script>
  // Options APi
  export default {
      data:()=>({ //ใช้สำหรับเก็บตัวแปร
          message:"Hello World",
          checked:true,
          count:0
      }),
      methods:{
         //ใช้สำหรับสร้างฟังชั่น
        alertText(message){
             alert(message);
        } 
      },
    
      
  }
</script>