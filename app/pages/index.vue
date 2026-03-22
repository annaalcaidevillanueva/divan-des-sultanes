<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

useSeoMeta({
  title: 'Divan des Sultanes — coaching • consulting • facilitation',
  ogTitle: 'Divan des Sultanes — coaching • consulting • facilitation',
  description: 'Un espace pour penser autrement la responsabilité, le pouvoir et la manière de diriger.',
  ogDescription: 'Un espace pour penser autrement la responsabilité, le pouvoir et la manière de diriger.',
  ogImage: '/img/1.jpg',
})

const testimonials = [
  {
    name: 'Thierry Marc',
    photo: '/img/Reco_Thierry.jpg',
    role: 'DG — MEDEF Hérault Montpellier · Président Association Les Créateurs d\'Émotions Positives · Un peu artiste quand il est inspiré !',
    linkedin: 'https://www.linkedin.com/in/thierry-marc-%F0%9F%8C%88-5838a117/',
    title: 'Empathie, altruisme, générosité, professionnalisme, réalisme... sont des valeurs sûres qu\'elle incarne et qu\'elle partage avec ses clients.',
    text: 'Anna Alcaide Villanueva a la grande première qualité de savoir écouter et de savoir comprendre. Les outils proposés ne sont pas choisis au hasard ! On n\'est pas dans du coaching abusif, ni envahissant... on est dans du coaching humain. La personnalisation ou le sur-mesure sont souvent exagérés, promis mais jamais réalité. Avec Anna, c\'est une réalité. J\'ai, personnellement, en peu de séances, avancé sur mes pratiques, progressé sur mon management... et puis j\'ai commencé à y voir un peu plus clair sur certains projets.\n\nIci, ça s\'appelle « rédiger une reco »... donc je la recommande fortement !\n\nEnfin, son parcours personnel inspire et conforte les conseils qu\'elle peut apporter.',
  },
  {
    name: 'Marion André',
    photo: '/img/Reco_marion.jpg',
    role: 'Chef de projet et responsable qualité expert chez Hermès',
    linkedin: 'https://www.linkedin.com/in/marionandreingenieurprojets/',
    title: 'Transmettant sa passion et des valeurs humaines essentielles, elle enseigne avec beaucoup de professionnalisme et de sincérité.',
    text: 'L\'intervention d\'Anna lors d\'une formation en management a été d\'une grande qualité, grâce à ses qualités !\n\nElle sait viser juste pour toucher les stagiaires et faire passer les messages en marquant les esprits.\n\nMerci beaucoup Anna pour ton engagement et ta positivité contagieuse !',
  },
  {
    name: 'Virginie Thiebaud',
    photo: '/img/Reco_virginie.jpg',
    role: 'Responsable régionale de service entreprises et coordinatrice des expertises d\'avenir chez France Travail Provence-Alpes-Côte d\'Azur',
    linkedin: 'https://www.linkedin.com/in/virginie-thiebaud-01b04a1a1/',
    title: 'Anna incarne avec brio le leadership positif, inspirant et motivant tous celles et ceux qui ont la chance de participer à ses sessions.',
    text: 'J\'ai eu le privilège de participer à une formation dispensée par Anna, une formatrice extraordinaire dans le domaine du leadership positif. Anna possède un sens de l\'analyse exceptionnel, capable de révéler les vérités et les nuances du management sans fard ni artifices. Grâce à ses compétences et à son parcours atypique et riche, elle fait bouger les lignes et nous amène à une prise de conscience en nous sortant de notre zone de confort.\n\nSon intervention à l\'Université du Management a été un véritable coup de cœur. Anna incarne avec brio le leadership positif, inspirant et motivant tous celles et ceux qui ont la chance de participer à ses sessions. Son approche audacieuse et sa capacité à transmettre des concepts complexes de manière accessible sont simplement remarquables.\n\nJe recommande vivement Anna à toute organisation cherchant à développer un leadership positif et constructif au sein de ses équipes. Elle ne laisse pas indifférent et marque les esprits.',
  },
]

const expandedTestimonial = ref<number | null>(null)

function toggleTestimonial(index: number) {
  expandedTestimonial.value = expandedTestimonial.value === index ? null : index
}
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection image="/img/1.jpg" image-alt="Vue inspirante — Divan des Sultanes">
      <p class="text-gold-300 text-sm md:text-base font-semibold uppercase tracking-[0.25em] mb-5">coaching • consulting • facilitation</p>
      <h1 class="text-white mb-6 hero-text-shadow">Le Divan Des Sultanes</h1>
      <div class="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed space-y-1">
        Un espace pour prendre du recul, transformer sa manière d'incarner<br> le leadership et habiter pleinement sa vie.
      </div>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <CtaButton to="/odyssee" arrow>
          Découvrir l'Odyssée
        </CtaButton>
        <CtaButton to="/contact" variant="secondary">
          Prendre contact
        </CtaButton>
      </div>
    </HeroSection>

    <!-- Split full-bleed: image gauche, texte droite -->
    <section class="flex flex-col lg:flex-row min-h-[85vh] bg-white">
      <!-- Image — collée au bord, aucun padding -->
      <div class="relative lg:w-1/2 h-72 lg:h-auto overflow-hidden">
        <NuxtImg src="/img/4.jpg" alt="Le Divan des Sultanes — espace vivant" class="absolute inset-0 w-full h-full object-cover" loading="eager" sizes="xs:100vw sm:100vw md:100vw lg:50vw" width="960" height="1200" />
      </div>
      <!-- Texte -->
      <div class="lg:w-1/2 flex items-center bg-cream-section px-10 py-16 lg:px-20 lg:py-28">
        <div class="prose-divan max-w-lg">
          <h2 class="heading-gold">Le Divan des Sultanes</h2>
          <p>Un lieu où l'on peut déposer ce qui pèse<br>et accueillir ce qui cherche à émerger.</p>
          <p>Un lieu pour penser autrement sa manière de diriger,<br>d'habiter le pouvoir,<br>de traverser les responsabilités.</p>
          <p>Ici, on ne vient pas apprendre à faire plus.</p>
          <p class="font-semibold">On vient apprendre à être autrement.</p>
        </div>
      </div>
    </section>

    <!-- Accompagnements -->
    <section class="section-spacing bg-[#F8F5F0]">
      <div class="container-page">
        <div class="mb-20">
          <h2 class="text-center mb-4 heading-gold">Accompagnements</h2>
          <p class="text-center text-muted-foreground max-w-2xl mx-auto mb-14">
            Chaque accompagnement ouvre un espace différent. Une même intention : <br> se déplacer intérieurement pour diriger autrement.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <OfferingCard titre="L'Odyssée" description="Une traversée initiatique sur 9 mois. Un parcours collectif, exigeant, transformateur. Un déplacement intérieur durable." to="/odyssee" />

            <OfferingCard titre="L'Atelier" description="Des espaces d'exploration : cercles, co-développement, expérimentations. Penser ensemble. Se confronter. Déplacer ses angles morts." to="/atelier" />

            <OfferingCard titre="Coaching individuel" description="Un espace confidentiel pour traverser une tension, une décision, un seuil. Un travail précis sur la posture et la responsabilité." to="/coaching" />

            <OfferingCard titre="Entreprises & Organisations" description="Des accompagnements sur mesure pour les équipes dirigeantes. Coaching d'équipe, séminaires et interventions en leadership." to="/coaching#equipe" />
          </div>
        </div>
      </div>
    </section>

    <!-- Témoignages -->
    <section class="section-spacing bg-cream-section">
      <div class="container-page">
        <h2 class="text-center mb-14 heading-gold">Ils aiment le Divan des Sultanes</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div v-for="(t, i) in testimonials" :key="i" class="text-center">
            <!-- Circle photo -->
            <a :href="t.linkedin" target="_blank" rel="noopener" class="block mx-auto mb-5">
              <div class="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-warm-lg hover:shadow-warm-xl transition-shadow duration-300">
                <NuxtImg :src="t.photo" :alt="t.name" class="w-full h-full object-cover" loading="lazy" width="112" height="112" />
              </div>
            </a>

            <h3 class="text-base mb-1">{{ t.name }}</h3>
            <p class="text-xs text-muted-foreground mb-3">{{ t.role }}</p>

            <!-- Title / short quote -->
            <p class="text-sm italic text-muted-foreground mb-3 leading-relaxed">« {{ t.title }} »</p>

            <!-- Expandable full text -->
            <button class="inline-flex items-center gap-1 text-sm font-medium text-gold-700 hover:text-gold-900 transition-colors" @click="toggleTestimonial(i)">
              {{ expandedTestimonial === i ? 'Réduire' : 'Lire le témoignage' }}
              <ChevronDown class="h-4 w-4 transition-transform duration-300" :class="{ 'rotate-180': expandedTestimonial === i }" />
            </button>

            <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 max-h-0" enter-to-class="opacity-100 max-h-[600px]" leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 max-h-[600px]" leave-to-class="opacity-0 max-h-0">
              <div v-if="expandedTestimonial === i" class="mt-4 text-left overflow-hidden">
                <p v-for="(paragraph, pi) in t.text.split('\n\n')" :key="pi" class="text-sm text-muted-foreground leading-relaxed mb-2">
                  {{ paragraph }}
                </p>
                <a :href="t.linkedin" target="_blank" rel="noopener" class="inline-block mt-2 text-xs font-medium text-gold-700 hover:underline">
                  Voir le profil LinkedIn →
                </a>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- La femme derrière le divan -->
    <section class="section-spacing bg-white">
      <div class="container-page">
        <h2 class="text-center mb-14 heading-gold">La femme derrière le divan</h2>

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
          <!-- Portrait -->
          <div class="lg:col-span-2">
            <NuxtImg src="/img/2.jpg" alt="Anna Alcaide Villanueva" class="rounded-2xl w-full object-cover aspect-[3/4] shadow-warm-lg" loading="lazy" sizes="xs:100vw sm:100vw md:100vw lg:40vw" width="600" height="800" />
          </div>

          <!-- Bio -->
          <div class="lg:col-span-3 prose-divan text-justify">
            <p>
              Coach professionnelle certifiée (Coach &amp; Team®), Anna Alcaide Villanueva accompagne depuis plus de dix ans les dirigeants et les managers face aux défis complexes du leadership : le pouvoir, le contrôle, la solitude et la responsabilité.
            </p>
            <p>
              Son approche ne relève pas de la théorie, mais de l'expérience vécue. Ancienne cheffe de cuisine et directrice de restauration dans l'hôtellerie haut de gamme, elle connaît intimement la pression des milieux ultra-exigeants et la nécessité d'une maîtrise absolue pour tenir le cap.
            </p>
            <p>
              À la suite d'un profond changement de posture intérieure, elle a fondé Le Divan des Sultanes. Sa mission aujourd'hui : aider les femmes et les leaders à habiter leur rôle autrement. Elle les guide pour cesser de confondre puissance et dureté, et pour transformer leur manière de diriger sans jamais renoncer à leur niveau d'exigence.
            </p>

            <div class="mt-8">
              <NuxtImg src="/img/Signature_Anna.png" alt="Signature Anna" class="h-16 md:h-20 w-auto" loading="lazy" height="80" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Le Seuil — CTA Banner -->
    <section class="relative overflow-hidden">
      <NuxtImg src="/img/3.jpg" alt="Rejoindre le Divan des Sultanes" class="absolute inset-0 w-full h-full object-cover z-0" loading="lazy" sizes="xs:100vw sm:100vw md:100vw lg:1920px" width="1920" height="1080" />
      <div class="absolute inset-0 z-[1] bg-gradient-to-r from-stone-950/80 via-stone-900/60 to-stone-950/50" />
      <div class="absolute inset-0 z-[1] bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      <div class="relative z-10 container-page py-24 md:py-32 text-center">
        <h3 class="!text-gold-300 text-base font-semibold uppercase tracking-[0.25em] mb-4">Le seuil</h3>
        <p class="text-white/85 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
          Une transformation commence souvent par une conversation.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <CtaButton href="https://cal.com/anna-alcaide-villanueva-divan-des-sultanes/15min" arrow>
            Réserver un échange de 15 minutes
          </CtaButton>
          <CtaButton to="/coaching" variant="secondary">
            Découvrir les accompagnements
          </CtaButton>
        </div>
      </div>
    </section>
  </div>
</template>
