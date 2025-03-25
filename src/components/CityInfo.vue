<script>
import { ref } from 'vue';
import axios from 'axios';
// import { LMap, LTileLayer, LMarker } from "vue-leaflet";
// import "leaflet/dist/leaflet.css";

const city = ref('Kyiv');
const cityData = ref(null);
//const weatherData = ref(null);
const cityImage = ref(null);
const fetchCityData = async () => {
  try {
    // Отримуємо координати та основну інформацію про місто
    const geoResponse = await axios.get(
      `http://api.geonames.org/searchJSON?q=${city.value}&maxRows=1&username=demo`
    );

    if (geoResponse.data.geonames.length > 0) {
      cityData.value = geoResponse.data.geonames[0];
      // const { lat, lng } = cityData.value;

      // Отримуємо погоду
      // const weatherResponse = await axios.get(
      //   `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=YOUR_OPENWEATHER_API_KEY&units=metric`
      // );
      // weatherData.value = weatherResponse.data;

      // Отримуємо зображення міста
      const imageResponse = await axios.get(
        `https://api.unsplash.com/search/photos?query=${city.value}&client_id=3BwYZnd3iBe-q_WZiwhHJmWhYHujHnopQyt3g_8PQmM`
      );
      cityImage.value = imageResponse.data.results[0]?.urls.regular;
    }
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
  }
};

fetchCityData();
</script>

<template>
  <div class="city-info">
    <h2>Інформація про місто: {{ city }}</h2>
    <div v-if="cityData">
      <p><strong>Країна:</strong> {{ cityData.countryName }}</p>
      <p><strong>Населення:</strong> {{ cityData.population }}</p>
    </div>
    <div v-if="weatherData">
      <p><strong>Погода:</strong> {{ weatherData.weather[0].description }}</p>
      <p><strong>Температура:</strong> {{ weatherData.main.temp }}°C</p>
    </div>
    <img v-if="cityImage" :src="cityImage" alt="City Image" class="city-image" />
    <!-- <LMap v-if="cityData" :zoom="10" :center="[cityData.lat, cityData.lng]" class="map">
      <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LMarker :lat-lng="[cityData.lat, cityData.lng]" />
    </LMap> -->
  </div>
</template>

<style>
.city-info {
  text-align: center;
  margin: 20px auto;
  max-width: 600px;
}
.city-image {
  width: 100%;
  border-radius: 10px;
  margin-top: 15px;
}
.map {
  height: 300px;
  width: 100%;
  margin-top: 15px;
}
</style>
