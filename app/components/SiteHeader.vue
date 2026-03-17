<script setup lang="ts">
import { Menu, X, Compass, Users, Sparkles } from 'lucide-vue-next'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const config = useAppConfig()

const serviceItems = [
  {
    label: "L'Odyssée",
    to: '/odyssee',
    description: 'Parcours de 9 mois pour déplacer sa posture de dirigeante en profondeur.',
    icon: Compass,
  },
  {
    label: "L'Atelier",
    to: '/atelier',
    description: "Cycles d'exploration professionnelle en petit groupe.",
    icon: Users,
  },
  {
    label: 'Coaching',
    to: '/coaching',
    description: 'Séances serviceles pour travailler votre posture professionnelle.',
    icon: Sparkles,
  },
]

const flatNavItems = [
  { label: 'Hospitalité de luxe', to: '/hospitalite' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const mobileNavItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Hospitalité de luxe', to: '/hospitalite' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const isMobileMenuOpen = ref(false)
const route = useRoute()

// Close menu on route change
watch(() => route.fullPath, () => {
  isMobileMenuOpen.value = false
})

// Prevent body scroll when menu is open
watch(isMobileMenuOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

// Close on Escape key
function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-emerald-100/60 bg-white/95 backdrop-blur-md shadow-warm-sm">
    <div class="container-page flex items-center justify-between h-16 md:h-20">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="font-heading text-xl md:text-2xl text-emerald-800 hover:text-gold-700 transition-colors duration-300"
      >
        {{ config.site.nom }}
      </NuxtLink>

      <!-- Desktop Nav -->
      <NavigationMenu class="hidden lg:flex">
        <NavigationMenuList>
          <!-- Accueil -->
          <NavigationMenuItem>
            <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
              <NuxtLink
                to="/"
                class="!bg-transparent !text-foreground/70 hover:!text-emerald-700 hover:!bg-emerald-50/60 !font-semibold"
                active-class="!text-emerald-700 !bg-emerald-50/80"
              >
                Accueil
              </NuxtLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger class="!bg-transparent !text-foreground/70 hover:!text-emerald-700 hover:!bg-emerald-50/60 !font-semibold">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid w-[380px] gap-1 p-3">
                <li v-for="item in serviceItems" :key="item.to">
                  <NavigationMenuLink as-child>
                    <NuxtLink
                      :to="item.to"
                      class="group flex items-start gap-3 select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50/80 focus:bg-emerald-50/80"
                      active-class="bg-emerald-50/60"
                    >
                      <component
                        :is="item.icon"
                        class="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 group-hover:text-gold-600 transition-colors duration-200"
                      />
                      <div>
                        <div class="text-sm font-semibold text-foreground group-hover:text-emerald-800 transition-colors duration-200">
                          {{ item.label }}
                        </div>
                        <p class="mt-1 text-xs leading-snug text-muted-foreground">
                          {{ item.description }}
                        </p>
                      </div>
                    </NuxtLink>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <!-- Flat links -->
          <NavigationMenuItem v-for="item in flatNavItems" :key="item.to">
            <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
              <NuxtLink
                :to="item.to"
                class="!bg-transparent !text-foreground/70 hover:!text-emerald-700 hover:!bg-emerald-50/60 !font-semibold"
                active-class="!text-emerald-700 !bg-emerald-50/80"
              >
                {{ item.label }}
              </NuxtLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <!-- Mobile Menu Toggle Button -->
      <button
        class="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-foreground/60 hover:text-emerald-700 hover:bg-emerald-50/60 transition-all duration-200"
        :aria-label="isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
        :aria-expanded="isMobileMenuOpen"
        aria-controls="mobile-menu"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <X v-if="isMobileMenuOpen" class="h-5 w-5" />
        <Menu v-else class="h-5 w-5" />
      </button>
    </div>

    <!-- Mobile Menu Panel -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-all duration-400 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-250 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <nav
          v-if="isMobileMenuOpen"
          id="mobile-menu"
          class="fixed inset-0 z-[100] bg-emerald-950 flex flex-col"
          aria-label="Navigation mobile"
        >
          <!-- Top bar with logo + close -->
          <div class="flex items-center justify-between px-6 h-16 shrink-0">
            <NuxtLink
              to="/"
              class="font-heading text-xl text-white hover:text-gold-300 transition-colors duration-300"
              @click="isMobileMenuOpen = false"
            >
              {{ config.site.nom }}
            </NuxtLink>
            <button
              class="inline-flex items-center justify-center h-10 w-10 rounded-lg text-white/70 hover:text-gold-300 hover:bg-white/10 transition-all duration-200"
              aria-label="Fermer le menu"
              @click="isMobileMenuOpen = false"
            >
              <X class="h-6 w-6" />
            </button>
          </div>

          <!-- Separator -->
          <div class="h-px mx-6 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

          <!-- Nav links — centered vertically -->
          <div class="flex-1 flex flex-col items-center justify-center gap-1 px-6 -mt-4">
            <!-- Accueil -->
            <NuxtLink
              to="/"
              class="w-full max-w-xs text-center px-4 py-3 text-lg font-semibold text-white/80 hover:text-gold-300 hover:bg-white/5 rounded-xl transition-all duration-200"
              active-class="!text-gold-300 bg-white/10 font-bold"
              @click="isMobileMenuOpen = false"
            >
              Accueil
            </NuxtLink>

            <div class="w-full max-w-xs mt-3 mb-1">
              <p class="text-xs font-bold uppercase tracking-[0.2em] text-gold-400/60 text-center mb-2">service</p>
              <div class="space-y-0.5">
                <NuxtLink
                  v-for="item in serviceItems"
                  :key="item.to"
                  :to="item.to"
                  class="flex items-center gap-3 w-full px-4 py-2.5 text-base font-semibold text-white/80 hover:text-gold-300 hover:bg-white/5 rounded-xl transition-all duration-200"
                  active-class="!text-gold-300 bg-white/10 font-bold"
                  @click="isMobileMenuOpen = false"
                >
                  <component :is="item.icon" class="h-4 w-4 shrink-0 text-gold-400/50" />
                  {{ item.label }}
                </NuxtLink>
              </div>
            </div>

            <!-- Separator -->
            <div class="h-px w-full max-w-xs my-2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <!-- Other links -->
            <NuxtLink
              v-for="item in mobileNavItems.slice(1)"
              :key="item.to"
              :to="item.to"
              class="w-full max-w-xs text-center px-4 py-3 text-lg font-semibold text-white/80 hover:text-gold-300 hover:bg-white/5 rounded-xl transition-all duration-200"
              active-class="!text-gold-300 bg-white/10 font-bold"
              @click="isMobileMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </div>

          <!-- Bottom accent -->
          <div class="shrink-0 pb-safe px-6 pb-8 text-center">
            <div class="h-px mb-5 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
            <p class="text-xs text-white/30">coaching • consulting • facilitation</p>
          </div>
        </nav>
      </Transition>
    </Teleport>
  </header>
</template>
