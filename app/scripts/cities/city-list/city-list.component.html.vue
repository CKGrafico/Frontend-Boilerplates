<template>
  <section class="city_list">
    <city-add></city-add>

    <loading v-if="!cities" />

    <ul class="city_list-cities" v-if="cities">
      <li class="city_list-city content-end" v-for="(city, index) in cities" :key="index">
        <span class="city_list-title">{{city.title}}</span>
        <router-link class="city_list-view badges-list-item" :to="{ name: 'city-detail', params: { id: city.woeid }}" title="view">➤</router-link>
        <span class="city_list-close badges-list-item" @click="remove(city.woeid)" title="delete">×</span>
      </li>
    </ul>
  </section>
</template>
