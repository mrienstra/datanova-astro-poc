// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

const isDev = process.env.NODE_ENV === "development"

// https://astro.build/config
export default defineConfig({
  // The `site` property specifies the base URL for your site
  site: process.env.SITE_CANONICAL_URL,
  prefetch: true,
  trailingSlash: "never",
  experimental: {
    clientPrerender: true,
  },
  integrations: [
    react(),
    markdoc(),
    ...(isDev ? [keystatic()] : []),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: isDev ? "server" : "static",
});
