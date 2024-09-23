<template>
  <div class="bg-primary text-white min-h-screen">
    <div class="block mx-auto mb-16 bg-[url('/heading-mobile.jpg')] bg-center bg-no-repeat lg:bg-[url('/heading.jpg')] h-40 lg:h-[402px]">
      <div class="absolute -top-1 left-1/2 translate-x-20 lg:translate-x-48">
        <img src="/logo-wotdafunk.png" class="w-20 lg:w-auto animate-rotation-slow" />
      </div>
    </div>
    <slot />
  </div>
</template>