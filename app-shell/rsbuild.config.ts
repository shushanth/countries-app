import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { mfeConfig } from "./module-federation.config";

export default defineConfig({
  plugins: [pluginReact({}), pluginSass()],
  server: {
    port: 3000,
  },
  moduleFederation: {
    options: mfeConfig,
  },
  html: {
    title: "app",
  },
});
