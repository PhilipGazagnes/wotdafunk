<template>
  <div>
    <!-- Backdrop -->
    <div
      v-if="isOpen"
      @click="closeDrawer"
      class="fixed inset-0 bg-white bg-opacity-50 transition-opacity"
    ></div>

    <!-- Drawer -->
    <div
      :class="[
        'fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-primary w-96 max-w-[80%]',
        isOpen ? 'transform-none' : 'translate-x-full'
      ]"
      tabindex="-1"
    >
      <button
        @click="closeDrawer"
        type="button"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
      >
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Close drawer</span>
      </button>
      <div class="py-16 overflow-y-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose } from 'vue'

const isOpen = ref<boolean>(false)

function openDrawer() {
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}
function closeDrawer() {
  isOpen.value = false
  document.body.style.overflow = 'auto'
}

defineExpose({
  openDrawer,
})
</script>