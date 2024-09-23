<script lang="ts" setup>
import indexJson from '../data/index.json'
import { ref } from 'vue'

type Song = {
  id: string,
  name: string,
  artist: string,
}

const songs: Song[] = indexJson

const drawer = ref<HTMLElement | null>(null)
const jsonContent = ref<object | null>(null)
const error = ref<string | null>(null)

async function handleClick(id: string) {
  if(!drawer.value) return

  try {
    // Replace 'your-json-file.json' with the path to your JSON file
    const response = await fetch(`/songs/${id}.json`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    jsonContent.value = await response.json()
    if (jsonContent.value) {
      jsonContent.value.id = id
    }
    error.value = null
    drawer.value.openDrawer()
  } catch (e) {
    console.error('Error loading JSON:', e)
    error.value = 'Failed to load JSON file. Please try again.'
    jsonContent.value = null
  }
}
</script>

<template>
  <div class="">
    <h1 class="text-white text-3xl md:text-4xl text-center mt-0 mb-12 font-bold">Les morceaux pour jammer</h1>
    <ul class="">
      <li
        v-for="(song, index) in songs.sort((a, b) => a.name > b.name ? 1 : -1)"
        :key="index"
        class="odd:bg-white/10"
      >
        <div class="block relative lg:flex lg:justify-between lg:items-center p-4 cursor-pointer" @click="handleClick(song.id)">
          <div class="max-w-[50%] text-xl font-bold lg:w-1/3 lg:flex-initial leading-tight mb-1 lg:mb-0">{{ song.name }}</div>
          <div class="lg:w-1/3 lg:flex-initial mb-2 lg:mb-0">{{ song.artist }}</div>
          <div class="absolute top-1/2 -translate-y-1/2 lg:top-auto lg:translate-y-0 right-4 lg:static lg:w-1/3 lg:flex-initial"><span class="block text-right lg:text-left lg:inline text-sm opacity-50">Tonalité :</span> <span class="block text-right lg:text-left lg:inline text-3xl lg:text-lg font-bold">{{ song.tona }}</span></div>
          <div class="underline text-accent">Détails</div>
        </div>
      </li>
    </ul>
    <TheDrawer ref="drawer">
      <div v-if="!!jsonContent">
        <div class="text-2xl font-bold">{{ jsonContent.name }}</div>
        <div class="text-xl">{{ jsonContent.artist }}</div>
        <div class="mt-4 mb-8">Tona : <span class="text-4xl font-bold">{{ jsonContent.tona }}</span></div>
        <div v-if="!!jsonContent.structure && jsonContent.structure.length" class="mt-4">
          <div class="text-xl text-accent mb-2 font-bold">Infos</div>
          <p v-for="(line, index) in jsonContent.structure" :key="index">{{ line }}</p>
        </div>
        <div v-if="!!jsonContent.lyrics && jsonContent.lyrics.length" class="mt-4">
          <div class="text-xl text-accent mb-2 font-bold">Lyrics</div>
          <p v-for="(line, index) in jsonContent.lyrics" :key="index">{{ line }}</p>
        </div>
      </div>
    </TheDrawer>
  </div>
</template>