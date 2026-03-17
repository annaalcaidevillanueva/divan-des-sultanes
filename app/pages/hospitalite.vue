<script setup lang="ts">
useSeoMeta({
  title: 'Hôtellerie & Restauration de luxe — Divan des Sultanes',
  ogTitle: 'Hôtellerie & Restauration de luxe — Divan des Sultanes',
  description: 'Accompagnement des équipes de direction en hôtellerie et restauration haut de gamme. Performance opérationnelle et qualité relationnelle.',
  ogDescription: 'Accompagnement des équipes de direction en hôtellerie et restauration haut de gamme.',
  ogImage: '/img/1.jpg',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection image="/img/1.jpg" image-alt="Hôtellerie & Restauration de luxe — Divan des Sultanes">
      <p class="text-gold-300 text-sm font-semibold uppercase tracking-[0.25em] mb-4">Expertise sectorielle</p>
      <h1 class="text-white mb-4 hero-text-shadow">Hôtellerie &amp; Restauration de luxe</h1>
      <p class="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
        Conjuguer performance opérationnelle et qualité relationnelle
      </p>
    </HeroSection>

    <!-- Introduction -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <p>J'ai exercé dans l'hôtellerie haut de gamme comme cheffe de cuisine puis directrice de restauration.<br>
        &nbsp;J'en connais de l'intérieur les exigences.</p>
        <p>Pression opérationnelle.<br>
        &nbsp;Culture de l'excellence.<br>
        &nbsp;Sens du service.<br>
        &nbsp;Hiérarchie structurée.<br>
        &nbsp;Temporalité intense.</p>
        <p>Si vous dirigez un établissement hôtelier ou une activité de restauration haut de gamme, vous connaissez ces réalités.</p>
        <p>J'accompagne les équipes de direction, les managers et les responsables à conjuguer performance opérationnelle et qualité relationnelle.</p>
      </div>
    </section>

    <SectionDivider />

    <!-- L'objectif -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <h2>L'objectif</h2>
        <ul>
          <li>Renforcer la cohésion des équipes,</li>
          <li>améliorer la communication entre services,</li>
          <li>réguler les tensions dans les périodes de forte activité,</li>
          <li>soutenir une posture de leadership alignée avec les standards d'excellence,</li>
          <li>installer une culture managériale où l'attention portée aux équipes est à la hauteur de l'exigence portée à l'expérience client.</li>
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
          <li>en présentiel,</li>
          <li>à distance,</li>
          <li>sous forme de séminaires,</li>
          <li>ou dans un format combinant plusieurs de ces modalités pour un accompagnement dans la durée.</li>
        </ul>
        <p>Chaque collaboration débute par un échange approfondi afin de comprendre votre contexte, clarifier les enjeux et définir les objectifs de l'intervention.</p>
        <p>Les dispositifs sont construits sur mesure, en fonction des besoins de votre organisation.</p>
        <p><strong>Interventions sur devis.</strong></p>
        <p>L'entreprise peut être une affaire de cœur.<br>
        &nbsp;Mais elle reste un espace d'exigence.</p>
        <p><strong>Mon travail consiste à tenir les deux.</strong></p>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-spacing bg-cream-section">
      <div class="container-page text-center">
        <h2 class="mb-4 heading-gold">Échanger sur votre situation</h2>
        <p class="text-muted-foreground mb-10 max-w-lg mx-auto">Un premier échange de 15 minutes pour comprendre votre situation, cerner vos enjeux et voir si un accompagnement peut être pertinent.</p>
        <CtaButton href="https://cal.com/anna-alcaide-villanueva-divan-des-sultanes/15min" arrow>
          Prenons 15 minutes
        </CtaButton>
      </div>
    </section>
  </div>
</template>
