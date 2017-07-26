<template>
  <div class="form-control">
    <label v-if="label" :for="name">{{ label }}</label>
    <div @click="focusNewTag()" :class="{'read-only': readOnly}" class="s-tag">
      <span v-for="(tag, index) in tags" :key="index" class="input-tag">
        <span>{{ tag }}</span>
        <a v-if="!readOnly" @click.prevent.stop="remove(index)" class="remove"></a>
      </span>
      <input v-if="!readOnly" :id="name" :name="name" :placeholder="hint" type="text" v-model="newTag" v-on:keydown.delete.stop="removeLastTag()" v-on:keydown.enter.188.prevent.stop="addNew(newTag)"/>
    </div>
  </div>
</template>
<script>
  const validators = {
    email: new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    url : new RegExp(/^(https?|ftp|rmtp|mms):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i),
    text : new RegExp(/^[a-zA-Z]+$/),
    digits : new RegExp(/^[\d() \.\:\-\+#]+$/),
    isodate : new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/)
  }

  export default {
    props: {
      label: {
        type: String,
        default: null
      },
      name: {
        type: String,
        default: null
      },
      tags: {
        type: Array,
        default: () => []
      },
      hint: {
        type: String,
        default: ''
      },
      onChange: {
        type: Function
      },
      readOnly: {
        type: Boolean,
        default: false
      },
      validate: {
        type: String,
        default: ''
      }
    },

    data () {
      return {
        newTag: ''
      }
    },

    methods: {
      focusNewTag () {
        if (this.readOnly) { return }
        this.$el.querySelector('input').focus()
      },

      addNew (tag) {
        if (tag && !this.tags.includes(tag) && this.validateIfNeeded(tag)) {
          this.tags.push(tag)
          this.tagChange()
        }
        this.newTag = ''
      },

      validateIfNeeded (tagValue) {
        if (this.validate === '' || this.validate === undefined) {
          return true
        } else if (Object.keys(validators).indexOf(this.validate) > -1) {
          return validators[this.validate].test(tagValue)
        }
        return true
      },

      remove (index) {
        this.tags.splice(index, 1)
        this.tagChange()
      },

      removeLastTag () {
        if (this.newTag) { return }
        this.tags.pop()
        this.tagChange()
      },

      tagChange () {
        if (this.onChange) {
          // avoid passing the observer
          this.onChange(JSON.parse(JSON.stringify(this.tags)))
        }
      }
    }
  }
</script>
<style>
  .s-tag {
    border: 1px solid #ccc;
    overflow: hidden;
    padding: 6px 12px 3px 12px;
    min-height: 34px;
    cursor: text;
    text-align: left;
    border-radius: 4px;
  }

  .s-tag input {
    padding: 0;
    width: 80px;
    height: auto;
    display: inline-block;
    border: none;
    box-shadow: none;
  }

  .s-tag .input-tag {
    background-color: #3498db;
    border-radius: 4px;
    color: #fff;
    display: inline-block;
    padding: 0 10px;
    margin-right: 4px;
    margin-bottom: 4px;
  }

  .s-tag .input-tag .remove {
    cursor: pointer;
    color: rgba(255,255,255,.5);
  }

  .s-tag .input-tag .remove:hover {
    text-decoration: none;
  }

  .s-tag .input-tag .remove::before {
    content: " x";
  }

  .s-tag.read-only {
    cursor: default;
  }

</style>
