<template>
  <section class="city_add">
    <div class="form-collapse">
      <div class="input item">
        <input class="city_add-input" type="text" v-model="name">
      </div>
      <button class="city_add-button item button button-primary" @click="search">{{'cities.search' | t }}</button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Inject } from '~/core';
import { City, ICitiesService } from '~/shared';

@Component
export default class CityAddComponent extends Vue {
    public city: City = null;
    public name = '';

    @Inject() citiesService: ICitiesService;

    public async search(): Promise<void> {
        if (!this.name) {
            return;
        }
        
        this.city = await this.citiesService.search(this.name);
    }

    public testableMethods(num: number) {
      return num + 1;
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables';

.city_add {}
</style>