<template>
  <div class="form-control">
    <label v-if="label" :for="name">{{ label }}</label>
    <input :type="type" :id="name" :name="name" :placeholder="hint" :required="required">
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    hint:  {
      type: String,
      default: null
    },
    required: {
      type: String,
      default: null
    }
  }
}
</script>
<style lang="scss">
</style>
