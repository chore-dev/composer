import { getAnswers } from '../../../../store/answers.store';
import { addScriptToPackageJson, managerRun } from '../../../../utilities/cli';

const insertScripts = () => {
  const { eslint } = getAnswers();

  if (!eslint) return;

  const { createConfig } = eslint;

  const config = createConfig ? ' --config eslint.config.js' : '';

  addScriptToPackageJson([
    ['// ESLint', '---------- ---------- ---------- ---------- ----------'],
    ['eslint', `eslint . --cache --color${config}`],
    ['eslint:fix', managerRun('eslint --fix --quiet')]
  ]);
};

export default insertScripts;
