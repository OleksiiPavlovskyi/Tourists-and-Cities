<script setup>
import { ref } from 'vue';
import axios from 'axios';

const city = ref('');
const cityData = ref(null);
const loading = ref(false);
const error = ref(null);

const fetchCityData = async () => {
  if (!city.value.trim()) return;

  loading.value = true;
  error.value = null;
  cityData.value = null;

  try {
    const response = await axios.get(`http://localhost:3000/city/${encodeURIComponent(city.value)}`);
    cityData.value = response.data;
  } catch (error) {
    error.value = 'Не вдалося отримати інформацію. Спробуйте інше місто.';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="city-search">
    <input
      v-model="city"
      type="text"
      placeholder="Введіть назву міста"
      @keyup.enter="fetchCityData"
    />
    <button @click="fetchCityData">Шукати</button>
  </div>

  <div v-if="loading">Завантаження...</div>
  <div v-if="error" class="error">{{ error }}</div>

  <div class="infocard">
    <div class="city-info" v-if="cityData">
      <h2>Інформація про місто: {{ cityData.city }}</h2>
      <p><strong>Країна:</strong> {{ cityData.country }}</p>
      <p><strong>Опис:</strong> {{ cityData.description }}</p>
      <img v-if="cityData.image" :src="cityData.image" alt="City Image" class="city-image" />
    </div>
  </div>

</template>

<style>
.city-search {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.city-search input {
  padding: 8px;
  font-size: 16px;
  border-radius: 10px;
}

.city-search button {
  padding: 8px 12px;
  background: purple;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}

.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}

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
h2{
  font-size: 36px;
}
.city-info{
  margin: 50px;
}
.infocard{
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
}
</style>
