<template>
    <div style="margin: 1em 1em">
        <span style="display:inline-block; width:6em">{{ name }}</span>
        <span style="display:inline-block; width:3em; text-align: center">{{ count }}</span>
        <button href="#" v-on:click.stop="inc" style="display:inline-block; width:2em">+</button>
        <button href="#" v-on:click.stop="dec" style="display:inline-block; width:2em">-</button>
        <button href="#" v-on:click.stop="opposite=count" style="display:inline-block; width:2em">!</button>
        <span style="display:inline-block; width:3em; text-align: center">{{ opposite }}</span>
        <span style="display:inline-block; width:3em">{{ fromParent }}</span>
    </div>
</template>

<script> module.exports = require('./counter.component.ts').default.vueComponentOptions </script>
