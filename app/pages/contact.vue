<script setup lang="ts">
import { MessageCircle, Calendar, Mail } from 'lucide-vue-next'

const config = useAppConfig()

useSeoMeta({
  title: 'Contact — Entrer en conversation | Divan des Sultanes',
  ogTitle: 'Contact — Divan des Sultanes',
  description: 'Prenez contact pour échanger sur l\'Odyssée, l\'Atelier, un accompagnement individuel ou une intervention en entreprise.',
  ogDescription: 'Prenez contact pour échanger sur l\'Odyssée, l\'Atelier, un accompagnement individuel ou une intervention en entreprise.',
})
</script>

<template>
  <div>
    <section class="section-spacing">
      <div class="container-page max-w-3xl mx-auto">
        <h1 class="text-center mb-4">Entrer en conversation</h1>
        <p class="text-center text-muted-foreground text-lg mb-12">
          Chaque parcours commence par un échange.
        </p>

        <div class="prose-divan mb-12">
          <p>Que votre demande concerne :</p>
          <ul>
            <li>l'Odyssée,</li>
            <li>l'Atelier,</li>
            <li>un accompagnement individuel,</li>
            <li>ou une intervention en entreprise,</li>
          </ul>
          <p>je vous invite à me partager votre intention.</p>
        </div>

        <!-- Tally Form Embed -->
        <Card class="mb-12">
          <CardHeader>
            <CardTitle>Formulaire de contact</CardTitle>
            <CardDescription>Le formulaire ci-dessous permet de préciser votre contexte et votre besoin. Je vous répondrai personnellement.</CardDescription>
          </CardHeader>
          <CardContent>
            <div v-if="config.formulaires.tallyContactId" class="w-full">
              <iframe
                :src="`https://tally.so/embed/${config.formulaires.tallyContactId}?alignLeft=1&hideTitle=1&transparentBackground=1`"
                width="100%"
                height="500"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                title="Formulaire de contact"
                class="rounded-lg"
              />
            </div>
            <div v-else class="text-center py-12 text-muted-foreground">
              <p>Le formulaire de contact sera bientôt disponible.</p>
              <p class="text-sm mt-2">En attendant, contactez-moi directement par WhatsApp ou email.</p>
            </div>
          </CardContent>
        </Card>

        <SectionDivider />

        <!-- Autres moyens de contact -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <!-- Calendly -->
          <Card>
            <CardHeader>
              <div class="flex items-center gap-3">
                <div class="p-2 bg-primary/10 rounded-lg">
                  <Calendar class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle class="text-base">Prendre rendez-vous</CardTitle>
                  <CardDescription>Réservez directement un temps d'échange</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CtaButton
                :href="config.reservations.calendlyGeneral || '#'"
                variant="outline"
                size="sm"
              >
                Ouvrir le calendrier
              </CtaButton>
            </CardContent>
          </Card>

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
        </div>

        <p class="text-center text-sm text-muted-foreground mb-12">
          Je lis chaque message avec attention.<br>
          Le Divan n'est pas un espace automatisé. C'est un lieu de rencontre.
        </p>

        <SectionDivider />

        <!-- Essai Download -->
        <div class="text-center">
          <h2 class="mb-4">Recevoir l'essai <em>De l'autre côté du contrôle</em></h2>
          <div class="prose-divan max-w-xl mx-auto mb-8">
            <p>Il y a des textes que je ne publie pas simplement sur le blog. Des textes plus intimes. Plus fondateurs.</p>
            <p><em>De l'autre côté du contrôle</em> est un essai que j'ai écrit à partir d'un déplacement intérieur. Il parle de ce moment où l'on cesse de tenir à tout prix. Où l'on comprend que maîtriser n'est pas toujours diriger.</p>
            <p>Je choisis de l'offrir. Si cet espace vous appelle, je vous l'envoie personnellement.</p>
          </div>

          <Card class="max-w-md mx-auto">
            <CardContent class="pt-6">
              <div v-if="config.formulaires.tallyEssaiId" class="w-full">
                <iframe
                  :src="`https://tally.so/embed/${config.formulaires.tallyEssaiId}?alignLeft=1&hideTitle=1&transparentBackground=1`"
                  width="100%"
                  height="200"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                  title="Recevoir l'essai"
                  class="rounded-lg"
                />
              </div>
              <div v-else class="flex items-center gap-3">
                <Mail class="h-5 w-5 text-primary shrink-0" />
                <div class="text-left">
                  <p class="text-sm text-muted-foreground">Envoyez-moi un email pour recevoir l'essai :</p>
                  <a :href="`mailto:${config.contact.emailContact}?subject=Essai - De l'autre côté du contrôle`" class="text-sm font-medium text-primary hover:underline">
                    {{ config.contact.emailContact }}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <p class="text-xs text-muted-foreground mt-4">
            En laissant votre adresse, vous recevrez également, de manière occasionnelle, les écrits et informations du Divan des Sultanes.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
