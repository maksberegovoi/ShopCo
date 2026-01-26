/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/react-vite",

  viteFinal: async (config) => {
    return {
      ...config,
      css: {
        modules: {
          localsConvention: "camelCase",
        },
      },
    };
  },
};
export default config;
