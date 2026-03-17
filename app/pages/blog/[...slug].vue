<script setup lang="ts">
const config = useAppConfig()
const route = useRoute()

const { data: post } = await useAsyncData('blog-' + route.path, () =>
  queryCollection('blog').path(route.path).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article introuvable', fatal: true })
}

useSeoMeta({
  title: `${post.value.title} | La Voix des Sultanes`,
  ogTitle: post.value.title,
  description: post.value.description,
  ogDescription: post.value.description,
  ogImage: post.value.image || '/img/6.jpg',
})
</script>

<template>
  <div>
    <!-- Header image -->
    <div v-if="post?.image" class="w-full aspect-[21/9] overflow-hidden">
      <NuxtImg
        :src="post.image"
        :alt="post.title"
        class="w-full h-full object-cover"
        loading="eager"
        sizes="100vw"
        width="1920"
        height="823"
      />
    </div>

    <section class="section-spacing">
      <div class="container-page">
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          <!-- Main Content -->
          <article class="prose-divan min-w-0">
            <p class="text-sm text-muted-foreground mb-2">
              {{ new Date(post!.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }) }}
            </p>
            <h1 class="!text-3xl md:!text-4xl mb-8">{{ post!.title }}</h1>
            <ContentRenderer :value="post!" />
          </article>

          <!-- Sidebar -->
          <aside class="hidden lg:block">
            <div class="sticky top-24 space-y-6">
              <!-- About -->
              <Card>
                <CardHeader class="pb-3">
                  <CardTitle class="text-base">Anna Alcaide Villanueva</CardTitle>
                  <CardDescription>Coach professionnelle certifiée Coach & Team®</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-muted-foreground mb-4">
                    Depuis plus de dix ans, j'accompagne des dirigeants et des managers dans les zones où le leadership devient exigeant.
                  </p>
                  <CtaButton :href="config.reservations.calendlyGeneral || '/contact'" size="sm" class="w-full">
                    Prendre rendez-vous
                  </CtaButton>
                </CardContent>
              </Card>

              <!-- Odyssée promo -->
              <Card class="bg-primary/5 border-primary/20">
                <CardHeader class="pb-3">
                  <CardTitle class="text-base text-primary">L'Odyssée</CardTitle>
                  <CardDescription>Parcours de 9 mois</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-muted-foreground mb-4">
                    Une traversée initiatique pour déplacer sa posture de leadership en profondeur.
                  </p>
                  <CtaButton to="/odyssee" variant="outline" size="sm" class="w-full">
                    Découvrir
                  </CtaButton>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>

        <!-- Mobile CTA (visible only on mobile) -->
        <div class="lg:hidden mt-12 space-y-4">
          <Separator />
          <Card>
            <CardHeader class="pb-3">
              <CardTitle class="text-base">Envie d'aller plus loin ?</CardTitle>
            </CardHeader>
            <CardContent class="flex flex-col sm:flex-row gap-3">
              <CtaButton :href="config.reservations.calendlyGeneral || '/contact'" size="sm">
                Prendre rendez-vous
              </CtaButton>
              <CtaButton to="/odyssee" variant="outline" size="sm">
                Découvrir l'Odyssée
              </CtaButton>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>
