import { dependencies } from "./package.json";
import type { Rspack } from "@rsbuild/core";

export const mfeConfig: Rspack.ModuleFederationPluginOptions = {
  name: "countriesDetails",
  exposes: {
    "./CountriesDetails": "./src/App.tsx",
  },
  filename: "remoteEntry.js",
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
