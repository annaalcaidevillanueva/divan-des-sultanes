<script setup lang="ts">
const config = useAppConfig()

useSeoMeta({
  title: "L'Atelier — Cycles de réflexion professionnelle | Divan des Sultanes",
  ogTitle: "L'Atelier — Cycles de réflexion professionnelle",
  description: "Cycles de réflexion professionnelle pour personnes en responsabilité. Co-développement, cercles de résonance et ateliers en petit groupe.",
  ogDescription: "Cycles de réflexion professionnelle pour personnes en responsabilité. Co-développement, cercles de résonance et ateliers en petit groupe.",
  ogImage: '/img/4.jpg',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection image="/img/4.jpg" image-alt="L'Atelier des Sultanes">
      <p class="text-gold-300 text-sm font-semibold uppercase tracking-[0.25em] mb-4">Réflexion collective</p>
      <h1 class="text-white mb-4 hero-text-shadow">L'Atelier</h1>
      <p class="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
        Cycles de réflexion professionnelle pour personnes en responsabilité
      </p>
    </HeroSection>

    <!-- Introduction -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <h2>L'Atelier</h2>
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
        <p>L'Atelier se vit sous forme de cycle.</p>
        <p>Chaque cycle s'étend sur <strong>quatre mois</strong> et permet de participer à <strong>six ateliers de deux heures</strong>, réunissant un groupe restreint afin de permettre un travail en profondeur et des échanges de qualité.</p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 not-prose">
          <Card class="text-center">
            <CardHeader class="pb-2">
              <CardTitle class="text-4xl font-mono text-primary">6</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">femmes maximum</p>
            </CardContent>
          </Card>
          <Card class="text-center">
            <CardHeader class="pb-2">
              <CardTitle class="text-4xl font-mono text-primary">6</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">ateliers de 2h</p>
            </CardContent>
          </Card>
          <Card class="text-center">
            <CardHeader class="pb-2">
              <CardTitle class="text-4xl font-mono text-primary">4</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">mois de cycle</p>
            </CardContent>
          </Card>
          <Card class="text-center">
            <CardHeader class="pb-2">
              <CardTitle class="text-4xl font-mono text-primary">100%</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">distanciel</p>
            </CardContent>
          </Card>
        </div>

        <p>Plusieurs formats d'ateliers sont proposés au cours du cycle.</p>
        <p>Les participantes peuvent <strong>s'inscrire sur les listes d'attente des ateliers qui les intéressent</strong>.<br>
        Chaque atelier démarre dès que <strong>six participantes</strong> sont réunies.</p>
        <p>Cette organisation permet à chacune de composer son parcours tout en préservant <strong>la qualité du travail collectif</strong>.</p>
        <p>La confiance ne naît pas d'une rencontre isolée.<br>
        Elle se tisse au fil des rencontres.</p>
      </div>
    </section>

    <SectionDivider />

    <!-- Les formats proposés -->
    <section class="section-spacing">
      <div class="container-page max-w-3xl mx-auto">
        <h2 class="mb-8">Les formats proposés au sein de l'Atelier</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle class="text-lg">Le co-développement professionnel</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">Méthode structurée créée par Adrien Payette et Claude Champagne. Un petit groupe de pairs travaille, à tour de rôle, sur les situations professionnelles de chacune. Prise de recul, élargissement du regard, identification des angles morts, pistes d'action concrètes.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle class="text-lg">Le Cercle de Résonance</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">Travailler sa posture par le miroir du groupe. Plutôt que de chercher une solution technique, nous explorons ce qu'une situation de tension fait vibrer en vous. Le groupe témoigne de ce qu'il perçoit : une image, une émotion, un ressenti. Un format puissant pour lever les angles morts et retrouver sa juste présence intérieure.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle class="text-lg">La Lecture de Posture</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">Décoder les jeux d'influence et de pouvoir. À partir de cas réels — un échange difficile, une réunion sous tension, une décision en suspens — nous décortiquons ensemble les dynamiques à l'œuvre. L'objectif est d'ajuster votre curseur entre fermeté et accueil pour habiter pleinement votre fonction sans vous épuiser.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle class="text-lg">Conversations de Seuil</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">Prendre de la hauteur sur les paradoxes du leadership. Une exploration thématique guidée autour des grands enjeux de la responsabilité (L'audace de la lenteur, Sortir du contrôle, Habiter sa solitude). Un temps de réflexion profonde, presque philosophique mais ancré dans le réel, pour réaligner vos actions avec vos valeurs essentielles.</p>
            </CardContent>
          </Card>

          <Card class="md:col-span-2">
            <CardHeader>
              <CardTitle class="text-lg">Vision &amp; Intuition (Le Regard des Vigies)</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">L'audit sensible de vos projets de dirigeante. Dans le tumulte de l'action, on perd parfois le fil de son intuition. Cet atelier permet de soumettre une vision ou un projet stratégique au regard de vos pairs. Les autres participantes agissent comme des vigies : elles signalent les zones d'ombre, les potentiels inexploités ou les pertes d'énergie qu'elles perçoivent. Un outil d'aide à la décision pour valider ou ajuster votre trajectoire.</p>
            </CardContent>
          </Card>
        </div>

        <p class="text-muted-foreground mt-8">Chaque format conserve le même principe : un cadre clair, une exigence professionnelle, une qualité d'écoute.</p>
      </div>
    </section>

    <SectionDivider />

    <!-- Co-développement en détail -->
    <section class="section-spacing">
      <div class="container-page prose-divan max-w-3xl mx-auto">
        <h2>Le co-développement professionnel</h2>
        <p>L'Atelier s'appuie principalement sur le co-développement, méthode créée par Adrien Payette et Claude Champagne. Le principe est simple : un petit groupe de pairs se réunit régulièrement pour travailler, à tour de rôle, sur les situations professionnelles apportées par chacune. Ce n'est ni du conseil spontané, ni du partage informel. C'est un processus structuré, en plusieurs étapes, qui permet :</p>
        <ul>
          <li>de prendre du recul,</li>
          <li>d'élargir son regard,</li>
          <li>d'identifier des angles morts,</li>
          <li>de repartir avec des pistes d'action concrètes.</li>
        </ul>
        <p>La richesse vient de l'intelligence collective. La profondeur vient du cadre. Je tiens le processus. Je régule les échanges. Je veille à la qualité de présence. Le travail reste ancré dans la sphère professionnelle.</p>
      </div>
    </section>

    <SectionDivider />

    <!-- Investissement -->
    <section class="section-spacing">
      <div class="container-page max-w-xl mx-auto">
        <h2 class="text-center mb-8 heading-gold">L'investissement</h2>

        <PricingBlock prix="750 €" details="Cycle de 4 mois">
          <ul class="text-sm text-muted-foreground text-left space-y-2 mb-6">
            <li>Participation possible à 6 ateliers de 2 heures</li>
            <li>Groupe limité à 6 participantes par atelier</li>
            <li>Paiement possible en deux fois</li>
          </ul>
        </PricingBlock>

        <div class="mt-8 prose-divan text-center">
          <p>L'Atelier est un espace d'exploration.</p>
          <p>Certaines y viennent pour traverser une période précise.<br>
          D'autres y trouvent un ancrage régulier dans leur posture professionnelle.</p>
        </div>

        <div class="mt-10 text-center">
          <CtaButton to="/contact" arrow>
            Je m'inscris sur la liste d'attente
          </CtaButton>
        </div>
      </div>
    </section>
  </div>
</template>
