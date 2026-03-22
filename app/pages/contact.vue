<script setup lang="ts">
import { MessageCircle, Calendar, Mail } from 'lucide-vue-next'

const config = useAppConfig()

useSeoMeta({
  title: 'Contact — Entrer en relation | Divan des Sultanes',
  ogTitle: 'Contact — Divan des Sultanes',
  description: 'Prenez contact pour échanger sur l\'Odyssée, l\'Atelier, un accompagnement individuel ou une intervention en entreprise.',
  ogDescription: 'Prenez contact pour échanger sur l\'Odyssée, l\'Atelier, un accompagnement individuel ou une intervention en entreprise.',
  ogImage: '/img/ENTRER_EN_RELATION.jpg',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection image="/img/ENTRER_EN_RELATION.jpg" image-alt="Entrer en relation — Divan des Sultanes">
      <h1 class="text-white mb-4 hero-text-shadow">Entrer en relation</h1>
      <p class="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
        Chaque parcours commence par un premier échange.
      </p>
    </HeroSection>

    <section class="section-spacing bg-white">
      <div class="container-page max-w-3xl mx-auto">

        <!-- Intro -->
        <div class="prose-divan mb-14 text-center">
          <p class="text-lg leading-relaxed">Chaque parcours commence par un premier échange.</p>
          <p>Un temps simple pour vérifier que c'est juste.<br>
          Pour vous.<br>
          Pour moi.</p>
        </div>

        <SectionDivider />

        <!-- Premier échange -->
        <div class="mb-14">
          <h2 class="mb-6 heading-gold text-center">Un premier échange</h2>
          <div class="prose-divan text-center mb-8">
            <p>Un premier échange de 15 minutes permet d'avoir une première lecture de votre situation,<br>
            d'approcher vos enjeux,<br>
            et d'explorer les modalités d'un accompagnement adapté.</p>
          </div>
        </div>

        <SectionDivider />

        <!-- Prendre rendez-vous -->
        <div class="mb-14 text-center">
          <h2 class="mb-4 heading-gold">Prendre rendez-vous</h2>
          <p class="text-muted-foreground mb-8">Vous pouvez réserver directement un temps d'échange.</p>
          <CtaButton href="https://cal.com/anna-alcaide-villanueva-divan-des-sultanes/15min" arrow>
            Demander un échange de 15 minutes
          </CtaButton>
        </div>

        <SectionDivider />

        <!-- Votre demande -->
        <div class="mb-14">
          <h2 class="mb-4 heading-gold">Votre demande</h2>
          <div class="prose-divan mb-6">
            <p>Que votre demande concerne :</p>
            <ul class="list-none pl-0 space-y-1 text-muted-foreground">
              <li>– l'Odyssée,</li>
              <li>– l'Atelier,</li>
              <li>– un accompagnement individuel,</li>
              <li>– ou une intervention en entreprise,</li>
            </ul>
            <p>vous pouvez me partager votre situation ou votre question.</p>
          </div>
          <p class="text-center text-sm text-muted-foreground mt-6">
            Je lis chaque message avec attention.<br>
            Le Divan n'est pas un espace automatisé.<br>
            C'est un lieu de rencontre.
          </p>
        </div>

        <SectionDivider />

        <!-- Liste d'attente -->
        <div class="mb-14 text-center">
          <h2 class="mb-4 heading-gold">S'inscrire sur liste d'attente</h2>
          <div class="prose-divan text-center mb-6">
            <p>Certaines propositions nécessitent un temps de préparation et un groupe juste.<br>
            Vous pouvez vous inscrire sur liste d'attente.</p>
            <p>Cela ne vous prendra qu'<strong>environ 60 secondes</strong>.</p>
            <p class="text-sm text-muted-foreground">Je vous contacterai ensuite pour <strong>un entretien en visio</strong>, afin de vérifier ensemble si ce qui est proposé répond à un <strong>besoin réel et juste pour vous</strong> en ce moment.</p>
          </div>
          <CtaButton href="https://tally.so/r/wz8dx0" arrow>
            Rejoindre la liste d'attente
          </CtaButton>
        </div>

        <SectionDivider />

        <!-- Écrire un message -->
        <div class="mb-14">
          <h2 class="mb-4 heading-gold">Écrire un message</h2>
          <div class="prose-divan mb-6">
            <p>Le formulaire de contact sera bientôt disponible.</p>
            <p>En attendant, vous pouvez me contacter directement :</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <!-- WhatsApp -->
            <Card>
              <CardHeader>
                <div class="flex items-center gap-3">
                  <div class="p-2 bg-primary/10 rounded-lg">
                    <MessageCircle class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle class="text-base">WhatsApp</CardTitle>
                    <CardDescription>{{ config.contact.whatsappNumero }}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CtaButton
                  :href="config.contact.whatsappLien"
                  variant="outline"
                  size="sm"
                >
                  Envoyer un message
                </CtaButton>
              </CardContent>
            </Card>

            <!-- Email -->
            <Card>
              <CardHeader>
                <div class="flex items-center gap-3">
                  <div class="p-2 bg-primary/10 rounded-lg">
                    <Mail class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle class="text-base">Email</CardTitle>
                    <CardDescription>{{ config.contact.emailContact }}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CtaButton
                  :href="`mailto:${config.contact.emailContact}`"
                  variant="outline"
                  size="sm"
                >
                  Envoyer un email
                </CtaButton>
              </CardContent>
            </Card>
          </div>
        </div>

        <SectionDivider />

        <!-- Essai -->
        <div class="text-center">
          <h2 class="mb-4 heading-gold">Recevoir l'essai</h2>
          <h3 class="mb-6"><em>De l'autre côté du contrôle</em></h3>
          <div class="prose-divan max-w-xl mx-auto mb-8">
            <p>Il y a des textes que je ne publie pas simplement sur le blog.<br>
            Des textes plus intimes. Plus fondateurs.</p>
            <p><em>De l'autre côté du contrôle</em> est un essai né d'un déplacement intérieur.</p>
            <p>Il parle de ce moment où l'on cesse de tenir à tout prix.<br>
            Où l'on comprend que maîtriser n'est pas toujours diriger.</p>
            <p>Je choisis de l'offrir.</p>
            <p>Si cet espace vous appelle, je vous l'envoie personnellement.</p>
            <p>Envoyez-moi un email pour le recevoir :</p>
          </div>

          <Card class="max-w-md mx-auto">
            <CardContent class="pt-6">
              <div class="flex items-center gap-3">
                <Mail class="h-5 w-5 text-primary shrink-0" />
                <div class="text-left">
                  <a :href="`mailto:${config.contact.emailContact}?subject=Essai - De l'autre côté du contrôle`" class="text-sm font-medium text-primary hover:underline">
                    {{ config.contact.emailContact }}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <p class="text-xs text-muted-foreground mt-4 leading-relaxed">
            En laissant votre adresse, vous recevrez également, de manière occasionnelle,<br>
            les écrits et informations du Divan des Sultanes.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
