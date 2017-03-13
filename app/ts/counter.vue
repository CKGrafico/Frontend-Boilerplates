<template lang='pug'>
div(style='margin: 1em 1em')
	span(style='display:inline-block; width:6em') {{ name }}
	span(style='display:inline-block; width:3em; text-align: center') {{ count }}
	button(href='#' v-on:click.stop='inc' style='display:inline-block; width:2em') +
	button(href='#' v-on:click.stop='dec' style='display:inline-block; width:2em') -
	button(href='#' v-on:click.stop='opposite=count' style='display:inline-block; width:2em') !
	span(style='display:inline-block; width:3em; text-align: center') {{ opposite }}
	span(style='display:inline-block; width:3em;') {{ fromParent }}
</template>

<script>
module.exports = require('./counter.ts').default.vueComponentOptions
</script>
