<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Youtube from '../components/Youtube.vue'
import StructureItem from '../components/StructureItem.vue'

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
  'chords',
  'lyrics',
  'video',
  'pdf',
]

const activeSection = ref(0)
</script>

<template>
  <div v-if="jsonData" class="h-full p-6 text-white">
    <a href="/" class="block w-8 h-8 rounded-full bg-white/20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="w-full h-full -translate-x-[2px]"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </a>
    <h1 class="mt-4">
      <span class="block text-2xl font-bold">{{ jsonData.name }}</span>
      <span class="block">{{ jsonData.artist }}</span>
    </h1>
    <h2 class="mt-10 mb-5 text-lg border-b border-white p-2 text-right">Structure, chords</h2>
    <div>
    
      <div v-for="(line, index) in jsonData.structure" :key="index" class="mb-3">
        <template v-if="(typeof line === 'string')">{{ line }}</template>
        <StructureItem v-else :item-data="line"/>
      </div>
      
    </div>
    <h2 v-if="jsonData.lyrics" class="mt-10 mb-5 text-lg border-b border-white p-2 text-right">Lyrics</h2>
    <div v-if="jsonData.lyrics">
      <p v-for="(line, index) in jsonData.lyrics" :key="index" class="mb-3">
        <template v-if="line.length">
          <template v-if="line.indexOf ('#b#') === 0">
            <span class="font-bold">{{ line.substring(3) }}</span>
          </template>
          <template v-else-if="line.indexOf ('#i#') === 0">
            <span class="italic">{{ line.substring(3) }}</span>
          </template>
          <template v-else>
            {{ line }}
          </template>
        </template>
        <template v-else>
          <br />
        </template>
      </p>
    </div>
    <h2 class="mt-10 mb-5 text-lg border-b border-white p-2 text-right">Video</h2>
    <div class="pb-20">
      <Youtube :youtubekey="jsonData.youtubeKey" />
    </div>
  </div>
  <div v-else class="p-6 text-white/50">
    Loading...
  </div>
</template>
