import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  template: '<button @click="onClick">Click!</button>'
})
export default class MyComponent extends Vue {
  message = 'Hello!'

  onClick (): void {
    window.alert(this.message)
  }
}