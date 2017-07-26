<template>
  <div class="form-control">
    <label v-if="label" :for="name">{{ label }}</label>
    <masked-input :type="type" :id="name" :name="name" :placeholder="hint" :required="required" :mask="mask"></masked-input>
  </div>
</template>
<script>
import InputMask from 'vue-masked-input'

export default {
  components: {
    'masked-input': InputMask
  },
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
    },
    mask: String
  }
}
</script>
<style lang="scss" scoped>
</style>
