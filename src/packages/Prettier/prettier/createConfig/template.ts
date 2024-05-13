import { Config } from 'prettier';
import { readPackageJson } from '../../../../utilities/fs';

// Read https://prettier.io/docs/en/configuration for more information about .prettier.config.js
//      and
//      https://prettier.io/docs/en/options
const createPrettierConfig = () => {
  const isModule = readPackageJson().type === 'module';

  const config: Config = {
    arrowParens: 'avoid',
    bracketSameLine: false,
    bracketSpacing: true,
    embeddedLanguageFormatting: 'auto',
    // endOfLine: "refer to end_of_line in .editorconfig file",
    htmlWhitespaceSensitivity: 'css',
    jsxSingleQuote: true,
    // printWidth: refer to end_of_line in .editorconfig file,
    proseWrap: 'preserve',
    quoteProps: 'as-needed',
    semi: true,
    singleAttributePerLine: true,
    singleQuote: true,
    // tabWidth: refer to indent_size in .editorconfig file
    trailingComma: 'none',
    // useTabs: refer to indent_style in .editorconfig file
    overrides: [
      {
        files: ['*.md', '*.mdx'],
        options: {
          proseWrap: 'always'
        }
      }
    ]
  };

  return [
    '/** @type {import("prettier").Config} */',
    '',
    `const config = ${JSON.stringify(config, null, 2)};`,
    '',
    isModule ? 'export default config;' : 'module.exports = config;'
  ].join('\n');
};

export default createPrettierConfig;
