<script setup lang="ts">
const config = useAppConfig()

useSeoMeta({
  title: "L'Odyssée des Sultanes — Transformer sa manière d'être au pouvoir | Divan des Sultanes",
  ogTitle: "L'Odyssée des Sultanes — Transformer sa manière d'être au pouvoir",
  description: 'Un parcours de neuf mois pour les femmes francophones qui dirigent. Coaching collectif, immersions au Maroc, transformation durable.',
  ogDescription: 'Un parcours de neuf mois pour les femmes francophones qui dirigent. Coaching collectif, immersions au Maroc, transformation durable.',
  ogImage: '/img/3.jpg',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection image="/img/3.jpg" image-alt="L'Odyssée des Sultanes">
      <p class="text-gold-300 text-sm font-semibold uppercase tracking-[0.25em] mb-4">Transformer sa manière d'être au pouvoir</p>
      <h1 class="text-white mb-4 hero-text-shadow">L'Odyssée Des Sultanes</h1>
      <p class="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
        Un parcours pour les femmes francophones qui dirigent
      </p>
    </HeroSection>

    <!-- Introduction -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <p>Il y a des moments où l'on ne cherche pas un outil de plus. On sent qu'un cycle doit s'ouvrir. L'Odyssée est une traversée de neuf mois. Comme une gestation. Le temps nécessaire pour déplacer sa posture en profondeur.</p>
        <p>Ce n'est pas une formation. Ce n'est pas un séminaire. Ce n'est pas un programme de développement personnel. C'est un parcours structuré, exigeant, accompagné. Un travail de transformation durable de la manière d'être en responsabilité.</p>
      </div>
    </section>

    <SectionDivider />

    <!-- À qui s'adresse l'Odyssée -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <h2>À qui s'adresse l'Odyssée ?</h2>
        <p>À des femmes francophones qui dirigent déjà : dirigeantes, entrepreneures, membres de CODIR, responsables d'équipes, cheffes de projets. Des femmes compétentes. Engagées. Exigeantes envers elles-mêmes. Des femmes qui tiennent beaucoup, et qui savent qu'un déplacement intérieur est devenu nécessaire pour continuer à croître sans se durcir.</p>
      </div>
    </section>

    <SectionDivider />

    <!-- Le Cadre -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <h2>Le Cadre : Un Cercle Restreint</h2>
        <p>L'Odyssée se vit en petit groupe. Un cercle volontairement limité à huit participantes pour permettre profondeur, vérité et responsabilité partagée.</p>
        <p>Le groupe ne se constitue pas à date fixe : il se forme lorsque les 8 femmes justes sont là.</p>
      </div>
    </section>

    <SectionDivider />

    <!-- Le Rythme — 3 Piliers -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <h2>Le Rythme — 3 Piliers sur 9 mois</h2>

        <h3>Le travail collectif en distanciel</h3>
        <p>Deux à trois rencontres mensuelles en visioconférence, structurées par une coach professionnelle certifiée Coach &amp; Team®. Ces sessions sont construites et régulées pour travailler sur :</p>
        <ul>
          <li>Les situations réelles et les dilemmes de leadership.</li>
          <li>La relation au pouvoir, au contrôle et la solitude de la décision.</li>
          <li>La régulation émotionnelle et la capacité à occuper pleinement sa place.</li>
          <li>Un espace confidentiel de co-développement pour aligner pensée, émotion et posture.</li>
        </ul>
        <p>Le parcours se prolonge par deux rendez-vous de « retour d'expérience » à 3 et 6 mois en visio. Un temps pour le plaisir de se retrouver et de partager la manière dont vos transformations s'incarnent, jour après jour, dans votre réalité.</p>

        <SectionDivider />

        <h3>Le coaching individuel</h3>
        <p>Chaque participante bénéficie de cinq séances individuelles. Un espace pour approfondir ce qui se joue dans sa propre responsabilité, clarifier une tension précise et traverser ses zones de décision avec finesse.</p>

        <SectionDivider />

        <h3>Les immersions au Maroc (Sidi Kaouki)</h3>

        <h3 class="!mt-8">L'envol</h3>
        <p>3 jours pour créer l'alliance et la sécurité relationnelle. Le rythme organique du Maroc, entre vent et lumière, permet de déposer les armures et de poser l'énergie des neuf mois à venir.</p>

        <h3 class="!mt-8">Ancrage et consécration</h3>
        <p>4 jours pour revenir au point d'origine, mais transformée. Un temps pour mesurer le chemin parcouru, intégrer les déplacements et vivre des rituels de clôture avant le retour en environnement professionnel.</p>
      </div>
    </section>

    <SectionDivider />

    <!-- Ce qui se transforme -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <h2>Ce qui se transforme</h2>
        <p>L'Odyssée travaille à un niveau que l'on nomme rarement.</p>
        <p>La relation au contrôle. La manière d'habiter le pouvoir. La posture face à la tension. La capacité à réguler plutôt qu'à maîtriser.</p>
        <p><strong>Il ne s'agit pas d'apprendre plus. Il s'agit d'être autrement.</strong></p>
        <p>Après le parcours, un système de mentorat et de parrainage prolonge le lien.</p>
        <p>Créant un réseau vivant de femmes ayant traversé un même espace.</p>
      </div>
    </section>

    <SectionDivider />

    <!-- Investissement -->
    <section class="section-spacing">
      <div class="container-page max-w-xl mx-auto">
        <h2 class="text-center mb-8 heading-gold">L'Investissement</h2>
        <p class="text-center text-muted-foreground mb-8">L'Odyssée représente un engagement conscient sur neuf mois.</p>

        <PricingBlock prix="8 000 €">
          <p class="text-sm text-muted-foreground text-left mb-4">Ce qui est inclus :</p>
          <ul class="text-sm text-muted-foreground text-left space-y-2 mb-6">
            <li>L'ensemble des ateliers collectifs et le cadre sur 9 mois.</li>
            <li>Les 5 séances de coaching individuel.</li>
            <li>Les deux immersions à Sidi Kaouki (hébergement de standing et pension complète).</li>
            <li>Les transferts depuis l'aéroport d'Essaouira.</li>
          </ul>
          <p class="text-xs text-muted-foreground italic">Note : Les vols ne sont pas inclus. Un échelonnement de paiement est possible.</p>
        </PricingBlock>
      </div>
    </section>

    <SectionDivider />

    <!-- L'entrée dans l'Odyssée -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto text-center">
        <h2 class="heading-gold">L'entrée dans l'Odyssée : Le Discernement</h2>
        <p>On n'entre pas dans l'Odyssée par curiosité, mais par discernement.</p>
        <p>Un rendez-vous préalable est nécessaire pour vérifier que le moment est juste pour vous et que l'alchimie du groupe sera préservée.</p>

        <div class="mt-10">
          <CtaButton href="https://cal.com/anna-alcaide-villanueva-divan-des-sultanes/30min" arrow>
            Prendre un rendez-vous de discernement
          </CtaButton>
        </div>
      </div>
    </section>
  </div>
</template>
