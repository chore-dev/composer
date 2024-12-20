import { getAnswers } from '../../../../store/answers.store';
import { condition, exportByPackageType, indent, lines } from '../../../../utilities/document';
import { readPackageJson } from '../../../../utilities/fs';

const imports = () => {
  const { framework, prettier } = getAnswers();
  const { createConfig: prettierConfig } = prettier || {};

  const isModule = readPackageJson().type === 'module';
  const isReact = framework === 'react';
  const isVue = framework === 'vue';

  return lines(
    (
      [
        ['esLint', '@eslint/js'],
        condition(prettier, ['prettierRecommended', 'eslint-plugin-prettier/recommended']),
        condition(isReact, ['reactRecommended', 'eslint-plugin-react/configs/recommended']),
        condition(isVue, ['vueESLint', 'eslint-plugin-vue']),
        ['globals', 'globals'],
        ['tsESLint', 'typescript-eslint'],
        condition(isVue, ['vueParser', 'vue-eslint-parser']),
        condition(prettierConfig, ['prettierConfig', './.prettier.config.js'])
      ].filter(Boolean) as Array<[string, string]>
    ).map(([name, packageName]) => {
      if (isModule) {
        return `import ${name} from '${packageName}';`;
      } else {
        return `const ${name} = require('${packageName}');`;
      }
    })
  );
};

const notes = () => {
  const { typescript } = getAnswers();

  return condition(
    !typescript,
    lines([
      `// NOTE: You may ask why using "tsESLint.config" even you are not using TypeScript?`,
      `//       It's because "tsESLint.config" is well typed to provide autocomplete and documentation for all config properties to prevent invalid configurations`,
      `//       In the simplest terms, this improves the developer experience.`,
      `//       To learn more about "tsESLint.config", visit https://typescript-eslint.io/packages/typescript-eslint#config`
    ])
  );
};

const recommends = () => {
  const { framework, prettier, typescript } = getAnswers();

  return lines([
    'esLint.configs.recommended,',
    condition(typescript, 'tsESLint.configs.strict,'),
    condition(typescript, 'tsESLint.configs.stylistic,'),
    condition(prettier, 'prettierRecommended,'),
    condition(framework === 'vue', `...vueESLint.configs['flat/recommended'],`)
  ]);
};

const ignores = () => {
  const { commitLint, eslint, lintStaged, prettier } = getAnswers();
  const { createConfig: commitLintConfig } = commitLint || {};
  const { createConfig: lintStagedConfig } = lintStaged || {};
  const { createConfig: prettierConfig } = prettier || {};

  if (!eslint || !eslint.addIgnores) return undefined;

  return lines([
    '{',
    indent([
      'ignores: [',
      indent([
        '// Backup files',
        `'.composer.bak/',`,
        '// Build output directory',
        `'coverage/',`,
        `'build/',`,
        `'bundle/',`,
        `'dist/',`,
        `'out/',`,
        '// Cache files',
        `'.eslintcache',`,
        '// Config files',
        condition(prettierConfig, `'.prettier.config.js',`),
        condition(commitLintConfig, `'commitlint.config.js',`),
        `'eslint.config.js',`,
        condition(lintStagedConfig, `'lint-staged.config.js'`)
      ]),
      ']'
    ]),
    '},'
  ]);
};

const main = () => {
  const { env, framework, prettier, typescript, withSyntaxExtension } = getAnswers();
  const { isBrowser, isNode } = env;
  const { createConfig: prettierConfig } = prettier || {};

  const isReact = framework === 'react';
  const isVue = framework === 'vue';

  const files = [
    'js',
    condition(withSyntaxExtension, 'jsx'),
    condition(typescript, 'ts'),
    condition(typescript && withSyntaxExtension, 'tsx'),
    condition(isVue, 'vue')
  ]
    .filter(Boolean)
    .join(',');

  const globals = [
    condition(isBrowser, '.browser,'),
    '.es2021,',
    '.jest,',
    condition(isNode, '.node,'),
    '.serviceworker,',
    condition(isBrowser && isNode, `['shared-node-browser'],`),
    '.worker'
  ]
    .filter(Boolean)
    .map(item => `...globals${item}`);

  const rules = (
    [
      ['import/no-duplicates', 0],
      ['no-console', 2, JSON.stringify({ allow: ['error', 'warn'] })],
      ...(condition(prettier, [
        ['prettier/prettier', 2, prettierConfig ? 'prettierConfig' : undefined]
      ]) || []),
      ...(condition(isReact, [
        ['react/jsx-uses-react', 0],
        condition(!typescript, ['react/prop-types', 2]),
        ['react/react-in-jsx-scope', 0]
      ]) || []),
      ...(condition(isVue, [
        ['vue/html-self-closing', 0],
        ['vue/singleline-html-element-content-newline', 0]
      ]) || []),
      ...(condition(typescript, [
        [
          '@typescript-eslint/ban-ts-comment',
          2,
          JSON.stringify({
            'ts-check': 'allow-with-description',
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': 'allow-with-description',
            'ts-nocheck': 'allow-with-description'
          })
        ],
        ['@typescript-eslint/consistent-type-definitions', 0],
        ['@typescript-eslint/explicit-module-boundary-types', 0],
        ['@typescript-eslint/no-empty-interface', 0],
        ['@typescript-eslint/no-explicit-any', 2],
        ['@typescript-eslint/no-restricted-types', 2, JSON.stringify({ types: {} })],
        ['@typescript-eslint/no-unused-vars', 2, JSON.stringify({ argsIgnorePattern: '^_' })]
      ]) || [])
    ] as Array<[string, number, string?]>
  )
    .filter(Boolean)
    .map(([rule, level, options], index, array) => {
      const status = ['off', 'warn', 'error'][level];
      const comma = index === array.length - 1 ? '' : ',';

      if (options) return `'${rule}': ['${status}', ${options}]${comma}`;

      return `'${rule}': '${status}'${comma}`;
    });

  return lines([
    condition(
      isVue,
      lines([
        '{',
        indent([
          `files: ['**/*.vue'],`,
          'languageOptions: {',
          indent([
            'parser: vueParser,',
            'parserOptions: {',
            indent(['parser: tsESLint.parser,', `sourceType: 'module'`]),
            '}'
          ]),
          '},'
        ]),
        '},'
      ])
    ),
    '{',
    indent([
      `files: ['**/*.{${files}}'],`,
      condition(isReact, '...reactRecommended,'),
      'languageOptions: {',
      indent([
        condition(isReact, '...reactRecommended.languageOptions,'),
        'globals: {',
        indent(globals),
        '}'
      ]),
      '},',
      'rules: {',
      condition(isReact, '...reactRecommended.rules,'),
      indent(rules),
      '},'
    ]),
    '},'
  ]);
};

// Read https://eslint.org/docs/v8.x/use/configure/configuration-files-new for more information about eslint.config.js
const createESLintConfig = () => {
  return lines([
    imports(),
    '',
    notes(),
    '/** @type {ReturnType<typeof import("typescript-eslint").config>} */',
    'const config = tsESLint.config(',
    indent([ignores(), recommends(), main()]),
    ');',
    '',
    exportByPackageType('config')
  ]);
};

export default createESLintConfig;
