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
