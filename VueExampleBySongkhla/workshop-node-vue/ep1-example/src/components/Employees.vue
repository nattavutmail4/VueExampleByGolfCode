<script setup>
 import {ref} from 'vue'

 let id = 1;
 const data = [
   {id:id++,name:'About',price:20000},
   {id:id++,name:'bout',price:10000},
   {id:id++,name:'out',price:30000},
   {id:id++,name:'Dout',price:40000},
   {id:id++,name:'Cbout',price:60000},
   {id:id++,name:'Fout',price:70000},
 ]
</script>
<template>
  <section>
    <div class="row">
        <table width="600px">
          <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>price</th>
              </tr>
          </thead>
          <tbody>
             <tr v-if="data.length" v-for="emp in data" :key="emp.id">
               <td>{{emp.id}}</td>
               <td>{{emp.name}}</td>
               <td>{{emp.price}}</td>
            </tr>
            <tr v-else>
                <tr>
                  <td colspan="3">no data</td>
                </tr>
            </tr>
          </tbody>
        </table>
    </div>
  </section>
</template>
