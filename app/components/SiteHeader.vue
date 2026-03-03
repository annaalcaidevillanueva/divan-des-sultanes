<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'

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

const isMobileMenuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
    <div class="container-page flex items-center justify-between h-16 md:h-20">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="font-heading text-xl md:text-2xl text-primary hover:text-primary/80 transition-colors"
      >
        {{ config.site.nom }}
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-md transition-colors"
          active-class="text-primary bg-primary/5"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Mobile Menu (Sheet) -->
      <Sheet v-model:open="isMobileMenuOpen">
        <SheetTrigger as-child>
          <Button variant="ghost" size="icon" class="lg:hidden" aria-label="Ouvrir le menu">
            <Menu class="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" class="w-72">
          <SheetHeader>
            <SheetTitle class="font-heading text-lg text-primary">
              {{ config.site.nom }}
            </SheetTitle>
          </SheetHeader>

          <nav class="mt-8 flex flex-col gap-1" aria-label="Navigation mobile">
            <NuxtLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors"
              active-class="text-primary bg-accent"
              @click="isMobileMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  </header>
</template>
