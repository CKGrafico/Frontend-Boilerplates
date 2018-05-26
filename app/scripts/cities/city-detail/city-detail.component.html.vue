<template>
  <div class="city_detail" v-if="city">
    <header class="city_detail-header">{{city.title}}</header>
    <iframe class="city_detail-map" width="400" height="400" frameborder="0" :src="mapUrl" scrolling="no"></iframe>
  </div>
</template>
