<script setup lang="ts">
useSeoMeta({
  title: 'Divan des Sultanes — Coaching de leadership au féminin',
  ogTitle: 'Divan des Sultanes — Coaching de leadership au féminin',
  description: 'Un espace vivant pour penser autrement sa manière de diriger, d\'habiter le pouvoir, de traverser les responsabilités.',
  ogDescription: 'Un espace vivant pour penser autrement sa manière de diriger, d\'habiter le pouvoir, de traverser les responsabilités.',
  ogImage: '/img/1.jpg',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection image="/img/1.jpg" image-alt="Vue inspirante — Divan des Sultanes">
      <h1 class="text-white mb-6">Le Divan des Sultanes</h1>
      <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
        Un espace vivant pour penser autrement sa manière de diriger,
        d'habiter le pouvoir, de traverser les responsabilités.
      </p>
    </HeroSection>

    <!-- Intro -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto text-center">
        <h2>Le Divan des Sultanes est un espace vivant.</h2>
        <p>Un lieu pour déposer ce qui pèse</p>
        <p>et écouter ce qui cherche à se dire.</p>
        <p>
          Un lieu pour penser autrement sa manière de diriger,<br>
          d'habiter le pouvoir,<br>
          de traverser les responsabilités.
        </p>
        <p>Ici, on ne vient pas apprendre à faire plus.</p>
        <p>On vient apprendre à être autrement.</p>
      </div>
    </section>

    <SectionDivider />

    <!-- Trois formes, une même intention -->
    <section class="section-spacing">
      <div class="container-page">
        <h2 class="text-center mb-12">Trois formes, une même intention</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <OfferingCard
            titre="L'Odyssée"
            description="Une traversée initiatique sur 9 mois. Un parcours collectif, exigeant, transformateur. Un déplacement intérieur durable."
            to="/odyssee"
          />

          <OfferingCard
            titre="L'Atelier des Sultanes"
            description="Des espaces d'exploration : cercles, co-développement, expérimentations. Penser ensemble. Se confronter. Déplacer ses angles morts."
            to="/atelier"
          />

          <OfferingCard
            titre="Le Coaching individuel"
            description="Un espace confidentiel pour traverser une tension, une décision, un seuil. Un travail précis sur la posture et la responsabilité."
            to="/coaching"
          />

          <OfferingCard
            titre="Entreprises & Organisations"
            description="Des accompagnements sur mesure pour les équipes dirigeantes. Créer des environnements où exigence et humanité coexistent."
            to="/entreprises"
          />
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- À l'origine du Divan -->
    <section class="section-spacing">
      <div class="container-page">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Portrait -->
          <div class="order-2 lg:order-1">
            <NuxtImg
              src="/img/2.jpg"
              alt="Anna Alcaide Villanueva — Fondatrice du Divan des Sultanes"
              class="rounded-xl w-full object-cover aspect-[4/5]"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <!-- Bio -->
          <div class="order-1 lg:order-2 prose-divan">
            <h2>À l'origine du Divan</h2>
            <p class="text-lg font-semibold text-foreground">Je suis Anna Alcaide Villanueva.</p>
            <p>J'ai longtemps travaillé dans l'hôtellerie haut de gamme.</p>
            <p>J'ai été cheffe de cuisine. Puis directrice de restauration. Puis professeur en lycée gastronomique.</p>
            <p>J'ai connu la pression du service. L'exigence absolue. La responsabilité qui ne se délègue pas. La maîtrise comme condition de survie.</p>
            <p><strong>Je sais ce que c'est que tenir.</strong></p>
            <p>Puis un déplacement s'est opéré. Un travail intérieur. Un changement de posture.</p>
            <p>Je suis aujourd'hui coach professionnelle certifiée, Coach & Team®.</p>
            <p>Depuis plus de dix ans, j'accompagne des dirigeants et des managers dans les zones où le leadership devient exigeant : pouvoir, contrôle, solitude, responsabilité.</p>
            <p>Je ne parle pas d'un endroit théorique. <strong>Je parle d'un endroit traversé.</strong></p>
            <p>Aujourd'hui, j'aide les femmes et les dirigeants à habiter leur responsabilité autrement. À ne plus confondre puissance et dureté. À transformer leur manière de diriger, sans perdre leur exigence.</p>
            <p>Le Divan est né de cette trajectoire.</p>

            <div class="mt-8 flex flex-wrap gap-2">
              <Badge variant="secondary">Coach & Team®</Badge>
              <Badge variant="secondary">Élément Humain (Will Schutz)</Badge>
              <Badge variant="secondary">Co-développement</Badge>
              <Badge variant="secondary">Intelligence émotionnelle</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
