<script setup lang="ts">
import { MessageCircle, Mail } from 'lucide-vue-next'

const config = useAppConfig()

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: "L'Odyssée", to: '/odyssee' },
  { label: "L'Atelier", to: '/atelier' },
  { label: 'Coaching', to: '/coaching' },
  { label: 'Hospitalité de luxe', to: '/hospitalite' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <footer class="bg-emerald-950 text-white/80">
    <!-- Gold top accent -->
    <div class="h-[2px] bg-gradient-to-r from-emerald-700 via-gold-400 to-emerald-700" />
    <div class="container-page py-14 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
        <!-- Brand -->
        <div>
          <NuxtLink to="/" class="font-heading text-2xl text-white hover:text-gold-300 transition-colors duration-300">
            {{ config.site.nom }}
          </NuxtLink>
          <p class="mt-4 text-sm leading-relaxed text-white/50">
            Un espace pour penser autrement la responsabilité, le pouvoir et la manière de diriger.<br>
            coaching • consulting • facilitation
          </p>
        </div>

        <!-- Navigation -->
        <nav aria-label="Navigation du pied de page">
          <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-gold-400/70 mb-5">Navigation</h4>
          <ul class="space-y-2.5">
            <li v-for="item in navItems" :key="item.to">
              <NuxtLink
                :to="item.to"
                class="text-sm text-white/60 hover:text-gold-300 transition-colors duration-200"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Contact -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-gold-400/70 mb-5">Contact</h4>
          <ul class="space-y-3">
            <li>
              <a
                :href="config.contact.whatsappLien"
                target="_blank"
                rel="noopener"
                class="text-sm text-white/60 hover:text-gold-300 transition-colors duration-200 inline-flex items-center gap-2"
              >
                <MessageCircle class="h-4 w-4" />
                {{ config.contact.whatsappNumero }}
              </a>
            </li>
            <li>
              <a
                :href="`mailto:${config.contact.emailContact}`"
                class="text-sm text-white/60 hover:text-gold-300 transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Mail class="h-4 w-4" />
                {{ config.contact.emailContact }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <Separator class="my-10 bg-white/8" />
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs text-white/30">
          &copy; {{ new Date().getFullYear() }} {{ config.site.nom }}. Tous droits réservés.
        </p>
        <NuxtLink to="/mentions-legales" class="text-xs text-white/30 hover:text-gold-300 transition-colors duration-200">
          Mentions légales
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
