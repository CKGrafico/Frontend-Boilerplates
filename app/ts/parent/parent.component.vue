<template>
    <div style="margin: 1em 1em">
<h3>Hola parent</h3>
    
        <span style="display:inline-block; width:6em">{{ name }}</span>
        <span style="display:inline-block; width:3em; text-align: center">{{ count }}</span>

        <child v-bind:listener="this"></child>
        <span style="display:inline-block; width:3em; text-align: center">{{ opposite }}</span>
        <span style="display:inline-block; width:3em;">{{ fromParent }}</span>
    </div>
</template>

<script> module.exports = require('./parent.component.ts').default.vueComponentOptions </script>
