<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

defineProps<{
  to?: string
  href?: string
  variant?: 'default' | 'outline' | 'secondary' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  arrow?: boolean
}>()
</script>

<template>
  <Button
    v-if="!to && !href"
    :variant="variant || 'default'"
    :size="size || 'lg'"
    class="font-semibold tracking-wide"
  >
    <slot />
    <ArrowRight v-if="arrow" class="ml-2 h-4 w-4" />
  </Button>

  <NuxtLink v-else-if="to" :to="to">
    <Button
      :variant="variant || 'default'"
      :size="size || 'lg'"
      class="font-semibold tracking-wide"
      as="span"
    >
      <slot />
      <ArrowRight v-if="arrow" class="ml-2 h-4 w-4" />
    </Button>
  </NuxtLink>

  <a v-else-if="href" :href="href" target="_blank" rel="noopener">
    <Button
      :variant="variant || 'default'"
      :size="size || 'lg'"
      class="font-semibold tracking-wide"
      as="span"
    >
      <slot />
      <ArrowRight v-if="arrow" class="ml-2 h-4 w-4" />
    </Button>
  </a>
</template>
