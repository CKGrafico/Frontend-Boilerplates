<template lang='pug'>
	div
		h3
			span Vue TypeScript Component Example <a href='https://github.com/locoslab/vue-typescript-component-example'>(Github)</a>
		div !: {{ signChangeCount }}
		counter(from-parent='app-1' v-on:signChanged='childSignChanged')
		parent(from-parent='app-2' v-on:signChanged='childSignChanged')
</template>

<script>
module.exports = require('./app.ts').default.vueComponentOptions
</script>

<style>
body {
	font-family: Verdana, Helvetica, sans-serif;
}
</style>
