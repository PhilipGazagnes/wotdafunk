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
  <div>
    <h1>Wot da Funk : Jam Session Funk !</h1>
    <ul>
      <li v-for="(song, index) in songs" :key="index">
        <a :href="`/songs/${song.id}`">{{ song.name }} ({{ song.artist }})</a>
      </li>
    </ul>
  </div>
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
}
</style>