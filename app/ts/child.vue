<template lang='pug'>
div(style='display:inline-block;')
	button(href='#' v-on:click.stop='inc' style='display:inline-block; width:2em') +
	button(href='#' v-on:click.stop='dec' style='display:inline-block; width:2em') -
	button(href='#' v-on:click.stop='greet(name)' style='display:inline-block; width:2em') !
</template>

<script>
module.exports = require('./child.ts').default.vueComponentOptions
</script>
