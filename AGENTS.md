# Antue

Vue 2.x UI component library implementing Ant Design specification.

## Cursor Cloud specific instructions

### Runtime requirement

This project requires **Node.js 10.x** (installed via `nvm install 10.24.1 && nvm use 10.24.1`). Node 12+ and especially Node 14+ will break the build due to incompatible Webpack 3 / babel-core 6 / jest 21 dependencies.

### Key commands

All commands are defined in `package.json`:

| Command | Purpose |
|---|---|
| `npm run lint` | ESLint on `components/` |
| `npm test` | Jest unit tests |
| `npm run build` | Production build (Webpack 3) |
| `npm run dev` | Dev server with component examples (port 8080) |
| `npm run site` | Documentation site dev server |

### Dev server notes

- `npm run dev` uses `--open` flag which may fail headlessly; use `npx cross-env NODE_ENV=development webpack-dev-server --config ./build/webpack.dev.config.js --host 0.0.0.0 --port 8080 --hot` for cloud environments to avoid auto-opening a browser.
- No backend services, databases, or Docker containers are required.
