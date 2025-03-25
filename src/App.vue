<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <header>
      <img alt="Directions" class="logo" src="@/assets/logo.svg" width="40" height="40" />

      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/cities">Cities</RouterLink>
          <RouterLink to="/about">About</RouterLink>

        </nav>
        <RouterLink to="/favorite"><img alt="Favorite" class="favoriteicon" src="@/assets/like.svg" /></RouterLink>

      </div>
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
    <div>
      © 2025 Directions
    </div>
  </footer>
  </div>


</template>

<style>
header {
  padding: 5px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  background-color: rgb(121, 62, 121);
  justify-content: center;
  height: 55px;
}
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
}

nav {
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative; /* Для абсолютного позиціонування лайка */
}

nav a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  height: 40px;
  border-radius: 8px;
  transition: background 0.3s;
  text-decoration: none;
  font-size: 20px;
  color: white;
  cursor: pointer;
}

/* Робимо контейнер для центрування */
.wrapper {
  display: flex;
  flex-grow: 1;
  justify-content: center; /* Центрує текст і іконки */
  position: relative;
}

/* Стилізація лайка */
.favoriteicon {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.3s;
  text-decoration: none;
}
main {
  flex-grow: 1; /* Робить так, щоб головний контент займав весь вільний простір */
  padding: 60px;
}
footer {
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 100%;
  background: rgb(121, 62, 121);
  color: white;
  text-align: center;
  padding: 10px;

}


</style>
