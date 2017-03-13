<template>
    <div style="margin: 1em 1em">
        <span style="display:inline-block; width:6em">{{ name }}</span>
        <span style="display:inline-block; width:3em; text-align: center">{{ count }}</span>

        <child v-bind:listener="this"></child>
        <span style="display:inline-block; width:3em; text-align: center">{{ opposite }}</span>
        <span style="display:inline-block; width:3em;">{{ fromParent }}</span>
    </div>
</template>

<script>
    module.exports = require('./parent.ts').default.vueComponentOptions
</script>
