// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt App", // default fallback title
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  compatibilityDate: "2024-11-01",
  alias: {
    "@data": resolve(__dirname, "data"),
  },
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/ui"],
  css: ["@/assets/scss/main.scss"],
  vite: {
    cacheDir: undefined,
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/_variables.scss" as *;
            @use "@/assets/scss/_mixins.scss" as *;
          `,
        },
      },
    },
  },
  // components: [{ path: "~/components", pathPrefix: false }],
});
