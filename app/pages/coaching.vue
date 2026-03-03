<script setup lang="ts">
const config = useAppConfig()

useSeoMeta({
  title: 'Coaching individuel — Posture professionnelle | Divan des Sultanes',
  ogTitle: 'Coaching individuel — Posture professionnelle',
  description: 'Un espace confidentiel pour travailler votre posture professionnelle. Séances individuelles pour dirigeantes et managers.',
  ogDescription: 'Un espace confidentiel pour travailler votre posture professionnelle. Séances individuelles pour dirigeantes et managers.',
  ogImage: '/img/5.jpg',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection image="/img/5.jpg" image-alt="Coaching individuel — Divan des Sultanes">
      <h1 class="text-white mb-4">Coaching individuel</h1>
      <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
        Un espace confidentiel pour travailler votre posture professionnelle
      </p>
    </HeroSection>

    <!-- Introduction -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
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

    <!-- Les formats -->
    <section class="section-spacing">
      <div class="container-page max-w-4xl mx-auto">
        <h2 class="text-center mb-12">Les formats d'accompagnement</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <!-- Séance approfondie -->
          <Card>
            <CardHeader>
              <CardTitle>Séance approfondie</CardTitle>
              <CardDescription>1h30 de travail en profondeur</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground text-sm mb-4">
                Un temps suffisant pour poser une situation, l'explorer avec précision, et ouvrir des pistes concrètes de transformation.
              </p>
              <p class="text-2xl font-bold text-foreground">350 €</p>
            </CardContent>
          </Card>

          <!-- Flash coaching -->
          <Card>
            <CardHeader>
              <CardTitle>Flash coaching</CardTitle>
              <CardDescription>45 minutes ciblées</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground text-sm mb-4">
                Pour un besoin ponctuel, une décision à éclairer, une situation à débloquer rapidement.
              </p>
              <p class="text-2xl font-bold text-foreground">200 €</p>
            </CardContent>
          </Card>
        </div>

        <!-- Parcours -->
        <h3 class="text-center mb-8">Parcours d'accompagnement</h3>
        <p class="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
          Pour un travail plus structuré dans le temps, il est possible de s'engager sur un forfait :
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PricingBlock prix="1 650 €" details="au lieu de 1 750 €">
            <p class="text-sm text-muted-foreground font-medium">5 séances de 1h30</p>
          </PricingBlock>

          <PricingBlock prix="1 950 €" details="au lieu de 2 100 €">
            <p class="text-sm text-muted-foreground font-medium">6 séances de 1h30</p>
          </PricingBlock>
        </div>

        <p class="text-center text-sm text-muted-foreground mt-6">
          Les séances sont planifiées sur une période définie ensemble, afin de garantir continuité et profondeur.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- Modalités -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <h2>Modalités</h2>
        <p>Les séances se déroulent :</p>
        <ul>
          <li>en visioconférence</li>
          <li>ou en présentiel (les frais de déplacement sont alors pris en charge)</li>
        </ul>
        <p>Chaque accompagnement débute par un échange préalable afin de vérifier l'adéquation entre votre besoin et le cadre proposé.</p>
        <p>Le coaching individuel est un espace de responsabilité. Un lieu où l'on peut penser autrement, sans masque, sans performance, avec exigence et clarté.</p>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-spacing bg-muted">
      <div class="container-page text-center">
        <h2 class="mb-4">Prêt à commencer ?</h2>
        <p class="text-muted-foreground mb-8">Chaque parcours commence par un échange.</p>
        <CtaButton :href="config.reservations.calendlyGeneral || '/contact'" arrow>
          Prendre rendez-vous
        </CtaButton>
      </div>
    </section>
  </div>
</template>
