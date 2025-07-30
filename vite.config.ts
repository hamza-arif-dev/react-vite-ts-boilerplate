import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@constants": resolve(__dirname, "src/constants"),
      "@libs/axios": resolve(__dirname, "src/libs/axios"),
      "@libs/design": resolve(__dirname, "src/libs/design"),
      "@libs/query-client": resolve(__dirname, "src/libs/query-client"),
      "@libs/router": resolve(__dirname, "src/libs/router"),
      "@libs/utils": resolve(__dirname, "src/libs/utils"),
      "@libs/hooks": resolve(__dirname, "src/libs/hooks"),
    },
  },
  server: { port: 3000 },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/__test__/setup.ts",
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
