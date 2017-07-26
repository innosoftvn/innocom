<template>
<div>
    <slot name="toolbar"></slot>
    <table>
        <thead>
            <slot></slot>
        </thead>
    </table>
    <v-scroll>
        <table>
            <tbody>
                <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table>
    </v-scroll>
</div>
</template>
<script>
import Vue from 'vue'
import Scroll from './Scroll.vue'

Vue.component('v-col', {
    template: '<th><slot></slot></th>',
    props: {
        type: 'text'
    }
});
const $ = require('innoajax');
export default {
    components: {
        'v-scroll': Scroll
    },
    props: {
        url: null,
        perPage: {
            type: [Number, String],
            default: 10
        }
    },
    data: () => ({
        root: null
    }),
    mounted() {
      if (this.url) this.fetch();
    },
    methods: {
        fetch() {
            var m = this;
            $.get(this.url, {
                per_page: m.perPage
            }).then(function(status, res) {
                m.root = res;
            });
        }
    }
}
</script>
<style lang="scss">
.s-header thead{
  position: relative;
}

.s-body {
  padding-right: 17px;
}
</style>
