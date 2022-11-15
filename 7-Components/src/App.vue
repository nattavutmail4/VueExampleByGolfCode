<template>
  <div class="container my-3">
    <ListGroup :list="['a', 'b', 'c']"></ListGroup>
    <hr>
    <ListGroup :list="numbers" enable-edit></ListGroup>
    <button type="button" class="btn btn-primary mt-2" @click="numbers.push(numbers.length)">Add</button>
    <h1>Register</h1>
    <InputPassword @submit-form="onRegister">
      <div class="mb-3">
        <label class="form-label">Username:</label>
        <input v-model="username" class="form-control" type="text" required>
      </div>
    </InputPassword>

    <hr>

    <h1>Change password</h1>
    <InputPassword @submit-form="onChangePassword">
      <div class="mb-3">
        <label class="form-label">Old Password:</label>
        <input v-model="oldPassword" class="form-control" type="password" required>
      </div>
    </InputPassword>
    <hr>
  </div>
</template>

<script>
import ListGroup from './components/ListGroup.vue'
import InputPassword from './components/InputPassword.vue'

export default {
  components: {
    ListGroup,
    InputPassword,
},
  data: () => ({
    numbers: [],
    username:"",
    oldPassword:""
  }),
  methods: {
    onRegister(password){
        alert(JSON.stringify({
            username:this.username,
            password
        }))
    },
    onChangePassword(password) {
        alert(JSON.stringify({
          oldPassword:this.oldPassword,
          password
        }))
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>