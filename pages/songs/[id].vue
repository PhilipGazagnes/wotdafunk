<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Youtube from '../components/Youtube.vue'

const route = useRoute()

const importData = () => {
  const jsonData = ref(null);

  onMounted(async () => {
    try {
      const response = await import(`../../data/songs/${route.params.id}.json`);
      jsonData.value = response.default;
    } catch (error) {
      console.error('Error loading JSON data:', error);
    }
  });

  return { jsonData };
};

const { jsonData } = importData();

const navItems = [
  'structure',
  'lyrics',
  'video',
  'pdf',
]

const activeSection = ref(0)
</script>

<template>
  <div v-if="jsonData">
    <div class="wrapper">
      <div v-if="activeSection === 0">
        Structure
      </div>
      <div v-if="activeSection === 1">
        Lyrics
      </div>
      <div v-if="activeSection === 2">
        <Youtube :youtubekey="jsonData.youtubeKey" />
      </div>
      <div v-if="activeSection === 3">
        PDF
      </div>
    </div>
    <div class="metaBar">
      <div class="current">{{ jsonData.name }} - {{ jsonData.artist }}</div>
      <a href="/">Liste</a>
    </div>
    <div class="navBar">
      <button
        v-for="(label, index) in navItems" :key="index"
        :data-active="activeSection === index"
        class="navBarItem"
        @click="activeSection = index"
      >{{ label }}</button>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
}
.wrapper {
  padding: 40px 0 80px;
}
.metaBar {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #ddd;
  height: 40px;
}
.navBar {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 80px;
  background: white;
  border-top: 1px solid #ddd;
  box-shadow: 0 0 10px #eee;
  display: flex;
}
.navBarItem {
  width: 25%;
  text-transform: uppercase;
  border: none;
  background: white;
  &[data-active='true'] {
    background: #eee;
    font-weight: bold;
  }
}
</style>