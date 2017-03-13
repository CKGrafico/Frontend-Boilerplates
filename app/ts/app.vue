<template>
    <div>
        <h3>
            <span>Vue TypeScript Component Example 
                <a href='https://github.com/locoslab/vue-typescript-component-example'>(Github)</a>
            </span>
        </h3>
        <div>!: {{ signChangeCount }}</div>
        <counter from-parent="app-1" v-on:signChanged="childSignChanged"></counter>
        <parent from-parent="app-2" v-on:signChanged="childSignChanged"></parent>
    </div>
</template>

<script>
module.exports = require('./app.ts').default.vueComponentOptions
</script>

<style>
body {
    font-family: Verdana, Helvetica, sans-serif;
}
</style>
