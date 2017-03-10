import Vue from 'vue'
import App from './app.component'

export default new Vue({
  el: '.js-app',
  render: h => h(App, {
    props: { propMessage: 'World' }
  })
})