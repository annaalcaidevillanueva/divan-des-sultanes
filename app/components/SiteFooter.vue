<script setup lang="ts">
import { MessageCircle, Mail } from 'lucide-vue-next'

const config = useAppConfig()

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: "L'Odyssée", to: '/odyssee' },
  { label: "L'Atelier", to: '/atelier' },
  { label: 'Coaching', to: '/coaching' },
  { label: 'Entreprises', to: '/entreprises' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <footer class="bg-foreground text-background/80">
    <div class="container-page py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        <!-- Brand -->
        <div>
          <NuxtLink to="/" class="font-heading text-2xl text-background hover:text-primary transition-colors">
            {{ config.site.nom }}
          </NuxtLink>
          <p class="mt-4 text-sm leading-relaxed text-background/60">
            Coaching de leadership au féminin.<br>
            Accompagnement de dirigeantes, managers et femmes en responsabilité.
          </p>
        </div>

        <!-- Navigation -->
        <nav aria-label="Navigation du pied de page">
          <h4 class="text-sm font-semibold uppercase tracking-wider text-background/50 mb-4">Navigation</h4>
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="item.to">
              <NuxtLink
                :to="item.to"
                class="text-sm text-background/70 hover:text-primary transition-colors"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Contact -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-background/50 mb-4">Contact</h4>
          <ul class="space-y-3">
            <li>
              <a
                :href="config.contact.whatsappLien"
                target="_blank"
                rel="noopener"
                class="text-sm text-background/70 hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle class="h-4 w-4" />
                {{ config.contact.whatsappNumero }}
              </a>
            </li>
            <li>
              <a
                :href="`mailto:${config.contact.emailContact}`"
                class="text-sm text-background/70 hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                <Mail class="h-4 w-4" />
                {{ config.contact.emailContact }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <Separator class="my-8 bg-background/10" />
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs text-background/40">
          &copy; {{ new Date().getFullYear() }} {{ config.site.nom }}. Tous droits réservés.
        </p>
        <NuxtLink to="/mentions-legales" class="text-xs text-background/40 hover:text-primary transition-colors">
          Mentions légales
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
