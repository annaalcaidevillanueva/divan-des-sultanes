// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "shadcn-nuxt",
  ],

  image: {
    quality: 80,
    format: ["webp", "jpg"],
  },

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
      title: "Divan des Sultanes — coaching • consulting • facilitation",
      meta: [
        {
          name: "description",
          content:
            "Un espace pour penser autrement la responsabilité, le pouvoir et la manière de diriger. coaching • consulting • facilitation.",
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
      Quicksand: [300, 400, 500, 600, 700],
      Parisienne: [400],
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
