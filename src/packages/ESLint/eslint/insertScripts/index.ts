import { getAnswers } from '../../../../store/answers.store';
import { addScriptToPackageJson, managerRun } from '../../../../utilities/cli';

const insertScripts = () => {
  const { eslint, prettier } = getAnswers();

  if (!eslint) return;

  const { createConfig } = eslint;
  const { insertScripts } = prettier || {};

  const config = createConfig ? ' --config eslint.config.js' : '';
  const runPrettier = insertScripts ? managerRun('prettier:fix') : '';

  addScriptToPackageJson([
    ['// ESLint', '---------- ---------- ---------- ---------- ----------'],
    ['eslint', `${runPrettier}; eslint . --cache --color${config}`],
    ['eslint:fix', managerRun('eslint --fix --quiet')]
  ]);
};

export default insertScripts;
