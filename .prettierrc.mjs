/** @type {import("prettier").Config} */
export default {
  arrowParens: "avoid",
  printWidth: 120,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: true,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
