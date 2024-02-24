# svelte-tuicss mono repo

This is currently experimental.

This repo is a monorepo for the npm package https://www.npmjs.com/package/svelte-tuicss.

## Packages

The docs for the packages will be more helpful than this page.

- [docs](./docs-kit/README.md) (contains the docs site code deployed [here](https://nick-somebody.github.io/svelte-tuicss/))
  - You probably will use this as a test bed for your work on the lib.
- [lib](./lib-kit/README.md) (README for the lib you might installing [from npm](https://www.npmjs.com/package/svelte-tuicss))

There are examples [here](./docs-kit)

## Developing

This repo uses husky and enforces [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/) in order to automate generating changelogs for the library.

If you are commiting changes to code at:

- `docs-kit` please ensure you only use the `docs` commit type, the code in this path is only for the docs site and is deployed after each merge
- only use `fix` `feat` or `BREAKING CHANGE` commit types if you have made tangible change in `lib-kit`, that is, a documentation change that needs publishing to `npm` or a change to the lib itself.