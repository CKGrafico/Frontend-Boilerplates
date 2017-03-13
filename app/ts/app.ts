import Vue from 'vue'
import App from './app.component'

// mount
new Vue({
  el: '#app2',
  render: h => h(App, {
    props: { propMessage: 'World' }
  })
})