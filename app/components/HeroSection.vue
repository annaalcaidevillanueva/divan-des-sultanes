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
      class="absolute inset-0 w-full h-full object-cover scale-105 z-0"
      loading="eager"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:1920px"
      width="1920"
      height="1080"
    />
    <!-- Multi-layer overlay for depth and warmth -->
    <div
      v-if="overlay !== false"
      class="absolute inset-0 z-[1] bg-gradient-to-t from-stone-950/70 via-stone-900/30 to-transparent"
    />
    <div
      v-if="overlay !== false"
      class="absolute inset-0 z-[1] bg-gradient-to-r from-black/25 via-transparent to-black/15"
    />
    <!-- Subtle gold vignette at bottom -->
    <div
      v-if="overlay !== false"
      class="absolute bottom-0 left-0 right-0 z-[1] h-32 bg-gradient-to-t from-black/20 to-transparent"
    />
    <div class="relative z-10 container-page text-center text-white py-24 md:py-32">
      <slot />
    </div>
    <!-- Bottom gold accent line -->
    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400/40 to-transparent z-20" />
  </section>
</template>
