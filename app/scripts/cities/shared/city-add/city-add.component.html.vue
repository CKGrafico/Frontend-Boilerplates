<template>
  <div class="city_add">
    <div class="form-collapse">
      <div class="input item">
        <input class="city_add-input" type="text" v-model="name">
      </div>
      <button class="city_add-button item button button-primary" @click="search">{{'cities.search' | t }}</button>
    </div>
  </div>
</template>
