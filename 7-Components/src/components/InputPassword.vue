<template>
  <form @submit.prevent="onSubmit">
    <slot></slot>
    <div class="mb-3">
      <label class="form-label">Password:</label>
      <input v-model="password" class="form-control" type="password" required>
    </div>
    <div class="mb-3">
      <label class="form-label">Repeat password:</label>
      <input v-model="repeatPassword" class="form-control" type="password" required>
    </div>
    <button class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  data: () => ({
    password: '',
    repeatPassword: ''
  }),
  methods: {
    onSubmit() {
      if (this.password === this.repeatPassword) {
        this.$emit('submit-form',this.password)
      } else {
        alert('Password not match')
      }
    }
  }
}
</script>