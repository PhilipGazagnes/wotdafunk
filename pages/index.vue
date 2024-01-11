<script lang="ts" setup>
import indexJson from '../data/index.json'

type Song = {
  id: string,
  name: string,
  artist: string,
}

const songs: Song[] = indexJson
</script>

<template>
  <div class="px-4 pb-10">
    <h1 class="text-white text-3xl md:text-4xl text-center py-16 font-bold">Wot da Funk : <span class="whitespace-nowrap">Jam Session Funk !</span></h1>
    <ul class="grid sm:grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
      <li
        v-for="(song, index) in songs.sort((a, b) => a.name > b.name ? 1 : -1)"
        :key="index"
        class="bg-white/10 rounded-2xl p-5"
      >
        <a :href="`/songs/${song.id}`" class="flex justify-between flex-col h-24 text-white">
          <span class="block text-xl font-bold drop-shadow-lg">{{ song.name }}</span>
          <span class="block">{{ song.artist }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>