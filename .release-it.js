const config = {
  hooks: {},
  git: {
    commit: true,
    commitMessage: 'chore: release v${version}',
    push: true,
    pushArgs: ['--follow-tags'],
    tag: true,
    tagAnnotation: 'v${version}',
    tagName: 'v${version}',
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

export default config;
