<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

defineProps<{
  titre: string
  description: string
  to: string
  linkLabel?: string
}>()
</script>

<template>
  <Card class="hover:shadow-md transition-shadow duration-200">
    <CardHeader>
      <CardTitle class="text-xl">{{ titre }}</CardTitle>
    </CardHeader>
    <CardContent>
      <p class="text-muted-foreground leading-relaxed mb-6">{{ description }}</p>
      <NuxtLink
        :to="to"
        class="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
      >
        {{ linkLabel || 'Découvrir' }}
        <ArrowRight class="h-4 w-4" />
      </NuxtLink>
    </CardContent>
  </Card>
</template>
