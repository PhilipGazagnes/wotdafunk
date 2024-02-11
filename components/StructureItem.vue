<script type="ts" setup>
import { computed } from 'vue'
const props = defineProps(['itemData']);

const { type, x, y, name, data } = props.itemData
</script>

<template>
  <div class="px-4 py-2 bg-white text-black mb-4 font-bold inline-block">{{ name }}</div>
  <div v-if="type === 'grid'" class="mb-8">
    <div class="grid gap-2" :style="{ gridRows: y, gridCols: x }">
      <template v-for="x in x" :key="`x${x}`">
        <template v-for="y in y" :key="`y${y}`">
          <div
            class="p-4 bg-white/10 font-bold text-center"
            :style="{ gridColumn: x, gridRow: y }"
          >
            {{ data[y-1][x-1] }}
          </div>
        </template>
      </template>
    </div>
  </div>
  <div v-if="type === 'text'" class="mb-8">
    <div v-for="(d, index) in data" :key="index">
      {{ d }}
    </div>
  </div>
</template>
