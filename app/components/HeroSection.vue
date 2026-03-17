<script setup lang="ts">
withDefaults(
  defineProps<{
    image: string
    imageAlt?: string
    overlay?: boolean
  }>(),
  { overlay: true },
)
</script>

<template>
  <section class="relative w-full min-h-[60vh] md:min-h-[72vh] flex items-center justify-center overflow-hidden">
    <NuxtImg
      :src="image"
      :alt="imageAlt || ''"
      class="absolute inset-0 w-full h-full object-cover scale-105"
      loading="eager"
      sizes="100vw"
      width="1920"
      height="1080"
    />
    <!-- Multi-layer overlay for depth and warmth -->
    <div
      v-if="overlay !== false"
      class="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-900/40 to-emerald-950/10"
    />
    <div
      v-if="overlay !== false"
      class="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20"
    />
    <!-- Subtle gold vignette at bottom -->
    <div
      v-if="overlay !== false"
      class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gold-900/10 to-transparent"
    />
    <div class="relative z-10 container-page text-center text-white py-24 md:py-32">
      <slot />
    </div>
    <!-- Bottom gold accent line -->
    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400/40 to-transparent z-20" />
  </section>
</template>
