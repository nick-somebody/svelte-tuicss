# svelte-tuicss

This is currently experimental.

Alternative to [react-tuicss](https://github.com/nick-somebody/react-tuicss)

This library is a component library built on [TuiCss](https://github.com/vinibiavatti1/TuiCss).

I built this as a way to learn svelte.

## Installing

```sh
npm i svelte-tuicss
```

Then add code like this to your `.svelte` file

```svelte
import { TuiPanel, TuiScreen, TuiTabs } from "svelte-tuicss";
```
I will eventually write better docs, but you can get plenty of examples from the [docs site](https://nick-somebody.github.io/react-tuicss/) and the [docs code](../docs-kit/).

## Developing

To develop normally, you probably want to use the docs site as a test bed for what you're doing.

To test that your stuff compiles, there are multiple commands for doing that, including...

```sh
npm run check
npm run check:watch
npm run build
```

Run the format and lint commands before committing/pushing to prevent unneeded CI fails.

```sh
npm run format
npm run lint
```

Tests can be run with

```sh
# for normal test running
npm run test

# for coverage
npm run coverage
```

Tests can be debugged in `vscode` by hitting `F5` on the test file you wish to debug.

> [!NOTE]
> The workspace file at the root folder of this repo should be opened in vscode as it has the configuration for this.


## Releasing

- Get changes into `main`
- Pull latest code to local
- Create a branch on your local
- Run `npm run tag-release` (this will analyse commits, generate a changelog entry, bump npm and create a corresponding git tag).
  - advise configuring git to follow tags on push, eg. `git config --global push.followTags true`
  - You need to push the branch commits and tag to the remote
- Get this release PR merged to `main`
- [Create a new release](https://github.com/nick-somebody/svelte-tuicss/releases/new) against the tag you just created.
- When the release is published, [the workflow](../.github/workflows/publish.yml) will handle the rest

## Changelog

See [here](CHANGELOG.md)