import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { mfeConfig } from "./module-federation.config";

export default defineConfig({
  plugins: [
    pluginReact({
      splitChunks: { react: false, router: false },
    }),
  ],
  server: {
    port: 3001,
  },
  moduleFederation: {
    options: mfeConfig,
  },
  html: {
    title: "countries",
  },
});
