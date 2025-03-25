<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

const images = [
  "/src/assets/images/image1.jpg",
  "/src/assets/images/image2.jpg",
  "/src/assets/images/image3.jpg"
];
</script>

<template>
  <div class="home-container">
    <h1>Welcome to Travel Guide</h1>
    <p>Find information about cities, weather forecasts, and interesting places to visit. Save your favorite destinations and plan your perfect trip!</p>
    <div class="features">
      <div class="feature-card">
        <img src="@/assets/compass-svgrepo-com.svg" alt="Search">
        <h2>Find Cities</h2>
        <p>Search for cities and get detailed information.</p>
      </div>
      <div class="feature-card">
        <img src="@/assets/map-svgrepo-com.svg" alt="Weather">
        <h2>Check Weather</h2>
        <p>See the latest weather updates for any location.</p>
      </div>
      <div class="feature-card">
        <img src="@/assets/like.svg" alt="Favorites">
        <h2>Save Favorites</h2>
        <p>Bookmark cities you love and access them anytime.</p>
      </div>
    </div>
    <RouterLink to="/cities" class="explore-btn">Explore Now</RouterLink>
    <Carousel class="carousel-container" :itemsToShow="1" :wrapAround="true" :autoplay="3000" >
      <Slide v-for="(image, index) in images" :key="index">
        <img :src="image" class="carousel-image" />
      </Slide>
    </Carousel>
  </div>
</template>

<style>
.home-container {
  text-align: center;
  padding: 40px;
}

.features {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.feature-card {
  background: #ffffff10;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  width: 200px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: scale(1.05);
}

.feature-card img {
  width: 50px;
  height: 50px;
}

.explore-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: #8a2be2;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s;

}

.explore-btn:hover {
  background: #6a1bbf;
}
.carousel-container {
  max-width: 1000px; /* Обмежує ширину */
  margin: 50px auto; /* Відступи зверху і знизу + центрування */
  padding: 10px; /* Додає внутрішні відступи */
}

.carousel-image {
  width: 100%;
  height: 400px; /* Обмежує висоту */
  object-fit: cover; /* Щоб зображення не спотворювалися */
  border-radius: 10px;
}
</style>
