<script type="ts" setup>
import { defineProps } from 'vue';

const props = defineProps(['youtubekey']);
</script>

<template>
  <div class="relative pb-[56.25%]">
    <iframe
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
