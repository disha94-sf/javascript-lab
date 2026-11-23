# Contributing

Thanks for helping out! This project keeps things simple.

## Rules

- **No runtime dependencies.** Everything uses plain JavaScript and Node built-ins.
- **Every function needs tests** in `test/`, covering normal use, edge cases and bad input.
- **One function per file** in `src/`, exported from `src/index.js`, with a JSDoc comment and example.

## Workflow

1. Fork the repo and create a branch: `git checkout -b feat/my-utility`
2. Make your change and run `npm test`
3. Commit using [Conventional Commits](https://www.conventionalcommits.org/), e.g. `feat: add throttle`
4. Open a pull request describing what you changed and why

Requires Node.js 22 or newer.
