<template>
    <div class="ckeditor">
      <label v-if="label" :for="name">{{ label }}</label>
        <textarea
          :name="name"
          :id="name"
          :value="value"
          :type="type"
          :config="config">
        </textarea>
    </div>
</template>

<script>
let inc = 0

export default {
  name: 'vue-ckeditor',
  props: {
    name: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    value: {
      type: String
    },
    type: {
      type: String,
      default: null
    },
    config: {
      type: Object,
      default: () =>  {
        return {
          language : 'vi',
          toolbar : 'Standard'
        }
      }
    }
  },
  computed: {
    instance () {
      if (this.name)
      return CKEDITOR.instances[this.name]
    }
  },
  beforeUpdate () {
    if (this.value !== this.instance.getData()) {
      this.instance.setData(this.value)
    }
  },
  mounted () {
    if (typeof CKEDITOR === 'undefined') {
      console.log('CKEDITOR is missing (http://ckeditor.com/)')
    } else {
      if (this.type === 'inline') {
          CKEDITOR.inline(this.name, this.config)
      } else if (this.type === 'document') {
          this.config['contentsCss'] = '/dist/ckeditor.document.css';
          CKEDITOR.replace(this.name, this.config)
      } else {
          CKEDITOR.replace(this.name, this.config);
      };

      this.instance.on('change', () => {
        let html = this.instance.getData()
        if (html !== this.value) {
          this.$emit('input', html)
          this.$emit('update:value', html)
        }
      })
    }
  },
  beforeDestroy () {
    if (this.instance) {
      this.instance.focusManager.blur(true)
      this.instance.removeAllListeners()
      this.instance.destroy()
      this.instance = null
    }
  }
}
</script>
