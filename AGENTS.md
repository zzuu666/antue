## Cursor Cloud specific instructions

This is an **Antue** Vue 2.x component library (Ant Design for Vue). Node 10 is required (the project uses webpack 3 and babel 6).

### Key commands
- **Lint**: `npm run lint` — runs eslint on `components/` only
- **Test**: `npm test` — runs Jest
- **Build**: `npm run build` — production webpack build
- **Dev server**: `npm run dev` — starts webpack-dev-server for the examples app on port 8080

### Project structure
- `components/` — source for all UI components
- `examples/` — demo app with Vue Router; `examples/routers/index.js` registers routes, `examples/App.vue` has the sidebar menu
- `build/` — webpack configs (dev, site, dist)

### Gotchas
- The eslint config extends `standard`, which enforces `object-property-newline` in `.vue` `components: {}` blocks. Each property must be on its own line.
- `node_modules` is pre-installed; `npm install` is sufficient to refresh after dependency changes.
- The `@` alias in webpack resolves to `components/`, so imports like `import Foo from '@/foo'` map to `components/foo/index.js`.
