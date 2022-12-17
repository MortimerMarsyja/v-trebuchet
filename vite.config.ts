import { mergeConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-essentials", "storybook-addon-designs"],
  framework: "@storybook/react-vite",
  plugins: [svgr(), tsconfigPaths()],
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add storybook-specific dependencies to pre-optimization
      optimizeDeps: {
        include: ["storybook-addon-designs"],
      },
    });
  },
};
