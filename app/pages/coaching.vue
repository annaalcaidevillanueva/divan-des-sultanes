<script setup lang="ts">
const config = useAppConfig()

useSeoMeta({
  title: 'Coaching — Accompagnement individuel et d\'équipe | Divan des Sultanes',
  ogTitle: 'Coaching — Accompagnement individuel et d\'équipe',
  description: 'Déplacer sa posture pour pacifier les relations et susciter l\'engagement, au service de l\'individu, de l\'équipe et de l\'organisation.',
  ogDescription: 'Déplacer sa posture pour pacifier les relations et susciter l\'engagement.',
  ogImage: '/img/5.jpg',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection image="/img/5.jpg" image-alt="Coaching — Divan des Sultanes">
      <p class="text-gold-300 text-sm font-semibold uppercase tracking-[0.25em] mb-4">Accompagnement individuel et collectif</p>
      <h1 class="text-white mb-4 hero-text-shadow">Coaching</h1>
      <p class="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
        Déplacer sa posture pour pacifier les relations et susciter l'engagement,<br>
        au service de l'individu, de l'équipe et de l'organisation.
      </p>
    </HeroSection>

    <!-- ═══════════════════════════════════════════════ -->
    <!-- COACHING INDIVIDUEL -->
    <!-- ═══════════════════════════════════════════════ -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <h2 class="heading-gold text-center">Coaching individuel</h2>

        <p>Il arrive qu'un moment appelle plus de précision.</p>
        <p>Une décision difficile. Une tension relationnelle. Une responsabilité qui pèse. Un besoin de clarifier sa posture.</p>
        <p>Le coaching individuel offre un espace confidentiel, exigeant et structuré pour travailler en profondeur ce qui se joue dans votre exercice professionnel.</p>
        <p><strong>J'accompagne les dirigeantes à pacifier leur relation au monde, transformer leur manière d'être au leadership, et habiter pleinement leur vie.</strong></p>
        <p>Mon travail est ancré dans la sphère professionnelle. Il vise notamment :</p>
        <ul>
          <li>le renforcement de l'intelligence émotionnelle,</li>
          <li>la régulation du stress,</li>
          <li>la qualité de la communication interpersonnelle,</li>
          <li>la prise de décision en contexte complexe,</li>
          <li>la posture de responsabilité.</li>
        </ul>
        <p>Il ne s'agit pas de conseils. Il s'agit de clarification, de mise en conscience et de déplacement intérieur.</p>
      </div>
    </section>

    <SectionDivider />

    <!-- Formats d'accompagnement -->
    <section class="section-spacing">
      <div class="container-page max-w-4xl mx-auto">
        <h2 class="text-center mb-4">Les formats d'accompagnement</h2>
        <h3 class="text-center mb-12 text-muted-foreground !text-base font-normal">Séances ponctuelles</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <!-- Séance d'ancrage -->
          <Card>
            <CardHeader>
              <CardTitle>La séance d'ancrage</CardTitle>
              <CardDescription>1h30 de travail en profondeur</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground text-sm mb-4">
                Le temps nécessaire pour déposer une situation, l'explorer avec justesse et ouvrir des pistes de transformation durable.
              </p>
              <p class="text-2xl font-bold text-foreground">350 €</p>
            </CardContent>
          </Card>

          <!-- Coaching Flash -->
          <Card>
            <CardHeader>
              <CardTitle>Coaching Flash</CardTitle>
              <CardDescription>45 minutes ciblées</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground text-sm mb-4">
                Un temps court pour éclairer une décision urgente, débloquer une situation précise ou retrouver de la clarté dans l'action.
              </p>
              <p class="text-2xl font-bold text-foreground">200 €</p>
            </CardContent>
          </Card>
        </div>

        <!-- Forfaits -->
        <h3 class="text-center mb-8">Forfaits</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PricingBlock prix="1 650 €" details="au lieu de 1 750 €">
            <p class="text-sm text-muted-foreground font-medium mb-2">5 séances de 1h30</p>
            <p class="text-xs text-muted-foreground">Pour stabiliser un changement de posture et dénouer une problématique complexe.</p>
          </PricingBlock>

          <PricingBlock prix="3 300 €" details="au lieu de 3 500 €">
            <p class="text-sm text-muted-foreground font-medium mb-2">10 séances de 1h30</p>
            <p class="text-xs text-muted-foreground">Une traversée complète pour ancrer durablement la pacification des relations et votre impact de leader.</p>
          </PricingBlock>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- Modalités -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <h2>Modalités</h2>
        <p>Les séances se déroulent<br>
        &nbsp;en visioconférence<br>
        &nbsp;ou en présentiel.</p>
        <p>Les frais de déplacement du coach sont pris en charge en cas d'intervention en présentiel.</p>
        <p>Chaque accompagnement débute par un échange préalable.<br>
        &nbsp;Un temps simple pour vérifier que votre besoin et le cadre proposé sont justes.</p>
        <p>Le coaching peut être engagé à titre individuel<br>
        &nbsp;ou à la demande d'une entreprise.</p>
        <p>Dans ce cas, un temps de cadrage est prévu avec le commanditaire afin de clarifier les objectifs, les modalités de l'accompagnement et les conditions de réussite.</p>
        <p>Le coaching reste un espace confidentiel.<br>
        &nbsp;Les échanges ne font l'objet d'aucune restitution de contenu, sauf accord explicite de la personne accompagnée.<br>
        &nbsp;Un point d'étape peut être proposé avec l'entreprise, dans le respect de ce cadre.</p>
        <p>Le rythme et la durée de l'accompagnement sont définis ensemble, en fonction de la situation et des enjeux.</p>
        <p>Le coaching individuel est un espace de responsabilité.<br>
        &nbsp;Un lieu où l'on peut penser autrement.<br>
        &nbsp;Sans masque. Sans performance.</p>
        <p>Avec exigence, lucidité et présence.</p>
      </div>
    </section>

    <!-- CTA Coaching individuel -->
    <section class="section-spacing bg-cream-section">
      <div class="container-page text-center">
        <h2 class="mb-4 heading-gold">Commencer</h2>
        <p class="text-muted-foreground mb-10">Chaque parcours commence par une conversation.</p>
        <CtaButton href="https://cal.com/anna-alcaide-villanueva-divan-des-sultanes/15min" arrow>
          Prendre rendez-vous
        </CtaButton>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════ -->
    <!-- COACHING D'ÉQUIPE ET D'ORGANISATION -->
    <!-- ═══════════════════════════════════════════════ -->
    <section id="equipe" class="section-spacing bg-warm-section">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <h2 class="heading-gold text-center">Coaching d'équipe et d'organisation</h2>

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
            <CardHeader class="pb-2 text-center">
              <CardTitle class="text-base">Séminaires structurés</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader class="pb-2 text-center">
              <CardTitle class="text-base">Accompagnements sur la durée</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader class="pb-2 text-center">
              <CardTitle class="text-base">Séquences ponctuelles d'intervention</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader class="pb-2 text-center">
              <CardTitle class="text-base">Conférences thématiques</CardTitle>
            </CardHeader>
          </Card>
        </div>
        <p>Chaque intervention est conçue sur mesure, en fonction des enjeux spécifiques de l'organisation.</p>
      </div>
    </section>

    <!-- CTA Équipe -->
    <section class="section-spacing bg-cream-section">
      <div class="container-page text-center">
        <h2 class="mb-4 heading-gold">Échanger sur votre situation</h2>
        <p class="text-muted-foreground mb-4 max-w-lg mx-auto">Chaque mission débute par un échange préalable.</p>
        <p class="text-muted-foreground mb-10 max-w-lg mx-auto text-sm">Ce temps permet d'établir une première lecture de votre contexte et de vos enjeux,<br>et d'explorer les modalités d'un accompagnement adapté.</p>
        <CtaButton href="https://cal.com/anna-alcaide-villanueva-divan-des-sultanes/15min" arrow>
          Prenons 15 minutes
        </CtaButton>
        <p class="text-xs text-muted-foreground mt-4 italic">Un premier échange de 15 minutes pour avoir une première lecture de votre situation, approcher vos enjeux et voir si un accompagnement peut être pertinent.</p>
      </div>
    </section>
  </div>
</template>
