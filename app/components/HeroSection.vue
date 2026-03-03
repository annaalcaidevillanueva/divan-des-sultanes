<script setup lang="ts">
defineProps<{
  image: string
  imageAlt?: string
  overlay?: boolean
}>()
</script>

<template>
  <section class="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
    <NuxtImg
      :src="image"
      :alt="imageAlt || ''"
      class="absolute inset-0 w-full h-full object-cover"
      loading="eager"
      sizes="100vw"
    />
    <div
      v-if="overlay !== false"
      class="absolute inset-0 bg-black/40"
    />
    <div class="relative z-10 container-page text-center text-white py-16">
      <slot />
    </div>
  </section>
</template>
