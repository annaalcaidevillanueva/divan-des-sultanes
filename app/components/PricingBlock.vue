<script setup lang="ts">
defineProps<{
  prix: string
  details?: string
}>()
</script>

<template>
  <Card class="bg-primary/5 border-primary/20 text-center">
    <CardHeader>
      <p class="text-sm font-semibold uppercase tracking-wider text-primary">Investissement</p>
      <CardTitle class="text-3xl md:text-4xl">{{ prix }}</CardTitle>
      <CardDescription v-if="details">{{ details }}</CardDescription>
    </CardHeader>
    <CardContent>
      <slot />
    </CardContent>
  </Card>
</template>
