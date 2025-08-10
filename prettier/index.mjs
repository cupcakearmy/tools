/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
export default {
  semi: false,
  printWidth: 120,

  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-packagejson", "prettier-plugin-tailwindcss"],
  importOrder: ["<BUILT_IN_MODULES>", "", "<THIRD_PARTY_MODULES>", "", "^[$]", "", "^[.]"],
}
