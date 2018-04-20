import Vue from 'vue';

Vue.filter('hello', (info: string) => {
    return `hello ${info}`;
});