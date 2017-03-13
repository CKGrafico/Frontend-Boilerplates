import Vue = require('vue')
import * as vts from 'vue-typescript-component'

import * as Counter from './counter.vue'
import * as Parent from './parent.vue'

@vts.component({components: {Counter, Parent}})
export default class App extends Vue {
	signChangeCount = 0
	childSignChanged() {
		this.signChangeCount++
	}
}
