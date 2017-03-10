import Vue from 'vue'
import Component from 'vue-class-component'

export default class App extends Vue {
  propMessage: string
  msg = 123
  helloMsg = 'Hello, ' + this.propMessage

  mounted () {
    this.greet()
  }

  get computedMsg () {
    return 'computed ' + this.msg
  }

  greet () {
    alert('greeting: ' + this.msg)
  }
}

