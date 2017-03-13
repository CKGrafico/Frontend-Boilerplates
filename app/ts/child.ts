import Vue = require('vue')
import * as vts from 'vue-typescript-component'

// it is also possible to use a complex interface that allows compile-time type checking
export interface ChildListener {
	inc(): void
	dec(): void
	greet(text: String): void
}

@vts.component()
export default class Child extends Vue {
	@vts.prop()
	listener: ChildListener

	name = 'child'

	inc() {
		this.listener.inc()
	}
	dec() {
		this.listener.dec()
	}
	greet(msg: String) {
		this.listener.greet(msg)
	}

	created() {
		this.inc()
	}
}
