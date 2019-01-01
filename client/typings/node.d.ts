import Vue from 'vue'
import VueRouter from 'vue-router';
import VueI18n, { IVueI18n } from 'vue-i18n';

declare global {
  export namespace NodeJS {
    interface Process {
      server: boolean;
    }
  }
}
