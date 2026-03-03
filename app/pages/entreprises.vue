<script setup lang="ts">
const config = useAppConfig()

useSeoMeta({
  title: 'Entreprises & Organisations — Leadership & management | Divan des Sultanes',
  ogTitle: 'Entreprises & Organisations — Leadership & management',
  description: 'Interventions et accompagnements en leadership & management pour les équipes dirigeantes. Posture, régulation des tensions, qualité du leadership.',
  ogDescription: 'Interventions et accompagnements en leadership & management pour les équipes dirigeantes.',
  ogImage: '/img/1.jpg',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection image="/img/1.jpg" image-alt="Entreprises & Organisations — Divan des Sultanes">
      <h1 class="text-white mb-4">Entreprises &amp; Organisations</h1>
      <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
        Interventions et accompagnements en leadership &amp; management
      </p>
    </HeroSection>

    <!-- Introduction -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <p>Les organisations évoluent dans des environnements complexes.</p>
        <p>Pression des résultats. Transformation permanente. Tensions intergénérationnelles. Exigence de performance et besoin d'humanité.</p>
        <p>J'interviens auprès des entreprises et des équipes dirigeantes pour travailler la posture, la régulation des tensions et la qualité du leadership.</p>
        <p>Mon approche est exigeante, structurée et profondément opérationnelle.</p>
        <p><strong>Elle vise un objectif clair : renforcer la capacité des équipes à décider, coopérer et performer durablement.</strong></p>
      </div>
    </section>

    <SectionDivider />

    <!-- Leadership & posture managériale -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <h2>Leadership &amp; posture managériale</h2>
        <ul>
          <li>Développer l'intelligence émotionnelle des managers</li>
          <li>Renforcer la qualité de la communication interpersonnelle</li>
          <li>Réguler les tensions et prévenir l'escalade conflictuelle</li>
          <li>Clarifier la posture d'autorité</li>
          <li>Accompagner la prise de décision en contexte complexe</li>
        </ul>
        <p>Il ne s'agit pas d'ajouter des outils. <strong>Il s'agit de transformer la manière d'habiter la responsabilité.</strong></p>
      </div>
    </section>

    <SectionDivider />

    <!-- Accompagnement des équipes dirigeantes -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <h2>Accompagnement des équipes dirigeantes</h2>
        <p>J'accompagne les CODIR et équipes stratégiques dans :</p>
        <ul>
          <li>les périodes de transformation,</li>
          <li>les enjeux de cohésion,</li>
          <li>les tensions relationnelles,</li>
          <li>les repositionnements stratégiques.</li>
        </ul>
        <p>Le travail peut prendre la forme de :</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 not-prose">
          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-base">Séminaires structurés</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-base">Accompagnements sur la durée</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-base">Séquences ponctuelles d'intervention</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-base">Conférences thématiques</CardTitle>
            </CardHeader>
          </Card>
        </div>
        <p>Chaque intervention est conçue sur mesure, en fonction des enjeux spécifiques de l'organisation.</p>
      </div>
    </section>

    <SectionDivider />

    <!-- Hôtellerie & restauration de luxe -->
    <section class="section-spacing bg-muted">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <h2>Hôtellerie &amp; restauration de luxe</h2>
        <p>Issue de l'hôtellerie haut de gamme, ancienne chef de cuisine puis directrice de restauration, je connais de l'intérieur les exigences de cet univers.</p>
        <p>Pression opérationnelle. Culture de l'excellence. Rapport au service. Hiérarchie forte. Temporalité intense.</p>
        <p>J'accompagne les équipes de direction, managers et responsables à conjuguer performance et qualité relationnelle.</p>
        <p>L'objectif :</p>
        <ul>
          <li>renforcer la cohésion,</li>
          <li>améliorer la communication interservices,</li>
          <li>réguler les tensions en période de forte activité,</li>
          <li>soutenir une posture de leadership alignée avec les standards d'excellence.</li>
        </ul>
        <p><strong>Je parle le langage du terrain.</strong></p>
      </div>
    </section>

    <SectionDivider />

    <!-- Modalités -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <h2>Modalités</h2>
        <p>Les interventions peuvent se dérouler :</p>
        <ul>
          <li>en présentiel</li>
          <li>à distance</li>
          <li>sous forme de séminaires</li>
          <li>ou d'accompagnements étalés dans le temps</li>
        </ul>
        <p>Chaque collaboration débute par un échange approfondi afin de définir les objectifs, le cadre et les indicateurs de réussite.</p>
        <p><strong>Interventions sur devis.</strong></p>
        <p>L'entreprise peut être une affaire de cœur. Mais elle reste un espace d'exigence. Mon travail consiste à tenir les deux.</p>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-spacing bg-muted">
      <div class="container-page text-center">
        <h2 class="mb-4">Parlons de votre besoin</h2>
        <p class="text-muted-foreground mb-8 max-w-lg mx-auto">Chaque collaboration débute par un échange. Partagez-moi votre contexte.</p>
        <CtaButton to="/contact" arrow>
          Entrer en contact pour échanger sur votre besoin
        </CtaButton>
      </div>
    </section>
  </div>
</template>
