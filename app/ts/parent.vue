<template lang='pug'>
div(style='margin: 1em 1em')
	span(style='display:inline-block; width:6em') {{ name }}
	span(style='display:inline-block; width:3em; text-align: center') {{ count }}
	child(v-bind:listener='this')
	span(style='display:inline-block; width:3em; text-align: center') {{ opposite }}
	span(style='display:inline-block; width:3em;') {{ fromParent }}
</template>

<script>
module.exports = require('./parent.ts').default.vueComponentOptions
</script>
