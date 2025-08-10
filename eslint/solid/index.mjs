import { fileURLToPath } from "node:url"

import { includeIgnoreFile } from "@eslint/compat"
import eslint from "@eslint/js"
import solid from "eslint-plugin-solid/configs/typescript"
import globals from "globals"
import tseslint from "typescript-eslint"

export function rules(fileUrl) {
  const gitignorePath = fileURLToPath(new URL(".gitignore", fileUrl))
  return tseslint.config([
    includeIgnoreFile(gitignorePath),
    eslint.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    solid,
    {
      languageOptions: {
        globals: {
          ...globals.browser,
        },
      },
    },
  ])
}
