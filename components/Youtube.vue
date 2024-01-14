<script type="ts" setup>
import { defineProps, ref } from 'vue';

const props = defineProps(['youtubekey']);
const active = ref(false)
</script>

<template>
  <div class="relative pb-[56.25%]">
    <button v-if="!active" @click="active=true" class="absolute w-full h-full flex justify-center items-center bg-black/20 rounded-md">Voir la vidéo</button>
    <iframe
      v-else
      class="absolute w-full h-full"
      width="560"
      height="315"
      :src="`https://www.youtube.com/embed/${youtubekey}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen />
  </div>
</template>
