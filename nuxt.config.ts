// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "shadcn-nuxt",
  ],

  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",

  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },

  app: {
    head: {
      htmlAttrs: { lang: "fr" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Divan des Sultanes — Coaching de leadership au féminin",
      meta: [
        {
          name: "description",
          content:
            "Coaching de leadership au féminin — Accompagnement de dirigeantes, managers et femmes en responsabilité.",
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "fr_FR" },
        { property: "og:site_name", content: "Divan des Sultanes" },
      ],
    },
  },

  googleFonts: {
    families: {
      "Playfair Display": [400, 700],
      Quicksand: [400, 500, 600, 700],
    },
    display: "swap",
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/**": { prerender: true },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
});
