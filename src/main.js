if (process.env.NODE_ENV !== 'production') {
    require('file-loader!../index.html')
}

// require('lodash')
String.prototype.removeAccentVN = function () {
    return this.toLowerCase()
      .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
      .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
      .replace(/ì|í|ị|ỉ|ĩ/g, "i")
      .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
      .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
      .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
      .replace(/đ/g, "d");
}

require('./scss/app.scss')

import Vue from 'vue'
import Scroll from './com/Scroll.vue'
import Grid from './com/Grid.vue'
import Form from './com/Form.vue'
import Input from './com/forms/Input.vue'
import Select from './com/forms/Select.vue'
import Tag from './com/forms/Tag.vue'
import DatePicker from './com/forms/Date.vue'
import InputMask from './com/forms/InputMask.vue'
import VueEditor from './com/forms/Editor.vue'

new Vue({
  el: '#app',
  components: {
    'v-scroll': Scroll,
    'v-grid': Grid,
    'v-input': Input,
    'v-form': Form,
    'v-select': Select,
    'v-tag': Tag,
    'v-date': DatePicker,
    'v-mask': InputMask,
    'v-editor': VueEditor
  }
})
