import { dependencies } from "./package.json";
import type { Rspack } from "@rsbuild/core";

export const mfeConfig: Rspack.ModuleFederationPluginOptions = {
  name: "app-shell",
  remotes: {
    countries: "countries@http://localhost:3001/remoteEntry.js",
    countriesDetails: "countriesDetails@http://localhost:3002/remoteEntry.js",
  },
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
