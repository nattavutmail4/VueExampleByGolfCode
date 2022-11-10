<style scrop>
   h1{
    color:red
   }
   .text-center{
      text-align: center;
   }
   .line-through{
      text-decoration: line-through;
   }
   .text-danger {
      color: red;
    }
  .text-success {
    color: green;
  }
  .text-warning {
    color: yellow;
  }
</style>
<template>
  <div>
      <h1>{{message}}</h1>
      <input v-model="message" type="text">
      <hr>

      <h1>{{link}}</h1>
      <input v-model="link" type="text">&nbsp;&nbsp;
      <!-- การทำ v-bind ไปยังลิงค์อื่น :href="" เป็นการย่อ จากของเดิม v-bind:href="" -->
      <ul>
        <li>
          <a :href="link" target="_blank">click Link (v-bind:href)</a>
        </li>
        <li>
           <a href="link" target="_blank">click Link  (:href)</a>
        </li>
        <li>
          <a :href="link" target="_blank">click Link (:href)</a>
        </li>
      </ul>
      <hr>
      <img v-bind="image"><br>
      <img :src="image.src" :width="image.width" :height="image.height">
      <div>
          <label for="imgSrc">src:</label>
          <input type="text" id="imgSrc" v-model="image.src">
      </div>
      <div>
          <label for="imgWidth">width:</label>
          <input type="number" id="imgWidth" v-model.number="image.width">
      </div>
      <div>
          <label for="imgHeight">Height:</label>
          <input type="number" id="imgHeight" v-model.number="image.height">
      </div>
      <hr>

      <h1>{{count}}</h1>
      <button @click="count++">บวก</button>
      <button @click="count--">ลบ</button>
      <hr>

  <h2 :class="`${fontClass.extra} ${fontClass.center ? 'text-center' : ''} ${fontClass.lineThrough ? 'line-through' : ''}`" :style="`font-family: ${fontStyle.fontFamily}; font-size: ${fontStyle.fontSize}; color:${fontStyle.fontcolor}`">Example</h2>
  <h2 :class="[fontClass.extra, fontClass.center ? 'text-center' : '', fontClass.lineThrough ? 'line-through' : '']" :style="{ fontFamily: fontStyle.fontFamily, fontSize: fontStyle.fontSize , color:fontStyle.fontcolor}">Example</h2>
  <h2 :class="[fontClass.extra, { 'text-center': fontClass.center, 'line-through': fontClass.lineThrough }]" :style="fontStyle">Example</h2>
  <input v-model="fontStyle.fontSize" type="text">
  <input v-model="fontStyle.fontcolor" type="color">

  <select v-model="fontStyle.fontFamily">
    <option value="Arial">Arial</option>
    <option value="Impact">Impact</option>
    <option value="Georgia">Georgia</option>
  </select>
  <div>
    <input id="fontCenter" v-model="fontClass.center" type="checkbox">
    <label for="fontCenter">Center?</label>
  </div>
  <div>
    <input id="fontLineThrough" v-model="fontClass.lineThrough" type="checkbox">
    <label for="fontLineThrough">Line through?</label>
  </div>
  <div>
    <label for="fontExtra">Extra class</label>
    <input id="fontExtra" v-model="fontClass.extra" type="text">
  </div>
  </div>
</template>

<script>
  // Option api
  // import {ref} from "vue"
  export default {
      data(){
         return {
            message:"สวัสดีชาวโลก",
            link:"http://example.com",
            image:{
               src:"https://picsum.photos/200",
               width:200,
               height:200
            },
            count:0,
            fontStyle:{
              fontfamily:'Arial',
              fontSize:`10px`,
              fontcolor:''
            },
            fontClass: {
                center: false,
                lineThrough: false,
                extra: ''
            }

         }
      }
  }
</script>