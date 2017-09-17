import Vue from 'vue'
import App from './App.vue'
import './assets/index.less'

window.onload = function () {
  console.log('init')
  new Vue({
    el: 'body',
    components: {App}
  })
}
