import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { mfeConfig } from "./module-federation.config";

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3002,
  },
  moduleFederation: {
    options: mfeConfig,
  },
  html: {
    title: "countries-details",
  },
});
