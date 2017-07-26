<template>
  <div class="form-select">
    <label v-if="label" :for="name">{{ label }}</label>
    <select class="s-select" :id="name" :name="name" :placeholder="hint" :required="required" :multiple="multiple">
      <option v-for="e in list" :key="e">{{ e }}</option>
  </select>
  </div>
</template>
<script>
import Scroll from '../Scroll.vue'
export default {
  props: {
    init: {
      type: String,
      default: null
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
    value: {
      type: String,
      default: null
    },
    multiple: null
  },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.list = this.init.split(/[\|\,\;]+/);
  }
}
</script>
