import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/base/theme.scss';
import './main.scss';
import Todo from './Todo.vue'


Vue.use(VueMaterial);

new Vue({
  el: '#app',
  render: h => h(Todo)
})
