import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG"],
});

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVICE_ID: string;
  readonly VITE_TEMPLATE_ID: string;
  readonly VITE_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
