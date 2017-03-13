import Vue = require('vue')
import * as vts from 'vue-typescript-component'

// the type-safe Listener interface of the child
import { ChildListener } from './child'
// the child component
import * as Child from './child.vue'

@vts.component({components: {Child}})
export default class ParentTs extends Vue implements ChildListener {
	@vts.prop({type: String, required: false})
	fromParent: String

	name = 'parent'
	count = 0

	get opposite(): number {
		return -this.count
	}

	// the following methods implement the ChildListener interface
	inc(): void {
		this.count++
	}
	dec(): void {
		this.count--
	}
	greet(text: String): void {
		if (text === 'child') {
			this.$emit('signChanged')
			this.count = -this.count
		}
	}
}
