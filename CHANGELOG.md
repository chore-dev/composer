# Changelog

## [1.0.5](https://github.com/chore-dev/composer/compare/v1.0.4...v1.0.5) (2024-05-21)

### Restructured

- **ESLint:** updated way of importing react recommended
  ([f5588f2](https://github.com/chore-dev/composer/commit/f5588f2083792c12d4a90375c18a9eceb2acabba))

## [1.0.4](https://github.com/chore-dev/composer/compare/v1.0.3...v1.0.4) (2024-05-21)

### Bug Fixes

- **ESLint:** fixed invalid package
  ([4571a51](https://github.com/chore-dev/composer/commit/4571a51dd667e89ffed287d118f62e41f46a4500))

## [1.0.3](https://github.com/chore-dev/composer/compare/v1.0.2...v1.0.3) (2024-05-21)

### Bug Fixes

- **ESLint:** fixed incorrect handling of non module project
  ([3d46941](https://github.com/chore-dev/composer/commit/3d4694104c2899f1fda395a238027ca8204adc4b))

## [1.0.2](https://github.com/chore-dev/composer/compare/v1.0.1...v1.0.2) (2024-05-21)

### Bug Fixes

- fixed fn name typo backupBeforeWrite instead of writeBeforeWrite
  ([bbdb8fd](https://github.com/chore-dev/composer/commit/bbdb8fd05e1677793d47893f3fa839dcc9338dc6))
- **Husky:** fixed husky directory unable to init issue
  ([2a338fd](https://github.com/chore-dev/composer/commit/2a338fd193f56a30db5f12140217a44a8406f574))

## [1.0.1](https://github.com/chore-dev/composer/compare/v1.0.0...v1.0.1) (2024-05-21)

### Bug Fixes

- **Git:** fixed .gitignore being ignored when publish issue
  ([733b2f6](https://github.com/chore-dev/composer/commit/733b2f6f6af0bf1f85a9593e066f2df3c7d627bf))

## 1.0.0 (2024-05-21)

### Features

- added --preset / -P for importing preset answers
  ([177ceb6](https://github.com/chore-dev/composer/commit/177ceb670b8e339d7cccf553c54339a9e1de55dc))
- added commitlint in workflow & integrated with husky
  ([95851eb](https://github.com/chore-dev/composer/commit/95851eb80556d77353386920aafbd184c908d5b4))
- added detail config to eslint config template
  ([50d31b0](https://github.com/chore-dev/composer/commit/50d31b00d7a3d36ede82ac9885f84d1ae52f1854))
- added eslint & prettier integrated scripts
  ([c0919c8](https://github.com/chore-dev/composer/commit/c0919c865004176ac69903a778ce457e7f21271f))
- added husky in workflow
  ([28c5ec1](https://github.com/chore-dev/composer/commit/28c5ec1bdfcedf97df3c8ecda7d88e9f437ba039))
- added ts questions and tasks
  ([d54ec94](https://github.com/chore-dev/composer/commit/d54ec94c4c34bac57740bcadc9aa45c668dbae5a))
- **docker & git:** implemented docker & git
  ([cf58326](https://github.com/chore-dev/composer/commit/cf58326a8b7ce92eb016898a383c4879d5c37606))
- implement eslint commitlint config
  ([9b09a3b](https://github.com/chore-dev/composer/commit/9b09a3b2c1754a4de1534bd57a6033baab9e0dd0))
- implemented eslint tasks
  ([d5748ef](https://github.com/chore-dev/composer/commit/d5748efea9260ce4dd514df78dcb2af8882981ad))
- **lint-staged:** implemented lint-staged
  ([ffc0055](https://github.com/chore-dev/composer/commit/ffc0055ee841b6b8a17cdbdf15f562f9e1779707))
- **release-it:** implemented release-it
  ([e4ffb87](https://github.com/chore-dev/composer/commit/e4ffb87598d976ee1090f03192199471e513bc32))

### Bug Fixes

- add check when integrate with husky
  ([7b3e884](https://github.com/chore-dev/composer/commit/7b3e8848ab4d754b1670786afc2cedff51f3bef1))
- added commitlint config to eslint ignores
  ([74cee10](https://github.com/chore-dev/composer/commit/74cee108c1944b6f243fce9d8ba580c5a1ea26dc))
- **commitlint:** fixed incorrect function name
  ([6eca5ed](https://github.com/chore-dev/composer/commit/6eca5ed635e63c875342ae3a57021021d50b6c40))
- fixed eslint config ignores should come first issue
  ([3f065ad](https://github.com/chore-dev/composer/commit/3f065ad92c9abcbca46cf01dd975293a9abf8b5d))
- fixed eslint not able to look up files issue
  ([2fe6fd6](https://github.com/chore-dev/composer/commit/2fe6fd602ee75bdab6e85cd114060ceeb1647ad3))
- fixed incorrect ignore glob
  ([66f255e](https://github.com/chore-dev/composer/commit/66f255ed7ee5fa2870b6f6a967ca9ed8f936390f))
- fixed incorrect task order
  ([938904f](https://github.com/chore-dev/composer/commit/938904f7a7281e8ce0481b8f85d88f9abfec15a8))
- fixed invalid import
  ([b7408cd](https://github.com/chore-dev/composer/commit/b7408cd3b981c9797cef814d2c419694ded82ec5))
- prevent duplicate backup
  ([1c24389](https://github.com/chore-dev/composer/commit/1c24389360582d6c612f0e854d9343690125d733))

### Restructured

- better cooperation between eslint and prettier
  ([88742c5](https://github.com/chore-dev/composer/commit/88742c54b9d484d7b99dc376a1e50e089bf7b3b9))
- changed release-it config from js to json due to support issue
  ([030c9c0](https://github.com/chore-dev/composer/commit/030c9c07e8f71a8dce5d08d300a9c50e5a6b71e7))
- fixed package manager const types
  ([d990842](https://github.com/chore-dev/composer/commit/d990842555db3ddd196d7484e6ac656e1379c1b1))
- flatten code structure
  ([8e16ea8](https://github.com/chore-dev/composer/commit/8e16ea895ba8a4b3d05259a922fec6749c158802))
- foundation refactoring to improve DX
  ([a65d3b1](https://github.com/chore-dev/composer/commit/a65d3b1fbe3b9a8287820011b5a012685fdfd902))
- moved quote control to editor config
  ([c555105](https://github.com/chore-dev/composer/commit/c555105e78310f32f58f7fef1cd9710e13bdf283))
- renamed technical stack direction to onboarding
  ([eec66ed](https://github.com/chore-dev/composer/commit/eec66ed83d16a6da20ce494e30647f526b8e095c))
- sync task file name and function name
  ([ecaeab1](https://github.com/chore-dev/composer/commit/ecaeab1cbf9cb14f0f49952bbca6290a46edb2b6))
- updated eslint & prettier script to fit lint-staged
  ([5367d4e](https://github.com/chore-dev/composer/commit/5367d4e735e90fe9ab0f90a781d309db72ce07e8))
- updated package manager install script
  ([36e6801](https://github.com/chore-dev/composer/commit/36e6801b69581a40ce08f0a91cab8bac97e02485))
