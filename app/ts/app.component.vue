<template>
    <div class="ck-app">
        <div>!: {{ signChangeCount }}</div>
        <counter from-parent="app-1" v-on:signChanged="childSignChanged"></counter>
        <parent from-parent="app-2" v-on:signChanged="childSignChanged"></parent>
    </div>
</template>

<script> module.exports = require('./app.component.ts').default.vueComponentOptions </script>
