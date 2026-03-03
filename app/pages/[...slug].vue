<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page introuvable', fatal: true })
}

useSeoMeta({
  title: `${page.value.title} | Divan des Sultanes`,
  description: page.value.description || '',
})
</script>

<template>
  <section class="section-spacing">
    <div class="container-page prose-divan max-w-3xl mx-auto">
      <h1 v-if="page?.title" class="!text-3xl md:!text-4xl mb-8">{{ page.title }}</h1>
      <ContentRenderer v-if="page" :value="page" />
    </div>
  </section>
</template>
