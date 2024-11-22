import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { mfeConfig } from "./module-federation.config";

export default defineConfig({
  plugins: [pluginReact({})],
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
