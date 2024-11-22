import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginStyledComponents } from "@rsbuild/plugin-styled-components";
import { mfeConfig } from "./module-federation.config";

export default defineConfig({
  plugins: [pluginReact(), pluginStyledComponents()],
  server: {
    port: 3003,
  },
  moduleFederation: {
    options: mfeConfig,
  },
  html: {
    title: "ui-components",
  },
});
