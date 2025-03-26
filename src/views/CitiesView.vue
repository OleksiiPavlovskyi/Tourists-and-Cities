<script setup>
import CityInfo from '/src/components/CityInfo.vue'
</script>

<template>
  <main>
    <h1>Here we go to 🛫</h1>
    
    <CityInfo />
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
h1{
  font-size: 56px;
}
</style>
