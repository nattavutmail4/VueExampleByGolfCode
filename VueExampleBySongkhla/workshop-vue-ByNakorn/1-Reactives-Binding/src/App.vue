<!-- <script setup>
// Composition API
import { ref } from 'vue'
const message = ref('Hello from setup')
</script> -->

<template>
  <h1>{{ message }}</h1>
  <h1 v-text="message"></h1>
  <h1 v-html="message"></h1>
  <input v-model="message" type="text">

  <hr>

  <h1>{{ link }}</h1>
  <input v-model="link" type="text">
  <ul>
    <li>
      <a v-bind:href="link" target="_blank">Click Link (v-bind:href)</a>
    </li>
    <li>
      <a :href="link" target="_blank">Click Link (:href)</a>
    </li>
    <li>
      <a :href="'https://www.google.com/' + link" target="_blank">Click Link (:href prefix google)</a>
    </li>
  </ul>

  <hr>

  <img v-bind="image"><br>
  <img :src="image.src" :width="image.width" :height="image.height">
  <div>
    <label for="imgSrc">src:</label>
    <input id="imgSrc" v-model="image.src" type="text">
  </div>
  <div>
    <label for="imgWidth">width:</label>
    <input id="imgWidth" v-model.number="image.width" type="number">
  </div>
  <div>
    <label for="imgHeight">height:</label>
    <input id="imgHeight" v-model.number="image.height" type="number">
  </div>

  <hr>

  <h1>{{ count * 100 }}</h1>
  <button @click="count++">Increase</button>

  <hr>

  <h2 :class="`${fontClass.extra} ${fontClass.center ? 'text-center' : ''} ${fontClass.lineThrough ? 'line-through' : ''}`" :style="`font-family: ${fontStyle.fontFamily}; font-size: ${fontStyle.fontSize}`">Example</h2>
  <h2 :class="[fontClass.extra, fontClass.center ? 'text-center' : '', fontClass.lineThrough ? 'line-through' : '']" :style="{ fontFamily: fontStyle.fontFamily, fontSize: fontStyle.fontSize }">Example</h2>
  <h2 :class="[fontClass.extra, { 'text-center': fontClass.center, 'line-through': fontClass.lineThrough }]" :style="fontStyle">Example</h2>
  <input v-model="fontStyle.fontSize" type="text">
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
  </div><hr>
  <ul>
    <h1>dd</h1>
    <li v-if="items.length" v-for="(item, index) in items"> {{ parentMessage }}  - {{ index+1 }} - {{item.message}}</li>
    <li v-else>-</li>
  </ul>
</template>

<script>
// Options API
// import { ref } from 'vue'

export default {
  data: () => ({
    message: 'สวัสดีชาวโลก',
    link: 'http://example.com/',
    image: {
      src: 'https://picsum.photos/200',
      width: 200,
      height: 200
    },
    count: 0,
    fontStyle: {
      fontFamily: 'Arial',
      fontSize: '20px'
    },
    fontClass: {
      center: false,
      lineThrough: false,
      extra: ''
    },
    parentMessage: 'Parent',
    items: [
      { id:1,message: 'Foo' },
      { id:2,message: 'Bar' }
    ]
  })
  // setup() {
  //   const message = ref('HELLO FROM INSIDE SETUP')
  //   return { message }
  // }
}
</script>

<style>
h1 {
  color: red;
}
.text-center {
  text-align: center;
}
.line-through {
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