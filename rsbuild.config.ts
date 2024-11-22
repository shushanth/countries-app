import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginStyledComponents } from "@rsbuild/plugin-styled-components";

export default defineConfig({
  html: {
    title: "Countries",
  },
  plugins: [pluginReact(), pluginStyledComponents()],
});
