import { readPackageJson } from '../../../../utilities/fs';

// Read https://github.com/release-it/release-it/blob/main/docs/configuration.md for more information about .release-it.js
const createReleaseItConfig = () => {
  const isModule = readPackageJson().type === 'module';

  const versionFormat = 'v${version}';

  const config = {
    hooks: {},
    git: {
      commit: true,
      commitMessage: `chore: release ${versionFormat}`,
      push: true,
      pushArgs: ['--follow-tags'],
      tag: true,
      tagAnnotation: versionFormat,
      tagName: versionFormat,
      requireBranch: 'develop',
      requireCleanWorkingDir: true
    },
    npm: {
      publish: false
    },
    github: {
      release: false
    },
    gitlab: {
      release: false
    },
    plugins: {
      '@release-it/conventional-changelog': {
        header: '# Changelog',
        ignoreRecommendedBump: true,
        infile: 'CHANGELOG.md',
        preset: {
          name: 'conventionalcommits',
          types: [
            {
              type: 'feat',
              section: 'Features'
            },
            {
              type: 'fix',
              section: 'Bug Fixes'
            },
            {
              type: 'refactor',
              section: 'Restructured'
            },
            {
              type: 'perf',
              section: 'Performance Improved'
            },
            {
              type: 'chore',
              hidden: true
            },
            {
              type: 'docs',
              hidden: true
            },
            {
              type: 'test',
              hidden: true
            },
            {
              type: 'style',
              hidden: true
            }
          ]
        }
      }
    }
  };

  return [
    `const config = ${JSON.stringify(config, null, 2)};`,
    '',
    isModule ? 'export default config;' : 'module.exports = config;'
  ].join('\n');
};

export default createReleaseItConfig;
