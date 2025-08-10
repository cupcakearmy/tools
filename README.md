# Tools

## Setup

### Prettier

```bash
pnpm add -D @nicco.io/tools prettier eslint
```

```yaml
# pnpm-workspace.yaml

# For nw required unfortunately
# https://github.com/prettier/prettier/issues/17565#issuecomment-2949214831
publicHoistPattern:
  - "@ianvs/prettier-plugin-sort-imports"
  - "prettier-plugin-packagejson"
  - "prettier-plugin-tailwindcss"
```

```ignore
# .prettierignore
pnpm-lock.yaml
```

## Eslint

### Solid

```js
// .eslint.config.mjs
import { rules as prettier } from "@nicco.io/tools/eslint/prettier"
import { rules as solid } from "@nicco.io/tools/eslint/solid"

export default [...solid(import.meta.url), ...prettier()]
```
