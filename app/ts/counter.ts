import Vue = require('vue')
import * as vts from 'vue-typescript-component'

@vts.component()
export default class CounterTs extends Vue {
	@vts.prop({type: String, required: false})
	fromParent: String

	name = 'counter'
	count = 0

	inc() {
		this.count++
	}
	dec() {
		this.count--
	}

	get opposite(): number {
		return -this.count
	}
	set opposite(value: number) {
		this.count = -value
	}

	@vts.watch('count')
	watchForSignChange(val: number, oldVal: number) {
		if (val === -oldVal) {
			this.$emit('signChanged')
		}
	}

	created(): void {
		this.count++
	}
}
