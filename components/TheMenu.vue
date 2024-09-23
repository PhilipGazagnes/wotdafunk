<script lang="ts" setup>
const items = [
  {
    label: 'Les morceaux pour jammer',
    href: '/morceaux',
  },
  {
    label: 'Les prochaines jams',
    href: '/dates',
  },
  {
    label: 'Infos pratiques',
    href: '/infos',
  },
  {
    label: 'Communauté',
    href: '/communaute',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-6">
    <a v-for="(i, index) in items" :key="index" :href="i.href" class="border border-white rounded-md p-4 lg:flex-initial lg:w-1/5 lg:block lg:h-60 lg:flex lg:flex-col lg:items-center lg:justify-end">{{ i.label }}</a>
  </div>
</template>

