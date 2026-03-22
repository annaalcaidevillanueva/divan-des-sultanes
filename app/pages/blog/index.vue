<script setup lang="ts">
useSeoMeta({
  title: 'La Voix des Sultanes — Blog | Divan des Sultanes',
  ogTitle: 'La Voix des Sultanes — Blog',
  description: 'Articles, réflexions et explorations autour du leadership, de la posture managériale et de l\'intelligence émotionnelle.',
  ogDescription: 'Articles, réflexions et explorations autour du leadership, de la posture managériale et de l\'intelligence émotionnelle.',
  ogImage: '/img/6.jpg',
})

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)
</script>

<template>
  <div>
    <!-- Hero Banner -->
    <HeroSection image="/img/6.jpg" image-alt="La Voix des Sultanes — Blog">
      <h1 class="text-white mb-4">La Voix des Sultanes</h1>
      <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
        Un espace de pensée et de transmission
      </p>
    </HeroSection>

    <!-- Intro -->
    <section class="section-spacing bg-white">
      <div class="container-page max-w-4xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <!-- Image -->
          <div class="lg:w-2/5 shrink-0">
            <NuxtImg
              src="/img/LA_VOIX_DES_SULTANES.png"
              alt="La Voix des Sultanes"
              class="w-full rounded-2xl shadow-warm-lg"
              loading="lazy"
              sizes="xs:100vw sm:100vw md:40vw lg:40vw"
              width="600"
              height="800"
            />
          </div>
          <!-- Texte aligné à droite -->
          <div class="lg:w-3/5 text-right">
            <h3 class="heading-gold mb-2">La Voix des Sultanes</h3>
            <p class="italic text-muted-foreground mb-8">Un espace de pensée et de transmission</p>
            <div class="space-y-4 text-foreground leading-relaxed">
              <p>Il y a ce qui se travaille en séance.</p>
              <p>Et ce qui continue de murmurer, entre les lignes.</p>
              <p>La Voix des Sultanes est un espace d'écriture et de parole.</p>
              <p>Un lieu où certaines questions du leadership se déplient.</p>
              <p>Parce que diriger ne se limite pas à décider.<br>
              Diriger engage un rapport au pouvoir, au contrôle, au doute, au silence.</p>
              <p>C'est aussi un espace de partage.</p>
              <p>J'y dépose des textes, des pensées, des lectures, des rituels.<br>
              Des choses rencontrées en chemin.<br>
              D'autres que je crée et que je choisis de transmettre.</p>
              <p>Parfois sous forme d'articles.<br>
              Parfois sous forme d'audio, pour laisser les questions résonner autrement.</p>
              <p>Ici, j'explore ces territoires.</p>
              <p><strong>Et j'en partage les traces.</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- Articles Grid -->
    <section class="section-spacing">
      <div class="container-page">
        <div v-if="posts && posts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="post in posts"
            :key="post.path"
            :to="post.path"
            class="group block"
          >
            <Card class="h-full overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div v-if="post.image" class="aspect-[16/9] overflow-hidden">
                <NuxtImg
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="xs:100vw sm:100vw md:50vw lg:33vw"
                  width="800"
                  height="450"
                />
              </div>
              <CardHeader>
                <p class="text-xs text-muted-foreground mb-1">
                  {{ new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }) }}
                </p>
                <CardTitle class="text-lg group-hover:text-primary transition-colors">
                  {{ post.title }}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-muted-foreground line-clamp-3">
                  {{ post.description }}
                </p>
              </CardContent>
            </Card>
          </NuxtLink>
        </div>

        <div v-else class="text-center py-16">
          <p class="text-muted-foreground text-lg">Les premiers articles arrivent bientôt.</p>
          <p class="text-muted-foreground text-sm mt-2">Restez à l'écoute.</p>
        </div>
      </div>
    </section>
  </div>
</template>
