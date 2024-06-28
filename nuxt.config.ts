// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Vecinapp",
      titleTemplate: "%s – Vecinapp",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
        {
          hid: "og:image",
          name: "og:image",
          property: "og:image",
          content: "/favicon.png",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
        {
          hid: "shortcut-icon",
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
        {
          hid: "apple-touch-icon",
          rel: "apple-touch-icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
});
