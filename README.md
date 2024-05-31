# composer

Single command project setup! This package automates essential tools for code style, version
control, releases, and Docker.

> **NOTE**: This package assists in setting up the following tools. You may click the links below to
> learn more about each tool.

| IDE                                       | Development                                        | Linting & Prettify                                                            | Version control                            | Deployment                                             |
| ----------------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------ |
| [EditorConfig](https://editorconfig.org/) | [TypeScript](https://www.typescriptlang.org/docs/) | [ESLint](https://eslint.org/docs/latest/use/getting-started)<sup>@8.0.0</sup> | [commitlint](https://commitlint.js.org/)   | [Docker](https://docs.docker.com/)                     |
|                                           |                                                    | [lint-staged](https://github.com/lint-staged/lint-staged)                     | [Git](https://git-scm.com/)                | [Release It](https://github.com/release-it/release-it) |
|                                           |                                                    | [Prettier](https://prettier.io/docs/en/)                                      | [husky](https://typicode.github.io/husky/) |                                                        |

> **NOTE**: Currently fixed ESLint version at latest v8.0.0 due to the following reasons:
>
> - ESLint v9 contains breaking API changes
> - The eslint-plugin-react plugin is not compatible with ESLint v9

## Table of Contents

- [Prerequisite](#prerequisite)
- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
  - [Preset file](#preset-file)
- [Outputs](#outputs)
  - [Docker](#docker)
  - [EditorConfig](#editorconfig)
  - [Git](#git)
  - [Husky](#husky)
  - [Prettier](#prettier)
  - [release-it](#release-it)
  - [commitlint](#commitlint)
  - [ESLint](#eslint)
  - [lint-staged](#lint-staged)
  - [TypeScript](#typescript)

## Prerequisite

In order to use this package, you project must meet the following requirements:

- Contains a `package.json` file

```bash
# NPM
$ npm init

# PNPM
$ pnpm init

# Yarn
$ yarn init
```

- The directory is a `git` repository (In order to set up
  [husky](https://typicode.github.io/husky/), [commitlint](https://commitlint.js.org/),
  [lint-staged](https://github.com/lint-staged/lint-staged), and
  [Release It](https://github.com/release-it/release-it))

```bash
$ git init
```

## Installation

Install the package as a dev dependency:

```shell
# NPM
$ npm install -D @chore-dev/composer

# PNPM
$ pnpm add -D @chore-dev/composer

# Yarn
$ yarn add -D @chore-dev/composer
```

## Usage

1. Add the following script to your `package.json` file

> You may skip this step if you are using PNPM or Yarn

```json
{
  ...
  "scripts": {
    // ...existing scripts
    "composer": "composer"
  },
  ...
}
```

2. Run the following command to start the Composer:

```shell
# NPM
$ npm run composer [<options>]

# PNPM
$ pnpm composer [<options>]
or # If you have added the script to your `package.json` file
$ pnpm run composer [<options>]

# Yarn
$ yarn composer [<options>]
or # If you have added the script to your `package.json` file
$ yarn run composer [<options>]
```

## Options

| Option                  | Alias             | Description                                       | Example                  |
| ----------------------- | ----------------- | ------------------------------------------------- | ------------------------ |
| `--dry-run`             | `-D`              | Run the command without making any changes        |                          |
| `--no-backup`           |                   | Skip creating backup files while running composer |                          |
| `--preset path::string` | `-P path::string` | Use a preset file and skip all questions          | `--preset ./preset.json` |

### Preset file

The preset file is a JSON file that contains the configuration for the Composer. The following is
the structure of the preset file:

```typescript
interface Preset {
  // Project environment
  env: Record<'isBrowser' | 'isNode', boolean>;
  framework: 'react' | 'vue' | 'none';
  packageManager: 'npm' | 'pnpm' | 'yarn';
  styleSheet: 'css' | 'scss' | 'none';
  withSyntaxExtension: boolean;
  // Tools
  commitLint: Record<'createConfig' | 'install' | 'integrate', boolean> | false;
  docker: Record<'addIgnores', boolean> | false;
  editorConfig: Record<'createConfig', boolean>;
  eslint: Record<'addIgnores' | 'createConfig' | 'insertScripts' | 'install', boolean> | false;
  git: Record<'addIgnores', boolean> | false;
  husky: Record<'insertScripts' | 'install', boolean> | false;
  lintStaged: Record<'createConfig' | 'install' | 'integrate', boolean> | false;
  prettier: Record<'addIgnores' | 'createConfig' | 'insertScripts' | 'install', boolean> | false;
  releaseIt: Record<'createConfig' | 'insertScripts' | 'install', boolean> | false;
  typescript: Record<'createConfig' | 'install', boolean> | false;
}
```

You may also copy the preset file from the Composer by running the following command:

```shell
# NPM
$ npm run composer --dry-run

# PNPM
$ pnpm composer --dry-run
or # If you have added the script to your `package.json` file
$ pnpm run composer --dry-run

# Yarn
$ yarn composer --dry-run
or # If you have added the script to your `package.json` file
$ yarn run composer --dry-run
```

## Outputs

Composer may generate the following files according to the tools you have selected:

> Click the items below to learn more about customizing them

### commitlint

- [commitlint.config.js](https://github.com/conventional-changelog/commitlint?tab=readme-ov-file#config)

### Docker

- [.dockerignore](https://docs.docker.com/build/building/context/#dockerignore-files)

### EditorConfig

- [.editorconfig](https://editorconfig.org/)

### ESLint

- [eslint.config.js](https://eslint.org/docs/latest/use/configure/configuration-files)

### Git

- [.gitignore](https://git-scm.com/docs/gitignore)

### Husky

- [.husky](https://typicode.github.io/husky/how-to.html) (Directory)
  - [.husky/commit-msg](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
  - [.husky/pre-commit](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)

### lint-staged

- [lint-staged.config.js](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration)

### Prettier

- [.prettier.config.js](https://prettier.io/docs/en/option-philosophy)
- [.prettierignore](https://prettier.io/docs/en/ignore)

### release-it

- [.release-it.json](https://github.com/release-it/release-it/blob/main/docs/configuration.md)

### TypeScript

- [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

[^ Back to top](#composer)
