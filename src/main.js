if (process.env.NODE_ENV !== 'production') {
    require('file-loader!../index.html')
}

require('./scss/app.scss');

import Vue from 'vue'
import Scroll from './com/Scroll.vue'
import Grid from './com/Grid.vue'

new Vue({
  el: '#app',
  components: {
    'scroll': Scroll,
    'grid': Grid
  }
})
