<template>
  <div class="weather_list">
    <ul class="weather_list-cities">
      <li class="weather_list-city" v-for="(city, index) in cities" @click="goToCity(city.woeid)" :key="index">
        <span class="weather_list-title">{{city.title}}</span>
        <div v-if="city.weather">
          <div v-if="city.weather.astronomy">
            <span class="weather_list-item">{{'weather.sunrise' | t }}: {{city.weather.astronomy.sunrise}}</span>
            <span class="weather_list-item">{{'weather.sunset' | t }}: {{city.weather.astronomy.sunset}}</span>
          </div>
          <div v-if="city.weather.item">
            <span>{{city.weather.item.forecast[0].date | date}} (Today):</span>
            <span class="weather_list-item">{{city.weather.item.forecast[0].low}}ºC / {{city.weather.item.forecast[0].high}}ºC</span>
            <div>
              <span class="weather_list-item">
                <i :class="['weather_list-icon wi', getWeatherIconClass(city.weather.item.forecast[0].code)]"></i>
              </span>
              <span class="weather_list-item">{{city.weather.item.forecast[0].text}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
