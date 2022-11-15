<template>
  <ul class="list-group">
    <li v-for="(text, index) of list" class="list-group-item d-flex align-items-center justify-content-between">
      <span>{{ text }}</span>
      <button v-if="enableEdit" type="button" class="btn btn-sm btn-secondary" @click="onEdit(index)">Edit</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      // default: ['ก', 'ข', 'ค'],
      validator(value) {
        if (!Array.isArray(value) || !value.every(v => typeof v === 'string')) {
          return false
        }
        return true
      }
    },
    enableEdit: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onEdit(index) {
      const value = prompt('Edit list', this.list[index])
      this.list[index] = value
    }
  }
}
</script>