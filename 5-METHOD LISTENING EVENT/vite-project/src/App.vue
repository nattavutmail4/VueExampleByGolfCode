<template>
  <div>
    <button onclick="alertOutside()">Click me! (Outside)</button> <!-- แบบนี้ใช้ไม่ได้-->
    <hr>
    <input type="text" v-model="name">
    <button v-on:click="alertApp()">Click me! (Vue App (v-on:click))</button>
    <button @click="alertApp()">Click me (Vue App (@click) )</button>
    <hr>

    <button @click="count++">add</button>
    <ul>
      <li v-for="c in count">
          <button @click="showInfo(c)">Show</button>
      </li>
    </ul>
    <hr>

    <textarea rows="15" cols="60" readonly>{{ log }}</textarea><br>
    <input
      @input="logInput('Input', $event)"
      @click="logInput('Click', $event)"
      @click.once="logInput('Click (Once)', $event)"
      @focus="logInput('Focus', $event)"
      @dblclick="logInput('Double Click', $event)"
      @contextmenu="logInput('Right Click (1)', $event)"
      @click.right="logInput('Right Click (2)', $event)"
      @click.middle="logInput('Middle Click', $event)"
     type="text">

     <hr>
    <div @click.stop="alertMessage('Outside')" style="height: 200px; width: 500px; background-color: red;">
      <div @click.stop="alertMessage('Inside')" style="height: 50px; width: 50px; position: relative; background-color: yellow; top: 20px; left: 100px;"></div>
    </div>
    <hr>
    <form @submit.prevent="login">
      <input v-model="username" name="username" type="email" required>
      <input v-model="password" name="password" type="password" minlength="6" required>
      <button>Login</button>
    </form>
  </div>
</template>

<script>
  function alertOutside(){
     alert('Hello outside')
  }
  export default {
      data:() =>({
          name:"John Doe",
          count:0,
          log:"",
          username:"",
          password:""
      }),
      methods:{
         alertApp(){
            alert('Hello app ' + this.name);
         },
         showInfo(c){
           alert(`index: ${c}`);
         },
         logInput(prefix, event) {
            this.log += `${prefix}: ${event?.target?.value} \n`;
         },
         alertMessage(text){
           alert(text)
         },
         login(){
          alert(`Username: ${this.username}; Password: ${this.password}`);
         }
      }
  }
</script>
