import { Config } from 'lint-staged';
import { getAnswers } from '../../../../store/answers.store';
import { managerRun } from '../../../../utilities/cli';
import { readPackageJson } from '../../../../utilities/fs';

// Read https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration for more information about lint-staged.config.js
const createLintStagedConfig = () => {
  const { eslint, prettier } = getAnswers();
  const { insertScripts: eslintScripts } = eslint || {};
  const { insertScripts: prettierScripts } = prettier || {};

  const isModule = readPackageJson().type === 'module';

  const config: Config = {
    '*': [
      prettierScripts && managerRun('prettier:fix'),
      eslintScripts && managerRun('eslint:fix')
    ].filter(Boolean) as Array<string>
  };

  return [
    '/** @type {import("lint-staged").Config} */',
    '',
    `const config = ${JSON.stringify(config, null, 2)};`,
    '',
    isModule ? 'export default config;' : 'module.exports = config;'
  ].join('\n');
};

export default createLintStagedConfig;
