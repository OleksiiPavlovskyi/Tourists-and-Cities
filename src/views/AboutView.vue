<template>
  <div class="about-сontainer">
    <h1>About us😊</h1>
    <p>
      Welcome to our website! We are dedicated to providing travelers with accurate
      and engaging information about cities worldwide.
    </p>
    <div class="team-section">
      <h2>Meet Our Team</h2>
      <div class="team-members">
        <div class="team-member" v-for="(member, index) in team" :key="index">
          <img :src="member.photo" :alt="member.name" class="team-photo" />
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
        </div>
      </div>
    </div>
    <div class="mission-section">
      <h2>Our Mission</h2>
      <p>
        Our goal is to help users explore the world by providing essential information
        about cities, weather forecasts, and interesting landmarks.
      </p>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const team = ref([
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Jane Smith',
    role: 'Lead Developer',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Alice Brown',
    role: 'Marketing Specialist',
    photo: 'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]);</script>
<style scoped>
.about-сontainer {
  max-width: 800px;
  margin: 50px auto;
  text-align: center;
  padding: 20px;
}
.team-section, .mission-section {
  margin-top: 30px;
}
.team-members {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
.team-member {
  width: 200px;
  text-align: center;
}
.team-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 30px;
}
</style>

