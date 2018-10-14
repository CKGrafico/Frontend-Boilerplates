<template>
<div class="weather_detail" v-if="city">
  <header class="weather_detail-header">{{city.title}}</header>

  <ul class="weather_detail-cities">
    <li class="weather_detail-city" v-for="(forecast, index) in city.weather.item.forecast" :key="index">
      <span class="weather_detail-title">{{forecast.date | date}}</span>

      <div v-if="city.weather">
        <div v-if="city.weather.astronomy">
          <span class="weather_detail-item">{{'weather.sunrise' | t }}: {{city.weather.astronomy.sunrise}}</span>
          <span class="weather_detail-item">{{'weather.sunset' | t }}: {{city.weather.astronomy.sunset}}</span>
        </div>
        <div v-if="city.weather.item">
          <span class="weather_detail-item">{{forecast.low}}ºC / {{forecast.high}}ºC</span>
          <div>
            <span class="weather_detail-item">
              <i :class="['weather_detail-icon wi', getWeatherIconClass(forecast.code)]"></i>
            </span>
            <span class="weather_detail-item">{{forecast.text}}</span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { Inject } from '~/core';
import { ICitiesService, City, WeatherCodes, WeatherIcons } from '~/shared';
import { IWeatherService } from '../shared';

@Component
export default class extends Vue {
    public name = 'WeatherDetail';
    public city: City = null;

    @Inject() citiesService: ICitiesService;
    @Inject() weatherService: IWeatherService;

    @Prop() id: number;

    public async created(): Promise<void> {
        this.city = await this.citiesService.getById(this.id);
        this.city.weather = await this.weatherService.get(this.city);
    }

    // Refactor
    public getWeatherIconClass(code: number): string {
        return WeatherIcons[code] || WeatherIcons[WeatherCodes.NotAvailable];
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables';

.weather_detail {
  color: $color-foreground-bright;
  font-size: $font-size-l;

  @keyframes city-anim {
    0% {
      transform: rotateY(0);
    }

    100% {
      transform: rotateY(360deg);
    }
  }

  &-header {
    color: $color-secondary;
    margin-bottom: 1rem;
  }

  &-city {
    background-color: $color-background-bright;
    border-radius: 5px;
    padding: 1vw 3vw;
    transition: background-color $animation-speed-default;
  }

  &-title {
    font-size: $font-size-xl;
    font-weight: $font-weight-bold;
  }

  &-item {
    display: inline-block;
    padding: 1rem 0;
    vertical-align: middle;
  }

  &-icon {
    animation: city-anim $animation-speed-slow infinite;
    font-size: 3rem;
    margin-right: 1rem;
    perspective: 200;
    perspective-origin: 0 0;
    transform-origin: 50% 50%;
  }
}
</style>