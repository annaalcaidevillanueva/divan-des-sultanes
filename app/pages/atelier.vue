<script setup lang="ts">
const config = useAppConfig()

useSeoMeta({
  title: "L'Atelier des Sultanes — Cycles d'exploration professionnelle | Divan des Sultanes",
  ogTitle: "L'Atelier des Sultanes — Cycles d'exploration professionnelle",
  description: "Cycles d'exploration professionnelle pour femmes qui dirigent. Co-développement, mastermind et ateliers expérientiels en petit groupe.",
  ogDescription: "Cycles d'exploration professionnelle pour femmes qui dirigent. Co-développement, mastermind et ateliers expérientiels en petit groupe.",
  ogImage: '/img/4.jpg',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection image="/img/4.jpg" image-alt="L'Atelier des Sultanes">
      <h1 class="text-white mb-4">L'Atelier</h1>
      <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
        Cycles d'exploration professionnelle pour femmes qui dirigent
      </p>
    </HeroSection>

    <!-- Introduction -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <p>L'Atelier est un espace autonome.</p>
        <p>Un lieu de rencontres régulières entre femmes en responsabilité.</p>
        <p>Un espace, pour l'instant principalement virtuel, qui pourra aussi se vivre en présentiel.</p>
        <p>Ici, on travaille à partir du réel. Des situations concrètes. Des décisions à prendre. Des tensions managériales. Des questions de posture.</p>
        <p>L'Atelier n'est pas une traversée longue comme l'Odyssée. C'est un espace plus court, plus ciblé, plus opérationnel.</p>
        <p>Un lieu pour réfléchir autrement, agir avec plus de discernement, et ne plus rester seule face à certaines situations professionnelles.</p>
        <p>Les rencontres sont réservées aux femmes francophones en responsabilité : dirigeantes, managers, responsables d'équipe, cheffes de projet.</p>
      </div>
    </section>

    <SectionDivider />

    <!-- Le cadre du cycle -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <h2>Le cadre du cycle</h2>
        <p>L'Atelier se vit sous forme de cycle. Un cycle comprend :</p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          <Card class="text-center">
            <CardHeader class="pb-2">
              <CardTitle class="text-2xl text-primary">6</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">femmes maximum</p>
            </CardContent>
          </Card>
          <Card class="text-center">
            <CardHeader class="pb-2">
              <CardTitle class="text-2xl text-primary">6</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">rencontres de 2h</p>
            </CardContent>
          </Card>
          <Card class="text-center">
            <CardHeader class="pb-2">
              <CardTitle class="text-2xl text-primary">4</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">mois de cycle</p>
            </CardContent>
          </Card>
          <Card class="text-center">
            <CardHeader class="pb-2">
              <CardTitle class="text-2xl text-primary">100%</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">distanciel</p>
            </CardContent>
          </Card>
        </div>

        <p>Chaque cycle est centré sur un format spécifique (co-développement, mastermind ou atelier thématique).</p>
        <p>L'engagement se fait pour l'ensemble du cycle. La stabilité du groupe est essentielle. La confiance se construit dans la durée.</p>
        <p>On ne consomme pas un atelier. <strong>On entre dans un processus collectif.</strong></p>
      </div>
    </section>

    <SectionDivider />

    <!-- Co-développement -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <h2>Le co-développement professionnel</h2>
        <p>L'Atelier s'appuie principalement sur le co-développement, méthode créée par Adrien Payette et Claude Champagne.</p>
        <p>Le principe est simple : un petit groupe de pairs se réunit régulièrement pour travailler, à tour de rôle, sur les situations professionnelles apportées par chacune.</p>
        <p>Ce n'est ni du conseil spontané, ni du partage informel.</p>
        <p>C'est un processus structuré, en plusieurs étapes, qui permet :</p>
        <ul>
          <li>de prendre du recul,</li>
          <li>d'élargir son regard,</li>
          <li>d'identifier des angles morts,</li>
          <li>de repartir avec des pistes d'action concrètes.</li>
        </ul>
        <p>La richesse vient de l'intelligence collective. La profondeur vient du cadre.</p>
        <p>Je tiens le processus. Je régule les échanges. Je veille à la qualité de présence.</p>
        <p>Le travail reste ancré dans la sphère professionnelle.</p>
      </div>
    </section>

    <SectionDivider />

    <!-- Autres formats -->
    <section class="section-spacing">
      <div class="container-page max-w-3xl mx-auto">
        <h2 class="mb-8">Autres formats proposés au sein de l'Atelier</h2>
        <p class="text-muted-foreground mb-8">Selon les cycles, l'Atelier peut également prendre la forme de :</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle class="text-lg">Mastermind stratégique</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">Travail collectif orienté vision, développement et décisions structurantes.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle class="text-lg">Ateliers expérientiels</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">Exploration des dynamiques relationnelles et de posture à travers des dispositifs structurés.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle class="text-lg">Cercles thématiques</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">Espaces dédiés à une problématique précise : solitude de la dirigeante, autorité, régulation des tensions, légitimité.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle class="text-lg">Rencontres en présentiel</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">Journées ou demi-journées de travail collectif, selon les opportunités.</p>
            </CardContent>
          </Card>
        </div>

        <p class="text-muted-foreground mt-8">Chaque format conserve le même principe : un cadre clair, une exigence professionnelle, une qualité d'écoute.</p>
      </div>
    </section>

    <SectionDivider />

    <!-- Investissement -->
    <section class="section-spacing">
      <div class="container-page max-w-xl mx-auto">
        <h2 class="text-center mb-8">L'investissement</h2>

        <PricingBlock prix="750 €" details="Cycle de 4 mois">
          <ul class="text-sm text-muted-foreground text-left space-y-2 mb-6">
            <li>6 rencontres de 2 heures</li>
            <li>Groupe de 6 femmes maximum</li>
            <li>Paiement possible en deux fois</li>
          </ul>
        </PricingBlock>

        <div class="mt-8 prose-divan text-center">
          <p>L'Atelier est un espace d'exploration.</p>
          <p>Certaines y viennent pour traverser une période précise. D'autres y trouvent un ancrage régulier dans leur posture professionnelle.</p>
        </div>

        <div class="mt-10 text-center">
          <CtaButton to="/contact" arrow>
            S'inscrire sur la liste d'attente du prochain cycle
          </CtaButton>
        </div>
      </div>
    </section>
  </div>
</template>
